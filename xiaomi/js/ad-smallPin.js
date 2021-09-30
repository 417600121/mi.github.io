// 此脚本仅用作广告三连拼部分的链接和背景图片加载
var ad_smallPin=document.getElementsByClassName("small-ad-img");
var links=[
    ["https://www.mi.com/buy/detail?product_id=12511","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg?w=632&h=340"],
    ["https://www.mi.com/mi11","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b30177d629bfbe2fb42251c1b8538f7b.jpg?w=632&h=340"],
    ["https://www.mi.com/flipbudspro","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f18ac756fa2cedb16ea429b9c0001af.png?w=632&h=340"]
]
for(var i=0;i<links.length;i++){
    ad_smallPin[i].href=links[i][0];
    ad_smallPin[i].target="_blank";
    ad_smallPin[i].style.backgroundImage="url("+links[i][1]+")";
}