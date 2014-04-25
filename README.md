TodosApp
========
설치 방법 

1. 해당 소스 포크
2. git 다운로드(http://git-scm.com/download/win)
3. 특정폴더에 설치 (git init)
4. git clone https://github.com/계정명/todosApp.git
5. node.js 를 다운로드 받는다.(http://nodejs.org/)
6. cd /todosapp
7. express 를 설치한다.(npm install express)
8. node app.js 
9. http://localhost:3000/todoapp 실행 확인

Rest 서비스 구성

get  todos -> 모든 리스트를 가져온다.
get  todos/:id --> 해당 id의 todo를 가져온다.
put  todos/:id --> 해당 id의 todo를 수정한다.
post todos --> todo를 등록
delete todos/:id --> 해당 id의 todo를 삭제

구현할 기능

1. todo 리스트 출력
2. todo 추가 삭제
3. todo 만료일 등록


현재까지 했던 기능을 다시 구현해보고, 추가적으로 추가 가능 만료일 설정 기능 등등 추가 하고 싶은 기능 전부 추가해보세요.

그리고 commit --> push 까지 해서 서로 짠 소스를 공유하는 시간을 가져보도록 합시다. 

