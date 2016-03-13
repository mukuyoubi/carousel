//$(document).ready(function() {
//
//   var bannerWarp=$('.bannerWarp');
//   var banneritem=$('.banner-item');
//         banner(5,5,2500,banneritem,bannerWarp);
//
//
//
//
//
// });
//
// function banner(page,button,time,item,warp) {
//
//   var  count=page;//图片数量
//   var  pount=0;//焦点
//
//   var  bannerslider = setInterval(bannerslider, time);
//
//
//   function  bannerslider()
//   {
//      var  plus=item.width();
//      var coutleft =  warp.position().left ;
//      warp.css("left" ,coutleft-plus );
//        showButton() ;
//       count=count-1;
//       pount++;
//      if(count<=0)
//      {
//         warp.css("left" ,"0px" );
//          var coutleft=0;
//          count=page;
//      }
//      if (pount>=button-1) {   pount=-1;}
//
//   }
//
//
//function showButton() {
//                $("#jiaodian div ").eq(pount+1).addClass('active').siblings().removeClass('active');
//            }
//
//
// }


var banner = {

    bannersl: bannersl,
    //showButton:showButton,
    pount: 0
}

function bannersl(page, item, warp) {
    var plus = item.width();
    var coutleft = warp.position().left;
    warp.css("left", coutleft - plus);
    $("#jiaodian div ").eq(banner.pount + 1).addClass('active').siblings().removeClass('active');
    page = page - 1;
    banner.pount++;
    if (page <= 0) {
        warp.css("left", "0px");
        var coutleft = 0;
        page = page;
    }
    if (banner.pount > banner.page) {
        banner.pount = -1;
    }

}


var bannerslider = setInterval(banner.bannersl(5, $('.banner-item'), $('.bannerWarp')), 2500);