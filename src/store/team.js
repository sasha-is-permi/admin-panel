
/*

team
команда

1.	uuid
2.	Название
3.	Проект
4.	Привязки к BitrixPortal


https://gitlab.com/datsteam/project/dev-bro/-/blob/DEVBRO-14/api/src/main/java/com/devbro/api/dto/TeamDto.java

public class TeamDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("bitrixPortalId")
    private String bitrixPortalId;

    @JsonProperty("projects")
    private List<ProjectDto> projects;
}


Пример данных в JSON:
"team"

{"id":"27","name":"HardWorkers",
"bitrixportal":"http://bitrix/hardworker",
 project: [{id:"1",name:"Проект 1"},
            {id:"2",name:"Проект 2"}]  
  }


*/

export default {
    state: {  
     // Пробные данные- массив объектов             
     teams: [
            {id:"1",name:"Команда № 1",
            bitrixPortalId:"http://bitrix/hardworker",
            project:[{id:"1",name:"Проект 1"}] },

            {id:"2",name:"Команда № 2",
            bitrixPortalId:"http://bitrix/soworker",
            project: [{id:"1",name:"Проект 1"},
            {id:"2",name:"Проект 2"}]   },

            {id:"3",name:"Команда № 3",
            bitrixPortalId:"http://bitrix/command3",
            project:null}           
            
            ]  
        },
    mutations: { 
    
       },
    actions: {  
   
        },       
        
    getters: {
        
         }


}