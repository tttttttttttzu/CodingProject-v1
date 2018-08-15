$(".toggle-text").hide();

$(".toggle-box").click(function() {
  $(this).find(".toggle-text").toggle(300);
});

// on top按鈕
 $("#return-to-top").click(function(e){
      e.preventDefault();
      $('html, body').animate({scrollTop:0},800)
    })
