
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
                
                console.log("delete element index",index);
                // в массиве из state projectGroups начиная с позиции 1 удалить 1 элемент
                state.projectGroups.splice(index, 1);
                },
  
                // добавление элемента
                addProjectGroup (state, payload) {         
           
                // используем объект a для получения и
                // потом записи данных из объекта workspace
                // Чтобы включилась реактивность для workspace
                // нужно создать на основе его новый объект 
                // и затем его использовать
                let a = {};
               // console.log('payload1',payload)
               // console.log( payload.id,payload.name,)           
                a.name = payload["workspaсe"]["name"];
                a.id=payload["workspaсe"]["id"];
                a.active=payload["workspaсe"]["active"];
                a.logo=payload["workspaсe"]["logo"]
              
                console.log("add",payload.id,payload.name,a) 

state.projectGroups.push({id:payload.id,name:payload.name,workspace:a})

                  // console.log(state.projectGroups)

                  // this.renderComponent = true
              
                  },
                // редактирование элемента
                editProjectGroup (state, payload) {         
                   // обновляем элемент в массиве state.workspace
                // find находит элементы по условию. Берет первый попавшийся.
                // Поскольку id уникален- можно так.
                const element = state.projectGroups.find(a => {
                  return a.id === payload.id
              })
               // Присваиваем найденному элементу
               // новые значения, полученные из формы
               element["name"] = payload["name"]

               let a = {};
               //console.log('payload1',payload)
              // console.log( payload.id,payload.name)


                // используем объект a для получения и
                // потом записи данных из объекта workspace
                // Чтобы включилась реактивность для workspace
                // нужно не напрямую его менять,
                // а создать на основе его новый массив и
                // менять его              
               a.name = payload["workspaсe"]["name"];
               a.id=payload["workspaсe"]["id"];
               a.active=payload["workspaсe"]["active"];
               a.logo=payload["workspaсe"]["logo"]
               
               element["workspace"] = a

              console.log("edit",element["id"],element["name"],
              element["workspace"])         
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
  
              editProjectGroup({commit},payload){
                // вызываем mutation editProjectGroup 
                // Передаем ему полученные из формы данные для редактирования
                  commit('editProjectGroup',payload)
              },
                 },      
          
      getters: {
        projectGroups(state) {
              // Возвращаем все группу проектов по запросу из файла vue
              return state.projectGroups
          }   
          
           }
  
  
  }
  
  
