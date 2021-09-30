var as = document.getElementsByTagName("a");
for (var i = 0; i < as.length; i++) {
    as[i].target = "_blank";
}
// 小米秒杀计时动作
function PrefixInteger(num, n) {
    return (Array(n).join(0) + num).slice(-n);
}
//PrefixInteger(722, 5) //"00722"
var countdown_hour = document.getElementsByClassName("countdown-hour")[0];
var countdown_minute = document.getElementsByClassName("countdown-minute")[0];
var countdown_second = document.getElementsByClassName("countdown-second")[0];
var round = document.getElementsByClassName("round")[0];
var desc = document.getElementsByClassName("desc")[0];
var time = 10000;//秒
var timeid = 0;
round.innerText = "14:00 " + "场";
desc.innerText = "距离结束还有";
function setmstime() {
    var hour = parseInt(time / 3600);
    var minute = parseInt((time - hour * 3600) / 60);
    var second = time - hour * 3600 - minute * 60;
    countdown_hour.innerText = PrefixInteger(hour, 2);
    countdown_minute.innerText = PrefixInteger(minute, 2);
    countdown_second.innerText = PrefixInteger(second, 2);
    // console.log(hour,minute,second);
    time--;
    if (time <= -1) {
        clearInterval(timeid);
        desc.innerText = "本场已结束";
    }
}
setmstime();
timeid = setInterval(() => {
    setmstime();
}, 1000);
//==============秒杀产品生成===================================
//产品名,简介,抢购价,原价,产品链接,图片链接
// [
//     ["小米米家电动滑板车1S 黑色","简介","抢购价","原价","产品链接","图片链接"]
// ]
// var swiper_slides=document.getElementsByClassName("swiper-slide");
// var s="[\n";
// for(var i=0;i<swiper_slides.length;i++){
//     if(swiper_slides[i].localName!="li")continue;
//     var item_name=swiper_slides[i].getElementsByTagName("h3")[0].innerText;
//     var item_desc=swiper_slides[i].getElementsByClassName("desc")[0].innerText;
//     var item_price=swiper_slides[i].getElementsByTagName("span")[0].innerText;
//     var item_yprice=swiper_slides[i].getElementsByTagName("del")[0].innerText;
//     var item_link=swiper_slides[i].getElementsByTagName("a")[0].href;
//     var item_imgLink=swiper_slides[i].getElementsByTagName("img")[0].src;
//     s+="\t[\""+item_name+"\",\""+item_desc+"\",\""+item_price+"\",\""+item_yprice+"\",\""+item_link+"\",\""+item_imgLink+"\"],\n";

