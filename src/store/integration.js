
/*

integration
Интеграции

    1. id
    1. Название интеграции
    2. Тип интеграции (Jira , Jira ServiceDesk, Git ,
         Gitlab , Crucible , Confluence , BitrixPortal)
    3. Логин (служ. учетки)
    4. Пароль (служ. учетки) (не показывать в списке)
    5. Обработчик + документация (пока не используем)

public class IntegrationDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("username")
    private String username;

    @JsonProperty("password")
    private String password;

    @JsonProperty("type")
    private IntegrationTypeDto type;
}

public class IntegrationTypeDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("code")
    private String code;
}


JSON:
    {
      "id": "1",
      "name":"integration1",
      "username":"user",
      "password":"234",
      "type":{"id":"1","name":"jira","code":"2.1" }
    }




*/




/*

class AddIntegration {
    constructor (id, name, username,password, type) {
      this.id = id
      this.name = name
      this.username = username
      this.password = password
      this.type = type      
    }
  }

  */
  
 export default {
  state: {  
    // Типы интеграций integrationTypes  (поле type в объектах)
    // Jira , Jira ServiceDesk, Git ,
    //  Gitlab , Crucible , Confluence , BitrixPortal


    integrationTypes: [
      {
          id:"1",
          name:"jira",
          code:"jira"   
      },
      {
        id:"2",
        name:"Jira ServiceDesk",
        code:"JiraServiceDesk"   
      },
      {
        id:"3",
        name:"Jira ServiceDesk",
        code:"JiraServiceDesk"   
      },
      {
        id:"4",
        name:"Git",
        code:"Git"   
      },
      {
        id:"5",
        name:"Gitlab",
        code:"Gitlab"   
      },
      {
        id:"6",
        name:"Crucible",
        code:"Crucible"   
      },
      {
        id:"7",
        name:"Confluence",
        code:"Confluence"   
      },
      {
        id:"8",
        name:"Bitrix portal",
        code:"BitrixPortal"   
      } ],


    // Пробные данные для проверки работы программы 
  integrations:
    [
    {
        id: "1",
        name:"integration1",
        username:"user",
        password:"234",
        type:{id:"1",name:"jira",code:"jira"}
      },
      {
        id: "2",
        name:"integration2",
        username:"user2",
        password:"234",
        type:{id:"2",name:"Git",code:"Git"}
      },
      {
        id: "3",
        name:"integration3",
        username:"user3",
        password:"234",
        type:{id:"3",name:"Gitlab",code:"Gitlab"}
      },
      {
        id: "4",
        name:"integration4",
        username:"user4",
        password:"234",
        type:{id:"4",name:"Confluence",code:"Confluence"}
      },
      {
        id: "5",
        name:"integration5",
        username:"user5",
        password:"234",
        type:{id:"5",name:"BitrixPortal",code:"BitrixPortal"}
      }
    ] 
    
    },
      mutations: { 
          // удаление элемента
          deleteIntegration (state, {id}) {                          
            // находим - какой индекс у удаляемого элемента в массиве  из state
            const index = state.integrations.findIndex(a => a.id === id);
            
            console.log("delete element index",index);
            // в массиве из state integrations начиная с позиции 1 удалить 1 элемент
            state.integrations.splice(index, 1);
            },

            // добавление элемента
            addIntegration (state, payload) {         
       
            // используем объект a для получения и
            // потом записи данных из объекта type
            // Чтобы включилась реактивность для type
            // нужно создать на основе его новый объект 
            // и затем его использовать
            let a = {};
           // console.log('payload1',payload)
           // console.log( payload.id,payload.name,)     
            a.id=payload["type"]["id"];
            a.name = payload["type"]["name"];
            a.active=payload["type"]["code"];
          
            console.log("add",payload.id,payload.name,a) 

state.integrations.push({id:payload.id,name:payload.name,
username:payload.username,password:payload.password,type:a})

              // console.log(state.integrations)

              // this.renderComponent = true
          
              },
            // редактирование элемента
            editIntegration (state, payload) {         
               // обновляем элемент в массиве state.type
            // find находит элементы по условию. Берет первый попавшийся.
            // Поскольку id уникален- можно так.
            const element = state.integrations.find(a => {
              return a.id === payload.id
          })
           // Присваиваем найденному элементу
           // новые значения, полученные из формы
           element["name"] = payload["name"]
           element["username"] = payload["username"]
           element["password"] = payload["password"]  

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
           a.name = payload["type"]["name"];
           a.id=payload["type"]["id"];
           a.active=payload["type"]["code"];
           
           element["type"] = a

          console.log("edit",element["id"],element["name"],
          element["username"],element["password"],element["type"])         
                }  
            },
         actions: {  
             
          // Удаление интеграций из массива в state
          // payload- полученный удаляемый элемент (деструктурируем до id)
               deleteIntegration({commit},{id}){
                 // вызываем mutation deleteId
                 // Передаем ему полученный из формы id элемента для удаления
                  commit('deleteIntegration',{id})
               },



          // добавление группы проектов в массив из state
          addIntegration({commit},payload){
            console.log('payload',payload)
            // Формируем случайным образом id для нового элемента
            const id = Math.round(Math.random()*1000000000).toString();
            payload.id = id;
            // вызываем mutation addIntegration 
            // Передаем ему полученные из формы данные для добавления
             commit('addIntegration',payload)
          },

          editIntegration({commit},payload){
            // вызываем mutation editIntegration 
            // Передаем ему полученные из формы данные для редактирования
              commit('editIntegration',payload)
          },
             },      
      
  getters: {
    integrations(state) {
      // Возвращаем все интеграции по запросу из файла vue
      return state.integrations
      
       },
       integrationTypes(state) {
        // Возвращаем все типы интеграций по запросу из файла vue
        return state.integrationTypes
        
         }
      }
    }      

