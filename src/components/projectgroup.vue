<!-- 
progectgroups


https://gitlab.com/datsteam/project/dev-bro/-/blob/DEVBRO-14/api/src/main/java/com/devbro/api/dto/ProjectGroupDto.java

public class ProjectGroupDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;
}



    1. id
    2. Название группы  name
    3. Рабочая область  workspace

          // Данные приходят в этот модуль в виде : 
        projectgroups: [
        
                ]




-->


<template>
    <div class="root">
        <v-card text>
                     <v-toolbar text prominent class="no-padding-toolbar">
                <!-- Панель кнопочек "Добавить", "Редактировать",
                "Удалить" -->         
                <v-toolbar-items>
                    <v-tooltip bottom>
                       <template v-slot:activator="{ on }"  >
                       <v-btn v-on="on" @click="dialog = true,edit=false">
                            <v-icon medium>add</v-icon>
                        </v-btn>
                        </template>
                        <span> Добавить группу проектов </span>
                    </v-tooltip>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }"  >
                          <v-btn v-on="on" @click="editItem">
                            <v-icon medium>edit</v-icon>
                          </v-btn>
                        </template>
                        <span>Редактировать</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                       <template v-slot:activator="{ on }"> 
                        <v-btn v-on="on"  @click="delItem" >
                           <v-icon medium>delete</v-icon>
                        </v-btn>
                        </template>
                        <span>Удалить группу проектов</span>
                    </v-tooltip>
                </v-toolbar-items>
                <!-- Окно фильтрации -->
                <v-text-field
                        v-model="search"
                        append-icon="search"
                        :label="search"
                        single-line
                        hide-details>
                </v-text-field>
            </v-toolbar>
            <v-divider>
            </v-divider>
           
           <!--  :tran1=""-->
           <!--
           
           Настройки таблицы

            https://vuetifyjs.com/en/components/data-tables/             


            multi-sort- возможность сортировки по нескольким 
                 столбцам сразу-

            show-select- возможность выбирать ячейки
            :single-select="singleSelect" - только одная 
            ячейка выбирается
            в data:  
            singleSelect:true,

            v-model="search"   label="Search" создание фильтрации
            :headers="commonHeaders" - загрузка заголовков из массива commonHeaders

            :items="projectGroups" - загрузка данных из массива projectGroups

            class="fixed-headers" - тип таблицы

            :items-per-page="5" - сколько на страничке строчек таблицы будет
           -->   
            
            <!-- Вывод заголовка таблицы  (commonHeaders)
            и самой таблицы (из объекта projectGroups  )-->
            <v-data-table
                    :headers="commonHeaders"
                    :items="projectGroups"
                    :search="search"
                    v-model="selected"
                    item-key="id"
                    :no-data-text="'Нет данных'"
                    :no-results-text="'Не найдены значения'"
                    show-select
                    :single-select="singleSelect"
                    class="fixed-headers"
                    :items-per-page="5"
                    >

            </v-data-table>
        </v-card>


        <!--
                             Окно Dilog    
        Вызывается при нажатии на кнопочку "добавить новый элемент"
        или "Редактировать элемент" -->
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <v-form ref="form">
                    <v-card-text>
                        <v-container grid-list-md>
                            <v-layout wrap>                    
                               <v-flex xs12>
                                    <v-text-field :label="'Название'" v-model="name"
                                                  required></v-text-field>
                                </v-flex>
                                <v-flex xs12>                                               
                               <template>
                                 <p> Рабочая область: </p>                               
                               </template>
                               
                             <v-combobox
                                   v-model="selectedWorkspace"
                                   :items="workspaces"
                                   item-text="name"
                                   item-value="name"
                                   label="Рабочая область"
                                   dense
                                   filled
                                   outlined
                                   solo
                                ></v-combobox> 
          
                                </v-flex>

                            </v-layout>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close" closeMethod>{{'Закрыть'}}</v-btn>
                        <v-btn color="blue darken-1" text @click="addEditItem">{{'Сохранить'}}</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
        <!-- ********************************************************  -->
    </div>
</template>

<script>