//     // console.log(item_name,item_desc,item_price,item_yprice,item_link,item_imgLink);
// }
// s+="]"
// console.log(s);
ms_produces_link = [
    ["RedmiBook Pro 14 R7 16G 512G UMA 星光灰 星光灰", "2.5K超视网膜全面屏", "4799", "4999元", "https://www.mi.com/buy/seckill", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c21cd00be7a9b58657be08b13b464d90.png?thumb=1&w=250&h=250&f=webp&q=90"],
    ["米家扫拖一体机器人 白色", "扫得干净，拖得彻底", "1199", "1399元", "https://www.mi.com/buy/seckill", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e08b7ad5ef365103dd1928fb5ee5ab03.png?thumb=1&w=250&h=250&f=webp&q=90"],
    ["小米真无线蓝牙耳机Air2 SE 白色", "放肆用，畅快听", "149", "169元", "https://www.mi.com/buy/seckill", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3890a888b96989426d86dd5a4bee317d.png?thumb=1&w=250&h=250&f=webp&q=90"],
    ["RedmiBook Pro 15 i5/MX450/16G/512G/3.2K 90Hz", "3.2K 90Hz 超清视网膜全面屏", "5299", "5499元", "https://www.mi.com/buy/seckill", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a85251928856d6b85c181432b42f4fa.png?thumb=1&w=250&h=250&f=webp&q=90"],
    ["米家无线吸尘器K10 Pro 白色", "吸拖一体，全屋清洁一机搞定", "1799", "1999元", "https://www.mi.com/buy/seckill", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ac261123a49818c92906d1a988aca86.png?thumb=1&w=250&h=250&f=webp&q=90"],
    ["MIJOY一次性使用医用口罩 5包装", "轻身而行，畅然呼吸", "24.9", "95元", "https://www.mi.com/buy/seckill", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/45aa1cdf38999d629418ad7b008e65c8.png?thumb=1&w=250&h=250&f=webp&q=90"],
    ["RedmiBook Pro 14 R5 16G 512G UMA 星光灰 星光灰", "2.5K超视网膜全面屏", "4299", "4499元", "https://www.mi.com/buy/seckill", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c21cd00be7a9b58657be08b13b464d90.png?thumb=1&w=250&h=250&f=webp&q=90"],
    ["日常元素抽纸 青春版 24包/箱", "精选原生竹浆，健康环保", "25.9", "32.9元", "https://www.mi.com/buy/seckill", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/730055892c1afa7b6d8128c0938b5277.png?thumb=1&w=250&h=250&f=webp&q=90"],
    ["RedmiBook Pro 15 I5/16G/512G/锐炬Xe/3.2K 90Hz", "3.2K 90Hz 超清视网膜全面屏", "4799", "4999元", "https://www.mi.com/buy/seckill", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a85251928856d6b85c181432b42f4fa.png?thumb=1&w=250&h=250&f=webp&q=90"],
    ["小米米家液晶小黑板 20英寸", "随想随画，记录灵感瞬间", "139", "149元", "https://www.mi.com/buy/seckill", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a27cccc02ebc33e76ecf71b49a3e7d3a.png?thumb=1&w=250&h=250&f=webp&q=90"],
    ["小米小爱鼠标 黑色", "内置小爱同学，智享高效办公", "129", "149元", "https://www.mi.com/buy/seckill", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dbc00e7c58b2f330d35f85cb5cfb386f.png?thumb=1&w=250&h=250&f=webp&q=90"],
    ["小米经典商务双肩包 2 黑色", "实用商务时尚范 经典设计 空间利用率高", "79", "99元", "https://www.mi.com/buy/seckill", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e6d34173c21347b359153ab248847589.png?thumb=1&w=250&h=250&f=webp&q=90"],
    ["米家飞行员太阳镜 Pro 椭圆框 渐变灰", "尼龙偏光，轻巧佩戴", "169", "199元", "https://www.mi.com/buy/seckill", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4e9fdea3011b5a6cb51d61c64a402a0c.png?thumb=1&w=250&h=250&f=webp&q=90"],
    ["杜克激光测距仪 LS-P (40米）", "小身材 大本事", "119", "149元", "https://www.mi.com/buy/seckill", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/57fe12a74d7a8006d4cb2f6aeb740725.png?thumb=1&w=250&h=250&f=webp&q=90"],
    ["HITH智能足浴器Q3 有线版 旋钮款 旋钮款", "D舒适按摩，精准恒温足浴", "349", "569元", "https://www.mi.com/buy/seckill", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4fe0a1e18fdd607d4c71cc0852f37deb.png?thumb=1&w=250&h=250&f=webp&q=90"],
    ["onemodern高速指纹加密移动固态硬盘PSSD 500GB", "手机电脑两用，指纹加密，自动备份，540MB/s传输", "599", "699元", "https://www.mi.com/buy/seckill", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8be5fe28eb0cf26aee5893a3ca25ea04.png?thumb=1&w=250&h=250&f=webp&q=90"],
    ["米家飞行员太阳镜 Pro 椭圆框 渐变灰", "尼龙偏光，轻巧佩戴", "169", "199元", "https://www.mi.com/buy/seckill", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4e9fdea3011b5a6cb51d61c64a402a0c.png?thumb=1&w=250&h=250&f=webp&q=90"]
]

// 14 
/* 
<li class="ms-item ms-time">
    <a href="http://www.mi.com/buy/seckill">
        <div class="ms-item-img"></div>
        <h3 class="ms-item-title">小米米家电动滑板车1S 黑色</h3>
        <p class="desc">型出格，行出色</p>
        <p class="price">
            <span>1799</span>元
            <del>1999元</del>
        </p>
    </a>
</li>
*/
var ms_list = document.getElementsByClassName("ms-list")[0];
var pages = 0;//当前页数
var pages_max = parseInt(ms_produces_link.length / 4);//最大页数

var ini_items = function () {
    ms_list.innerHTML = "";
    //五彩颜色值
    var colors = ["#ffac13", "#83c44e", "#2196f3", "#e53935", "#00c0a5"];
    for (var i = 0; i < ms_produces_link.length; i++) {
        var li_1 = document.createElement("li");
        var a_1 = document.createElement("a");
        var div_1 = document.createElement("div");
        var h3_1 = document.createElement("h3");
        var p_1 = document.createElement("p");
        var p_2 = document.createElement("p");
        var span_1 = document.createElement("span");
        var del_1 = document.createElement("del");

        li_1.className = "ms-item ms-time";
        li_1.style.borderTopColor = colors[i % 5];
        a_1.href = ms_produces_link[i][4];
        div_1.className = "ms-item-img";
        div_1.style.backgroundImage = "url(" + ms_produces_link[i][5] + ")";
        h3_1.className = "ms-item-title";
        h3_1.innerText = ms_produces_link[i][0];
        p_1.className = "desc";
        p_1.innerText = ms_produces_link[i][1];
        p_2.className = "price";
        span_1.innerText = ms_produces_link[i][2] + "元 ";
        del_1.innerText = ms_produces_link[i][3];

        li_1.appendChild(a_1);
        a_1.appendChild(div_1);
        a_1.appendChild(h3_1);
        a_1.appendChild(p_1);
        a_1.appendChild(p_2);
        p_2.appendChild(span_1);
        p_2.appendChild(del_1);
        ms_list.appendChild(li_1);
    }
}
// 234px;每个产品展示的宽度+14px右边距
var li_1 = document.getElementsByClassName("ms-item")[0];
var change_ms_btu = document.getElementsByClassName("miaosha-btu");
var kuandu = 234 + 14;
var pagesTime_id;
var pagesTime = 0;
ini_items();
var jumpMS = function (x) {
    change_ms_btu[0].className = "miaosha-btu miaosha-last-page";
    change_ms_btu[1].className = "miaosha-btu miaosha-next-page";
    if (x > pages_max || x < 0) { x = 0; }
    pagesTime = 0;
    pages = x;
    if (x == pages_max && ms_produces_link.length % 4 != 0) {
        change_ms_btu[0].className = "miaosha-btu miaosha-last-page miaosha-btu-active";
    } else if (x == 0) {
        change_ms_btu[1].className = "miaosha-btu miaosha-next-page miaosha-btu-active";
    } else if (x == pages_max - 1 && ms_produces_link.length % 4 == 0) {
        change_ms_btu[0].className = "miaosha-btu miaosha-last-page miaosha-btu-active";
        change_ms_btu[1].className = "miaosha-btu miaosha-next-page";
    } else {
        change_ms_btu[0].className = "miaosha-btu miaosha-last-page miaosha-btu-active";
        change_ms_btu[1].className = "miaosha-btu miaosha-next-page miaosha-btu-active";
    }
    if (x == pages_max) {
        ms_list.style.left = "-" + (kuandu * (x - 1) * 4 + ms_produces_link.length % 4 * kuandu) + "px";
        return;
    }
    ms_list.style.left = "-" + kuandu * x * 4 + "px";
}
var go_next_ms = function () {
    if (change_ms_btu[1].className == "miaosha-btu miaosha-next-page miaosha-btu-active") {
        pages++;
        jumpMS(pages);
    }
}
var go_last_ms = function () {
    if (change_ms_btu[0].className == "miaosha-btu miaosha-last-page miaosha-btu-active") {
        pages--;
        jumpMS(pages);
    }
}
jumpMS(0);
pagesTime_id = setInterval(() => {
    pagesTime++;
    if (pagesTime >= 70) {
        go_next_ms();
        pagesTime = 0;
    }

}, 100);
// #ffac13 5%5==0
// #83c44e 6%5==1
// #2196f3 7
// #e53935 8
// #00c0a5 9
// 手机列表
var phone_produces_link=[
    ["Note 10 Pro", "天玑1100年度旗舰芯，VC液冷散热", "1599", "1699元", "https://www.mi.com/buy?product_id=14206", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg?thumb=1&w=250&h=250&f=webp&q=90"],
    ["Redmi Note 10 5G", "5G小金刚，旗舰长续航", "1099", "", "https://www.mi.com/buy?product_id=14210", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8909080ddb0851af0b87530e2927844f.jpg?thumb=1&w=250&h=250&f=webp&q=90"],
    ["小米MIX FOLD", "折叠大屏｜自研芯片", "9999", "", "https://www.mi.com/mixfold", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5dc32ec73299ff79556dcd1cf0f0ac11.png?thumb=1&w=250&h=250&f=webp&q=90"],
    ["小米11 Ultra", "1/1.12''GN2｜2K四微曲屏", "5499", "5999元", "https://www.mi.com/mi11ultra", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eb69512d9d6430d865d457ec52eebb51.png?thumb=1&w=250&h=250&f=webp&q=90"],
    ["小米11 Pro", "1/1.12''GN2｜骁龙888", "4499", "4999元", "https://www.mi.com/mi11Pro", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/34caee2c867bfd8c5e0dc2d8c663e121.jpg?thumb=1&w=250&h=250&f=webp&q=90"],
    ["小米11 青春版", "小米11 青春版 轻薄", "2099", "2299元", "https://www.mi.com/mi11youth", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb554f30eaa0316b0a736c3d59f21584.png?thumb=1&w=250&h=250&f=webp&q=90"],
    ["K40 游戏增强版", "轻薄电竞设计", "1999", "", "https://www.mi.com/buy/detail?product_id=14031", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b7fbb6fe07907c60f08358adab5adfe.png?thumb=1&w=250&h=250&f=webp&q=90"],
    ["黑鲨4 Pro", "黑鲨4 Pro ", "3999", "", "https://www.mi.com/buy?product_id=13812", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d47f7ecaa04d92bf2790d4a5d53d9099.png?thumb=1&w=250&h=250&f=webp&q=90"]
]
var phone_list = document.getElementsByClassName("phone-list")[0];
var ini_items_phone = function () {
    phone_list.innerHTML = "";
    //五彩颜色值
    var colors = ["#ffac13", "#83c44e", "#2196f3", "#e53935", "#00c0a5"];
    for (var i = 0; i < phone_produces_link.length; i++) {
        var li_1 = document.createElement("li");
        var a_1 = document.createElement("a");
        var div_1 = document.createElement("div");
        var h3_1 = document.createElement("h3");
        var p_1 = document.createElement("p");
        var p_2 = document.createElement("p");
        var span_1 = document.createElement("span");
        var del_1 = document.createElement("del");

        li_1.className = "ms-item ms-time";
        li_1.style.borderTopColor = colors[i % 5];
        a_1.href = phone_produces_link[i][4];
        a_1.target="_blank";
        div_1.className = "ms-item-img";
        div_1.style.backgroundImage = "url(" + phone_produces_link[i][5] + ")";
        h3_1.className = "ms-item-title";
        h3_1.innerText = phone_produces_link[i][0];
        p_1.className = "desc";
        p_1.innerText = phone_produces_link[i][1];
        p_2.className = "price";
        span_1.innerText = phone_produces_link[i][2] + "元起 ";
        del_1.innerText = phone_produces_link[i][3];

        li_1.appendChild(a_1);
        a_1.appendChild(div_1);
        a_1.appendChild(h3_1);
        a_1.appendChild(p_1);
        a_1.appendChild(p_2);
        p_2.appendChild(span_1);
        p_2.appendChild(del_1);
        phone_list.appendChild(li_1);
    }
}
ini_items_phone();
// 设置底部隐私安全的自动变化
let img1=document.getElementsByClassName("img1")[0];
let img2=document.getElementsByClassName("img2")[0];
let imgs_link=[
    'https://cnbj1.fds.api.xiaomi.com/b2c-misite-activity/5aea5cb73947a4646121702de8854c8e.png',
    'https://cnbj1.fds.api.xiaomi.com/b2c-misite-activity/f1ee261b96ae71e845efba398efeca02.png'
]
img2.style.display="none";
let img_times=0;
setInterval(() => {
    img_times++;
    img1.src=imgs_link[img_times%imgs_link.length]
}, 2000);

var back=document.getElementById("back");
back.style.display="none";
document.addEventListener("scroll",function(){
    console.log();
    if(document.documentElement.scrollTop<=850){
        back.style.display="none";
    }else{
        back.style.display="inline-block";
    }
})

function backtop(){
    document.documentElement.scrollTop=0;
}
