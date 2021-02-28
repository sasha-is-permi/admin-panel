
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

          // Данные приходят в этот модуль в виде : 
        projectgroups: [

{"id":"1","name":"Проект 1","workspace":{"id":"1","name":"Область 1"}},
{"id":"2","name":"Проект 2","workspace":{"id":"2","name":"Область 2"}}          
                ]



}



*/



class AddProjectGroup {
    constructor (id, name, workspaсe) {
      this.id = id
      this.name = name
      this.workspaсe = workspaсe 
    }
  }
  
  
  
  export default {
      state: {  
           // Пробные данные для проверки работы программы 
           projectGroups: [
            {id:"1",name:"Проект 1",workspaсe:"Рабочая область 1"}, 
            {id:"2",name:"Проект 2",workspaсe:"Рабочая область 2"},
            {id:"3",name:"Проект 3",workspaсe:"Рабочая область 3"}
        ] 
  
          
          },
          mutations: { 
              // удаление элемента
              deleteProjectGroup (state, {id}) {                          
                // находим - какой индекс у удаляемого элемента в массиве  из state
                const index = state.projectGroups.findIndex(a => a.id === id);
                console.log(index);
                // в массиве из state projectGroups начиная с позиции 1 удалить 1 элемент
                state.projectGroups.splice(index, 1);
                },
  
               // добавление элемента
                addProjectGroup (state, {id,name,workspaсe}) {         
                  // добавляем новый объект группы проектов в массив объектов из state
                  // с помощью класса AddProjectGroup                
                   state.projectGroups.push(new AddProjectGroup(id,name,workspaсe));
                  },
                // редактирование элемента
                editProjectGroup (state, {id, name, workspaсe}) {         
                   // обновляем элемент в массиве state.workspace
                   // find находит элементы по условию. Берет первый попавшийся.
                   // Поскольку id уникален- можно так.
                     const element = state.projectGroups.find(a => {
                     return a.id === id
                 })
                  // Присваиваем найденному элементу
                  // новые значения, полученные из формы
                  element["name"] = name
                  element["workspaсe"] = workspaсe
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
              addProjectGroup({commit},{id,name,workspaсe}){
                // вызываем mutation addProjectGroup 
                // Передаем ему полученные из формы данные для добавления
                 commit('addProjectGroup',{id,name,workspaсe})
              },
  
              // редактироваание группы проектов в массиве из state
              editProjectGroup({commit},{id,name,workspaсe}){
                // вызываем mutation editProjectGroup 
                // Передаем ему полученные из формы данные для редактирования
                  commit('editProjectGroup',{id,name,workspaсe})
              },
                 },      
          
      getters: {
        projectGroups(state) {
              // Возвращаем все группу проектов по запросу из файла vue
              return state.projectGroups
          }   
          
           }
  
  
  }
  
  
