$(".toggle-text").hide();

$(".toggle-box").click(function() {
  $(this).find(".toggle-text").toggle(300);
});

// on top按鈕
 $("#return-to-top").click(function(e){
      e.preventDefault();
      $('html, body').animate({scrollTop:0},800)
    })



// 照片集

$("body").append("<div id='full'><img><div>點擊畫面任意處以關閉</div></div>")
$("#full").toggle()

$(".item").click(function(){
  $("#full").find("img").attr("src", $(this).find("img").attr("src"))
  $("#full").toggle(300)
})

$("#full").click(function(){
  $(this).toggle(300)
})


$(function(){
   // 偵聽a click
   $(".w3-col a").bind("click",function(){

       var id=$(this).attr("data-id");

       // 取得目標區塊的y座標
       var target_top = $("#"+id).offset().top;

     // 取得body物件 這種寫法在各瀏覽器上最保險
       var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');


       // 移動捲軸有動畫效果
     		$body.animate({
     			  scrollTop: target_top
     		}, 500);

   })
})

// 產品頁
function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-dark-grey";
}
document.getElementById("myLink").click();


// 按鈕驅使圖片
