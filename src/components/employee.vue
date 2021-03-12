
<!--

employee (сотрудник)
Данные:

1.	id
2.	ФИО
3.	Команда 
5.  Проект
6.	Login
7.	Email
8.	Массив: JIRA, Telegram, Git, Confluence, BitrixPortal

Типы данных:
https://gitlab.com/datsteam/project/dev-bro/-/blob/DEVBRO-14/api/src/main/java/com/devbro/api/dto/EmployeeDto.java

public class EmployeeDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("lastName")
    private String lastName;

    @JsonProperty("firstName")
    private String firstName;

    @JsonProperty("middleName")
    private String middleName;

    @JsonProperty("gender")
    private String gender;

    @JsonProperty("birthDate")
    private LocalDate birthDate;

    @JsonProperty("email")
    private String email;

    @JsonProperty("login")
    private String login;

    @JsonProperty("portals")
    private List<PortalDto> portals;

    @JsonProperty("projects")
    private List<ProjectDto> projects;

    @JsonProperty("team")
    private TeamDto team;
}



Команда team. Может быть только одна у сотрудника
"team": {"id":"25","name":"comand1","bitrixportal":"25"}


{               "id":"1",
                "lastName":"Иванов",
                "firstName":"Артем",
                "middleName:"Аркадьевич",
                "gender":"м",
                "birthDate":"15.07.75",              
                 "email":"ivanov@mail.ru",
                 "login":"ivanov",
                 "portals":"",
                 "projects":"",
                 "team":""
                
}

где поля:

"team": {"id":"27","name":"HardWorkers","bitrixportal":"35"}

(входит та же команда в проект)
"projects": {"id":"25","name":"project1","team":{"id":"27","name":"HardWorkers","bitrixPortalId":"35"}}

portals- это массив объектов-интеграций.
"portals":[
    {"id":"1",
     "name":"http://jira/ivanov",
     "integrationType":{
      "id":"1",
      "name":"jira1.0",
      "code":"jira"   
     },
     "portalId":"jira25" },
         {id":"2",
     "name":"http://git/ivanov",
     "integrationType":{
      "id":"2",
      "name":"git1.0",
      "code":"git"   
     },
     "portalId":"git2" }
]


будет либо team либо projects. 
Там смысл в том, что сотрудник может быть или частью команды 
или у него просто какие-то проекты будут без команды


Получается- если нет команды, а есть только проект:    "team": null

"projects": {"id":"25","name":"project1",...}


 Они могут и вместе быть, и один из них и оба. 
 В случае если параметр будет отсутствовать, возвращается null

Получается- если нет команды, а есть только проект: 

"team": null

"projects":[ {"id":"25","name":"project1",...}]

