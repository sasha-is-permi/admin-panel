
/*
Данные:

1.	uuid
2.	ФИО
3.	Команда 
5.  Проект
4.	Массив: JIRA, Telegram, Git, Confluence, BitrixPortal
5.	Login
6.	Email



*/

export default {
    state: {  
        
        developers: [
            {
                uuid:'1',
                fio:'Иванов Артем Аркадьевич',
                team:'экономисты',
                project:'отчетность',
                login:'ivanovAA',
                email:'ivanovaa@mail.ru',              
                connections: {jira:'http://jira/ivanov',
                 telegram:'http://telegram/ivanov',
                 git:'http://git/ivanov',
                 confluence:'',
                 bitrixportal:''
                }
            },
            {
                uuid:'2',
                fio:'Петров Алексей Игнатьевич ',
                team:'экономисты',
                project:'трудовик',
                login:'petrovAI',
                email:'petrovAI@mail.ru',
                connections: {jira:'http://jira/petrov',
                 telegram:'http://telegram/petrov',
                 git:'',
                 confluence:'',
                 bitrixportal:'http://bitrixportal/petrov'
                }
            },
            {
                uuid:'3',
                fio:'Савельев Антон Григорьевич ',
                team:'бухгалтера',
                project:'трудовик',
                login:'saveljevAG',
                email:'saveljevAG@mail.ru',               
                connections: {jira:'http://jira/savelev',
                 telegram:'',
                 git:'http://git/savelev',
                 confluence:'',
                 bitrixportal:'http://bitrixportal/savelev'
                }
            },
            {
                uuid:'4',
                fio:'Лоза Антон Георгиевич ',
                team:'инженер',
                project:'отчетность',
                login:'losaAG',
                email:'losaAG@mail.ru',               
                connections: {jira:'http://jira/losa',
                 telegram:'',
                 git:'http://git/losa',
                 confluence:'http://confluence/losa',
                 bitrixportal:''
                }
            },
            {
                uuid:'5',
                fio:'Соснин Денис Анатольевич ',
                team:'инженер',
                project:'отчетность',
                login:'sosninDA',
                email:'sosninDA@mail.ru',               
                connections: {jira:'http://jira/sosnin',
                 telegram:'http://telegram/sosnin',
                 git:'http://git/sosnin',
                 confluence:'',
                 bitrixportal:''
                }
            },
            {
                uuid:'6',
                fio:'Артемьев Иван Дмитриевич',
                team:'электрик',
                project:'электричество',
                login:'artemjevID',
                email:'artemjevID@mail.ru',               
                connections: {jira:'http://jira/artemjev',
                 telegram:'http://telegram/artemjev',
                 git:'',
                 confluence:'',
                 bitrixportal:''
                }
            },
            {
                uuid:'7',
                fio:'Леденцов Павел Петрович ',
                team:'начальник',
                project:'электричество',
                login:'ledencovPP',
                email:'ledencovPP@mail.ru',               
                connections: {jira:'',
                 telegram:'',
                 git:'http://git/ledencov',
                 confluence:'http://confluence/ledencov',
                 bitrixportal:''
                }
            }
            ]   

           // ads: [],
           // id:"" 
    },
    mutations: { 
     //   developers (state, payload) {
    //        state.developers = payload
     //    }

       },
    actions: {  
      //  setLoading ({commit}, payload) {
            // Вызываем commit с mutation setLoading
      //      commit('developers', payload)
      //    },
        //  developers ({commit}, payload) {
          //  commit('developers', payload)
        //  },

          deleteItem(){
              alert('Сотрудник удален');
          },

          addItem(){
            alert('Элемент добавлен');
        },

        editItem(){
            alert('Элемент отредактирован');
        }

        },       
        
    getters: {
         developers(state) {
             // Возвращаем все объявления
             return state.developers
         }   
         }


}