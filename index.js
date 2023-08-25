//animation on scroll

const abouts= document.querySelectorAll(".about")

const observer = new IntersectionObserver(
    entries=>{
        entries.forEach(entry=>{
            entry.target.classList.toggle("show",entry.isIntersecting)
        })
    },
    {
        threshold:0.3,
    }
)

abouts.forEach(about =>{
    observer.observe(about)
})



//slider

const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

let sectionIndex =0;

rightArrow.addEventListener('click',function () {
    if (sectionIndex<3) {
        sectionIndex=sectionIndex+1;
        slider.style.transform =  'translate('+(sectionIndex)*-25+'%)';
    } else {
        slider.style.transform =  'translate(0%)';
        sectionIndex=0;
    }
    
});

leftArrow.addEventListener('click',function () {
    if (sectionIndex==0) {
        sectionIndex=3;
        slider.style.transform =  'translate(-75%)';
    } else {
        sectionIndex=sectionIndex-1;
        slider.style.transform =  'translate('+(sectionIndex)*-25+'%)';
    }
});


//giving buttons for education


const colors=["rgb(0,0,0)","rgb(10,0,0)","rgb(10,0,0)","rgb(10,0,0)","rgb(10,0,0)","rgb(255,255,)"];


/*function buttonhide1() {
    document.querySelector('.resbox1').classList.toggle("hidresbox1");
   
    let randi=Math.floor(Math.random()*5)
    document.querySelector('.circle1').style.backgroundColor=colors[randi]
    

}*/

let c=document.querySelector('.circle1')



function buttonhide1() {
    document.querySelector('.resbox1').classList.toggle("hidresbox1");
}

function buttonhide2() {
    document.querySelector('.resbox2').classList.toggle("hidresbox2");
}

function buttonhide3() {
    document.querySelector('.resbox3').classList.toggle("hidresbox3");
}


//projects



function expander() {
    document.querySelector('.icd').style.height="280px";
}

function closer() {
    document.querySelector('.icd').style.height="120px";
}

function expander1() {
    document.querySelector('.blockchain').style.height="280px";
}

function closer1() {
    document.querySelector('.blockchain').style.height="120px";
}

let flag=0;
function checker() {

    console.log(flag)
    if (flag%2==0) {
        expander();
    } else {
        closer();
    }
    flag+=1;
}

function checker1() {

    console.log(flag)
    if (flag%2==0) {
        expander1();
    } else {
        closer1();
    }
    flag+=1;
}


//contact

function addClass() {
    document.body.classList.add("sent");
  }
  
  sendLetter.addEventListener("click", addClass);