


$(document).ready(function() {  
         sms();
         closecancel();
         delAdd();
 });  


function sms() {  

   $('#getcode').click(function () {

               

                var count = 60;
                var countdown = setInterval(CountDown, 1000);

                function CountDown() {
                    $("#getcode").css('color','#999999');
                    $("#getcode").html("重新获取  (" + count + "s)");
                    if (count == 0) {
                     $("#getcode").css('color','#37b2ff');
                     $("#getcode").html("获取验证码");
                        clearInterval(countdown);
                    }
                    count--;
                }
            })	
 }  

function closecancel() {  

   $('.closeUpper').click(function () {
        $(".cancelUpper").hide();
        $(".mask").hide();              
            })  
 }  

function delAdd() {  

   $('.icon-del').click(function () {
        $(".cancelUpper").show();
         var bh = $('html').height();
            var bw = $('html').width();
            $(".mask").css({
             height:bh,
            width:bw,
             display:"block"
            });             
            })  
    
    $('#cancel').click(function () {
        $(".cancelUpper").hide();
        $(".mask").hide();              
            })  

 }  

 