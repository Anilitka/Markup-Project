



$('.carousel .carousel-item').each(function(){
    let minPerSlide = 3;
    let next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (let i=0; i < minPerSlide; i++) {
        next=next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        
        next.children(':first-child').clone().appendTo($(this));
      }
  });
  
  $('.secondcarousel .seconditem').each(function(){
    let minPerSlide = 2;
    let next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (let i=0; i < minPerSlide; i++) {
        next=next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        
        next.children(':first-child').clone().appendTo($(this));
      }
  });
  
  let valCount = 0;
  function incClick()
  {
    updDisplay(++valCount);
  }
  function updDisplay(val){
    document.querySelector('.badge').innerHTML = val
  }
  
  
  