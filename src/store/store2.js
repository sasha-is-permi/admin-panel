
export default {
    state: {
        first: null,
        langList: [
            {
                code: 'ru',
                shortName: 'РУС',
                name: 'Русский'
            },
            {
                code: 'kk',
                shortName: 'ҚАЗ',
                name: 'Қазақша'
            },
            {
                code: 'en',
                shortName: 'ENG',
                name: 'English'
            }
        ],
        sidebar: true,
        idxMenu: 0,
        emptyItem: {
            title: 'Ошибка', path: '/error', icon: 'error'
        },
        menuItems: [
            // {title: 'Общие настройки', path: '/', icon: 'home'},
            {title: 'Безопасность', subheader: true, divider: false},
            {title: 'Пользователи', path: '/users', icon: 'book'},
            {title: 'Роли', path: '/roles', icon: 'lock_open'},
            {title: 'Справочники', subheader: true, divider: false},
            {title: 'Подразделения', path: '/?type=devision', icon: 'business'},
            {title: 'Сотрудники', path: '/employees', icon: 'people'}
        ]
    }
}
