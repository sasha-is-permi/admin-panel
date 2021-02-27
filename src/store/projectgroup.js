
/*

project
Группа проектов

id
Наименование проекта

https://gitlab.com/datsteam/project/dev-bro/-/blob/DEVBRO-14/api/src/main/java/com/devbro/api/dto/ProjectGroupDto.java

public class ProjectGroupDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;
}

В формате JSON

progectgroup

{"id":"1","name":"projectGroup1","workspace":"workspace1"}
 

}



*/

export default {
    state: {  
          // Пробные данные для проверки работы программы 
        progectGroup: [
            {id:"1",name:"projectGroup1",workspace:"workspace1"}, 
            {id:"2",name:"projectGroup2",workspace:"workspace2"},
            {id:"3",name:"projectGroup3",workspace:"workspace3"}
        ] 
        
        },
    mutations: { 
    
       },
    actions: {  
   
        },       
        
    getters: {
        projectGroups(state) {
            // Возвращаем все группы проектов по запросу из файла vue
            return state.projectGroups
        }   
        
         }


}