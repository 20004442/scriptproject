

volumeBtn = document.querySelector('#button_volume');

volumeBtn.addEventListener('click',function(e){

    txtHeight = document.querySelector('#value_height');
    txtRadius = document.querySelector('#value_radius');
    txtResult = document.querySelector('#value_result');

    let c;

    c = 3.14*parseFloat(txtRadius.value)*parseFloat(txtRadius.value)*parseFloat(txtHeight.value)

    txtResult.value = c;
    
});