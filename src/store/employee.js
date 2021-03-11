
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

/*

class employees {
    constructor (id, lastName, firstName, middleName,gender,
birthDate,email,login,portals,projects,team) {
      this.id = id
      this.lastName = lastName
      this.firstName = firstName
      this.middleName = middleName
      this.gender = gender
      this.birthDate = birthDate
      this.email = email
      this.login = login
      this.portals = portals
      this.projects = projects
      this.team = team      
    }            
    }
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
                      gender:"М",
                      birthDate:"15.07.75",              
                      email:"ivanov@mail.ru",
                      login:"ivanov",
                      portals:[
                        {id:"1",
                        integrationType:{
                         id:"1",
                         name:"jira",
                         code:"jira"                  
                        },
                        portalId:"http://jira1"
                        },
                        {id:"2",
                        integrationType:{
                         id:"2",
                         name:"Jira ServiceDesk",
                         code:"JiraServiceDesk"                  
                        },
                        portalId:"http://JiraServiceDesk1"
                        }                 
                            ],
                     projects:[
                        {id:"1",
                         name:"Проект 1",
                         group: {id:"1",name:"Группа проектов 1",            
                         workspace: {id:"1",name:"workspace1",active: false,
                         logo: "https://img2.fonwall.ru/o/wr/roza-rozy-purpurnye-rozy-dsij.jpg"}
                         },
                         processes:[], 
                         portals:[]
                        },
                    
                    
                        {id:"2",
                        name:"Проект 2",
                        group: {id:"2",name:"Группа проектов 2",            
                        workspace: {id:"2",name:"workspace2",active: true,
                        logo: "https://img2.fonwall.ru/o/wr/roza-rozy-purpurnye-rozy-dsij.jpg"}
                        },
                        processes: [], 
                        portals:[]
                       }
                    
                    
                          ],
                     team:   {id:"1",name:"Команда № 1",
                        bitrixPortalId:"http://bitrix/hardworker",
                        projects: [
                         {id:"1",
                             name:"Проект 1",
                          group:{},
                          processes:[],
                          portals:[]
                         },
                         {id:"3",name:"Проект 3",
                         group:{},
                         processes:[],
                         portals:[]
                         }  
                         ]            
                        }
         },          
           {id:"2",
            lastName:"Петров",
            firstName:"Денис",
            middleName:"Артемьевич",
            gender:"М",
            birthDate:"28.05.56",              
            email:"petrov@mail.ru",
            login:"petrov",
            portals:[
                {id:"2",
                integrationType:{
                 id:"2",
                 name:"jira ServiceDesk",
                 code:"jiraServiceDesk "                  
                },
                portalId:"http://jiraServiceDesk2"
                },
                {id:"3",
                integrationType:{
                 id:"3",
                 name:"Git",
                 code:"Git"                  
                },
                portalId:"http://git3"
                }                 
                    ],
             projects:[
                        {id:"1",
                         name:"Проект 1",
                         group: {id:"1",name:"Группа проектов 1",            
                         workspace: {id:"1",name:"workspace1",active: false,
                         logo: "https://img2.fonwall.ru/o/wr/roza-rozy-purpurnye-rozy-dsij.jpg"}
                         },
                         processes:[], 
                         portals:[]
                        },
                    
                    
                        {id:"2",
                        name:"Проект 2",
                        group: {id:"2",name:"Группа проектов 2",            
                        workspace: {id:"2",name:"workspace2",active: true,
                        logo: "https://img2.fonwall.ru/o/wr/roza-rozy-purpurnye-rozy-dsij.jpg"}
                        },
                        processes: [], 
                        portals:[]
                       }
                    
                   
                       
                          ], 
           team:  {id:"2",name:"Команда № 2",
           bitrixPortalId:"http://bitrix/soworker",
           projects: [
            {id:"2",name:"Проект 2",
             group:{},
             processes:[],
             portals:[]
            },
            {id:"3",name:"Проект 3",
            group:{},
            processes:[],
            portals:[]
            }  
            ]      
            }
           },                 
             {id:"3",
              lastName:"Савельева",
              firstName:"Елена",
              middleName:"Геннадьевна",
              gender:"Ж",
              birthDate:"15.04.85",              
              email:"saveljeva@mail.ru",
              login:"saveljeva",
              portals:[
                {id:"3",
                integrationType:{
                 id:"3",
                 name:"Git",
                 code:"Git"                  
                },
                portalId:"http://git3"
                },
                {id:"4",
                integrationType:{
                 id:"4",
                 name:"Gitlab",
                 code:"Gitlab"                  
                },
                portalId:"http://gitlab3"
                }                 
                    ],
                projects:[
                        {id:"1",
                         name:"Проект 1",
                         group: {id:"1",name:"Группа проектов 1",            
                         workspace: {id:"1",name:"workspace1",active: false,
                         logo: "https://img2.fonwall.ru/o/wr/roza-rozy-purpurnye-rozy-dsij.jpg"}
                         },
                         processes:[], 
                         portals:[]
                        },
                    
                    
                        {id:"2",
                        name:"Проект 2",
                        group: {id:"2",name:"Группа проектов 2",            
                        workspace: {id:"2",name:"workspace2",active: true,
                        logo: "https://img2.fonwall.ru/o/wr/roza-rozy-purpurnye-rozy-dsij.jpg"}
                        },
                        processes: [], 
                        portals:[]
                       }

                        
                          ], 
             team: {id:"3",name:"Команда № 3",
             bitrixPortalId:"http://bitrix/command3",
             projects: [
              {id:"1",name:"Проект 1",
               group:{},
               processes:[],
               portals:[]
              },
              {id:"2",name:"Проект 2",
              group:{},
              processes:[],
              portals:[]
              }  
              ]         
             }    
             
              }
             ]   
 
            // ads: [],
            // id:"" 
     }, 
          mutations: { 
            // удаление элемента
            deleteEmployee (state, {id}) {                          
              // находим - какой индекс у удаляемого элемента в массиве  из state
              const index = state.employees.findIndex(a => a.id === id);
              
              console.log("delete element index",index);
              // в массиве из state employees начиная с позиции 1 удалить 1 элемент
              state.employees.splice(index, 1);
              },

              // добавление элемента
              addEmployee (state, payload) {         
         
              //let a = {};
             // console.log('payload1',payload)
             // console.log( payload.id,payload.name,)           
             // a.id=payload["employees"]["id"];
            //  a.name = payload["employees"]["name"];             
            
        //   console.log("add",payload.id,payload.name,a) 
        console.log("id,lastName,firstName,middleName,gender,birthDate,email,login,portals,projects,team", 
        payload.id, payload.lastName, payload.firstName, payload.middleName,
        payload.gender,payload.birthDate,payload.email,payload.login,
        payload.portals,payload.projects,payload.team)


state.employees.push({id:payload.id, lastName:payload.lastName,
    firstName:payload.firstName, middleName:payload.middleName,
    gender:payload.gender,birthDate:payload.birthDate,
    email:payload.email,login:payload.login,
    portals:payload.portals,projects:payload.projects,
    team:payload.team
})


                // console.log(state.employees)

                // this.renderComponent = true
            
                },
              // редактирование элемента
              editEmployee (state, payload) {         
                 // обновляем элемент в массиве state.employees
              // find находит элементы по условию. Берет первый попавшийся.
              // Поскольку id уникален- можно так.
              const element = state.employees.find(a => {
                return a.id === payload.id
            })
             // Присваиваем найденному элементу
             // новые значения, полученные из формы
             element["lastName"] = payload["lastName"]
             element["firstName"] = payload["firstName"]
             element["middleName"] = payload["middleName"]
             element["gender"] = payload["gender"]
             element["birthDate"] = payload["birthDate"]
             element["email"] = payload["email"]
             element["login"] = payload["login"]
             element["portals"] = payload["portals"]
             element["projects"] = payload["projects"]
             element["team"] = payload["team"]

             // let a = {};
             //console.log('payload1',payload)
            // console.log( payload.id,payload.name)

             // a.id=payload["employees"]["id"];
             // a.name = payload["employees"]["name"];       
             
             // element["employees"] = a

           // element["employees"] = payload["employees"]

            console.log("edit", element["lastName"],
            element["firstName"], element["middleName"], 
            element["gender"], element["birthDate"],
            element["email"], element["login"],
            element["portals"], element["projects"],
            element["team"] )  }  
              },
           actions: {  
               
            // Удаление процесса из массива в state
            // payload- полученный удаляемый элемент (деструктурируем до id)
                 deleteEmployee({commit},{id}){
                   // вызываем mutation deleteId
                   // Передаем ему полученный из формы id элемента для удаления
                    commit('deleteEmployee',{id})
                 },



            // добавление процесса в массив из state
            addEmployee({commit},payload){
              console.log('payload',payload)
              // Формируем случайным образом id для нового элемента
              const id = Math.round(Math.random()*1000000000).toString();
              payload.id = id;
              // вызываем mutation addEmployee 
              // Передаем ему полученные из формы данные для добавления
               commit('addEmployee',payload)
            },

            editEmployee({commit},payload){
              // вызываем mutation editEmployee 
              // Передаем ему полученные из формы данные для редактирования
                commit('editEmployee',payload)
            },
               },      
        
    getters: {
        employees(state) {
            // Возвращаем всех сотрудников по запросу 
            // из файла vue
            return state.employees
        }   
        
         }


}


