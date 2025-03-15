const display=document.getElementById("display");

function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}
function togglesign(){
      if(display.value){
        display.value = parseFloat(display.value)* (-1);
      }
}
function cleardisplay(){
   display.value="";
}
function Appendtodisplay(input){
    display.value+=input;
    
}