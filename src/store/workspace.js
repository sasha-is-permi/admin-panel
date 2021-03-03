
/*

workspace

Рабочая область
        1. id
        2. Название области
        3. Индикатор активности
        4. Логотип

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

JSON 
        workspaces: 
        
        {
            {
            "id":"1",
            "name":"workspace1",
            "active": false,
            "logo": "<a>https://img2.fonwall.ru/o/wr/roza-rozy-purpurnye-rozy-dsij.jpg</a>"
        },
        {
            "id":"2",
            'name":"workspace2",
            "active": true,
            "logo": "https://img2.fonwall.ru/o/dt/roza-rozy-purpurnye-rozy-pdbl.jpg"
        },
        {
            "id":"3",
            "name":"workspace3",
            "active": true,
            "logo": "https://img2.fonwall.ru/o/rk/roza-rozy-cvetok-ktyi.jpg"
        }     
    }





*/

class AddWorkspace {
    constructor (id, name, active, logo) {
      this.id = id
      this.name = name
      this.active = active
      this.logo = logo 
    }
  }


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
            // удаление элемента
            deleteWorkspace (state, {id}) {                          
              // находим - какой индекс у удаляемого элемента в массиве  из state
              const index = state.workspaces.findIndex(a => a.id === id);
              console.log(index);
              // в массиве из state workspaces начиная с позиции 1 удалить 1 элемент
              state.workspaces.splice(index, 1);
              },

             // добавление элемента
              addWorkspace (state, {id,name,active,logo}) {         
                // добавляем новый объект рабочей области в массив объектов из state
                // с помощью класса AddWorkspace                
                 state.workspaces.push(new AddWorkspace(id,name,active,logo));
                },
              // редактирование элемента
              editWorkspace (state, {id, name, active, logo}) {         
                 // обновляем элемент в массиве state.workspaces
                 // find находит элементы по условию. Берет первый попавшийся.
                 // Поскольку id уникален- можно так.
                   const element = state.workspaces.find(a => {
                   return a.id === id
               })
                // Присваиваем найденному элементу
                // новые значения, полученные из формы
                element["name"] = name
                element["active"] = active
                element["logo"] = logo
               }  
              },
           actions: {  
               
            // Удаление рабочей области из массива в state
            // payload- полученный удаляемый элемент (деструктурируем до id)
                 deleteWorkspace({commit},{id}){
                   // вызываем mutation deleteId
                   // Передаем ему полученный из формы id элемента для удаления
                    commit('deleteWorkspace',{id})
                 },



            // добавление рабочей области в массив из state
            addWorkspace({commit},{name,active,logo}){
           // Формируем случайным образом id для нового элемента
             const id = Math.round(Math.random()*1000000000000).toString();

              // вызываем mutation addWorkspace 
              // Передаем ему полученные из формы данные для добавления
               commit('addWorkspace',{id,name,active,logo})
            },

            // редактирование рабочей области в массиве из state
            editWorkspace({commit},{id,name,active,logo}){
              // вызываем mutation editWorkspace 
              // Передаем ему полученные из формы данные для редактирования
                commit('editWorkspace',{id,name,active,logo})
            },
               },              
        
    getters: {
        workspaces(state) {
            // Возвращаем все рабочие пространства по запросу из файла vue
            return state.workspaces
        }   
        
         }


}