    $(window).ready(function () {
        var typingBool = false;
        var typingIdx = 0;
        var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 
        typingTxt = typingTxt.split(""); // 한글자씩 자른다. 
        if (typingBool == false) { // 타이핑이 진행되지 않았다면 
            typingBool = true;

            var tyInt = setInterval(typing, 100); // 반복동작 
        }

        function typing() {
            if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
                $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
                typingIdx++;
            } else {
                clearInterval(tyInt); //끝나면 반복종료 
            }
        }



 


    });

    var windowcon = document.querySelector('.mainimg'),
        container = document.querySelector('.box2'),
        container2 = document.querySelector('.box3'),
        slides = document.querySelectorAll('img'),
        slidecounter = slides.length;

    let currentIndex = 0;


console.log(slidecounter);
    for (i = 0; i < slidecounter; i++) {
        slides[i].style.left = '${i*100}%';
    }

    function calcul() {
        for (i = 0; i < slidecounter; i++) {
            if (windowcon.offsetHeight < slides[i].offsetHeight) {
                windowcon.style.height = slides[i].offsetHeight + "px";
                windowcon.style.width = slides[i].offsetWidth + "px";
            }
        }
    }
    calcul();
    var lele = 0;
    var i = 0;

    function moveevent() {
        setInterval(function () {
            var  container = document.querySelector('.box2');
          var   container2 = document.querySelector('.box3');
//          $( ' <div class="img5"><img src="img/5.jpg" alt=""></div>'+'<div class="img5"><img src="img/5.jpg" alt=""></div>'+
//      '<div class="img6"><img src="img/6.png" alt=""></div>'+
//      '<div class="img7"><img src="img/7.png" alt=""></div>'+
//      '<div class="img8"><img src="img/8.jpg" alt=""></div>' ).appendTo(
//              container);
   

   

           
  
            lele += 4000;
          
            container.style.transition = '6s'
            container.style.left = "-" + lele + "px";
            container2.style.transition = '10s'
            container2.style.right = "-" + lele + "px";
            
            i++;
//         if(container2.style.right == 0){
//
//         }
            
            if (i === slidecounter - 1) {
                setTimeout(function () {
                      
                    
//            $( '<div class="img9"><img src="img/9.jpg" alt=""></div>'+
//      '<div class="img10"><img src="img/10.jpg" alt=""></div>'+
//      '<div class="img11"><img src="img/11.jpg" alt=""></div>'+
//      '<div class="img12"><img src="img/12.png" alt=""></div>').prependTo(
//              container2);
//                    
//                    container.style.transition = '0s'
//                    lele = 0;
//                    container.style.left = "-" + lele + "px";
                    container2.style.transition = '0s'
                    lele = 0;
                    container2.style.right = "-" + lele + "px";
                         
                }, 201);
                i = 0;
            } 
      
            
      
        }, 100);
        function plantmove(){
            var maintext = document.querySelector('.mainbox');
            var subtxt = document.querySelector('.subtxt');
            maintext.classList.add('topright');
            subtxt.style.visibility ="hidden";
            subtxt.style.opacity = "0";
            
        }
         plantmove();
        
    }
    $(document).ready(function () {
var cont = $('.sect2 >div');
var cont2 = $('.sect2 ul li');
                


        $('.sect2 ul li').click(function () {
            $('.sect2 ul li').removeClass();
            $(this).addClass('active');
      $('.mam1').css('display','inline-flex');
      $('.mam2,.mam3,.mam4').hide();
 
  
        });
  $('.sect2 ul li:nth-child(2)').click(function () {
      $('.mam2').css('display','inline-flex');
      $('.mam1,.mam3,.mam4').hide();
 
  
        }); $('.sect2 ul li:nth-child(3)').click(function () {
      $('.mam3').css('display','inline-flex');
      $('.mam2,.mam1,.mam4').hide();
 
  
        });$('.sect2 ul li:nth-child(4)').click(function () {
      $('.mam4').css('display','inline-flex');
      $('.mam1,.mam2,.mam3').hide();
 
  
        });
  
 });