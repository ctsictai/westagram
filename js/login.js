// login button style change control
let loginButton = document.querySelector("button.loginButton");
// mouseenter loginbutton
loginButton.addEventListener("mouseenter", function() {
  loginButton.style.opacity = "0.9";
  this.style.backgroundColor = "blue";
  loginButton.style.border = "blue";
});
// click loginbutton
loginButton.addEventListener("click", function() {
  let loginAuthUrl = document.querySelector("div.loginAuthUrl");
  loginAuthUrl.innerHTML = "로그인 중입니다.";
  loginAuthUrl.style.color = "red";
});
// mouseleave loginbutton return origin
loginButton.addEventListener("mouseleave", function() {
  loginButton.style.opacity = "0.5";
  this.style.backgroundColor = " rgb(51,119,255)";
  loginButton.style.border = " rgb(51,119,255)";
});
// 비밀번호 틀리면 "비밀번호 틀렸습니다." 출력 -db 있어야 됨 구현 안됨

let memberAuth = document.querySelectorAll("input.memberAuth")[0];

memberAuth.addEventListener("keydown", function() {
  let typeOfInput = document.querySelectorAll("span.typeOfInput")[0];
  typeOfInput.style.transform = "scale(0.8) translateY(-13px)";
  typeOfInput.style.marginLeft = "-28px";
  memberAuth.style.transform = "scale(0.8) translateY(10px)";
  memberAuth.style.marginLeft = "-28px";
});

let memberAuth1 = document.querySelectorAll("input.memberAuth")[1];

memberAuth1.addEventListener("keydown", function() {
  let typeOfInput1 = document.querySelectorAll("span.typeOfInput")[1];
  typeOfInput1.style.transform = "scale(0.8) translateY(-13px)";
  typeOfInput1.style.marginLeft = "-28px";
  memberAuth1.style.transform = "scale(0.8) translateY(10px)";
  memberAuth1.style.marginLeft = "-28px";
});
