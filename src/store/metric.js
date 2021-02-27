
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
       
              },
           actions: {  
               
            // Удаление метрики из базы
                 deleteMetric(){
                     alert('Метрика удалена');
                 },
               // Добавление новой метрики в базу     
                 addMetric(){
                   alert('Метрика добавлена');
               },
               // Редактирование существующей метрики 
               // в базе
               editMetric(){
                   alert('Метрика отредактирована');
               }
       
               },      
        
    getters: {
        metrics(state) {
            // Возвращаем все метрики по запросу из файла vue
            return state.metrics
        }   
        
         }


}