export default {
      
    data() {
        return {                
                id:'',
                name:'',
                workspaсe:{id:"",name:"",active:false,logo:""},                   
                dialog: false,
                edit:false,
                selected: [],
                search: '',
                singleSelect:true,
                commonHeaders: [
                    {text: 'id', align: 'left', value: 'id'},
                    {text: 'Название', align: 'left', value: 'name'},
                    {text: 'Рабочая область', align: 'left', value: 'workspace.name'}                    
                ],
                selectedWorkspace: {id:"",
                name:"Рабочая область", 
                active:"",logo:""}


            }
        },
 methods: {
            // Вызывается при нажатии на кнопку "редактировать элемент"
            // Затем вызывается диалоговое окно Dilog
            // (описанно выше)
               editItem() {
                  if (this.selected.length === 0) {
                    alert('Для редактирования нужно выбрать группу проектов')
                } else {
                console.log(this.selected[0]);
                // Запоминаем выбранный галочкой элемент
                 this.id=this.selected[0].id;
                 this.name=this.selected[0].name;                 
                 // Нужно сделать:             
                 // this.workspace = this.selected[0].workspace
                 // Но напрямую нельзя, нужно поэтапно:
                 let a =   this.selected[0] 
                 let b={}                  
                 b.id =      a.workspace.id
                 b.name =    a.workspace.name 
                 b.active =  a.workspace.active
                 b.logo =    a.workspace.logo           
                 
                this.workspace = b 

                 console.log('a.workspace.id',a.workspace.id)  
                 console.log('b.id',b.id) 
                 console.log('this.workspace ',this.workspace ) 
                 
                // Передаем поле- рабочая область выбранного элемента
                // в список выброра рабочей области 
                // (чтобы по умолчанию у элемента была та область,
                // которая раньше была )
                // Нужно сделать:
                // this.selectedWorkspace =  this.selected[0].workspaсe
                // Но напрямую нельзя, нужно поэтапно
                this.selectedWorkspace = b;
                console.log('this.selectedWorkspace ',this.selectedWorkspace ) 

                 this.edit=true
                 this.dialog = true                 
                }
            },   
            // Вызывается при нажатии кнопки "Сохранить"
            // в диалоговом окне "Dilog"
            addEditItem() {
                // отключаем диалоговое окно
                this.dialog = false;
                // если была нажата кнопка создания нового элемента
                // создаем новый элемент с новым id    
                if (this.edit === false) {
                let form = {
                    id: this.id,
                    name: this.name,
                    workspaсe: this.selectedWorkspace
                };

                    this.$store.dispatch('addProjectGroup', form);
                    this.$refs.form.reset()
                                      }
                // Если была нажата кнопка редактирования элемента
                // редактируем текщий выбранный элемент
                 if (this.edit === true) {


                let form = {
                    id: this.id,
                    name: this.name,
                    workspaсe: this.selectedWorkspace
                };

                    const msg = 'Сохранить изменения для группы проектов?';
                    let boo = confirm(msg) && this.$store.dispatch('editProjectGroup', form);
                    if (boo === true) {
                        this.selected = [];
                    } else {
                        this.selected = [];
                    }

                    
                    this.$refs.form.reset()
                                      }
            },
          // При отмене добавления или редактирования элемента
          // в окне Dilog
            close() {
                this.dialog = !this.dialog;
                this.$refs.form.reset();
                this.isEdit = false;
            },

             // Удаляем выбранный элемент
            delItem() {
                if (this.selected.length === 0) {
                    alert('Для удаления нужно выбрать группу проектов')
                } else {
                    const msg = 'Удалить группу проектов?';
                    let boo = confirm(msg) && this.$store.dispatch('deleteProjectGroup', this.selected[0])
                    if (boo === true) {
                        this.selected = [];
                    } else {
                        this.selected = [];
                    }
                }
            },
    
            setData() {
           //     this.$store.dispatch('projectGroups')
            }
        },


        created() {
           //  this.setData();
        },

        watch: {
       
        },

        computed: {           
        // получаем весь массив объектов projectGroups из store/projectGroups
            projectGroups() {
                    return this.$store.getters.projectGroups
            },
        // Получаем весь массив рабочих областей workspaces
            workspaces() {
              return this.$store.getters.workspaces
            }
        }
    }

</script>

<style scoped>
   .root{
        font-size:13px!important;
   }

</style>