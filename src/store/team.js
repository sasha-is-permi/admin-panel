
/*

team
команда

1.	uuid
2.	Название
3.	Привязки к BitrixPortal
4.	Проект


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



Пример данных в JSON:
"team"

{"id":"27","name":"HardWorkers",
"bitrixportal":"http://bitrix/hardworker",
 "project": [{id:"1",name:"Проект 1"},
            {id:"2",name:"Проект 2"}]  
  }


*/





/*

class AddTeam {
    constructor (id, name, bitrixPortalId, projects) {
      this.id = id
      this.name = name
      this.bitrixPortalId = bitrixPortalId
      this.projects = projects 
    }
  }

  */
  
  export default {
    state: {  
        // Пробные данные для проверки работы программы          
        teams: [
               {id:"1",name:"Команда № 1",
               bitrixPortalId:"http://bitrix/hardworker",
               projects: [
                {name:"Проект 1",
                 group:{},
                 processes:[],
                 portals:[]
                },
                {name:"Проект 3",
                group:{},
                processes:[],
                portals:[]
                }  
                ]            
               },
   
               {id:"2",name:"Команда № 2",
               bitrixPortalId:"http://bitrix/soworker",
               projects: [
                {name:"Проект 2",
                 group:{},
                 processes:[],
                 portals:[]
                },
                {name:"Проект 3",
                group:{},
                processes:[],
                portals:[]
                }  
                ]      
                },
   
               {id:"3",name:"Команда № 3",
               bitrixPortalId:"http://bitrix/command3",
               projects: [
                {name:"Проект 1",
                 group:{},
                 processes:[],
                 portals:[]
                },
                {name:"Проект 2",
                group:{},
                processes:[],
                portals:[]
                }  
                ]         
               }    
               
               ]  
           },
        mutations: { 
            // удаление элемента
            deleteTeam (state, {id}) {                          
              // находим - какой индекс у удаляемого элемента в массиве  из state
              const index = state.teams.findIndex(a => a.id === id);
              
              console.log("delete element index",index);
              // в массиве из state teams начиная с позиции 1 удалить 1 элемент
              state.teams.splice(index, 1);
              },

              // добавление элемента
              addTeam (state, payload) {         
         
              //let a = {};
             // console.log('payload1',payload)
             // console.log( payload.id,payload.name,)           
             // a.id=payload["projects"]["id"];
            //  a.name = payload["projects"]["name"];             
            
        //   console.log("add",payload.id,payload.name,a) 
        console.log("id, name, bitrixPortalId, projects", 
        payload.id, payload.name, payload.bitrixPortalId, payload.projects)

state.teams.push({id:payload.id, name:payload.name,
bitrixPortalId:payload.bitrixPortalId, projects:payload.projects})

                // console.log(state.teams)

                // this.renderComponent = true
            
                },
              // редактирование элемента
              editTeam (state, payload) {         
                 // обновляем элемент в массиве state.teams
              // find находит элементы по условию. Берет первый попавшийся.
              // Поскольку id уникален- можно так.
              const element = state.teams.find(a => {
                return a.id === payload.id
            })
             // Присваиваем найденному элементу
             // новые значения, полученные из формы
             element["name"] = payload["name"]
             element["bitrixPortalId"] = payload["bitrixPortalId"]
             

             // let a = {};
             //console.log('payload1',payload)
            // console.log( payload.id,payload.name)

             // a.id=payload["projects"]["id"];
             // a.name = payload["projects"]["name"];       
             
             // element["projects"] = a

            element["projects"] = payload["projects"]

            console.log("edit",element["id"],element["name"],
            element["bitrixPortalId"],element["projects"])         
                  }  
              },
           actions: {  
               
            // Удаление процесса из массива в state
            // payload- полученный удаляемый элемент (деструктурируем до id)
                 deleteTeam({commit},{id}){
                   // вызываем mutation deleteId
                   // Передаем ему полученный из формы id элемента для удаления
                    commit('deleteTeam',{id})
                 },



            // добавление процесса в массив из state
            addTeam({commit},payload){
              console.log('payload',payload)
              // Формируем случайным образом id для нового элемента
              const id = Math.round(Math.random()*1000000000).toString();
              payload.id = id;
              // вызываем mutation addTeam 
              // Передаем ему полученные из формы данные для добавления
               commit('addTeam',payload)
            },

            editTeam({commit},payload){
              // вызываем mutation editTeam 
              // Передаем ему полученные из формы данные для редактирования
                commit('editTeam',payload)
            },
               },      
        
    getters: {
        teams(state) {
            // Возвращаем все комманды по запросу из файла vue
            return state.teams
        }   
        
         }


}







