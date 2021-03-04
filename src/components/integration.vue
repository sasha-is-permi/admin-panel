 
<!--

integration
Интеграции

    1. id
    1. Название интеграции
    2. Тип интеграции (Jira , Jira ServiceDesk, Git ,
         Gitlab , Crucible , Confluence , BitrixPortal)
    3. Логин (служ. учетки)
    4. Пароль (служ. учетки) (не показывать в списке)
    5. Обработчик + документация (пока не используем)

public class IntegrationDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("username")
    private String username;

    @JsonProperty("password")
    private String password;

    @JsonProperty("type")
    private IntegrationTypeDto type;
}

public class IntegrationTypeDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("code")
    private String code;
}


JSON:
    {
      "id": "1",
      "name":"integration1",
      "username":"user",
      "password":"234",
      "type":{"id":"1","name":"jira","code":"jira" }
    }




-->
 <template>
    <div class="root">
        <v-card text>
                     <v-toolbar text prominent class="no-padding-toolbar">
                <!-- Панель кнопочек "Добавить", "Редактировать",
                "Удалить" -->         
                <v-toolbar-items>
                    <v-tooltip bottom>
                       <template v-slot:activator="{ on }"  >
                       <v-btn v-on="on" @click="dialog = true,edit=false">
                            <v-icon medium>add</v-icon>
                        </v-btn>
                        </template>
                        <span> Добавить интеграцию </span>
                    </v-tooltip>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }"  >
                          <v-btn v-on="on" @click="editItem">
                            <v-icon medium>edit</v-icon>
                          </v-btn>
                        </template>
                        <span>Редактировать</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                       <template v-slot:activator="{ on }"> 
                        <v-btn v-on="on"  @click="delItem" >
                           <v-icon medium>delete</v-icon>
                        </v-btn>
                        </template>
                        <span>Удалить интеграцию</span>
                    </v-tooltip>
                </v-toolbar-items>
                <!-- Окно фильтрации -->
                <v-text-field
                        v-model="search"
                        append-icon="search"
                        :label="search"
                        single-line
                        hide-details>
                </v-text-field>
            </v-toolbar>
            <v-divider>
            </v-divider>
           
           <!--  :tran1=""-->
           <!--
           
           Настройки таблицы

            https://vuetifyjs.com/en/components/data-tables/             


            multi-sort- возможность сортировки по нескольким 
                 столбцам сразу-

            show-select- возможность выбирать ячейки
            :single-select="singleSelect" - только одная 
            ячейка выбирается
            в data:  
            singleSelect:true,

            v-model="search"   label="Search" создание фильтрации
            :headers="commonHeaders" - загрузка заголовков из массива commonHeaders

            :items="integrations" - загрузка данных из массива integrations

            class="fixed-headers" - тип таблицы

            :items-per-page="5" - сколько на страничке строчек таблицы будет
           -->   
            
            <!-- Вывод заголовка таблицы  (commonHeaders)
            и самой таблицы (из объекта integrations  )-->
            <v-data-table
                    :headers="commonHeaders"
                    :items="integrations"
                    :search="search"
                    v-model="selected"
                    item-key="id"
                    :no-data-text="'Нет данных'"
                    :no-results-text="'Не найдены значения'"
                    show-select
                    :single-select="singleSelect"
                    class="fixed-headers"
                    :items-per-page="5"
                    >

            </v-data-table>
        </v-card>


        <!--
                             Окно Dilog    
        Вызывается при нажатии на кнопочку "добавить новый элемент"
        или "Редактировать элемент" -->
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <v-form ref="form">
                    <v-card-text>
                        <v-container grid-list-md>
                            <v-layout wrap>                    
                               <v-flex xs12>
                                    <v-text-field :label="'Название интеграции'" v-model="name"                                    
                                                  required></v-text-field>
                                </v-flex>
                                 <v-flex xs12>
                                    <v-text-field :label="'логин'" v-model="username"
                                                  required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field :label="'пароль'" v-model="password"
                                                  required></v-text-field>
                                </v-flex>
                                <v-flex xs12>                                               
                               <template>
                                 <p> Тип интеграции: </p>                               
                               </template>
                               
                             <v-combobox
                                   v-model="selectedType"
                                   :items="integrationTypes"
                                   item-text="name"
                                   item-value="name"
                                   label="Тип интеграции"
                                   dense
                                   filled
                                   outlined
                                   solo
                                ></v-combobox> 
          
                                </v-flex>


                            </v-layout>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close" closeMethod>{{'Закрыть'}}</v-btn>
                        <v-btn color="blue darken-1" text @click="addEditItem">{{'Сохранить'}}</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
        <!-- ********************************************************  -->
    </div>
