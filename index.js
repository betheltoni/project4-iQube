function validateForm(){
  let x= document.forms["myForm"]["email-address"].value;
  if(x ==""){
    alert("Please, fill in your email address");
    // return false;
  } else {
    alert("Subscribed,Thank you.")
  }
}
