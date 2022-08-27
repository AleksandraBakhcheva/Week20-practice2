const WARNINGERROR = "При загрузке произошла ошибка. Пожалуйста, попробуйте снова";

document.addEventListener("DOMContentLoaded", function(event) {
    let div = document.createElement("div");
    div.innerHTML = `<h1>Мой Github:</h1>
    <div class="info"></div>`;
    document.body.append(div);
    fetch("https://api.github.com/users/AleksandraBakhcheva")
    .then(response => response.json())
    .then(user => {
        document.querySelector(".info").innerHTML = "Логин: " + user.login + "</br>" + "Количество репозиториев: " + user.public_repos + "</br>" + "Дата создания: " + user.created_at;
    })
    .catch(ERROR => alert(WARNINGERROR));
    let projects = document.createElement("div");
    projects.innerHTML = `<h1>Мои проекты:</h1>
    <div class="projects"></div>`;
    document.body.append(projects);
    fetch("https://api.github.com/users/AleksandraBakhcheva/repos")
    .then(response => response.json())
    .then(projects => {
        for (let i = 0; i < projects.length; i++) {
            let item = document.createElement("div");
            item.classList.add("project__" + i);
            document.querySelector(".projects").appendChild(item);
            document.querySelector(".project__" + i).innerHTML += projects[i].name + " " + "<a href='"+projects[i].svn_url+"'>Link</a>";
        }
        document.querySelectorAll("a").forEach(function(a) {
            a.setAttribute('target', '_blank');
        });
    })
    .catch(ERROR => alert(WARNINGERROR));
});