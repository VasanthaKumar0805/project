
function validate(){
    var username= document.getElementById("username")
    var password=document.getElementById("password")

    if(username.value ==""||password.value ==""){
        alert("No Blank values allowed");
        return false;
    }
    else{
      true;
    }
}