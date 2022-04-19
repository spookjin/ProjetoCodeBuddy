let Login = {
    Username:'',
    Password:'',}
    
    function preencherObjeto(){
        Login.Username = document.getElementById("Username").value;
        Login.Password = document.getElementById("Password").value;
        if(Login.Username==="diego" && Login.Password==="popo"){
            window.location.href="index.html"
        }
        console.log(Login)
    }