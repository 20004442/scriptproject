

areaBtn = document.querySelector('#button_area');

areaBtn.addEventListener('click',function(e){

    txtRadius = document.querySelector('#value_radius');
    txtResult = document.querySelector('#value_result');

    let c;

    c = 3.14*parseFloat(txtRadius.value)*parseFloat(txtRadius.value)

    txtResult.value = c;
    
});