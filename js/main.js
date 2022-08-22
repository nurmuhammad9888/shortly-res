let elNav = document.querySelector(".sitenav__wrap");
let elBtnShow = document.querySelector(".burger-btn");
let ElBody = document.querySelector("body")


elBtnShow.addEventListener("click", function(){
    elNav.classList.toggle("sitenav__wrap-show")
    elBtnShow.classList.toggle("burger-btn-show")
    ElBody.classList.toggle("body-show")
})