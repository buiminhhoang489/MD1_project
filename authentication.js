function loadForm(type = "register") {
    if(type == "register") {
  const pageEL = document.querySelector(".register_container")  
  let pageELString = `
  <form onsubmit="register(event)" class="authentication_form">
  <div>
  Username: <input type="text" name="userName">
</div>
<div>
  Password: <input type="password" name="password">
</div>
<div>
  Confirm Password: <input type="password" name = "password_confirm">
</div>
<span style = "text-decoration:underline; color:blue; cursor:pointer"; onclick = "loadForm('login')">Bạn đã có tài khoản? Login now!</span>
<button type ="submit">Register</button>
</form>
  `    
  pageEL.innerHTML = pageELString;
}
if (type == "login") {
    const pageEL = document.querySelector(".register_container")  
  let pageELString = `
  <form onsubmit="login(event)" class="authentication_form">
  <div>
  Username: <input type="text" name="userName">
</div>
<div>
  Password: <input type="password" name="password">
</div>
<span style = "text-decoration:underline; color:blue; cursor:pointer"  onclick="loadForm()">Bạn chưa có tài khoản? Register now!</span>
<button type ="submit">Register</button>
</form>
  `    
  pageEL.innerHTML = pageELString;
}
}
loadForm();

function register(eventForm){
eventForm.preventDefault();
let newUser = {
    id: Date.now() * Math.random(),
    name:eventForm.target.userName.value,
    password:eventForm.target.password.value,
}
if( newUser.password!=  eventForm.target.password_confirm.value){
    alert("Passwords do not match")
    return
}
if(newUser.password.lenght < 8){
    alert ("Password must be a least 8 characters")
    return
}
if(newUser.name.length < 1 || newUser.name.length > 20) {
    alert("Username must be at least 3 characters")
    return
}
let users = JSON.parse(localStorage.getItem("users")) || [];
if(users.find(user => user.name == newUser.name)){
    alert("Username already exists")
    return
}
localStorage.setItem("users", JSON.stringify([...users, newUser]));
alert("Register OK!")
loadForm("login");
}

function login(eventForm){
eventForm.preventDefault();
let userInfo = {
name: eventForm.target.userName.value,
password:eventForm.target.password.value,
}
let users = JSON.parse(localStorage.getItem("users")) || [];
let user = users.find(item => item.name ==  userInfo.name);
if(!user){
    alert("không tìm thấy người dùng")
    return
}
if(user.password != userInfo.password) {
    alert("Sai mật khẩu")
    return
}
localStorage.setItem("loginUser", JSON.stringify(user))
alert("Login OK!")
window.location.href = "trangchu.html";
}