
<!--

workspace

Рабочая область
        1. id
        2. Название области
        3. Индикатор активности
        4. Логотип

public class WorkspaceDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("active")
    private boolean active;

    @JsonProperty("logo")
    private byte[] logo;
}

JSON 
        workspaces: 
        
        {
            {
            "id":"1",
            "name":"workspace1",
            "active": false,
            "logo": "https://img2.fonwall.ru/o/wr/roza-rozy-purpurnye-rozy-dsij.jpg"
        },
        {
            "id":"2",
            'name":"workspace2",
            "active": true,
            "logo": "https://img2.fonwall.ru/o/dt/roza-rozy-purpurnye-rozy-pdbl.jpg"
        },
        {
            "id":"3",
            "name":"workspace3",
            "active": true,
            "logo": "https://img2.fonwall.ru/o/rk/roza-rozy-cvetok-ktyi.jpg"
        }     
    }

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
                        <span> Добавить рабочую область </span>
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
                        <span>Удалить рабочую область</span>
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

            :items="workspaces" - загрузка данных из массива workspaces

            class="fixed-headers" - тип таблицы

            :items-per-page="5" - сколько на страничке строчек таблицы будет
           -->   
            
            <!-- Вывод заголовка таблицы  (commonHeaders)
            и самой таблицы (из объекта workspaces  )-->
            <v-data-table
                    :headers="commonHeaders"
                    :items="workspaces"
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
                                    <v-text-field :label="'Активность'" v-model="active"
                                                  required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field :label="'Логотип'" v-model="logo"
                                                  required></v-text-field>
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
                active:false, 
                logo:"",                         
                dialog: false,
                edit:false,
                selected: [],
                search: '',
                singleSelect:true,
                commonHeaders: [
                    {text: 'id', align: 'left', value: 'id'},
                    {text: 'Название', align: 'left', value: 'name'},
                    {text: 'Активна', align: 'left', value: 'active'},                    
                    {text: 'Логотип', align: 'left', value: 'logo'}
                ]
            }
        },
 methods: {
            // Вызывается при нажатии на кнопку "редактировать элемент"
            // Затем вызывается диалоговое окно Dilog
            // (описанно выше)
               editItem() {
                  if (this.selected.length === 0) {
                    alert('Для редактирования нужно выбрать рабочую область')
                } else {
                console.log(this.selected[0]);
                 this.id=this.selected[0].id;
                 this.name=this.selected[0].name;
                 this.active=this.selected[0].active;
                 this.logo=this.selected[0].logo;
                     
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
                    active: this.active,
                    logo: this.logo
                };

                    this.$store.dispatch('addWorkspace', form);
                    this.$refs.form.reset()
                                      }
                // Если была нажата кнопка редактирования элемента
                // редактируем текщий выбранный элемент
                 if (this.edit === true) {


                let form = {
                    id: this.id,
                    name: this.name,
                    active: this.active,
                    logo: this.logo
                };

                    const msg = 'Сохранить изменения для рабочей области?';
                    let boo = confirm(msg) && this.$store.dispatch('editWorkspace', form);
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
                    alert('Для удаления нужно выбрать рабочую область')
                } else {
                    const msg = 'Удалить рабочую область?';
                    let boo = confirm(msg) && this.$store.dispatch('deleteWorkspace', this.selected[0])
                    if (boo === true) {
                        this.selected = [];
                    } else {
                        this.selected = [];
                    }
                }
            },
    
            setData() {
           //     this.$store.dispatch('workspaces')
            }
        },


        created() {
           //  this.setData();
        },

        watch: {
       
        },

        computed: {           
        // получаем весь массив объектов workspaces из store/workspaces
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