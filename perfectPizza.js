const button1Element = document.querySelector(".button1");
const button2Element = document.querySelector(".button2");
const button7Element = document.querySelector(".button7");
const display1Element = document.querySelector(".display1");
const button3Element = document.querySelector(".button3");
const button4Element = document.querySelector(".button4");
const button8Element = document.querySelector(".button8");
const display2Element = document.querySelector(".display2");
const button5Element = document.querySelector(".button5");
const button6Element = document.querySelector(".button6");
const button9Element = document.querySelector(".button9");
const display3Element = document.querySelector(".display3");
const totalDisplayElement = document.querySelector(".totalDisplay");
const checkBtn = document.querySelector(".check");
const boxes = document.querySelector(".boxs");
const checkOutPay = document.querySelectorAll(".check2");
const inputAmountElement = document.querySelector(".inputAmount");
const payBtnElement = document.querySelector(".payBtn");
const replyElement = document.querySelector(".reply");
const ShoppingCartElement = document.querySelector(".ShoppingCart")

var totalCost = 0;
var totalCostSmall=0;
var totalCostMedium=0;
var totalCostLarge=0;
var countSmall=0;
var countMedium=0;
var countLarge=0;

function pizzaCalc(event){
    if(event.target.id==="button1"||event.target.id==="button7"){
        ShoppingCartElement.classList.remove("hidden");
        countSmall++
        pizzaCalcValue();
    }else if (event.target.id ==="button2"){
        if(countSmall<=0){
            countSmall=0;
        }else{
            countSmall--;
        }
        pizzaCalcValue();
    }else if(event.target.id ==="button3" || event.target.id ==="button8"){
        ShoppingCartElement.classList.remove("hidden");
        countMedium++
        pizzaCalcValue();
    }else if (event.target.id ==="button4"){
        if(countMedium<=0){
            countMedium=0;
        }else{
            countMedium--;
        }
        pizzaCalcValue();
    }else if(event.target.id ==="button5" || event.target.id ==="button9"){
        ShoppingCartElement.classList.remove("hidden");
        countLarge++;
        pizzaCalcValue();
    }else if (event.target.id ==="button6"){
        if(countLarge<=0){
            countLarge=0;
        }else{
            countLarge--;
        }
        pizzaCalcValue();
    }
};



function pizzaCalcValue(){
    totalCostSmall=countSmall*20;
    var totalCostSmall1=totalCostSmall.toFixed(2);
    display1Element.innerHTML=totalCostSmall1;

    totalCostMedium=countMedium*90;
    var totalCostMedium1=totalCostMedium.toFixed(2);
    display2Element.innerHTML=totalCostMedium1;

    totalCostLarge=countLarge*140;
    var totalCostLarge1=totalCostLarge.toFixed(2);
    display3Element.innerHTML=totalCostLarge1;

    totalCost = totalCostSmall + totalCostMedium + totalCostLarge;
    var totalCost1=totalCost.toFixed(2);
    totalDisplayElement.innerHTML=totalCost1;
};

checkBtn.addEventListener("click",function(){
    checkBtn.classList.add("hidden");
    boxes.classList.toggle("hidden");
    payBtnElement.classList.remove("hidden");
});

var text = 0;

payBtnElement.addEventListener("click",function(){
   
    text = Number(inputAmountElement.value);
    var change = (text-totalCost);
    if(change<0){
        replyElement.innerHTML= "Sorry - that is not enough money!";
        setTimeout(function(){
            replyElement.classList.toggle("hidden");
            inputAmountElement.value = "";
        }, 3000);
    }else{
        replyElement.innerHTML=" \"Enjoy\" your pizzas\', Your change is R" + change + ".00 ";
        setTimeout(function(){
            replyElement.classList.toggle("hidden");
            totalCost = 0;
            totalCostSmall=0;
            totalCostMedium=0;
            totalCostLarge=0;
            countSmall=0;
            countMedium=0;
            countLarge=0;
            totalCost1 = 0;
            totalCostSmall1=0;
            totalCostMedium1=0;
            totalCostLarge1=0;
            totalDisplayElement.innerHTML=totalCost1;
            display3Element.innerHTML=totalCostLarge1;
            display2Element.innerHTML=totalCostMedium1;
            display1Element.innerHTML=totalCostSmall1;
            inputAmountElement.value = "";
        }, 3000);
    }

    setTimeout(function(){
        checkBtn.classList.remove("hidden");
        payBtnElement.classList.add("hidden");
        boxes.classList.add("hidden");
        ShoppingCartElement.classList.add("hidden");
    }, 15000);
});

button1Element.addEventListener("click",pizzaCalc);
button2Element.addEventListener("click",pizzaCalc);
button7Element.addEventListener("click",pizzaCalc);
button3Element.addEventListener("click",pizzaCalc);
button4Element.addEventListener("click",pizzaCalc);
button8Element.addEventListener("click",pizzaCalc);
button5Element.addEventListener("click",pizzaCalc);
button6Element.addEventListener("click",pizzaCalc);
button9Element.addEventListener("click",pizzaCalc);

