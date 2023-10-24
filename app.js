let height=document.querySelector('.height');
let weight=document.querySelector('.weight');
let resultBtn=document.querySelector('.resultBtn');
let result=document.querySelector('.result');
let tagline=document.querySelector('.tagline');
let bmi;
let heightValue;


resultBtn.addEventListener('click', ()=>{
    heightValue=height.value/100;
    heightValue=Math.pow(heightValue, 2);
    bmi=weight.value/heightValue;
    bmi=Math.round(bmi);
    if(bmi>0){
        result.textContent=`Your BMI is ${bmi}`;
    }else{
        result.textContent="C'mon man, enter smth!"
    }

    if(bmi>=18 && bmi<=25){
    tagline.textContent="Your BMI falls between 18 and 25, so your weight can be considered normal."
    }else if(bmi<18){
    tagline.textContent="Your BMI doesn't fall between 18 and 25, so you should gain weight to have normal weight."
    }else if(bmi>25){
    tagline.textContent="Your BMI doesn't fall between 18 and 25, so you should lose weight to have normal weight."
    }
});