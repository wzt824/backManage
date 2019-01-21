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

//隔行变色
var list_ul=document.getElementsByClassName("list_ul");
var list_li=list_ul[0].children;
for(let i=0;i<list_li.length;i++){
    list_li[i].index=i;
    if(list_li[i].index %2==0){
        list_li[i].style.background="#f6f6f6";
    }else if(list_li[i].index %2 !=0){
        list_li[i].style.background="#eee";
    }
}