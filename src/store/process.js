
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

export default {
    state: {  
       metrics: [
        {
            id:"1",
            name:"process1",
            metrics: [
              {id:"1",name:"metric1"},
              {id:"2",name:"metric2"}     
            ]
        },
        {
            id:"2",
            name:"process2",
            metrics: [
              {id:"2",name:"metric2"},
              {id:"3",name:"metric3"}     
            ]
        }



       ]
       
    },
    mutations: { 
    
       },
    actions: {  
   
        },       
        
    getters: {
        
         }


}