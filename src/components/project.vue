 
<!--

project
Проект

1.	id
2.  Название
3.	Группа проектов
4.	Процессы
5.	Порталы (массив интеграций) (Привязки к JIRA, Git, Confluence)

https://gitlab.com/datsteam/project/dev-bro/-/blob/DEVBRO-14/api/src/main/java/com/devbro/api/dto/ProjectDto.java

public class ProjectDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("group")
    private ProjectGroupDto group;

    @JsonProperty("processes")
    private List<ProcessDto> processes;

    @JsonProperty("portals")
    private List<PortalDto> portals;
}

public class ProjectGroupDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;
}

public class PortalDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("integrationType")
    private IntegrationTypeDto integrationType;

    @JsonProperty("portalId")
    private String portalId;
}

public class ProcessDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("metrics")
    private List<MetricDto> metrics;
}


public class MetricDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("description")
    private String description;
}

public class IntegrationTypeDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("code")
    private String code;
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
                        <span> Добавить проект </span>
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
                        <span>Удалить проект</span>
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

            :items="projects" - загрузка данных из массива projects

            class="fixed-headers" - тип таблицы

            :items-per-page="5" - сколько на страничке строчек таблицы будет
           -->   
            
            <!-- Вывод заголовка таблицы  (commonHeaders)
            и самой таблицы (из объекта projects  )-->
            <v-data-table
                    :headers="commonHeaders"
                    :items="projects"
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
     

            <template v-slot:[`item.processes`]="{ item }">
           <v-list dense>
           <v-list-item-group>
            <v-list-item
            v-for="(item0, i) in item.processes"
            :key="i">      
             {{item0.name}}       
            </v-list-item> 
           </v-list-item-group> 
           </v-list>
        </template>

          <template v-slot:[`item.portals`]="{ item }">
           <v-list dense>
           <v-list-item-group>
            <v-list-item
            v-for="(item0, i) in item.portals"
            :key="i">      
             {{item0.portalId}}       
            </v-list-item> 
           </v-list-item-group> 
           </v-list>
        </template>




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
                                    <v-text-field :label="'Название проекта'" v-model="name"
                                                  required></v-text-field>
                                </v-flex>
                              
                              <v-flex xs12>                                               
                               <template>
                                 <p> Группы: </p>                               
                               </template>
                               
                             <v-combobox
                                   v-model="selectedGroup"
                                   :items="groups"
                                   item-text="name"
                                   item-value="name"
                                   label="Группа проектов:"
                                   dense
                                   filled
                                   outlined
                                   solo
                                 ></v-combobox> 
          
                                </v-flex>



                                <v-flex xs12>                                               
                               <template>
                                 <p> Процессы: </p>                               
                               </template>
                               
                             <v-combobox
                                   v-model="selectedProcesses"
                                   :items="AllProcesses"
                                   item-text="name"
                                   item-value="name"
                                   label="Процессы"
                                   dense
                                   filled
                                   outlined
                                   solo
                                   multiple
                                ></v-combobox> 
          
                                </v-flex>

                              <v-flex xs12>                                               
                               <template>
                                 <p> Порталы </p>                               
                               </template>
                               
                             <v-combobox
                                   v-model="selectedPortals"
                                   :items="selectedPortals"
                                   item-text="portalId"
                                   item-value="portalId"
                                   label="Порталы"
                                   dense
                                   filled
                                   outlined
                                   solo
                                   multiple
                                ></v-combobox> 
                                
                                <v-btn
                                color= "#E1F5FE"
                                @click="editPortals(selectedPortals)"
                                >
                                  Редактировать порталы
                                </v-btn>

          

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
                group:{id:"",name:"", workspace: {}},
                processes:[],
                portals:[],                
                itemProcesses:[],           
                itemPortals:[], 
                itemGroups:{id:"",name:"", workspace: {}},
                dialog: false,
                edit:false,
                selected: [],
                search: '',
                singleSelect:true,
                commonHeaders: [
                    {text: 'id', align: 'left', value: 'id'},
                    {text: 'Название', align: 'left', value: 'name'},
                    {text: 'Группа проектов', align: 'left', value: 'group.name'},                    
                    {text: 'Процессы', align: 'left', value: 'processes' },
                    {text: 'Порталы', align: 'left', value: 'portals' }                     
                ],
                selectedProcesses: [],
                selectedPortals: [],
                selectedGroup:  {id:"",name:"", workspace: {}}

            }
        },
 methods: {
            editPortals(selectedPortals){

            this.$store.dispatch('pageName', "project");

            console.log("portals",selectedPortals)  
            this.$router.push('/portal')        },                          

            // Вызывается при нажатии на кнопку "редактировать элемент"
            // Затем вызывается диалоговое окно Dilog
            // (описанно выше)
               editItem() {
                  if (this.selected.length === 0) {
                    alert('Для редактирования нужно выбрать проект')
                } else {
                console.log(this.selected[0]);
                // Запоминаем выбранный галочкой элемент
                 this.id=this.selected[0].id;
                 this.name=this.selected[0].name;     
                  // Нужно сделать:  
                 this.group = this.selected[0].group              
                 this.processes = this.selected[0].processes
                 this.portals = this.selected[0].portals               
           
                // let a =   this.selected[0] 
                // let b={}                  
               //  b.id =      a.processes.id
               //  b.name =    a.processes.name 
               //  b.description =  a.processes.description
        
                 
               // this.processes = b 

                // console.log('a.processes.id',a.processes.id)  
                // console.log('b.id',b.id) 
                // console.log('this.processes ',this.processes ) 
                 
                // Передаем поле- процесс
                // в список выбора процесса 
                // (чтобы по умолчанию у элемента была та область,
                // которая раньше была )
                this.selectedGroup = this.selected[0].group;   
                this.selectedProcesses = this.selected[0].processes;
                this.selectedPortals = this.selected[0].portals;                
                console.log('this.selectedProcesses ',this.selectedProcesses ) 
                console.log('this.selectedPortals ',this.selectedPortals)                

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
                    group: this.selectedGroup,    
                    processes: this.selectedProcesses,    
                    portals: this.selectedPortals                                      
                };

                console.log("this.selectedGroup",this.selectedGroup)
                console.log("this.selectedProcesses",this.selectedProcesses)
                console.log("this.selectedPortals",this.selectedPortals)                

                console.log("form",form)

                    this.$store.dispatch('addProject', form);
                    this.$refs.form.reset()
                                      }
                // Если была нажата кнопка редактирования элемента
                // редактируем текщий выбранный элемент
                 if (this.edit === true) {


                let form = {
                    id: this.id,
                    name: this.name,
                    group: this.selectedGroup,                   
                    processes: this.selectedProcesses,
                    portals: this.selectedPortals                   
                };

                    const msg = 'Сохранить изменения для проекта?';
                    let boo = confirm(msg) && this.$store.dispatch('editProject', form);
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
                    alert('Для удаления нужно выбрать проект')
                } else {
                    const msg = 'Удалить проект?';
                    let boo = confirm(msg) && this.$store.dispatch('deleteProject', this.selected[0])
                    if (boo === true) {
                        this.selected = [];
                    } else {
                        this.selected = [];
                    }
                }
            },
    
            setData() {
           //     this.$store.dispatch('projects')
            }
        },


        created() {
           //  this.setData();
        },

        watch: {
       
        },

        computed: {           
        // получаем весь массив объектов projects из store/projects
            projects() {
                    return this.$store.getters.projects
            },
        // Получаем весь массив процессов
            AllProcesses() {
              return this.$store.getters.process
                         },
           // AllPortals() {
          //   return this.$store.getters.portals
          //               },
            groups() {
              return this.$store.getters.projectGroups
                         }                
                         
           
                  }
    }


</script>

<style scoped>
   .root{
        font-size:13px!important;
   }

</style>