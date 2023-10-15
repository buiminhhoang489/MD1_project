function logOut(){
    localStorage.removeItem('loginUser')
    window.location.reload();
}
function rendercontainer(){
   let loginData = null;
    if(localStorage.getItem("loginUser")){
        loginData = JSON.parse(localStorage.getItem("loginUser"));
    }
    console.log(loginData);
    const containerEL = document.querySelector('.container');
    let userBoxString = `
    ${loginData ? `<div><span style="color:red; font-size: 20px;">${loginData.name}</span>
                   <button onclick ="logOut()">Logout</button></div>`
    : `<li><a href="./authentication.html"><span class = "btn-content"><span class="btn-top"></span></span>Register/Login</a></li>`}
    `
    containerEL.innerHTML = `
    <ul>
       
    <li><a href="">Hồ Chí Minh<i class="fa-solid fa-sort-down"></i></a></li>
<li><input type ="text" placeholder="Bạn tìm gì..."><i class="fa-solid fa-magnifying-glass"></i></li>    
<li><a href=""></a><button><i class="fa-solid fa-cart-shopping"></i>Giỏ hàng</button></li>
${userBoxString}
</ul>
    `
}
rendercontainer()

function rendermenuBarContent(){
    const barcontentEL = document.querySelector('.menu-bar-content');
    barcontentEL.innerHTML = `
    <ul>
    <li><a href=""><i class="fa-solid fa-mobile-screen-button"></i>Điện thoại</a></li>
    <li><a href=""><i class="fa-solid fa-laptop"></i>Laptop</a></li>
    <li><a href=""><i class="fa-solid fa-tablet"></i>Tablet</a></li>
    <li><a href=""><i class="fa-solid fa-headphones"></i>Phụ kiện <i class="fa-solid fa-sort-down"></i></a>
        <div class="submenu">
            <ul>
                <li>
                    <a href="">Sạc điện thoại</a>
                </li>
                <li>
                    <a href="">Phụ kiện laptop</a>
                </li>
                <li>
                    <a href="">Phụ kiện khác</a>
                </li>
            </ul>
          </div>
    </li>
                                 <li><a href=""><i class="fa-solid fa-clock"></i>Watch</a></li>
    <li><a href=""><i class="fa-solid fa-desktop"></i>PC</a></li>
              </ul>
    `
}
rendermenuBarContent()



const rightbtn = document.querySelector('.fa-arrow-right')
const leftbtn = document.querySelector('.fa-arrow-left')
const imgNumber = document.querySelectorAll('.slider-content-left-top img')
console.log(imgNumber)
let index = 0; 
rightbtn.addEventListener("click", function(){
index = index + 1
if(index>imgNumber.length-1){
    index=0
}
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
leftbtn.addEventListener("click", function(){
    index = index - 1
   if(index<0){
    index=imgNumber.length-1
}
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
    