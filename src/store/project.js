
/*

project
Проект

1.	id
2.	Группа проектов
3.	Название
4.	Интеграция (Привязки к JIRA, Git, Confluence)
5.	Процессы

https://gitlab.com/datsteam/project/dev-bro/-/blob/DEVBRO-14/api/src/main/java/com/devbro/api/dto/ProjectDto.java

Пример данных в JSON: 
project
{"id":"1",
 "name" : {"id":"5","name":"projectgroup1"},
 "processes" : [ {"id":10, "name": "process1"},
{"id":20, "name": "process2"}],
"group" : [ {"id":"37",
     "name":"jira",
     "code":"http://jira/ivanov" },
    {"id":"28",
     "name":"vkontakte",
     "code":"http://vkontakte/ivanov" },
    {"id":"34",
     "name":"git",
     "code":"http://github/ivanov" }    
        ]
}


*/

export default {
    state: {  
          // Пробные данные для проверки работы программы 
        projects:[
            {id:"1",
            name : {id:"1",name:"projectgroup1"},
            processes : [{id:1, name: "process1"},
            {id:2, name: "process2"} ],
            group : [ {id:"1",name:"jira",code:"http://jira/group1" },
            {id:"2",name:"vkontakte",code:"http://vkontakte/group1" },
            {id:"3",name:"git",code:"http://github/group1" }   
                       ]
             },
             {id:"2",
             name : {id:"1",name:"projectgroup1"},
             processes : [ {id:3, name: "process3"},
             {id:4, name: "process4"}],
             group : [ {id:"4",name:"jira",code:"http://jira/group2" },
             {id:"5",name:"vkontakte",code:"http://vkontakte/group2" },
             {id:"6",name:"git",code:"http://github/group2" }    
                        ]
              },

              {id:"3",
              name : {id:"2",name:"projectgroup2"},
              processes : [ {id:5, name: "process5"},
              {id:6, name: "process6"}],
              group : [ {id:"7",name:"jira",code:"http://jira/group3" },
              {id:"8",name:"vkontakte",code:"http://vkontakte/group3" },
              {id:"9",name:"git",code:"http://github/group3" }    
                         ]
               },
 



        ] 
        
        },
    mutations: { 
    
       },
    actions: {  
   
        },       
        
    getters: {
        projects(state) {
            // Возвращаем все проекты по запросу из файла vue
            return state.integrations
        }   
        
         }


}