window.addEventListener("load",function(){


  //메인 배너 슬라이드 영역
const swiper1 = new Swiper('#main_banner', {
    // Optional parameters
    autoplay: {//자동슬라이드 (false-비활성화
        delay: 5000, // 시간 설정          
       },
        loop : false,// 슬라이드 반복 여부
        loopAdditionalSlides : 1,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


//프로덕트 제품 슬라이드 영역
const swiper2 = new Swiper('#p_j', {
    // Optional parameters

slidesPerView: 4, //슬라이드 제품수

    autoplay: {
        delay: 5000, // 시간 설정          
       },
    
        
  
    // If we need pagination
    pagination: {
      el: '.p_s',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.main_pager',
      prevEl: '.main_next',
    },
  
  
  });


//R&D영역 슬라이드 
const swiper3 = new Swiper('#rt02', {
    // Optional parameters
    autoplay: {
        delay: 4500, // 시간 설정          
       },
    
    // Navigation arrows
    navigation: {
      nextEl: '.rd_next',
      
    },
  
  });

  //newsroom 슬라이드
  const swiper = new Swiper('#newsroom .swiper', {
    autoplay: {
        delay: 5000, // 5초 간격
        disableOnInteraction: false, // 사용자가 상호작용해도 자동 재생 유지
    },
    navigation: {
        nextEl: '.news_pager',
        prevEl: '.news_next',
    },
    loop: true, // 슬라이드 반복
});




});//end:window.addE.....