JSON
employees 

                   {"id":"1",
                     "lastName":"Иванов",
                     "firstName":"Артем",
                     "middleName:"Аркадьевич",
                     "gender":"м",
                     "birthDate":"15.07.75",              
                     "email":"ivanov@mail.ru",
                     "login":"ivanov",
"portals":[
    {"id":"1",
     "name":"http://jira/ivanov",
     "integrationType":{
      "id":"1",
      "name":"jira1.0",
      "code":"jira"   
     },
     "portalId":"jira25" },
         {id":"2",
     "name":"http://git/ivanov",
     "integrationType":{
      "id":"2",
      "name":"git1.0",
      "code":"git"   
     },
     "portalId":"git2" }
],
                    "projects": [
                        {"id":"25","name":"project1"},
                        {"id":"26","name":"project2"}
                                ],
                      "team": {id:"1",name:"Команда № 1"}
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

            :items="employees" - загрузка данных из массива employees

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
     

      <template v-slot:[`item.portals`]="{ item }">
           <v-list dense>
           <v-list-item-group>
            <v-list-item
            v-for="(item0, i) in item.portals"
            :key="i">      
             {{item0.portalId}}       
            </v-list-item> 
           </v-list-item-group> 
           </v-list>
        </template>

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
                               <v-flex xs6>
                                    <v-text-field :label="'Фамилия сотрудника'" v-model="lastName"
                                                  required></v-text-field>
                                </v-flex>
                               <v-flex xs6>
                                    <v-text-field :label="'Имя сотрудника'" v-model="firstName"
                                                  required></v-text-field>
                                </v-flex>
                              <v-flex xs6>
                                    <v-text-field :label="'Отчество сотрудника'" v-model="middleName"
                                                  required></v-text-field>
                                </v-flex>

                                <v-flex xs6>
                                    <v-text-field :label="'День рождения'" v-model="birthDate"
                                                  required></v-text-field>
                                </v-flex>

                              <v-flex xs12>                                               
                               <template>
                                 <p> Пол: </p>                               
                               </template>       

                              <v-combobox
                                   v-model="selectedGender" 
                                   :items="genders"
                                   item-text="gender"
                                   item-value="gender"
                                   label="Пол:"
                                   dense
                                   filled
                                   outlined
                                   solo
                                 ></v-combobox> 
          
                                </v-flex>

  
                                 <v-flex xs6>
                                    <v-text-field :label="'email'" v-model="email"
                                                  required></v-text-field>
                                </v-flex>
                                <v-flex xs6>
                                    <v-text-field :label="'login'" v-model="login"
                                                  required></v-text-field>
                                </v-flex>


                               <v-flex xs12>                                               
                               <template>
                                 <p> Порталы </p>                               
                               </template>
                               
                             <v-combobox
                                   v-model="selectedPortals"
                                   :items="selectedPortals"
                                   item-text="portalId"
                                   item-value="portalId"
                                   label="Порталы"
                                   dense
                                   filled
                                   outlined
                                   solo
                                   multiple
                                ></v-combobox> 

                                <v-btn
                                color= "#E1F5FE"
                                @click="editPortals(selectedPortals)"
                                >
                                  Редактировать порталы
                                </v-btn>

          
          
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
                               
                              
                              <v-flex xs12>                                               
                               <template>
                                 <p> Команды: </p>                               
                               </template>
                               
                             <v-combobox
                                   v-model="selectedTeam"
                                   :items="teams"
                                   item-text="name"
                                   item-value="name"
                                   label="Команды:"
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
                lastName:"",
                firstName:"",
                middleName:"",
                gender:"",
                birthDate:"",
                email:"",
                login:"",
                portals:[],    
                projects:[],      
                team:{id:"", name:"", bitrixPortalId:"", projects: [] },                                      
                itemPortals:[], 
                itemProjects:[],    
                itemTeams:{id:"", name:"", bitrixPortalId:"", projects: [] }, 
                dialog: false,
                edit:false,
                selected: [],
                search: '',
                singleSelect:true,
                commonHeaders: [
                    {text: 'id', align: 'left', value: 'id'},
                    {text: 'Фамилия', align: 'left', value: 'lastName'},  
                    {text: 'Имя', align: 'left', value: 'firstName'},
                    {text: 'Отчество', align: 'left', value: 'middleName'},
                    {text: 'Пол', align: 'left', value: 'gender'},                    
                    {text: 'День рождения', align: 'left', value: 'birthDate' },
                    {text: 'email', align: 'left', value: 'email' },  
                    {text: 'login', align: 'left', value: 'login' },                                                                
                    {text: 'Порталы', align: 'left', value: 'portals' }, 
                    {text: 'Проекты', align: 'left', value: 'projects' },
                    {text: 'Команда', align: 'left', value: 'team.name'}
 ],
                selectedProjects: [],
                selectedPortals: [],
                selectedTeam:  {id:"", name:"", bitrixPortalId:"", projects: [] },
                selectedGender:  {gender:""}

            }
        },
 methods: {
            editPortals(selectedPortals){

            this.$store.dispatch('pageName', "employee");
            this.$store.dispatch('selectedPortals',selectedPortals);

            console.log("portals",selectedPortals)  
            this.$router.push('/portal')        },                          

            // Вызывается при нажатии на кнопку "редактировать элемент"
            // Затем вызывается диалоговое окно Dilog
            // (описанно выше)
               editItem() {
                  if (this.selected.length === 0) {
                    alert('Для редактирования нужно выбрать сотрудника')
                } else {
                console.log(this.selected[0]);
                // Запоминаем выбранный галочкой элемент
                 this.id=this.selected[0].id;
                 this.lastName=this.selected[0].lastName;   
                 this.firstName=this.selected[0].firstName;
                 this.middleName=this.selected[0].middleName;   
                 this.gender=this.selected[0].gender; 
                 this.birthDate=this.selected[0].birthDate;   
                 this.email=this.selected[0].email;
                 this.login=this.selected[0].login;


                  // Нужно сделать:  
                 this.portals = this.selected[0].portals 
                 this.projects = this.selected[0].projects    
                 this.team = this.selected[0].team              
   
            
           
                // let a =   this.selected[0] 
                // let b={}                  
               //  b.id =      a.projects.id
               //  b.name =    a.projects.name 
               //  b.description =  a.projects.description
        
                 
               // this.projects = b 

                // console.log('a.projects.id',a.projects.id)  
                // console.log('b.id',b.id) 
                // console.log('this.projects ',this.projects ) 
                 
                // Передаем поле- процесс
                // в список выбора процесса 
                // (чтобы по умолчанию у элемента была та область,
                // которая раньше была )
   
                this.selectedPortals = this.selected[0].portals;
                this.selectedProjects = this.selected[0].projects; 
                this.selectedTeam = this.selected[0].team;  
                this.selectedGender = this.selected[0].gender;  


                console.log('this.selectedPortals ',this.selectedPortals)   
                console.log('this.selectedProjects ',this.selectedProjects ) 
                console.log('this.selectedTeam ',this.selectedTeam ) 
                      

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
                    lastName: this.lastName,   
                    firstName: this.firstName,
                    middleName: this.middleName,        
                    birthDate: this.birthDate,   
                    email: this.email,
                    login: this.login,     

                    portals: this.selectedPortals,   
                    projects: this.selectedProjects,            
                    team: this.selectedTeam,  
                    gender: this.selectedGender.gender            
                };

                console.log("this.selectedPortals",this.selectedPortals)
                console.log("this.selectedProjects",this.selectedProjects)                
                console.log("this.selectedTeam",this.selectedTeam)
                console.log("this.selectedGender",this.selectedGender.gender)                

                console.log("form",form)

                    this.$store.dispatch('addEmployee', form);
                    this.$refs.form.reset()
                                      }
                // Если была нажата кнопка редактирования элемента
                // редактируем текщий выбранный элемент
                 if (this.edit === true) {


                let form = {
                    id: this.id,
                    lastName: this.lastName,   
                    firstName: this.firstName,
                    middleName: this.middleName, 
                    birthDate: this.birthDate,   
                    email: this.email,
                    login: this.login,
              
                    portals: this.selectedPortals,
                    projects: this.selectedProjects, 
                    team: this.selectedTeam,
                    gender: this.selectedGender.gender
                  
                                    
                };

                    const msg = 'Сохранить изменения для сотрудника?';
                    let boo = confirm(msg) && this.$store.dispatch('editEmployee', form);
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
                    alert('Для удаления нужно выбрать сотрудника')
                } else {
                    const msg = 'Удалить сотрудника?';
                    let boo = confirm(msg) && this.$store.dispatch('deleteEmployee', this.selected[0])
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
        // получаем весь массив объектов employees из store/employees
            employees() {
                    return this.$store.getters.employees
            },
        // Получаем весь массив процессов
            AllProjects() {
              return this.$store.getters.projects
                         },
           // AllPortals() {
          //   return this.$store.getters.portals
          //               },
            teams() {
              return this.$store.getters.teams
                         },      
             genders() {
                 const genders= [{gender:"М"},{gender:"Ж"}]
                 return genders
             }                      
                         
           
                  }
    }


</script>

<style scoped>
   .root{
        font-size:13px!important;
   }

</style>