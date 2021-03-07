
/*

project
Проект

1.	id
2.  Название
3.	Группа проектов
4.	Процессы
5.	Порталы (массив интеграций) (Привязки к JIRA, Git, Confluence)

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

public class PortalDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("integrationType")
    private IntegrationTypeDto integrationType;

    @JsonProperty("portalId")
    private String portalId;
}

public class ProcessDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("metrics")
    private List<MetricDto> metrics;
}


public class MetricDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("description")
    private String description;
}

public class IntegrationTypeDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("code")
    private String code;
}




*/

export default {
    state: {  
          // Пробные данные для проверки работы программы 
    
          projects:[
            {id:"1",
             name:"Проект 1",
             group: {id:"1",name:"Группа проектов 1",            
             workspace: {id:"1",name:"workspace1",active: false,
             logo: "https://img2.fonwall.ru/o/wr/roza-rozy-purpurnye-rozy-dsij.jpg"}
             },
             processes:
             [
                {
                    id:"1",
                    name:"process1",
                   metrics: [
                     { id:"1",
                    name:"metric1",
                    description:"первая метрика"},
                    { id:"2",
                    name:"metric2",
                    description:"вторая метрика"}
                            ]
                 },
                {
                    id:"2",
                    name:"process2",
                    metrics: [
                      { "id":"1",
                     name:"metric1",
                     description:"первая метрика"},
                     { id:"3",
                     name:"metric3",
                     description:"третья метрика"}
                             ]
                }
            ], 
             portals:[
               {id:"1",
               integrationType:{
                id:"1",
                name:"jira",
                code:"jira"                  
               },
               portalId:"1"
               },
               {id:"2",
               integrationType:{
                id:"2",
                name:"Jira ServiceDesk",
                code:"JiraServiceDesk"                  
               },
               portalId:"2"
               }                 
                   ]
            },


            {id:"2",
            name:"Проект 2",
            group: {id:"2",name:"Группа проектов 2",            
            workspace: {id:"2",name:"workspace2",active: true,
            logo: "https://img2.fonwall.ru/o/wr/roza-rozy-purpurnye-rozy-dsij.jpg"}
            },
            processes:
            [
               {
                   id:"2",
                   name:"process2",
                   metrics: [
                    { id:"2",
                   name:"metric1",
                   description:"первая метрика"},
                   { id:"3",
                   name:"metric3",
                   description:"третья метрика"}
                           ]
                },
               {
                   id:"3",
                   name:"process3",
                   metrics: [
                     { id:"3",
                    name:"metric3",
                    description:"третья метрика"},
                    { id:"2",
                    name:"metric2",
                    description:"вторая метрика"}
                            ]
               }
           ], 
            portals:[
              {id:"2",
              integrationType:{
               id:"2",
               name:"jira ServiceDesk",
               code:"jiraServiceDesk "                  
              },
              portalId:"2"
              },
              {id:"3",
              integrationType:{
               id:"3",
               name:"Git",
               code:"Git"                  
              },
              portalId:"3"
              }                 
                  ]
           },


           {id:"3",
           name:"Проект 3",
           group: {id:"3",name:"Группа проектов 3",            
           workspace: {id:"3",name:"workspace3",active: true,
           logo: "https://img2.fonwall.ru/o/wr/roza-rozy-purpurnye-rozy-dsij.jpg"}
           },
           processes:
           [
              {
                  id:"3",
                  name:"process3",
                 metrics: [
                   { id:"3",
                  name:"metric3",
                  description:"третья метрика"},
                  { id:"2",
                  name:"metric2",
                  description:"вторая метрика"}
                          ]
               },
              {
                  id:"2",
                  name:"process2",
                  metrics: [
                    { id:"3",
                   name:"metric3",
                   description:"третья метрика"},
                   { id:"1",
                   name:"metric1",
                   description:"первая метрика"}
                           ]
              }
          ], 
           portals:[
             {id:"3",
             integrationType:{
              id:"3",
              name:"Git",
              code:"Git"                  
             },
             portalId:"3"
             },
             {id:"1",
             integrationType:{
              id:"4",
              name:"Gitlab",
              code:"Gitlab"                  
             },
             portalId:"1"
             }                 
                 ]
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