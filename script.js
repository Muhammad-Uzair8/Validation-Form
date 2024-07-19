 // oninput event
 function inputFunction(element){
    let x = element.value;
    document.getElementById("test").innerHTML= x;
 }
// onfocus event
 function focusFunction(element){

  element.style.background="coral";
 }
 //onblur event
 function blurFunction(element){

   element.style.background="";
  }
 
function selectFunction(){
   console.log("You Selected some Text");
}
 
 function submitFunction(){ 
   alert("You Submitted a Form Successfully");

 }
 //oninvalid event
 function invalidFunction(){
   alert(" Please Enter the First Name");
 }

 