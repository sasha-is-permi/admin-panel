
/*

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

*/

export default {
    state: {  
       // Пробные данные для проверки работы программы 
        employees: [           
                    {id:"1",
                     lastName:"Иванов",
                     firstName:"Артем",
                     middleName:"Аркадьевич",
                     gender:"м",
                     birthDate:"15.07.75",              
                     email:"ivanov@mail.ru",
                     login:"ivanov",
                     "portals":[
                      {id:"1",
                       name:"http://jira/ivanov",
                       integrationType:{
                        id:"1",
                        name:"jira1.0",
                        "code":"jira"   
                       },
                       portalId:"jira25" },
                           {id:"2",
                       name:"http://git/ivanov",
                       integrationType:{
                        id:"2",
                        name:"git1.0",
                        code:"git"   
                       },
                       portalId:"git2" }
                    ],
                    projects: [
                        {id:"25",name:"project1"},
                        {id:"26",name:"project2"}
                                ],
                    team: {id:"1",name:"Команда № 1"}
        },          
          {id:"2",
           lastName:"Петров",
           firstName:"Денис",
           middleName:"Артемьевич",
           gender:"м",
           birthDate:"28.05.56",              
           email:"petrov@mail.ru",
           login:"petrov",
           "portals":[
            {id:"1",
             name:"http://jira/petrov",
             integrationType:{
              id:"1",
              name:"jira1.0",
              "code":"jira"   
             },
             portalId:"jira25" },
                 {id:"2",
             name:"http://git/petrov",
             integrationType:{
              id:"2",
              name:"git1.0",
              code:"git"   
             },
             portalId:"git2" }
          ],
          projects: [
              {id:"25",name:"project1"},
              {id:"26",name:"project2"}
                      ],
          team: {id:"2",name:"Команда № 2"}
          },                 
            {id:"1",
             lastName:"Савельева",
             firstName:"Елена",
             middleName:"Геннадьевна",
             gender:"ж",
             birthDate:"15.04.85",              
             email:"saveljeva@mail.ru",
             login:"saveljeva",
             "portals":[
              {id:"1",
               name:"http://jira/saveljeva",
               integrationType:{
                id:"1",
                name:"jira1.0",
                "code":"jira"   
               },
               portalId:"jira25" },
                   {id:"2",
               name:"http://git/saveljeva",
               integrationType:{
                id:"2",
                name:"git1.0",
                code:"git"   
               },
               portalId:"git2" }
            ],
            projects: [
                {id:"25",name:"project1"},
                {id:"26",name:"project4"}
                        ],
            team: {id:"2",name:"Команда № 2"}
             }
            ]   

           // ads: [],
           // id:"" 
    },
    mutations: { 
     //   employees(state, payload) {
    //        state.employees = payload
     //    }

       },
    actions: {  
      //  setLoading ({commit}, payload) {
            // Вызываем commit с mutation setLoading
      //      commit('employees', payload)
      //    },
        //  employees ({commit}, payload) {
          //  commit('employees', payload)
        //  },
         
        // Удаление сотрудника из базы
          deleteItem(){
              alert('Сотрудник удален');
          },
        // Добавление нового сотрудника в базу     
          addItem(){
            alert('Элемент добавлен');
        },
        // Редактирование существующего сотрудника 
        // в базе
        editItem(){
            alert('Элемент отредактирован');
        }

        },       
        
    getters: {
         employees(state) {
             // Возвращаем всех сотрудников по запросу 
             // из файла vue
             return state.employees
         }   
         }


}