/*  
git reset --hard - удаляем текущие изменения, которые не вошли еще пока
в commit и возвращаемся к последнему commit. 

git branch admin-panel   - создание новой ветки
"admin-panel" (локальный респозиторий)


git branch - посмотреть на какой ветке сейчас находимся. 

git branch -d some-feater - удаляет ветку
(локальный респозиторий)

git checkout admin-panel -
переход на ветку "admin-panel"
в локальном респозитории для работы с ней

(указатель HEAD будет указывать на эту ветку) 

Если незакомиченные файлы, изменения- видны в обоих ветках.
Если commit в новой ветке сделали- 
новые изменния видны только в новой ветке. 

Чтобы слить новую ветку с веткой master: 
Перейти с новой ветки на ветку мастер
git checkout 
git merge admin-panel 

Может быть создан commit слияния. 

Перед тем как переходить с ветки на ветку если были изменения-
надо сохранить все файлы и их закомитить. 

Изменения из новой ветки переносятся в master-ветку, причем новая
ветка остается.

Если в master Не было за существование новой ветки admin-panel -
при слиянии пишет fast-forward. 
Коммит слияния не создается поскольку конфликты исключены. 

Если были изменения в master- создается merge commit. 
Гит попытается разрешить проблемы самостоятельно.
Если не получится- нужно вручную. 

Если commit с созданием merge commit:
git merge- Оказываемся в редакторе V.

Если всё устраивает : 

:wq набираем в редакторе. 


git branch - список веток локальных 

git branch -r - список веток удаленных

  Одна ветка. Выводится:
  origin/HEAD -> origin/master

  origin/master 

  Если есть ветка master- есть еще ветка
  origin/master (она указывает на ветку master на удаленном
    репозитории) (на нашем компьютере находится на самом деле)

 origin- название удаленного респозитория

 push- отправляем ветку master на github. 
 Кроме этого создаем на компьютере ветку origin/master
 которая дублирует ветку master

 git pull - скачиваем ветку с респозитория и обновляем
 нашу удаленную ветку на компьютере (origin/master)

 Потом происходит слияние удаленной ветки с нашей локальной веткой. 
 
 Локальные ветки:

 master
 ad-fueter-1

 Делаем push на github обеих веток. 
 На компьютере образуются "удаленные" ветки
 
 origin/master
 origin/ad-fueter-1

 pull- обновляем с респозитория "удаленную" ветку на нашем компьютере,
 сливаем её с аналогичной локальной веткой. 

 Команда 

 git pull origin master

 или 

 git   pull        origin             admin-panel
гит  скачать      с удаленного        ветку admin-panel 
                  распозитория 
:

 1) Скачивает удаленную ветку master с удаленного респозитория
 (обновляет ветку origin/master на локальном респозитории )
 2) Сливает удаленную ветку на локальном респозитории с локальной веткой

 git pull:

 git fetch - выполняет первый пункт

 git merge origin/master - 2 пункт

 Слияние может быть fast-forward и не fast-forward


 Создаем новую ветку 
 git branch admin-panel 

 Переходим на эту ветку
 git checkout admin-panel 

 git branch- проверяем
 * - отмечена текущая ветка

 git  push          origin         admin-panel 
 гит отправить    на удаленный       ветку   
                  респозиторий     admin-panel
                  
 Изменяем файлы                 
 
 Помечаем измененные файлы
 git add . 

 Добавляем файлы в commit
 git commit -m "change1"

 Отправляем файлы опять в удаленную ветку
 git push origin admin-panel

 При push:
 на локальном компьютере создается ветка
 origin/admin-panel, которая связанна с удаленной
 admin-panel
 


 Другой человек хочет загрузить эту ветку
 (созданна на другом компьютере уже после того как этот 
    второй человек загрузил респозиторий)

 git pull origin admin-panel 

 Если 

 git pull - загружаем все влзможные ветки с удаленного респозитория

 (а загружать нам сервер нужно только нашу, если мы работаем с нашей-
  чужие не трогать!
  Не git push а 
   git push origin admin-panel
)

git-branch
Есть только master-ветка

git branch -r
Есть удаленная ветка 
origin/admin-panel

Перемещаемся на нее
git checkout admin-panel
для интеграции удаленной ветки в локальный респозиторий

Создали admin-panel локально этой командой, 
связались с admin-panel уоторая пришла с origin 
и перешли на нее.

git remote show origin 

Показывает- находятся ли локальный ветки в соответствии с ветками на сервере

(up to date- нуждается в обновлении)



Получается- при копировании проекта с сервера нужно:


git clone https://gitlab.com/bashin1/admin-panel.git  admin-panel

Клонируется весь проект с удаленного сервера в папку admin-panel


Инициализируем git
git init // создает git/config
git config --local user.name "Alexandr"         - имя пользователя для проекта
git config --local user.email sasha-is-permi@mail.ru         - e-mail

git remote add origin https://gitlab.com/bashin1/admin-panel.git


Создаем новую ветку
git branch admin-panel

Перехолдим на нее
git checkout admin-panel

Проверяем
git branch 

Изменяем файлы

Добавляем файлы в локальный проект
git add -A
git commit -m'5'


Отправляем ветку на удаленный сервер origin
git push origin admin-panel


В случае изменении ветки master:
Скачиваем эту ветку с удаленного респозитория

git pull origin admin-panel

git branch- проверяем
Если нет:

git checkout master
git checkout admin-panel
git branch

Находясь на ветке admin-panel
git merge master

git add -A
git commit -m'7'

git push origin admin-panel


Этот вариант склонирует ПОЛНОСТЬЮ весь репозиторий и просто переключится на ветку branch-name:

git clone http://whatever.git -b branch-name

Иногда нужно склонировать ТОЛЬКО конкретную ветку, тогда:

git clone --branch=branch-name http://whatever.git


Ошибка: 
error: invalid path 'worker/git/src/main/resources/db/changelog/
sql/2020-02-08_11:14_init.sql'
fatal: unable to checkout working tree

В названии файла есть знак ":", а в системе windows 
не могут существовать такие файлы. 

Выход - можно на виртуальной машине установить ubuntu linux 
и оттуда работать. 











 





 */