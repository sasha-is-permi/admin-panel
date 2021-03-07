
/*

project
Проект

1.	id
2.	Группа проектов
3.	Название
4.	Интеграция (Привязки к JIRA, Git, Confluence)
5.	Процессы

https://gitlab.com/datsteam/project/dev-bro/-/blob/DEVBRO-14/api/src/main/java/com/devbro/api/dto/ProjectDto.java

public class ProjectDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("group")
    private ProjectGroupDto group;

    @JsonProperty("processes")
    private List<ProcessDto> processes;

    @JsonProperty("portals")
    private List<PortalDto> portals;
}

public class ProjectGroupDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;
}


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
             name:"Проект 1",
             group:{},
             processes:[],
             portals:[]
             },
             {id:"2",
             name:"Проект 2",
             group:{},
             processes:[],
             portals:[]
             },
             {id:"3",
             name:"Проект 3",
             group:{},
             processes:[],
             portals:[]
             }
        ] 
        
        },
    mutations: { 
    
       },
    actions: {  
   
        },       
        
    getters: {
        projects(state) {
            // Возвращаем все проекты по запросу из файла vue
            return state.projects
        }   
        
         }


}