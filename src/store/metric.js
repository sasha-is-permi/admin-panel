
/*

metric
Метрики

https://gitlab.com/datsteam/project/dev-bro/-/blob/DEVBRO-14/api/src/main/java/com/devbro/api/dto/MetricDto.java

public class MetricDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("description")
    private String description;
}

    1. id
    2. Название метрики
    3. Описание
    4. Обработчик (пока не используем)

    JSON: 
     
    {
      "id":"1",
      "name":"metric1",
      "description":"первая метрика"
        }
   


*/

class AddMetric {
  constructor (id, name, description) {
    this.id = id
    this.name = name
    this.description = description 
  }
}



export default {
    state: {  
          // Пробные данные для проверки работы программы 
        metrics: [
            {
                "id":"1",
                "name":"metric1",
                "description":"первая метрика"
                  },
            {
                "id":"2",
                "name":"metric2",
                "description":"вторая метрика"
                  },
            {
                "id":"3",
                "name":"metric3",
                "description":"третья метрика"
             }                      
                ]

        
        },
        mutations: { 
            // удаление элемента
            deleteMetric (state, {id}) {                          
              // находим - какой индекс у удаляемого элемента в массиве  из state
              const index = state.metrics.findIndex(a => a.id === id);
              console.log(index);
              // в массиве из state metrics начиная с позиции 1 удалить 1 эжлемент
              state.metrics.splice(index, 1);
              },

             // добавление элемента
              addMetric (state, {id,name,description}) {         
                // добавляем новый объект метрики в массив объектов из state
                // с помощью класса AddMetric                
                 state.metrics.push(new AddMetric(id,name,description));
                },
              // редактирование элемента
              editMetric (state, {id, name, description}) {         
                 // обновляем элемент в массиве state.metrics
                 // find находит элементы по условию. Берет первый попавшийся.
                 // Поскольку id уникален- можно так.
                   const element = state.metrics.find(a => {
                   return a.id === id
               })
                // Присваиваем найденному элементу
                // новые значения, полученные из формы
                element["name"] = name
                element["description"] = description
               }  
              },
           actions: {  
               
            // Удаление метрики из массива в state
            // payload- полученный удаляемый элемент (деструктурируем до id)
                 deleteMetric({commit},{id}){
                   // вызываем mutation deleteId
                   // Передаем ему полученный из формы id элемента для удаления
                    commit('deleteMetric',{id})
                 },



            // добавление метрики в массив из state
            addMetric({commit},{id,name,description}){
              // вызываем mutation addMetric 
              // Передаем ему полученные из формы данные для добавления
               commit('addMetric',{id,name,description})
            },

            // редактироваание метрики в массиве из state
            editMetric({commit},{id,name,description}){
              // вызываем mutation editMetric 
              // Передаем ему полученные из формы данные для редактирования
                commit('editMetric',{id,name,description})
            },
               },      
        
    getters: {
        metrics(state) {
            // Возвращаем все метрики по запросу из файла vue
            return state.metrics
        }   
        
         }


}





