
/*

workspace

Рабочая область
        1. id
        2. Название области
        3. Логотип
        4. Индикатор активности

public class WorkspaceDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("active")
    private boolean active;

    @JsonProperty("logo")
    private byte[] logo;
}

           projectGroups: [
            {id:"1",name:"Проект 1",            
            workspace: {id:"1",name:"workspace1",active: false,
            logo: "https://img2.fonwall.ru/o/wr/roza-rozy-purpurnye-rozy-dsij.jpg"}
            }, 
            {id:"2",name:"Проект 2",
            workspace: {id:"2",name:"workspace2",active: false,
            logo: "https://img2.fonwall.ru/o/dt/roza-rozy-purpurnye-rozy-pdbl.jpg"}
            },
            {id:"3",name:"Проект 3",
            workspace: {id:"3",name:"workspace3",active: false,
            logo: "https://img2.fonwall.ru/o/rk/roza-rozy-cvetok-ktyi.jpg"}         
          }
        ] 


*/

export default {
    state: {  
          // Пробные данные для проверки работы программы 
        workspaces: [
        {
            id:"1",
            name:"workspace1",
            active: false,
            logo: "https://img2.fonwall.ru/o/wr/roza-rozy-purpurnye-rozy-dsij.jpg"
        },
        {
            id:"2",
            name:"workspace2",
            active: true,
            logo: "https://img2.fonwall.ru/o/dt/roza-rozy-purpurnye-rozy-pdbl.jpg"
        },
        {
            id:"3",
            name:"workspace3",
            active: true,
            logo: "https://img2.fonwall.ru/o/rk/roza-rozy-cvetok-ktyi.jpg"
        }                  
    
    
    
    
                     ]
        },
    mutations: { 
    
       },
    actions: {  
   
        },       
        
    getters: {
        workspaces(state) {
            // Возвращаем все рабочие пространства по запросу из файла vue
            return state.workspaces
        }   
        
         }


}