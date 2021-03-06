
/*

process
Процессы

    1. uuid
    2. Название процесса
    3. Привязка к Метрикам
    4. Обработчик

   https://gitlab.com/datsteam/project/dev-bro/-/blob/DEVBRO-14/api/src/main/java/com/devbro/api/dto/ProcessDto.java

   public class ProcessDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("metrics")
    private List<MetricDto> metrics;
     }

    JSON
    {
      "id":"1",
      'name':"process1",
      metrics: [
        {
      "id":"1",
      "name":"metric1",
      "description":"первая метрика"
        },
        "id":"2",
      "name":"metric2",
      "description":"вторая метрика"
        },     

      ]


    }

*/



/*

class AddProcess {
    constructor (id, name, metric) {
      this.id = id
      this.name = name
      this.metric = metric
    }
  }

  */
  
  export default {
    state: {  
      // Пробные данные для проверки работы программы 
     process: [
      {
          id:"1",
          name:"process1",
         metrics: [
           { "id":"1",
          "name":"metric1",
          "description":"первая метрика"},
          { "id":"2",
          "name":"metric2",
          "description":"вторая метрика"}
         ]
       },
      {
          id:"2",
          name:"process2",
          metrics: [
            { "id":"1",
           "name":"metric1",
           "description":"первая метрика"},
           { "id":"3",
           "name":"metric3",
           "description":"третья метрика"}
          ]
       },
       {
        id:"3",
        name:"process3",
        metrics: [
          { "id":"2",
         "name":"metric2",
         "description":"вторая метрика"},
         { "id":"3",
         "name":"metric3",
         "description":"третья метрика"}
        ]
     }
     ]
     
  },
        mutations: { 
            // удаление элемента
            deleteProcess (state, {id}) {                          
              // находим - какой индекс у удаляемого элемента в массиве  из state
              const index = state.process.findIndex(a => a.id === id);
              
              console.log("delete element index",index);
              // в массиве из state process начиная с позиции 1 удалить 1 элемент
              state.process.splice(index, 1);
              },

              // добавление элемента
              addProcess (state, payload) {         
         
              //let a = {};
             // console.log('payload1',payload)
             // console.log( payload.id,payload.name,)           
             // a.id=payload["metrics"]["id"];
            //  a.name = payload["metrics"]["name"];             
            //  a.description=payload["metrics"]["description"];

            
           //   console.log("add",payload.id,payload.name,a) 
           console.log("id,name,metrics", payload.id,payload.name,payload.metrics)

state.process.push({id:payload.id,name:payload.name,metrics:payload.metrics})

                // console.log(state.process)

                // this.renderComponent = true
            
                },
              // редактирование элемента
              editProcess (state, payload) {         
                 // обновляем элемент в массиве state.process
              // find находит элементы по условию. Берет первый попавшийся.
              // Поскольку id уникален- можно так.
              const element = state.process.find(a => {
                return a.id === payload.id
            })
             // Присваиваем найденному элементу
             // новые значения, полученные из формы
             element["name"] = payload["name"]

             // let a = {};
             //console.log('payload1',payload)
            // console.log( payload.id,payload.name)

             // a.id=payload["metrics"]["id"];
             // a.name = payload["metrics"]["name"];       
             // a.description=payload["metrics"]["description"];

             
             // element["metrics"] = a

            element["metrics"] = payload["metrics"]

            console.log("edit",element["id"],element["name"],
            element["metrics"])         
                  }  
              },
           actions: {  
               
            // Удаление процесса из массива в state
            // payload- полученный удаляемый элемент (деструктурируем до id)
                 deleteProcess({commit},{id}){
                   // вызываем mutation deleteId
                   // Передаем ему полученный из формы id элемента для удаления
                    commit('deleteProcess',{id})
                 },



            // добавление процесса в массив из state
            addProcess({commit},payload){
              console.log('payload',payload)
              // Формируем случайным образом id для нового элемента
              const id = Math.round(Math.random()*1000000000).toString();
              payload.id = id;
              // вызываем mutation addProcess 
              // Передаем ему полученные из формы данные для добавления
               commit('addProcess',payload)
            },

            editProcess({commit},payload){
              // вызываем mutation editProcess 
              // Передаем ему полученные из формы данные для редактирования
                commit('editProcess',payload)
            },
               },      
        
    getters: {
      process(state) {
        // Возвращаем все процессы по запросу из файла vue
        return state.process
    }   
        
         }


}

