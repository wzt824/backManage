var li_sub = document.getElementsByClassName('li_sub');
var uls_sub = document.getElementsByClassName("uls_sub");
for (let i = 0; i < li_sub.length; i++) {
    li_sub[i].onmouseenter = function () {
        this.lastElementChild.style.display = "block";
    }
    li_sub[i].onmouseleave = function () {
        this.lastElementChild.style.display = "none";
    }
}

//echarts切换
var left3_uls = document.getElementsByClassName("left3_uls");
var uls_li = left3_uls[0].children;
var section_echart = document.getElementsByClassName("section_echart");
var div = section_echart[0].children;
for (let i = 0; i < uls_li.length; i++) {
    uls_li[i].onclick = function () {
        uls_li[i].index = i;
        for (let j = 0; j < uls_li.length; j++) {
            uls_li[j].className = "";
            uls_li[j].style.borderBottom = "1px solid #eaeaea";
            // div[j].style.display = "none";
        }
        this.className = "fix";
        this.style.borderBottom = "none";
        // div[this.index].style.display = "block";
    }
}

//响应菜单
// function menu(){
//     if((document.body.clientWidth || document.documentElement.clientWidth)<600){
//         $(".fa-bars").click(function(){
//             $(".section_left").css({"display":"block","zIndex":999});
//         })
//     }
// }


