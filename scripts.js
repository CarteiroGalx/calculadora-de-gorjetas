function calculateTip(event) {
   event.preventDefault();
   var bill = document.getElementById('bill').value;
   var quality = document.getElementById('quality').value;
   var numOfPeople = document.getElementById('people').value;

   if(bill == '' | quality == 0){
     alert('Por favor, preencher os valores')
     return;
    }

   if(numOfPeople == '' | numOfPeople <= 1){
     numOfPeople = 1;
     document.getElementById('each').style.display = "none";
   }else{
    document.getElementById('each').style.display = "block"
   }

   let total = (bill * quality) / numOfPeople;
   total = total.toFixed(2);
   document.getElementById('tip').innerHTML = total;
   document.getElementById('totaltip').style.display = "block";
}

document.getElementById('totaltip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsform').addEventListener('submit', calculateTip);