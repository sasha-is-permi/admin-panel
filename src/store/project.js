
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
        }
          
            ] 
      
  },   
          mutations: { 
            // удаление элемента
            deleteProject (state, {id}) {                          
              // находим - какой индекс у удаляемого элемента в массиве  из state
              const index = state.projects.findIndex(a => a.id === id);
              
              console.log("delete element index",index);
              // в массиве из state projects начиная с позиции 1 удалить 1 элемент
              state.projects.splice(index, 1);
              },

              // добавление элемента
              addProject (state, payload) {         
         
              //let a = {};
             // console.log('payload1',payload)
             // console.log( payload.id,payload.name,)           
             // a.id=payload["projects"]["id"];
            //  a.name = payload["projects"]["name"];             
            
        //   console.log("add",payload.id,payload.name,a) 
        console.log("id, name, group, processes, portals", 
        payload.id, payload.name,
        payload.group, payload.processes, payload.portals)

state.projects.push({id:payload.id, name:payload.name,
group:payload.group, processes:payload.processes,
portals:payload.portals})

                // console.log(state.projects)

                // this.renderComponent = true
            
                },
              // редактирование элемента
              editProject (state, payload) {         
                 // обновляем элемент в массиве state.projects
              // find находит элементы по условию. Берет первый попавшийся.
              // Поскольку id уникален- можно так.
              const element = state.projects.find(a => {
                return a.id === payload.id
            })
             // Присваиваем найденному элементу
             // новые значения, полученные из формы
             element["name"] = payload["name"]
             element["group"] = payload["group"]
             element["processes"] = payload["processes"]
             element["portals"] = payload["portals"]

             // let a = {};
             //console.log('payload1',payload)
            // console.log( payload.id,payload.name)

             // a.id=payload["projects"]["id"];
             // a.name = payload["projects"]["name"];       
             
             // element["projects"] = a

           // element["projects"] = payload["projects"]

            console.log("edit",element["id"],element["name"],
            element["group"],element["processes"],element["portals"])         
                  }  
              },
           actions: {  
               
            // Удаление процесса из массива в state
            // payload- полученный удаляемый элемент (деструктурируем до id)
                 deleteProject({commit},{id}){
                   // вызываем mutation deleteId
                   // Передаем ему полученный из формы id элемента для удаления
                    commit('deleteProject',{id})
                 },



            // добавление процесса в массив из state
            addProject({commit},payload){
              console.log('payload',payload)
              // Формируем случайным образом id для нового элемента
              const id = Math.round(Math.random()*1000000000).toString();
              payload.id = id;
              // вызываем mutation addProject 
              // Передаем ему полученные из формы данные для добавления
               commit('addProject',payload)
            },

            editProject({commit},payload){
              // вызываем mutation editProject 
              // Передаем ему полученные из формы данные для редактирования
                commit('editProject',payload)
            },
               },      
        
    getters: {
        projects(state) {
            // Возвращаем все проекты по запросу из файла vue
            return state.projects
        }   
        
        
         }


}







