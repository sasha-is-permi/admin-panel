<template>
    <div class="root">
        <v-card text>
                     <v-toolbar text prominent class="no-padding-toolbar">
                <v-toolbar-items>
                    <v-tooltip bottom>
                       <template v-slot:activator="{ on }" @click="dialog = true" ><v-btn v-on="on">
                            <v-icon medium>add</v-icon>
                        </v-btn>
                        </template>
                        <span> Добавить сотрудника </span>
                    </v-tooltip>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }" @click="edit" ><v-btn v-on="on">
                            <v-icon medium>edit</v-icon>
                        </v-btn>
                        </template>
                        <span>Редактировать</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                       <template v-slot:activator="{ on }" @click="delEmployees" ><v-btn v-on="on">
                           <v-icon medium>delete</v-icon>
                        </v-btn>
                        </template>
                        <span>Удалить сотрудника</span>
                    </v-tooltip>
                </v-toolbar-items>
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

            show-select- возможность выбирать несколько 
                   ячеек сразу или все (без него- толькол одна
                   ячейка выбирается )

            v-model="search"   label="Search" создание фильтрации
            :headers="commonHeaders" - загрузка заголовков из массива commonHeaders

            :items="developers" - загрузка данных из массива developers

            class="fixed-headers" - тип таблицы

            :items-per-page="5" - сколько на страничке строчек таблицы будет
           -->   

            <v-data-table
                    :headers="commonHeaders"
                    :items="developers"
                    :search="search"
                    v-model="selected"
                    item-key="uuid"
                    multi-sort
                    :no-data-text="'Нет данных'"
                    :no-results-text="'Не найдены значения'"
                    show-select
                    class="fixed-headers"
                    :items-per-page="5"
                    >
              <template v-slot="{ items }">
                    <td style="width: 48px; max-width: 48px;">
                        <v-checkbox v-model="items.selected" primary hide-details></v-checkbox>
                    </td>

                    <td>{{ items.item.fio}}</td>
                    <td>{{ items.item.team}}</td>
                    <td>{{ items.item.project}}</td>
                    <td>{{ items.item.login}}</td>
                    <td>{{ items.item.email}}</td>
                    <td>{{ items.item.connections.jira }}</td>
                    <td>{{ items.item.connections.telegram }}</td>
                    <td>{{ items.item.connections.git }}</td>
                    <td>{{ items.item.connections.confluence }}</td>
                    <td>{{ items.item.connections.bitrixportal }}</td>                          

                    <v-layout align-center justify-space-around row fill-height>
                        <v-icon medium @click="editItem(items.item)">
                            edit
                        </v-icon>
                        <v-icon medium @click="deleteItem(items.item)">
                            delete
                        </v-icon>
                    </v-layout>
                </template>
            </v-data-table>
        </v-card>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <v-form ref="form">
                    <v-card-text>
                        <v-container grid-list-md>
                            <v-layout wrap>
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
                        <v-btn color="blue darken-1" text @click="closeMeth" closeMethod>{{'Закрыть'}}</v-btn>
                        <v-btn color="blue darken-1" text @click="addEmployee">{{'Сохранить'}}</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>

export default {
      
    data() {
        return {
                name: 'EmployeesPanel',
                isEdit: false,
                id: '',
                uuid:'',
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
                selected: [],
                search: '',
                commonHeaders: [
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
           edit() {
           
           },
            deleteItem(item) {
                confirm('Вы действительно хотите удалить?' + item.employeeName) && this.$store.dispatch('employees/deleteEmployee', item.employeeName)
            },
            editItem(item) {
                this.dialog = true
                this.isEdit = true
                this.employeeName = item.employeeName
                this.ruName = item.ruName
                this.kzName = item.kzName
                this.enName = item.enName
                this.id = item.id
            },

            addEmployee() {
                this.dialog = false;
                let outer = this;
                let form = {
                    employeeName: outer.employeeName,
                    ruName: outer.ruName,
                    kzName: outer.kzName,
                    enName: outer.enName,
                    id: outer.id
                };

                if (this.isEdit === false) {
                    this.$store.dispatch('employees/addingEmployee', form);
                    this.$refs.form.reset()
                } else {
                    this.$store.dispatch('employees/editEmployee', form);
                    this.isEdit = false;
                    this.$refs.form.reset()
                }
            },

            delEmployees() {
                if (this.selected.length === 0) {
                    alert('Для удаления нужно выбрать cотрудника')
                } else {
                    const msg = 'Удалить сотрудников?' + '(' + this.selected.length + ')';
                    let boo = confirm(msg) && this.$store.dispatch('employees/deleteEmployees', this.selected)
                    if (boo === true) {
                        this.selected = [];
                    } else {
                        this.selected = [];
                    }
                }
            },

            closeMeth() {
                this.dialog = !this.dialog;
                this.$refs.form.reset();
                this.isEdit = false;
            },
            setData() {
           //     this.$store.dispatch('developers')
            }
        },

        created() {
            this.setData();
        },

        watch: {
       
        },

        computed: {

           

            developers() {
                    return this.$store.getters.developers
            }
            
        }
    }

</script>

<style scoped>
   .root{
        font-size:13px!important;
   }

</style>