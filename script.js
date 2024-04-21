function beforesubmit(){
    let outputdate=document.querySelector('.outputdate');
    let inputdate=document.querySelector('.inputdate');
   
    console.log('inputdate.value::',inputdate.value);
    console.log('type of input date::', typeof(inputdate.value)); //Date is in string form


    //convert string into date and then to salesforce org locale : string --> date (en_IN)
    let formattedDate=new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value=formattedDate;
};