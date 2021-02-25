
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

{               "id":"1",
                "lastName":"Иванов",
                "firstName":"Артем",
                "middleName:"Аркадьевич",
                "gender":"м",
                "birthDate":"15.07.25",              
                 "email":"ivanov@mail.ru",
                 "login":"ivanov",
                 "portals":"",
                 "projects":"",
                 "team":""
                
}



Команда team. Может быть только одна у сотрудника
"team": {"id":"25","name":"comand1","bitrixportal":"25"}


{               "id":"1",
                "lastName":"Иванов",
                "firstName":"Артем",
                "middleName:"Аркадьевич",
                "gender":"м",
                "birthDate":"15.07.25",              
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
    {"id":"37",
     "name":"jira",
     "code":"http://jira/ivanov" },
    {"id":"28",
     "name":"vkontakte",
     "code":"http://vkontakte/ivanov" },
  {"id":"34",
     "name":"git",
     "code":"http://github/ivanov" }    
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

"projects": {"id":"25","name":"project1",...}



*/

export default {
    state: {  
        
        employees: [
            {
                id:'1',
                fio:'Иванов Артем Аркадьевич',
                team:'экономисты',
                project:'отчетность',
                login:'ivanovAA',
                email:'ivanovaa@mail.ru',              
                connections: {jira:'http://jira/ivanov',
                 telegram:'http://telegram/ivanov',
                 git:'http://git/ivanov',
                 confluence:'',
                 bitrixportal:''
                }
            },
            {
                id:'2',
                fio:'Петров Алексей Игнатьевич ',
                team:'экономисты',
                project:'трудовик',
                login:'petrovAI',
                email:'petrovAI@mail.ru',
                connections: {jira:'http://jira/petrov',
                 telegram:'http://telegram/petrov',
                 git:'',
                 confluence:'',
                 bitrixportal:'http://bitrixportal/petrov'
                }
            },
            {
                id:'3',
                fio:'Савельев Антон Григорьевич ',
                team:'бухгалтера',
                project:'трудовик',
                login:'saveljevAG',
                email:'saveljevAG@mail.ru',               
                connections: {jira:'http://jira/savelev',
                 telegram:'',
                 git:'http://git/savelev',
                 confluence:'',
                 bitrixportal:'http://bitrixportal/savelev'
                }
            },
            {
                id:'4',
                fio:'Лоза Антон Георгиевич ',
                team:'инженер',
                project:'отчетность',
                login:'losaAG',
                email:'losaAG@mail.ru',               
                connections: {jira:'http://jira/losa',
                 telegram:'',
                 git:'http://git/losa',
                 confluence:'http://confluence/losa',
                 bitrixportal:''
                }
            },
            {
                id:'5',
                fio:'Соснин Денис Анатольевич ',
                team:'инженер',
                project:'отчетность',
                login:'sosninDA',
                email:'sosninDA@mail.ru',               
                connections: {jira:'http://jira/sosnin',
                 telegram:'http://telegram/sosnin',
                 git:'http://git/sosnin',
                 confluence:'',
                 bitrixportal:''
                }
            },
            {
                id:'6',
                fio:'Артемьев Иван Дмитриевич',
                team:'электрик',
                project:'электричество',
                login:'artemjevID',
                email:'artemjevID@mail.ru',               
                connections: {jira:'http://jira/artemjev',
                 telegram:'http://telegram/artemjev',
                 git:'',
                 confluence:'',
                 bitrixportal:''
                }
            },
            {
                id:'7',
                fio:'Леденцов Павел Петрович ',
                team:'начальник',
                project:'электричество',
                login:'ledencovPP',
                email:'ledencovPP@mail.ru',               
                connections: {jira:'',
                 telegram:'',
                 git:'http://git/ledencov',
                 confluence:'http://confluence/ledencov',
                 bitrixportal:''
                }
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