function start(){
    user = document.getElementById("name").value;
    localStorage.setItem("name",user);
    window.location="main_page.html";
}
