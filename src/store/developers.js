
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
                connections: {jira:'http://jira/ivanov',
                 telegram:'http://telegram/ivanov',
                 git:'http://git/ivanov',
                 confluence:'',
                 bitrixportal:''
                },
                login:'ivanovAA',
                email:'ivanovaa@mail.ru'
            },
            {
                uuid:'2',
                fio:'Петров Алексей Игнатьевич ',
                team:'экономисты',
                project:'трудовик',
                connections: {jira:'http://jira/petrov',
                 telegram:'http://telegram/petrov',
                 git:'',
                 confluence:'',
                 bitrixportal:'http://bitrixportal/petrov'
                },
                login:'petrovAI',
                email:'petrovAI@mail.ru'
            },
            {
                uuid:'3',
                fio:'Савельев Антон Григорьевич ',
                team:'бухгалтера',
                project:'трудовик',
                connections: {jira:'http://jira/savelev',
                 telegram:'',
                 git:'http://git/savelev',
                 confluence:'',
                 bitrixportal:'http://bitrixportal/savelev'
                },
                login:'saveljevAG',
                email:'saveljevAG@mail.ru'
            },
            {
                uuid:'4',
                fio:'Лоза Антон Георгиевич ',
                team:'инженер',
                project:'отчетность',
                connections: {jira:'http://jira/losa',
                 telegram:'',
                 git:'http://git/losa',
                 confluence:'http://confluence/losa',
                 bitrixportal:''
                },
                login:'losaAG',
                email:'losaAG@mail.ru'
            },
            {
                uuid:'5',
                fio:'Соснин Денис Анатольевич ',
                team:'инженер',
                project:'отчетность',
                connections: {jira:'http://jira/sosnin',
                 telegram:'http://telegram/sosnin',
                 git:'http://git/sosnin',
                 confluence:'',
                 bitrixportal:''
                },
                login:'sosninDA',
                email:'sosninDA@mail.ru'
            },
            {
                uuid:'6',
                fio:'Артемьев Иван Дмитриевич',
                team:'электрик',
                project:'электричество',
                connections: {jira:'http://jira/artemjev',
                 telegram:'http://telegram/artemjev',
                 git:'',
                 confluence:'',
                 bitrixportal:''
                },
                login:'artemjevID',
                email:'artemjevID@mail.ru'
            },
            {
                uuid:'7',
                fio:'Леденцов Павел Петрович ',
                team:'начальник',
                project:'электричество',
                connections: {jira:'',
                 telegram:'',
                 git:'http://git/ledencov',
                 confluence:'http://confluence/ledencov',
                 bitrixportal:''
                },
                login:'ledencovPP',
                email:'ledencovPP@mail.ru'
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

        },       
        
    getters: {
         developers(state) {
             // Возвращаем все объявления
             return state.developers
         }   
         }


}