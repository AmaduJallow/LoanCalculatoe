// Listen for the submit button
document.getElementById('loan-form').addEventListener('submit',(e) =>{
    // Hide content
    document.getElementById('results').style.display='none';

    // Show loader
    document.getElementById('loading').style.display ='block';

    setTimeout(calculateResults,2000);



    e.preventDefault();
});

 
// Caiculate Results
function calculateResults(){
    console.log("calculate...");

    const amount = document.getElementById('amount');
    const interest =document.getElementById('interest');
    const year =document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');


    const principle = parseFloat(amount.value)
    const calculatedInterest = parseFloat(interest.value);
    const calculatedPayment = parseFloat(year.value) *12;


    // Monthly Payment
const x = Math.pow(1 +calculatedInterest,calculatedPayment);
const monthly =(principle * x * calculatedInterest)/(x -1);

if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value =(monthly *calculatedPayment).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayment)-principle).toFixed(2);

     
    document.getElementById('results').style.display='block';
    document.getElementById('loading').style.display='none';
}
else{
    showError("please check your number");


}



}
function showError(error){
    document.getElementById('loading').style.display='none';
const errorDiv = document.createElement('div');
const card = document.querySelector('.card');
const heading = document.querySelector('.heading');
errorDiv.className = 'alert alert-danger';

errorDiv.appendChild(document.createTextNode(error));
card.insertBefore(errorDiv,heading);

setTimeout(clearError,1666);

}

function clearError(){
    document.querySelector('.alert').remove();
}
