# Mathematical Calculations using JavaScript
## AIM:
To design a website to calculate the area of a circle and volume of a cylinder using JavaScript.

## DESIGN STEPS:
### Step 1: 
Requirement collection.
### Step 2:
Creating the layout using HTML and CSS.
### Step 3:
Write JavaScript to perform calculations.
### Step 4:
Choose the appropriate style and color scheme.
### Step 5:
Validate the layout in various browsers.
### Step 6:
Validate the HTML code.
### Step 6:
Publish the website in the given URL.


## PROGRAM:

### volumeofcylinder.html
```
{% load static %}
<!DOCTYPE html>
<html lang=en>

<head>
    <title>VOLUME OF A CYLINDER</title>
    <link rel="stylesheet" href="{% static 'css/cylindervolume.css' %}">
</head>

<body>
    <div class="container">
        <div class="formview">
            <div class="banner">
                VOLUME OF A CYLINDER
            </div>
            <div class="content">
                <form action="/volumeofcylinder/" method="POST">
                    {% csrf_token %}
                    <div class="forminput">
                        <label for="value_radius">RADIUS=</label>
                        <input type="text" name="value_radius" id="value_radius" value="{{radius}}">
                    </div>
                    <div  class="forminput">
                        <label for="value_height">HEIGHT=</label>
                        <input type="text" name="value_height" id="value_height" value="{{height}}">
                    </div>                    
                    <div class="forminput">
                        <button type="submit" name="button_volume" id="button_volume">calculate volume</button>
                    </div>
                    <div class="forminput">
                        {{result}}
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script src="/static/js/cylindervolume.js"></script>
</body>

</html>
```

### areaofcircle.html:
```
{% load static %}
<!DOCTYPE html>
<html lang=en>

<head>
    <title>AREA OF CIRCLE</title>
    <link rel="stylesheet" href="{% static 'css/area.css' %}">
</head>

<body>
    <div class="container">
        <div class="formview">
            <div class="banner">
                AREA OF CIRCLE
            </div>
            <div class="content">
                <form action="/areaofcircle/" method="POST">
                    {% csrf_token %}
                    <div class="forminput">
                        <label for="value_radius">RADIUS=</label>
                        <input type="text" name="value_radius" id="value_radius" value="{{radius}}">
                    </div>                  
                    <div class="forminput">
                        <button type="submit" name="button_area" id="button_area">calculate area</button>
                    </div>
                    <div class="forminput">
                        {{result}}
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script src="/static/js/area.js"></script>
</body>

</html>
```

### js code:
### cylindervolume.js:
```

volumeBtn = document.querySelector('#button_volume');

volumeBtn.addEventListener('click',function(e){

    txtHeight = document.querySelector('#value_height');
    txtRadius = document.querySelector('#value_radius');
    txtResult = document.querySelector('#value_result');

    let c;

    c = 3.14*parseFloat(txtRadius.value)*parseFloat(txtRadius.value)*parseFloat(txtHeight.value)

    txtResult.value = c;
    
});
```
### area.js:
```


areaBtn = document.querySelector('#button_area');

areaBtn.addEventListener('click',function(e){

    txtRadius = document.querySelector('#value_radius');
    txtResult = document.querySelector('#value_result');

    let c;

    c = 3.14*parseFloat(txtRadius.value)*parseFloat(txtRadius.value)

    txtResult.value = c;
    
});
```


## OUTPUT:
![output](./static/img/output1.jpg)

![output](./static/img/output2.jpg)

## code validator report:
![output](./static/img/report1.jpg)

![output](./static/img/report2.jpg)


## RESULT:
Thus a website is designed for the calculation of volume of cylinder using Javascript and is hosted in the URL http://kavya.student.saveetha.in:8000/volumeofcylinder/. HTML code is validated.
Thus a website is designed for the calculation of area of circle using Javascript and is hosted in the URL http://kavya.student.saveetha.in:8000/areaofcircle/. HTML code is validated.