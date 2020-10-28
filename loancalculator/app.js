//listen submit
document.getElementById('loan-form').addEventListener('submit',calculateResult);


function calculateResult(e){
    e.preventDefault();
    //UI var
    const amount=document.getElementById('amount');
    const interest=document.getElementById('interest');
    const years=document.getElementById('years');
    const monthlyPayment=document.getElementById('monthly-payment');
    const totalPayment=document.getElementById('total-payment');
    const totalInterest=document.getElementById('total-interest');
    
    const pricipal=parseFloat(amount.value);
    const calculateInterest=parseFloat(interest.value)/100/12;
    const calculatePayments=parseFloat(years.value)*12;
    
    //compute montly payment 
    const x=Math.pow(1+calculateInterest,calculatePayments);
    const montly=(pricipal*x*calculateInterest)/(x-1);
    if(isFinite(montly)){
        monthlyPayment.value=montly.toFixed(2);
        totalPayment.value=(montly*calculatePayments).toFixed(2);
        totalInterest.value=((montly*calculatePayments)-pricipal).toFixed(2);
    }
    else{
        showError('please enter your new Number');
    }
    
}
function showError(error){
    // create element 
    const errorDiv=document.createElement('div');
    //add className
    errorDiv.className='alert alert-danger';
    errorDiv.innerText=error;
    
    //get element
    const card=document.querySelector('.card');
    const heading=document.querySelector('.heading');
    
    //
    card.insertBefore(errorDiv,heading);
    
    setTimeout(clearError,3000);
  }

function clearError(){
    document.querySelector('.alert').remove();
}
//clear div content error

