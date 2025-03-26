document.addEventListener("DOMContentLoaded", function() {
   
    var unitOptions = document.querySelectorAll('input[name="unit"]');
    
    var total = document.getElementById('total');

    
    var prices = {
        "1": 10.00, 
        "2": 18.00, 
        "3": 24.00  
    };
    function updateTotal(units) {
        total.innerHTML = "$" + prices[units] + " USD";
    }
    document.querySelector('.option').classList.add('active');
    updateTotal("1"); 

    // Loop through each radio button and add click event
    for (var i = 0; i < unitOptions.length; i++) {
        unitOptions[i].onclick = function() {
            
            var units = this.value;
            var allOptions = document.querySelectorAll('.option');
            for (var j = 0; j < allOptions.length; j++) {
                allOptions[j].classList.remove('active');
            }
            this.parentElement.parentElement.classList.add('active');
            updateTotal(units);
        };
    }
});