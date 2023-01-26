let persons=[{
   id:1,
    img:"img/pexels-photo-213117.svg",
    pName:"Mark Joe",
    say:"This should be used to tell a story and include any testimonials you might have about your product or service for your clients",
    Jop:"react developer",
},
{
    id:2,
     img:"img/pexels-photo3-213117.svg",
     pName:"Leila Domniuc",
     say:"This should be used to tell a story and include any testimonials you might have about your product or service for your clients",
     Jop:"vue developer"
 },
 {
    id:3,
     img:"img/man_on_a_street2-1000x667.svg",
     pName:"Vera markin",
     say:"This should be used to tell a story and include any testimonials you might have about your product or service for your clients",
     Jop:"Angular developer"
 },
 {
     id:4,
    // img:"img/pexels-photo-213117.svg",
    pName:"markin nesus",
    say:"Loved the design specially the color combination. Look forward to work more in future",
    Jop:"ios developer"
},
 {
     id:5,
    // img:"img/pexels-photo-213117.svg",
    pName:"Vera Duncan",
    say:"Loved the design specially the color combination. Look forward to work more in future",
    Jop:"flutter developer"
},
{
    id:6,
    //  img:"img/pexels-photo3-213117.svg",
     pName:"Cris Angela",
     say:"Loved the design specially the color combination. Look forward to work more in future",
     Jop:"Head Of CsWeb"
 },
 {
    id:7,
     img:"img/man_on_a_street2-1000x667.svg",
     pName:"Pirtle Karol",
     say:"Loved the design specially the color combination. Look forward to work more in future",
     Jop:"Android developer"},

     {id:8,
    img:"img/pexels-photo-213117.svg",
    pName:"Mark Joe",
    say:"Loved the design specially the color combination. Look forward to work more in future",
    Jop:"react developer"
},
{
    id:9,
     img:"img/pexels-photo3-213117.svg",
     pName:"Vera Duncan",
     say:"Loved the design specially the color combination. Look forward to work more in future",
     Jop:"flutter developer"
 },
 {
    id:10,
     img:"img/man_on_a_street2-1000x667.svg",
     pName:"amal",
     say:"Loved the design specially the color combination. Look forward to work more in future",
     Jop:"Doctor"},

     {id:11,
    img:"img/man_on_a_street8-1000x667.svg",
    pName:"Mona",
    say:"Loved the design specially the color combination. Look forward to work more in future",
    Jop:"Doctor"}
    ]
  function imgHover(obj){
     let y= obj.id;
   document.querySelector(".what-say p").innerHTML= persons[y-1].say;
   document.querySelector(".what-say h4").innerHTML= persons[y-1].pName;
   document.querySelector(".what-say #jop").innerHTML= persons[y-1].Jop;
   let m=document.querySelector(".what-say");
   m.style.display="block";
   if(obj.id !=6)
   {document.querySelector(".six img").style.opacity= 0.305;
   document.querySelector(".six img").style.filter="blur(3px)";
   document.querySelector(".six img").style.transform="scale(.98)";}
   if(obj.id ==6)
   {document.querySelector(".six img").style.opacity= 1;
   document.querySelector(".six img").style.filter="blur(0px)";
   document.querySelector(".six img").style.transform="scale(2)";}
  
   console.log($m);
  }
function mouseout(){
    document.querySelector(".what-say").style.display="none";
}






$(document).ready(function(){
    $('.slickSlider').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 5,
            slidesToScroll: 5,
           
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  
                  
                }
              },
              {
                breakpoint:991,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
                
              },
              {
                breakpoint:600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
                
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
       
    });
  });


 