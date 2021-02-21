
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
                 confluence:'http://confluence/ivanov',
                 bitixportal:'htt[://bitixportal/ivanov'
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
                 git:'http://git/petrov',
                 confluence:'http://confluence/petrov',
                 bitixportal:'htt[://bitixportal/petrov'
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
                 telegram:'http://telegram/savelev',
                 git:'http://git/savelev',
                 confluence:'http://confluence/savelev',
                 bitixportal:'http://bitixportal/savelev'
                },
                login:'saveljevAG',
                email:'saveljevAG@mail.ru'
            },
            ]   

           // ads: [],
           // id:"" 
    },
    mutations: {    },
    actions: {      },       
        
    getters: {
         developers(state) {
             // Возвращаем все объявления
             return state.developers
         }   
         }


}