window.onload = function() {
    var btns = document.getElementById('btns');
    var show_li = btns.getElementsByTagName('li')[0];
    show_li.style.background = "#313131";
    Carousel();
};
function Carousel () {
    var speed = 2500;
    var time = 2500;
    var it = 0;
    var ul = document.getElementById("items");
    var list = ul.childNodes;
    var len = list.length;
    var wid = ul.getElementsByTagName('li')[0].offsetWidth;
    var step = wid / 2500;
    var tr = null;
    var scroller = function() {
        tr = setInterval(function() {
            var left = 0;
            //动画
            for (var i = 0; i <= time; i++) {
                setTimeout(function() {
                    ul.style.left = "-" + left + "px";
                    left = left + step;
                }, i); 
            }
            //执行完之后，将第一个li放到最后去
            setTimeout(function() {
               var newLi = document.createElement("li");
               var newImg = document.createElement("img");
               var firLi = ul.getElementsByTagName("li")[0];
               newImg.src = firLi.firstChild.src;
               newImg.alt = firLi.firstChild.alt;
               newLi.appendChild(newImg);
               ul.removeChild(firLi);
               ul.appendChild(newLi);
               ul.style.left = "0px";
            }, time);
            clearInterval(tr);
            btnList();
            setTimeout(scroller,3000);
        }, speed);
    };
    for (var i = 0; i < len; i++) {
        if (list[i].tagName === "LI") {
            it++;
        }
    }
    ul.style.width = it * wid + "px";
    scroller();
}
function btnList () {
    var firLi = document.getElementById("items").getElementsByTagName('li')[0];
    var btns = document.getElementById('btns');
    var btn_list = btns.getElementsByTagName('li');
    var showPic_num = parseInt(firLi.firstChild.alt.split('_')[1]) + 1;
    if(showPic_num == 4){
        var show_li = btn_list[0];
        var dis_li = btn_list[btn_list.length - 1]
        show_li.style.background = "#313131";
        dis_li.style.background = "#fff";
    }
    else{
         for(var i = 0;i < btn_list.length; i++){
         var show_li = btn_list[i];
         if(i == showPic_num){
            show_li.style.background = "#313131";
         }
         else{
            show_li.style.background = "#fff";
         }
       }
    }
}