</template>

<script>

export default {
      
    data() {
        return {                
                id:'',
                name:'',
                username:"",
                password:"",                       
                type:{id:"",name:"",code:""},        
                dialog: false,
                edit:false,
                selected: [],
                search: '',
                singleSelect:true,
                commonHeaders: [
                    {text: 'id', align: 'left', value: 'id'},
                    {text: 'Название интеграции', align: 'left', value: 'name'},
                    {text: 'логин', align: 'left', value: 'username'},
                    {text: 'Тип интеграции', align: 'left', value: 'type.name'}                    
                ],
                selectedType: {id:"",
                name:"Тип интеграции", 
                code:""}


            }
        },
 methods: {
            // Вызывается при нажатии на кнопку "редактировать элемент"
            // Затем вызывается диалоговое окно Dilog
            // (описанно выше)
               editItem() {
                  if (this.selected.length === 0) {
                    alert('Для редактирования нужно выбрать интеграцию')
                } else {
                console.log(this.selected[0]);
                // Запоминаем выбранный галочкой элемент
                 this.id=this.selected[0].id;
                 this.name=this.selected[0].name;      
                 this.username=this.selected[0].username;  
                 this.password=this.selected[0].password;                                   
                 // Нужно сделать:             
                 // this.type = this.selected[0].type
                 // Но напрямую нельзя, нужно поэтапно:
                 let a =   this.selected[0] 
                 let b={}                  
                 b.id =      a.type.id
                 b.name =    a.type.name 
                 b.code =    a.type.code           
                 
                this.type = b 

                 //console.log('a.type.id',a.type.id)  
                // console.log('b.id',b.id) 
                // console.log('this.type ',this.type ) 
                 
                // Передаем поле- рабочая область выбранного элемента
                // в список выброра рабочей области 
                // (чтобы по умолчанию у элемента была та область,
                // которая раньше была )
                // Нужно сделать:
                // this.selectedType =  this.selected[0].type
                // Но напрямую нельзя, нужно поэтапно
                this.selectedType = b;
                console.log('this.selectedType ',this.selectedType ) 

                 this.edit=true
                 this.dialog = true                 
                }
            },   
            // Вызывается при нажатии кнопки "Сохранить"
            // в диалоговом окне "Dilog"
            addEditItem() {
                // отключаем диалоговое окно
                this.dialog = false;
                // если была нажата кнопка создания нового элемента
                // создаем новый элемент с новым id    
                if (this.edit === false) {
                let form = {
                    id: this.id,
                    name: this.name,
                    username: this.username,
                    password: this.password,
                    type: this.selectedType
                };

                    this.$store.dispatch('addIntegration', form);
                    this.$refs.form.reset()
                                      }
                // Если была нажата кнопка редактирования элемента
                // редактируем текщий выбранный элемент
                 if (this.edit === true) {


                let form = {
                    id: this.id,
                    name: this.name,
                    username: this.username,
                    password: this.password,                   
                    type: this.selectedType
                };

                    const msg = 'Сохранить изменения для интеграции?';
                    let boo = confirm(msg) && this.$store.dispatch('editIntegration', form);
                    if (boo === true) {
                        this.selected = [];
                    } else {
                        this.selected = [];
                    }

                    
                    this.$refs.form.reset()
                                      }
            },
          // При отмене добавления или редактирования элемента
          // в окне Dilog
            close() {
                this.dialog = !this.dialog;
                this.$refs.form.reset();
                this.isEdit = false;
            },

             // Удаляем выбранный элемент
            delItem() {
                if (this.selected.length === 0) {
                    alert('Для удаления нужно выбрать интеграцию')
                } else {
                    const msg = 'Удалить интеграцию?';
                    let boo = confirm(msg) && this.$store.dispatch('deleteIntegration', this.selected[0])
                    if (boo === true) {
                        this.selected = [];
                    } else {
                        this.selected = [];
                    }
                }
            },
    
            setData() {
           //     this.$store.dispatch('integrations')
            }
        },


        created() {
           //  this.setData();
        },

        watch: {
       
        },

        computed: {           
        // получаем весь массив объектов integrations из store/integrations
            integrations() {
                    return this.$store.getters.integrations
            },
        // Получаем весь массив типов интеграций type
            integrationTypes() {
              return this.$store.getters.integrationTypes
            }
        }
    }

</script>

<style scoped>
   .root{
        font-size:13px!important;
   }

</style>