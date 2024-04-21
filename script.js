let capctchachecked = false;
function beforesubmit(event) {
  if (capctchachecked) {
    console.log("Captcha checked");
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");

    console.log("inputdate.value::", inputdate.value);
    console.log("type of input date::", typeof inputdate.value); //Date is in string form

    //convert string into date and then to salesforce org locale : string --> date (en_IN)
    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formattedDate;
  } else {
    console.log("Captcha not checked");
    alert("Please check the Recaptcha box to submit the lead form");
    event.preventDefault(); //This will stop the submission of the form
  }
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

function captchasuccess() {
  capctchachecked = true;
}
