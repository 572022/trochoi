
var am=[
    {music:"con ca.mp3", name:"ga"},
    {music:"ga.mp3" ,name:"ga"},
    {music:"caila.mp3", name:"ga"},
    {music:"ca.mp3", name:"ga"}
    
]

var con=document.getElementById('congratulations');
var amthanh=document.querySelectorAll('.amthanh');

for(let i=0; i<amthanh.length; i++){
    amthanh[i].onclick=function(){
        let music=new Audio( am[i].music);
           music.play();
    }
}
      

  let choice_dung=document.getElementsByClassName('point');
   for(i=0; i<choice_dung.length; i++){
    choice_dung[i].onclick=function(){
     var dung=new Audio("dung.mp3");
     dung.play();
     this.style.border='2px solid green';
    con.style.display='block';
  
    var cong1=document.querySelector('#cong1');
       let show_diem= cong1.innerHTML
    show_diem=Number(show_diem);
   
   
    if(show_diem>=choice_dung.length){
       return false;
        
    }else{
        show_diem+=1;
    }
    document.querySelector('#cong1').innerHTML=show_diem;
}
   }

   var none=document.getElementsByClassName('none');
   for(i=0; i<none.length; i++){
        none[i].onclick=function(){
        this.classList.toggle("none_onclick");
        var sai=new Audio("sai.mp3");
        sai.play();
        this.style.border='1px solid red';
   }
}
var close_b=document.getElementById("close_box");

close_b.onclick=function (){
    con.style.display='none';
}
let slideIndex = 1;


showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("container");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
   
    slides[slideIndex-1].style.display = "block";  
   
}
var next=document.getElementById('next_box');
next.onclick=function(){
    var t=document.getElementById('t');
    close_b.onclick();
   t.onclick();
}
