function validateInput(){  
    if(document.getElementById('nameExample').value===''){
            showRequired('errorName','nameExample');
    }else{
        validate();
        hideRequired('errorName','nameExample');
    }
}
function validateTextArea(){
    if(document.getElementById('escribirExample').value===''){
        showRequired('errorEscribir','escribirExample');
}else{
    validate();
    hideRequired('errorEscribir','escribirExample');
}
}
function showRequired(elementIdError,elementId){
    document.getElementById(elementIdError).innerText='Required';
    document.getElementById(elementId).style.border='#9A0033 solid 2px';
}
function hideRequired(elementIdError,elementId){
    document.getElementById(elementIdError).innerText='';
    document.getElementById(elementId).style.border='none';
}
function validateCheckBoxRadio(){
    validate();
}
function validate(){
//Check if within the form there is an element that is not completed
    const radioButtons =[...document.getElementsByName('radioExample')];
      const checkBoxes=[...document.getElementsByName("checkboxExample")];
      const inputs=[...document.getElementsByName("exampleInput")];
      const textAreas=[...document.getElementsByName("exampleTextArea")];
      if (radioButtons.some(radioButton=>radioButton.checked===true) && inputs.some(input=>input.value!=="") && textAreas.some(textArea=>textArea.value!=="") && checkBoxes.some(checkBox=>checkBox.checked===true) ) {  
          document.getElementById("submitButton").disabled=false;
      }
}
function onSubmit(){
    console.log('success');
}