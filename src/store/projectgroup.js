
/*

progectgroups


https://gitlab.com/datsteam/project/dev-bro/-/blob/DEVBRO-14/api/src/main/java/com/devbro/api/dto/ProjectGroupDto.java

public class ProjectGroupDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;
}



    1. id
    2. Название группы  name
    3. Рабочая область  workspace

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



}



*/


/*

class AddProjectGroup {
    constructor (id, name, workspace) {
      this.id = id
      this.name = name
      this.workspace = workspace
    }
  }

  */
  
  export default {
      state: {  
           // Пробные данные для проверки работы программы 
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
  
          
          },
          mutations: { 
              // удаление элемента
              deleteProjectGroup (state, {id}) {                          
                // находим - какой индекс у удаляемого элемента в массиве  из state
                const index = state.projectGroups.findIndex(a => a.id === id);
                //console.log(index);
                // в массиве из state projectGroups начиная с позиции 1 удалить 1 элемент
                state.projectGroups.splice(index, 1);
                },
  
               // добавление элемента
                addProjectGroup (state, payload) {         
                  // добавляем новый объект группы проектов в массив объектов из state
                  // с помощью класса AddProjectGroup                
                 state.projectGroups.push(payload);
                // state.projectGroups.push(new AddProjectGroup(
                //   payload.id,payload.name,payload.workspace));

                   console.log(state.projectGroups)
              
                  },
                // редактирование элемента
                editProjectGroup (state, {id, name, workspace}) {         
                   // обновляем элемент в массиве state.workspace
                   // find находит элементы по условию. Берет первый попавшийся.
                   // Поскольку id уникален- можно так.
                     const element = state.projectGroups.find(a => {
                     return a.id === id
                 })
                  // Присваиваем найденному элементу
                  // новые значения, полученные из формы
                  element["name"] = name
                  element["workspace"] = workspace
                 }  
                },
             actions: {  
                 
              // Удаление группу проектов из массива в state
              // payload- полученный удаляемый элемент (деструктурируем до id)
                   deleteProjectGroup({commit},{id}){
                     // вызываем mutation deleteId
                     // Передаем ему полученный из формы id элемента для удаления
                      commit('deleteProjectGroup',{id})
                   },
  
  
  
              // добавление группы проектов в массив из state
              addProjectGroup({commit},payload){
                console.log('payload',payload)
                // Формируем случайным образом id для нового элемента
                const id = Math.round(Math.random()*1000000000).toString();
                payload.id = id;
                // вызываем mutation addProjectGroup 
                // Передаем ему полученные из формы данные для добавления
                 commit('addProjectGroup',payload)
              },
  
              // редактироваание группы проектов в массиве из state
              editProjectGroup({commit},{id,name,workspace}){
                // вызываем mutation editProjectGroup 
                // Передаем ему полученные из формы данные для редактирования
                  commit('editProjectGroup',{id,name,workspace})
              },
                 },      
          
      getters: {
        projectGroups(state) {
              // Возвращаем все группу проектов по запросу из файла vue
              return state.projectGroups
          }   
          
           }
  
  
  }
  
  
