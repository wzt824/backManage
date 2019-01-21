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

//点击删表
for(let i=0;i<$(".del").length;i++){
    $(".del")[i].onclick=function(){
        // console.log($(this).parents(".echartsAll"));
        $(this).parents(".tables").remove();
    }
}

//隔行变色
var tr=$("table").find("tr");
for(let i=1;i<tr.length;i++){
    tr[i].index=i;
    if(tr[i].index %2==0){
        tr[i].style.background="#f9f9f9";
    }else if(tr[i].index %2 !=0){
        tr[i].style.background="#fff";
    }
}

//点击删除按钮删除行
for(let i=0;i<$(".delete").length;i++){
    $(".delete")[i].onclick=function(){
        $(this).parents("tr").remove();
    }
}