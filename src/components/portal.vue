 
<!--

https://gitlab.com/datsteam/project/dev-bro/-/blob/DEVBRO-14/api/src/main/java/com/devbro/api/dto/PortalDto.java

public class PortalDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("integrationType")
    private IntegrationTypeDto integrationType;

    @JsonProperty("portalId")
    private String portalId;
}

public class IntegrationTypeDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("code")
    private String code;
}

 portals:[
                {id:"2",
                integrationType:{
                 id:"2",
                 name:"jira ServiceDesk",
                 code:"jiraServiceDesk "                  
                },
                portalId:"http://jiraServiceDesk2"
                },
                {id:"3",
                integrationType:{
                 id:"3",
                 name:"Git",
                 code:"Git"                  
                },
                portalId:"http://git3"
                }                 
                    ]



-->
 <template>
    <div class="root">
        <v-card text>
       <v-row >
      <v-col cols="12">
             <h2 class="h2"> Порталы </h2>     
      </v-col>
      </v-row> 

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
                        <span> Добавить портал </span>
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
                        <span>Удалить портал</span>
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

            :items="portals" - загрузка данных из массива portals

            class="fixed-headers" - тип таблицы

            :items-per-page="5" - сколько на страничке строчек таблицы будет
           -->   
            
            <!-- Вывод заголовка таблицы  (commonHeaders)
            и самой таблицы (из объекта portals  )-->
            <v-data-table
                    :headers="commonHeaders"
                    :items="portals"
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
    <v-flex text-sm-center align-center>
                 <v-btn
                 class="btn1"
                 color= "#E1F5FE"
                 @click="returnBack()"
                  >
                   Вернуться обратно
                  </v-btn>
      </v-flex>            
         

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
                                    <v-text-field :label="'Название портала'" v-model="portalId"                                    
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
                pageName:'',                
                id:'',
                portalId:'',
                integrationType:{id:"",name:"",code:""},        
                dialog: false,
                edit:false,
                selected: [],
                search: '',
                singleSelect:true,
                commonHeaders: [
                    {text: 'id', align: 'left', value: 'id'},
                    {text: 'имя портала', align: 'left', value: 'portalId'},
                    {text: 'Тип интеграции', align: 'left', value: 'integrationType.name'},

                ],
                selectedType: {id:"",
                name:"Тип интеграции", 
                code:""}


            }
        },
 methods: { 
            returnBack(){
             this.pageName = this.$store.getters.pageName

            if (this.pageName==="employee") {
            this.$router.push('/employee')        }
         
            else if (this.pageName==="project") {
            this.$router.push('/project')       
            }
            },

            // Вызывается при нажатии на кнопку "редактировать элемент"
            // Затем вызывается диалоговое окно Dilog
            // (описанно выше)
               editItem() {
                  if (this.selected.length === 0) {
                    alert('Для редактирования нужно выбрать портал')
                } else {
                console.log(this.selected[0]);
                // Запоминаем выбранный галочкой элемент
                 this.id=this.selected[0].id;
                 this.portalId=this.selected[0].portalId;      
                // Нужно сделать:             
                 // this.integrationType = this.selected[0].integrationType
                 // Но напрямую нельзя, нужно поэтапно:
                 let a =   this.selected[0] 
                 let b={}                  
                 b.id =      a.integrationType.id
                 b.name =    a.integrationType.name 
                 b.code =    a.integrationType.code           
                 
                this.integrationType = b 

                 //console.log('a.integrationType.id',a.integrationType.id)  
                // console.log('b.id',b.id) 
                // console.log('this.integrationType ',this.integrationType ) 
                 
                // Передаем поле- рабочая область выбранного элемента
                // в список выброра рабочей области 
                // (чтобы по умолчанию у элемента была та область,
                // которая раньше была )
                // Нужно сделать:
                // this.selectedType =  this.selected[0].integrationType
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
                    portalId: this.portalId,
                    integrationType: this.selectedType
                };

                    this.$store.dispatch('addPortal', form);
                    this.$refs.form.reset()
                                      }
                // Если была нажата кнопка редактирования элемента
                // редактируем текщий выбранный элемент
                 if (this.edit === true) {


                let form = {
                    id: this.id,
                    portalId: this.portalId,
                    integrationType: this.selectedType
                };

                    const msg = 'Сохранить изменения для интеграции?';
                    let boo = confirm(msg) && this.$store.dispatch('editPortal', form);
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
                    alert('Для удаления нужно выбрать портал')
                } else {
                    const msg = 'Удалить портал?';
                    let boo = confirm(msg) && this.$store.dispatch('deletePortal', this.selected[0])
                    if (boo === true) {
                        this.selected = [];
                    } else {
                        this.selected = [];
                    }
                }
            },
    
            setData() {
           //     this.$store.dispatch('portals')
            }
        },


        created() {
           //  this.setData();
        },

        watch: {
       
        },

        computed: {           
        // получаем весь массив объектов portals из store/portals
            portals() {
                    return this.$store.getters.portals
            },
        // Получаем весь массив типов интеграций integrationTypes
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
   .h2 {
       text-align:center;
   color:blue;
   }
   .btn1 {
   margin:0 auto;
   }
   


</style>