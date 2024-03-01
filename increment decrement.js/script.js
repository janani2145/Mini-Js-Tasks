let defaultValue=0;
function increment(){
    defaultValue++;
display();
}
function decrement(){
    defaultValue--;
    display();

}
function display(){
    const number=document.getElementById("number");
    number.innerHTML=defaultValue;
}