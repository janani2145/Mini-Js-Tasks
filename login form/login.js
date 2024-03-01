function validateForm(event){
event.preventDefault();
const userName=document.getElementById("userName").value;
const password=document.getElementById("password").value;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
if (userName === "" && password === "") {
    alert("Username and Password are both required");
    return false;
}
 else if (userName === "") {
    alert("Username is a must");
} 
 else if (userName.length<3) {
    alert("Username must contain atleast 3 character");
} 

else if (password === "") 
{
    alert("Password is a must");
} 
else if(!passwordRegex.test(password) ){
    alert("Invalid password")
}

else {
    console.log("Username: ", userName);
    console.log("Password: ", password);
}
document.getElementById("userName").value="";
document.getElementById("password").value="";
}