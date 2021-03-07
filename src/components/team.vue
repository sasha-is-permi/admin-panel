
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
                        <span> Добавить команду </span>
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
                        <span>Удалить команду</span>
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

            :items="teams" - загрузка данных из массива teams

            class="fixed-headers" - тип таблицы

            :items-per-page="5" - сколько на страничке строчек таблицы будет
           -->   
            
            <!-- Вывод заголовка таблицы  (commonHeaders)
            и самой таблицы (из объекта teams  )-->
            <v-data-table
                    :headers="commonHeaders"
                    :items="teams"
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

            <template v-slot:[`item.projects`]="{ item }">
           <v-list dense>
           <v-list-item-group>
            <v-list-item
            v-for="(item0, i) in item.projects"
            :key="i">      
             {{item0.name}}       
            </v-list-item> 
           </v-list-item-group> 
           </v-list>
        </template>




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
                                    <v-text-field :label="'Название команды'" v-model="name"
                                                  required></v-text-field>
                                </v-flex>
                                <v-flex xs12>                                               
                               <template>
                                 <p> Проекты: </p>                               
                               </template>
                               
                             <v-combobox
                                   v-model="selectedProjects"
                                   :items="AllProjects"
                                   item-text="name"
                                   item-value="name"
                                   label="Проекты"
                                   dense
                                   filled
                                   outlined
                                   solo
                                   multiple
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
                bitrixPortalId:'',
                projects: {id:"1",
                  name:"Проект 1",
                  group:{},
                  processes:[],
                  portals:[]
                },
                itemProjects:[],           
                dialog: false,
                edit:false,
                selected: [],
                search: '',
                singleSelect:true,
                commonHeaders: [
                    {text: 'id', align: 'left', value: 'id'},
                    {text: 'Название', align: 'left', value: 'name'},
                    {text: 'Битрикс-портал', align: 'left', value: 'bitrixPortalId'},
                    {text: 'Проекты', align: 'left', value: 'projects' }                    
                ],
                selectedProjects: []


            }
        },
 methods: {
            // Вызывается при нажатии на кнопку "редактировать элемент"
            // Затем вызывается диалоговое окно Dilog
            // (описанно выше)
               editItem() {
                  if (this.selected.length === 0) {
                    alert('Для редактирования нужно выбрать команду')
                } else {
                console.log(this.selected[0]);
                // Запоминаем выбранный галочкой элемент
                 this.id=this.selected[0].id;
                 this.name=this.selected[0].name;     
                 this.bitrixPortalId=this.selected[0].bitrixPortalId;              
                 // Нужно сделать:             
                 this.projects = this.selected[0].projects
                 
           
                // let a =   this.selected[0] 
                // let b={}                  
               //  b.id =      a.projects.id
               //  b.name =    a.projects.name 
               //  b.description =  a.projects.description
        
                 
               // this.projects = b 

                // console.log('a.projects.id',a.projects.id)  
                // console.log('b.id',b.id) 
                // console.log('this.projects ',this.projects ) 
                 
                // Передаем поле- проект выбранного элемента
                // в список выбора проекта 
                // (чтобы по умолчанию у элемента была та область,
                // которая раньше была )
    
                this.selectedProjects = this.selected[0].projects;
                console.log('this.selectedProjects ',this.selectedProjects ) 

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
                    bitrixPortalId: this.bitrixPortalId,
                    projects: this.selectedProjects                   
                };

                console.log("this.selectedProjects",this.selectedProjects)

                console.log("form",form)

                    this.$store.dispatch('addTeam', form);
                    this.$refs.form.reset()
                                      }
                // Если была нажата кнопка редактирования элемента
                // редактируем текщий выбранный элемент
                 if (this.edit === true) {


                let form = {
                    id: this.id,
                    name: this.name,
                    bitrixPortalId: this.bitrixPortalId,
                    projects: this.selectedProjects
                };

                    const msg = 'Сохранить изменения для команды?';
                    let boo = confirm(msg) && this.$store.dispatch('editTeam', form);
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
                    alert('Для удаления нужно выбрать команду')
                } else {
                    const msg = 'Удалить команду?';
                    let boo = confirm(msg) && this.$store.dispatch('deleteTeam', this.selected[0])
                    if (boo === true) {
                        this.selected = [];
                    } else {
                        this.selected = [];
                    }
                }
            },
    
            setData() {
           //     this.$store.dispatch('teams')
            }
        },


        created() {
           //  this.setData();
        },

        watch: {
       
        },

        computed: {           
        // получаем весь массив объектов teams из store/teams
            teams() {
                    return this.$store.getters.teams
            },
        // Получаем весь массив проектов
            AllProjects() {
              return this.$store.getters.projects
                         }  
           
                  }
    }


</script>

<style scoped>
   .root{
        font-size:13px!important;
   }

</style>