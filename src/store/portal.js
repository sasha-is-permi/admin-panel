 
/*
https://gitlab.com/datsteam/project/dev-bro/-/blob/DEVBRO-14/api/src/main/java/com/devbro/api/dto/PortalDto.java

public class PortalDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("integrationType")
    private IntegrationTypeDto integrationType;

    @JsonProperty("portalId")
    private String portalId;
}


public class IntegrationTypeDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("code")
    private String code;
}
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
    

*/


 



/*

class AddPortal {
    constructor (id, integrationType, portalId) {
      this.id = id
      this.integrationType = integrationType      
      this.portalId= portalId
    }
  }

  */
  
  export default {
    state: {
      // Имя страницы, из которой был вызвана страница порталов
      pageName:"",

      portals:[
        {id:"",
        integrationType:{
         id:"",
         name:"",
         code:""                  
        },
        portalId:""
        }         
            ]
    
 
},  
        mutations: {
          pageName(state,payload) {
            state.pageName=payload
          },
          selectedPortals(state,payload) {
            state.portals= payload
          },
         
            // удаление элемента
            deletePortal (state, {id}) {                          
              // находим - какой индекс у удаляемого элемента в массиве  из state
              const index = state.portals.findIndex(a => a.id === id);
              
              console.log("delete element index",index);
              // в массиве из state portals начиная с позиции 1 удалить 1 элемент
              state.portals.splice(index, 1);
              },
  
              // добавление элемента
              addPortal (state, payload) {         
         
              // используем объект a для получения и
              // потом записи данных из объекта integrationType
              // Чтобы включилась реактивность для integrationType
              // нужно создать на основе его новый объект 
              // и затем его использовать
              let a = {};
             // console.log('payload1',payload)
             // console.log( payload.id,payload.name,)     
              a.id=payload["integrationType"]["id"];
              a.name = payload["integrationType"]["name"];
              a.code=payload["integrationType"]["code"];
            
              console.log("add",payload.id,a,payload.integrationType) 
  
  state.portals.push({id:payload.id,integrationType:a, 
    portalId:payload.portalId})
  
                // console.log(state.portals)
  
                // this.renderComponent = true
            
                },
              // редактирование элемента
              editPortal (state, payload) {         
                 // обновляем элемент в массиве state.type
              // find находит элементы по условию. Берет первый попавшийся.
              // Поскольку id уникален- можно так.
              const element = state.portals.find(a => {
                return a.id === payload.id
            })
             // Присваиваем найденному элементу
             // новые значения, полученные из формы

          
   
  
             let a = {};
             //console.log('payload1',payload)
            // console.log( payload.id,payload.name,
            // payload.username,payload.password )
  
  
              // используем объект a для получения и
              // потом записи данных из объекта type
              // Чтобы включилась реактивность для type
              // нужно не напрямую его менять,
              // а создать на основе его новый массив и
              // менять его              
             a.id=payload["integrationType"]["id"];
             a.name = payload["integrationType"]["name"];
             a.code=payload["integrationType"]["code"];
             
             element["integrationType"] = a
             element["portalId"] = payload["portalId"]   

            console.log("edit",element["id"],element["integrationType"],
            element["portalId"])         
                  }  
              },
           actions: {  

            pageName({commit},payload) {
              commit('pageName',payload)
            },  

            selectedPortals({commit},payload) {
              commit('selectedPortals',payload)
            },  



            // Удаление интеграций из массива в state
            // payload- полученный удаляемый элемент (деструктурируем до id)
                 deletePortal({commit},{id}){
                   // вызываем mutation deleteId
                   // Передаем ему полученный из формы id элемента для удаления
                    commit('deletePortal',{id})
                 },
  
  
  
            // добавление группы проектов в массив из state
            addPortal({commit},payload){
              console.log('payload',payload)
              // Формируем случайным образом id для нового элемента
              const id = Math.round(Math.random()*1000000000).toString();
              payload.id = id;
              // вызываем mutation addPortal 
              // Передаем ему полученные из формы данные для добавления
               commit('addPortal',payload)
            },
  
            editPortal({commit},payload){
              // вызываем mutation editPortal 
              // Передаем ему полученные из формы данные для редактирования
                commit('editPortal',payload)
            },
               },      
        
    getters: {
      portals(state) {
        // Возвращаем все интеграции по запросу из файла vue
        return state.portals
        
         },
       pageName(state) {
         return state.pageName
       }
       





        }
      }      
  





