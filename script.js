// heart counter------------
let count = 0;
const len = document.querySelectorAll('.heartBtn').length;
for (let i = 0; i < len; i++) {

    document.querySelectorAll('.heartBtn')[i].addEventListener('click', function () {

        count++;

        document.getElementById('heartCounter').innerText = count;


    })
}


// call button function-----

   
    let coins = 100;
    const coinTotal = document.getElementById('coinCount');

    
    const buttons = document.getElementsByClassName('callBtn');

    
    for (const button of buttons) {
      button.addEventListener('click', function() {
   
        const card = this.closest('.card');
        const serviceName = card.getElementsByClassName('serviceTitle')[0].innerText;
        const serviceNum = card.getElementsByClassName('serviceNumber')[0].innerText;

        
        if (coins < 20) {
          alert("Not enough coins to make a call!");
          return; 
        }

        
        coins -= 20;
        coinTotal.innerText = coins;

       
        alert(' 📞Calling ' + serviceName + " at " + serviceNum);
      });
    }