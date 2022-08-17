var numOfBtn = document.querySelectorAll("button").length;
for(var i=0; i<numOfBtn; i++){
    var pressed = document.querySelectorAll("button")[i];
    pressed.addEventListener("click",function(){
        var innerHtml = this.innerHTML;
        clickedBtn(innerHtml);
        // console.log(innerHtml);
    })
};



function clickedBtn(innerHtml){
    switch (innerHtml) {
        case "Alert Name":
            alert("Nasir");
            break;
        case "Alert Number":
            alert("0123456789");
            break;
        case "Show variable Name":
            varName();
            break;
        case "Show camelcase exp":
            camelCase();
            break;
        case "Sum two Number":
            sum(30,40);
            break;
        case "Subtract 2 number":
            subt(200,90);
            break;
        case "Multiply two number":
            multiply(30,30);
            break;
        case "Divide two number":
            divd(33,7);
            break;
        case "Mode":
            modde(72,7);
            break;
        case "Arithmetic operation":
            arith();
            break;
        case "Clear":
            clear();
            break;
    
        default:
            break;
    }
};

// Showing variabe 
function varName(){
    document.querySelectorAll("#in")[0].innerText=`<ul>
    <li>Variable name in JS are case sensitive</li>
    <li>Variable name in JS are not start with numbers but can with underscore, letter or dollar sign</li>
    <li>Variable name cannot contain spaces</li>
    </ul>`;
    document.getElementById("out").innerHTML=`<ul><li>Variable name in JS are case sensitive</li><li>Variable name in JS are not start with numbers but can with underscore, letter or dollar sign</li><li>Variable name cannot contain spaces</li></ul>`;
};

// Show camelcase
function camelCase(){
    document.querySelectorAll("#in")[0].textContent=`<ul>
    <li>Variable name in JS can be in camelCase, PascalCase or snake_case.But as a convention we will use camelCase<li>e.g redRose, RedRose, red_rose respectivily</h3></li></li>
    </ul>`;
    document.querySelectorAll(".output")[1].innerHTML=`<ul>
    <li>Variable name in JS can be in camelCase, PascalCase or snake_case.But as a convention we will use camelCase<li>e.g redRose, RedRose, red_rose respectivily</h3></li></li>
    </ul>`;
};

// Sum Two numbers 
function sum(num1,num2){
    document.querySelectorAll("#in")[0].textContent=`function sum(num1,num2){
        document.querySelectorAll(".output")[0].value=num1+num2;
    };
    sum(30,40);`;
    document.querySelectorAll(".output")[1].textContent=num1+num2;
    // console.log(num1+num2)
};

// Subtract two numbers
function subt(num1,num2){
    document.querySelectorAll("#in")[0].textContent=`function subt(num1,num2){
        document.querySelectorAll(".output")[0].value=num1-num2;
    };
    subt(200,90);`;
    document.querySelectorAll(".output")[1].textContent=num1-num2;
};

// Multiply two numbers
function multiply(num1,num2){
    document.querySelectorAll("#in")[0].textContent=`function multiply(num1,num2){
        document.querySelectorAll(".output")[0].value=num1*num2;
    };
    multiply(30,30);`;
    document.querySelectorAll(".output")[1].textContent=num1*num2;
};

// Divide two numbers
function divd(num1,num2){
    document.querySelectorAll("#in")[0].textContent=`function divd(num1,num2){
        document.querySelectorAll(".output")[0].value=(num1/num2).toFixed(3);
    };
    divd(33,7);`;
    document.querySelectorAll(".output")[1].textContent=(num1/num2).toFixed(3);
};

// mode two numbers
function modde(num1,num2){
    document.querySelectorAll("#in")[0].textContent=`function modde(num1,num2){
        document.querySelectorAll(".output")[0].value=(num1%num2);
    };
    modde(72,7);`;
    document.querySelectorAll(".output")[1].textContent=(num1%num2);
};

// Arithmatic operations
function arith(){
    document.querySelectorAll("#in")[0].textContent=`//arithmatic operation are solved auto by BODMAS rule but adding braces for arithmatic is better practice or for precedence 
    function arith(){
        document.querySelectorAll(".output")[0].value=33*34/34+39-90+45;
    };
    arith();`;
    document.querySelectorAll(".output")[1].textContent=33*34/34+39-90+45;
};

// Clear button
function clear(){
    document.querySelectorAll("#in")[0].textContent=`function clear(){
        document.querySelectorAll("#in")[0].value="";
    };
    clear();`;
    document.querySelectorAll(".output")[1].textContent="";
};

var copyRightYear=new Date().getFullYear();
document.querySelector(".copyright-year").innerHTML=`<em>${copyRightYear}</em>`;