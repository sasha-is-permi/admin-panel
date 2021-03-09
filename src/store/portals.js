
/*

Порталы

public class PortalDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("integrationType")
    private IntegrationTypeDto integrationType;

    @JsonProperty("portalId")
    private String portalId;
}


*/



/*

class AddProject {
    constructor (id, name, group, processes,portals) {
      this.id = id
      this.name = name
      this.group = group
      this.processes = processes
      this.portals = portals
    }
  }

  */
  
  export default {
    state: {  

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
             },
          
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
                 ]
         
      
  },   
          mutations: {   
              },
           actions: {   },      
        
    getters: {
        portals(state) {
            // Возвращаем все проекты по запросу из файла vue
            return state.portals
        }   
        
        
         }


}







