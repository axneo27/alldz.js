const userMojombo = 'mojombo';
const btn = document.getElementsByClassName("btn btn-secondary")[0];
const img = document.getElementsByClassName("card-img")[0];

const name_ = document.getElementById("name");
const login = document.getElementById("login");

const urlGit = document.getElementById("urlGit");
const urlBlog = document.getElementById("urlBlog");

const city = document.getElementById("city");
const email = document.getElementById("email");

const followers = document.getElementById("followers");
const following = document.getElementById("following");

async function getHitHubUser(){
    const user = document.getElementsByClassName("form-control")[0].value;
    const githubUserUrl = `https://api.github.com/users/${user}`;
    const response = await fetch(githubUserUrl);
    
    const data = await response.json(); 
    console.log(data);

    img.src = data.avatar_url;
    name_.innerText = 'Name: '  + data.name;
    login.innerText = 'Login: ' + data.login;
    urlGit.innerText = 'Url to github:' + data.html_url;
    urlBlog.innerText = 'Blog: ' + data.blog;
    city.innerText = 'City: ' + data.location;
    email.innerText =  'Email: ' + data.email;
    followers.innerText = 'Followers: ' + data.followers;
    following.innerText = 'Following: ' + data.following;

}

btn.addEventListener('click', getHitHubUser);