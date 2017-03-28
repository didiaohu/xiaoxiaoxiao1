(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=640){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    recalc();
})(document, window);


var innerGroup = $(".innerwraper");
var leftArrow = $(".left-arrow");
var rightArrow = $(".right-arrow");
var spanGroup = $(".pagination span");
var imgWidth = $(".innerwraper img:first-child").eq(0).width();
var _index = 0;
var timer = null;
var flag = true;
spanGroup.on("click", function() {
    //导航切换
    _index = spanGroup.index($(this));
    selectPic(_index);
    clearInterval(timer);
})

function autoGo(bol) {
    //自动行走
    if (bol) {
        timer = setInterval(go, 3000);
    }
}
autoGo(flag);

function go() {
    //计时器的函数
    _index++;
    selectPic(_index);
}
function selectPic(num) {
    clearInterval(timer);
    $(".pagination span").eq(num).addClass("active").siblings().removeClass("active");
    if( num%4 == 0){
        $(".pagination span").eq(0).addClass("active").siblings().removeClass("active");
    }
    $(".inner").animate({
        left: -num * imgWidth,
    }, 1000, function() {
        timer = setInterval(go, 3000);
        //检查是否到最后一张
        if (_index == innerGroup.length-1) {
            _index %= 4;
            $(".inner").css("left", "0px");
        }
    })
}