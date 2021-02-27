
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


JSON:
    {
      "id": "1",
      "name":"integration1",
      "username":"user",
      "password":"234",
      "type":["id":"1","name":"jira","code":"2.1" ]
    }




*/

export default {
    state: {  
        // Пробные данные для проверки работы программы 
      integrations:
        [
        {
            id: "1",
            name:"integration1",
            username:"user",
            password:"234",
            type:{id:"1",name:"jira",code:"2.1"}
          },
          {
            id: "2",
            name:"integration2",
            username:"user2",
            password:"234",
            type:{id:"1",name:"jira",code:"2.1"}
          }

        ] 
        
        },
    mutations: { 
    
       },
    actions: {  
   
        },       
        
    getters: {
      integrations(state) {
        // Возвращаем все интеграции по запросу из файла vue
        return state.integrations
    }   
        
         }


}