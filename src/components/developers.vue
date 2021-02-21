<template>
    <div>
        <v-card text>
                     <v-toolbar text card prominent class="no-padding-toolbar">
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
                        :label="Поиск"
                        single-line
                        hide-details>
                </v-text-field>
            </v-toolbar>
            <v-divider>
            </v-divider>

            <v-data-table
                    :headers="commonHeaders"
                    :items="employees"
                    :search="search"
                    v-model="selected"
                    item-key="employeeName"
                    :tran1="Должность"
                    :no-data-text="'Нет данных'"
                    :no-results-text="'Не найдены значения'"
                    hide-actions show-select
                    class="fixed-headers">
                <template slot="items" slot-scope="props">
                    <td style="width: 48px; max-width: 48px;">
                        <v-checkbox v-model="props.selected" primary hide-details></v-checkbox>
                    </td>

                    <td>{{ props.item.uuid }}</td>
                    <td>{{ props.item.fio}}</td>
                    <td>{{ props.item.team}}</td>
                    <td>{{ props.item.project}}</td>

                    <v-layout align-center justify-space-around row fill-height>
                        <v-icon medium @click="editItem(props.item)">
                            edit
                        </v-icon>
                        <v-icon medium @click="deleteItem(props.item)">
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
                                    <v-text-field :label="Должность" required
                                                  v-model="employeeName"></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field :label="'ФИО сотрудника на русском'" v-model="ruName"
                                                  required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field :label="'ФИО сотрудника на казахском'" v-model="kzName"
                                                  required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field :label="'ФИО сотрудника на английском'" required
                                                  v-model="enName"></v-text-field>
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
        name: 'EmployeesPanel',
        data() {
            return {

                isEdit: false,
                id: '',
                employeeName: '',
                ruName: '',
                kzName: '',
                enName: '',
                dialog: false,
                selected: [],
                search: '',
                commonHeaders: [
                    {text: 'Должность', align: 'left', value: 'employeeName'},
                    {text: 'ФИО на русском языке', align: 'left', value: 'ruName'},
                    {text: 'ФИО на казахском языке', align: 'left', value: 'kzName'},
                    {text: 'ФИО на английском языке', align: 'left', value: 'enName'}
                ],
                headersKk: [
                    {text: 'Лауазым', align: 'left', value: 'employeeName'},
                    {text: 'Аты мен тегі қызметкер орысша', align: 'left', value: 'ruName'},
                    {text: 'Аты мен тегі қызметкер казакша', align: 'left', value: 'kzName'},
                    {text: 'Аты мен тегi қызметкер ағылшын', align: 'left', value: 'enName'}
                ],
                headersDefault: [
                    {text: 'Должность', align: 'left', value: 'employeeName'},
                    {text: 'ФИО на русском языке', align: 'left', value: 'ruName'},
                    {text: 'ФИО на казахском языке', align: 'left', value: 'kzName'},
                    {text: 'ФИО на английском языке', align: 'left', value: 'enName'}
                ],
                headersEn: [
                    {text: 'Position', align: 'left', value: 'employeeName'},
                    {text: 'Name of the employee in Russian', align: 'left', value: 'ruName'},
                    {text: 'Name of the employee in Kazakh', align: 'left', value: 'kzName'},
                    {text: 'Name of the employee in English', align: 'left', value: 'enName'}
                ],
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
                this.$store.dispatch('employees/loadEmployees')
            }
        },

        created() {
            this.setData();
        },

        watch: {
            locale(val) {
                console.log(val)
                if (val === 'kk') {
                    this.commonHeaders = this.headersKk
                } else if (val === 'ru') {
                    this.commonHeaders = this.headersDefault
                } else if (val === 'en') {
                    this.commonHeaders = this.headersEn
                }
            }
        },

        computed: {

            languages() {
                return this.$store.state.langList
            },

            employees() {
                    return this.$store.getters.developers
            },

            locale: {
                get() {
                    return this.$i18n.locale
                },
                set(val) {
                    this.$i18n.locale = val
                }
            },

        }
    }