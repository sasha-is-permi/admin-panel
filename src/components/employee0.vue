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
                        <span> Добавить сотрудника </span>
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
                        <span>Удалить сотрудника</span>
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

            :items="developers" - загрузка данных из массива developers

            class="fixed-headers" - тип таблицы

            :items-per-page="5" - сколько на страничке строчек таблицы будет
           -->   
            
            <!-- Вывод заголовка таблицы  (commonHeaders)
            и самой таблицы (из объекта employees  )-->
            <v-data-table
                    :headers="commonHeaders"
                    :items="employees"
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
                                    <v-text-field :label="'id'" v-model="id"
                                                  required></v-text-field>
                                </v-flex>                            
                               <v-flex xs12>
                                    <v-text-field :label="'ФИО'" v-model="fio"
                                                  required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field :label="'Команда'" v-model="team"
                                                  required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field :label="'Проект'" required
                                                  v-model="project"></v-text-field>
                                </v-flex>
                             <v-flex xs12>
                                    <v-text-field :label="'Логин'" v-model="login"
                                                  required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field :label="'e-mail'" v-model="email"
                                                  required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field :label="'jira'" v-model="jira"
                                                  required></v-text-field>
                                </v-flex>
                              <v-flex xs12>
                                    <v-text-field :label="'telegram'" v-model="telegram"
                                                  required></v-text-field>
                                </v-flex>
                              <v-flex xs12>
                                    <v-text-field :label="'git'" v-model="git"
                                                  required></v-text-field>
                                </v-flex>
                              <v-flex xs12>
                                    <v-text-field :label="'confluence'" v-model="confluence"
                                                  required></v-text-field>
                                </v-flex>
                            <v-flex xs12>
                                    <v-text-field :label="'bitrixportal'" v-model="bitrixportal"
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
                fio:'',
                team:'',
                project:'', 
                login:'',
                email:'',  
                jira:'',
                telegram:'',
                git:'',
                confluence:'',
                bitrixportal:'',        
                dialog: false,
                edit:false,
                selected: [],
                search: '',
                singleSelect:true,
                commonHeaders: [
                    {text: 'id', align: 'left', value: 'id'},
                    {text: 'ФИО', align: 'left', value: 'fio'},
                    {text: 'Команда', align: 'left', value: 'team'},
                    {text: 'Проект', align: 'left', value: 'project'},
                    {text: 'Логин', align: 'left', value: 'login'},
                    {text: 'e-mail', align: 'left', value: 'email'},
                    {text: 'jira', align: 'left',value: 'connections.jira'},
                    {text: 'telegram', align: 'left',value: 'connections.telegram'},
                    {text: 'git', align: 'left',value: 'connections.git'},
                    {text: 'confluence', align: 'left',value: 'connections.confluence'},
                    {text: 'bitrixportal', align: 'left',value: 'connections.bitrixportal'},  
                    
                ]
            }
        },
        methods: {
            // Вызывается при нажатии на кнопку "редактировать элемент"
            // Затем вызывается диалоговое окно Dilog
            // (описанно выше)
               editItem() {
                  if (this.selected.length === 0) {
                    alert('Для редактирования нужно выбрать cотрудника')
                } else {
                console.log(this.selected[0]);
                 this.id=this.selected[0].id;
                 this.fio=this.selected[0].fio;
                 this.team=this.selected[0].team;
                 this.project=this.selected[0].project;
                 this.login=this.selected[0].login;
                 this.email=this.selected[0].email;
                 this.jira=this.selected[0].connections.jira;  
                 this.telegram=this.selected[0].connections.telegram;   
                 this.git=this.selected[0].connections.git;  
                 this.confluence=this.selected[0].connections.confluence;     
                 this.bitrixportal=this.selected[0].connections.bitrixportal;     
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
                    fio: this.fio,
                    team: this.ruName,
                    project: this.project,
                    login: this.login,
                    email: this.email,
                    connections: {jira: this.jira,telegram: this.telegram,
                    git: this.git,confluence: this.confluence,
                    bitrixportal: this.bitrixportal}
                };

                    this.$store.dispatch('addItem', form);
                    this.$refs.form.reset()
                                      }
                // Если была нажата кнопка редактирования элемента
                // редактируем текщий выбранный элемент
                 if (this.edit === true) {


                let form = {
                    id: this.id,
                    fio: this.fio,
                    team: this.ruName,
                    project: this.project,
                    login: this.login,
                    email: this.email,
                    connections: {jira: this.jira,telegram: this.telegram,
                    git: this.git,confluence: this.confluence,
                    bitrixportal: this.bitrixportal}
                };

                    const msg = 'Сохранить изменения для сотрудника?';
                    let boo = confirm(msg) && this.$store.dispatch('editItem', form);
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
                    alert('Для удаления нужно выбрать cотрудника')
                } else {
                    const msg = 'Удалить сотрудника?';
                    let boo = confirm(msg) && this.$store.dispatch('deleteItem', this.selected[0])
                    if (boo === true) {
                        this.selected = [];
                    } else {
                        this.selected = [];
                    }
                }
            },
    
            setData() {
           //     this.$store.dispatch('employees')
            }
        },

        created() {
           //  this.setData();
        },

        watch: {
       
        },

        computed: {

           

            employees() {
                    return this.$store.getters.employees
            }
            
        }
    }

</script>

<style scoped>
   .root{
        font-size:13px!important;
   }

</style>