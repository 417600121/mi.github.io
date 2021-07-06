/*
var list1=document.getElementById('J_categoryList')
var list=list1.getElementsByClassName('category-item');
var all=new Array();
for(var i=0;i<10;i++){
    var col=list[i].getElementsByClassName('children-list-col');
    var lists=new Array();
    for(var j=0;j<col.length;j++){
        var lis=col[j].getElementsByTagName("li");
        for(var k=0;k<lis.length;k++){
            var item=new Object();
            var li=lis[k];
            var phone_name=li.getElementsByTagName("span")[0].innerText;
            var phone_link=li.getElementsByTagName("a")[0].href;
            var pic_link=li.getElementsByTagName('img')[0].src;
            item.phone_name=phone_name;
            item.phone_link=phone_link;
            item.pic_link=pic_link;
            lists.push(item);
        }
    }
    all.push(lists);
}
*/
/*
[
    [   
        ["小米MIX FOLD","https://www.mi.com/mixfold","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=50&h=50&f=webp&q=90"],
        ["小米MIX FOLD","https://www.mi.com/mixfold","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=50&h=50&f=webp&q=90"]
    ],
    [
        
    ],

]
*/
/*
var log="[\n";
for(var i=0;i<all.length;i++){
    log+="\t[\n";
    var j=0;
    for(;j<all[i].length-1;j++){
        log+="\t\t[\""+all[i][j].phone_name+"\",\""+all[i][j].phone_link+"\",\""+all[i][j].pic_link+"\"],\n";
    }
    log+="\t\t[\""+all[i][j].phone_name+"\",\""+all[i][j].phone_link+"\",\""+all[i][j].pic_link+"\"]\n";
    log+="\t],\n";
}
console.log(log)
*/
var all=[
	[
		["小米MIX FOLD","https://www.mi.com/mixfold","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米11 Ultra","https://www.mi.com/mi11ultra","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1241b5a94ba1739e85f72d46592af0e.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米11 Pro","https://www.mi.com/mi11Pro","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6cf44dfe89111cb35e1a2211481ff546.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米11 青春","https://www.mi.com/mi11youth","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/72bd70039670d29610569421f753fcb6.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米10S","https://www.mi.com/mi10s","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c89e7b3a3495acaa0a4df271d9da59ea.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米11","https://www.mi.com/mi11","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米10","https://www.mi.com/buy?product_id=10000214","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["黑鲨4 Pro","https://www.mi.com/buy?product_id=13812","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0dfda044e0ddcfb3ef63e7e2b87daea3.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["黑鲨4","https://www.mi.com/buy?product_id=13810","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["Redmi K30S 至尊纪念版","https://www.mi.com/redmik30s","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69a0df49cff71107977bbe3b48af15fa.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米云服务","https://www.mi.com/buy?product_id=8262","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ade0163e9fdbd92a4b7d7ee3aeab905.jpg?thumb=1&w=50&h=50"],
		["Redmi K30 至尊纪念版","https://www.mi.com/buy?product_id=12605","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0803dc7125ffa3447b04b1ae60f57a2b.jpg?thumb=1&w=50&h=50&f=webp&q=90"],
		["Note 10 Pro","https://www.mi.com/buy?product_id=14206","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["Note 10 5G","https://www.mi.com/buy?product_id=14212","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/79e2935264bf9247aa7512e330112820.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["K40 游戏增强版","https://www.mi.com/buy?product_id=14031","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab956ee82c24bdd83d21bc212aad3eb5.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["K40 Pro 系列","https://www.mi.com/redmik40ultra-k40pro","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e5aa3cab478f5eeba1c7d4cf25cba9a.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["Redmi K40","https://www.mi.com/redmik40","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92fdd051100722d25323e9bd188befc5.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["Redmi 8A","https://www.mi.com/redmi8a","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/77bfd346ad97807237beca297cfe2fba.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["Redmi Note 9 Pro","https://www.mi.com/redminote9pro","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["Redmi Note 9 5G","https://www.mi.com/redminote9","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/970c6b287eb89620f5ee8e2b347f6f3d.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["Redmi Note 9  4G","https://www.mi.com/redminote9-4g","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/947721c8bc4a4ecc3bca17237ee64dea.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["Redmi 9A","https://www.mi.com/buy/detail?product_id=12511","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg?thumb=1&w=50&h=50&f=webp&q=90"],
		["手机上门维修","https://www.mi.com/buy?product_id=7532","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/84e19ece0125992449a6276e2ba333e9.png?thumb=1&w=50&h=50"],
        ["Redmi 9","https://www.mi.com/buy?product_id=10000239","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90"]
    ],
	[
		["Redmi MAX 86” 超大屏电视","https://www.mi.com/buy?product_id=13498","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9074723edc522839834f7fcd12b6f558.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米透明电视","https://www.mi.com/mitv-great/hyaline","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米电视5 Pro 55英寸","https://www.mi.com/mitv5pro/55","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/942d4f28d406f3946f0ce551c125c641.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米电视5 65英寸","https://www.mi.com/mitv5/65/","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8264eb9b900ead63eea69f6fc1e413a.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["Redmi 智能电视 A系列","https://www.mi.com/search?keyword=Redmi%20%E6%99%BA%E8%83%BD%E7%94%B5%E8%A7%86A","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/93b55d27cd6e2100c25611eb828396ae.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["量子点电视","https://www.mi.com/search?keyword=%E9%87%8F%E5%AD%90%E7%82%B9%E7%94%B5%E8%A7%86","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/da1680fb62238cb5b01998d80fc34e25.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["Redmi 智能电视 X系列","https://www.mi.com/search?keyword=Redmi%20%E6%99%BA%E8%83%BD%E7%94%B5%E8%A7%86%20X","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/070b329c18c1ab167df2a42564a67813.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米电视大师 82英寸","https://www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E7%94%B5%E8%A7%86%E5%A4%A7%E5%B8%88%2082%E8%8B%B1%E5%AF%B8","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8f12c8d20878e88b66047ef32566e48.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米电视5 Pro 65英寸","https://www.mi.com/mitv5pro/65","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d096389e19ba6b79b324b7d0acfab7ca.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米电视5 55英寸","https://www.mi.com/mitv5/55/","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/23316088a9182a08c624958319924d8d.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米全面屏电视E43K","https://www.mi.com/buy?product_id=12045","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/319700f48d268f522664e1fc876b0044.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["金属全面屏电视","https://www.mi.com/search?keyword=%E5%85%A8%E9%9D%A2%E5%B1%8F%E7%94%B5%E8%A7%86Pro","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d219d8b9c4a74eda4ae6c0222d194cd2.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米盒子","https://www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E7%9B%92%E5%AD%90","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/554a4f8ea0c2c3ed19d843bea7321203.jpg?thumb=1&w=50&h=50"],
		["大师电视 65英寸 OLED","https://www.mi.com/buy?product_id=12049","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7da49e7ada2229c963c9c7353a58d49b.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米电视5 Pro 75英寸","https://www.mi.com/mitv5pro/75","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/da1680fb62238cb5b01998d80fc34e25.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米电视4A 60英寸","https://www.mi.com/buy?product_id=11843","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1df560d16cc983b0f34d24fc484bd697.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["Redmi 智能电视 X55","https://www.mi.com/buy?product_id=12158","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/070b329c18c1ab167df2a42564a67813.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米全面屏电视","https://www.mi.com/search?keyword=%E5%85%A8%E9%9D%A2%E5%B1%8F%E7%94%B5%E8%A7%86","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8aeae36f5d088f22c84b8953bd0d08b4.jpg?thumb=1&w=50&h=50"],
		["电视音箱","https://www.mi.com/search?keyword=%E7%94%B5%E8%A7%86%E9%9F%B3%E7%AE%B1","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/381acfeddeebcce4720ea7b8e481252f.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["Redmi 智能电视 MAX 98","https://www.mi.com/redmitv/98/","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米电视5 75英寸","https://www.mi.com/mitv5/75/","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d707cdac2a19703b57e65212f32fd25b.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米电视4A 70英寸","https://www.mi.com/buy?product_id=10764","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6797917392e912577135d9eb8ad92f1f.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米电视4S 75英寸","https://www.mi.com/buy?product_id=8993","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8cb5791161d8b25897f60385f0ec7ab2.png?thumb=1&w=50&h=50&f=webp&q=90"],
        ["小米壁画电视","https://www.mi.com/search?keyword=%E5%A3%81%E7%94%BB%E7%94%B5%E8%A7%86","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5732e8f317eb86bfcb174fbb49d00c4a.jpg?thumb=1&w=50&h=50"]
    ],
	[
		["小米笔记本 Pro X 15","https://www.mi.com/buy?product_id=10000301","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3e69fe4849e3e42bd4394e2be04a5c82.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["RedmiBook Pro 14 锐龙版","https://www.mi.com/buy?product_id=10000297","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["RedmiBook Pro 15 锐龙版","https://www.mi.com/buy?product_id=10000298","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/70e30a90120626588b8ec6b96173776f.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米笔记本 Pro 15 锐龙版","https://www.mi.com/buy?product_id=10000299","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/53ac63f76d43a47fadb8eae6f43d6b04.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米笔记本Pro 15","https://www.mi.com/buy?product_id=10000284","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/32c652aa0d2da1d043b837eba6098541.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米笔记本Pro 14","https://www.mi.com/buy?product_id=10000285","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76ab759c291b0741c4f267b5dbf05a91.jpg?thumb=1&w=50&h=50&f=webp&q=90"],
		["RedmiBook Pro 14","https://www.mi.com/redmibook/pro14","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["RedmiBook Pro 15","https://www.mi.com/redmibook/pro15","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4bb5f47edf33ce78f025ae8aa9a2c0ef.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["Redmi G 游戏本","https://www.mi.com/redmi-g","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/694e4b422f319e2c8cdd8fb1760f911c.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["RedmiBook Air 13","https://www.mi.com/buy?product_id=10000253","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea840f3f79798c9a29d9921b9edf50ac.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["RedmiBook 16","https://www.mi.com/buy?product_id=10000242","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dae66d0f978b04b539aef092aee50f2f.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米笔记本Pro 15.6","https://www.mi.com/buy?product_id=10000237","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4f45cdc4f94f1f1651095dedb154c2e4.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["RedmiBook 13","https://www.mi.com/redmibook/13/","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aee86bcd8bf491eb78ae234d2e188a66.jpg?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米/Redmi 显示器","https://www.mi.com/buy?product_id=10000192","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b32e4db4b53b0c56c6040f094e96d945.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["键鼠套装","https://www.mi.com/search?keyword=%E9%94%AE%E7%9B%98","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0eb7e33b11443f6927e2035eca7c3d9e.png?thumb=1&w=50&h=50&f=webp&q=90"],
        ["鼠标","https://www.mi.com/search?keyword=%E9%BC%A0%E6%A0%87","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c61933e7ac89c61bc727c275391e82e0.png?thumb=1&w=50&h=50"]
    ],
	[
		["冰箱","https://www.mi.com/search?keyword=%E5%86%B0%E7%AE%B1","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=50&h=50&f=webp&q=90"],
		["立式空调","https://www.mi.com/search?keyword=%E7%AB%8B%E5%BC%8F%E7%A9%BA%E8%B0%83","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/96de94415b860f3de95b2d6294f0d0fd.png?thumb=1&w=50&h=50"],
		["壁挂空调","https://www.mi.com/search?keyword=%E5%A3%81%E6%8C%82%E7%A9%BA%E8%B0%83","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/630b9e523bb2e1387ce6c7be1edaca18.png?thumb=1&w=50&h=50"],
		["滚筒洗衣机","https://www.mi.com/search?keyword=%E6%BB%9A%E7%AD%92%E6%B4%97%E8%A1%A3%E6%9C%BA","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/18723c3561252ce76c9a1b1eebc4c01c.png?thumb=1&w=50&h=50"],
		["Redmi全自动波轮洗衣机","https://www.mi.com/search?keyword=%E6%B3%A2%E8%BD%AE%E6%B4%97%E8%A1%A3%E6%9C%BA","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d3bace6e62cecb7901e306b05502535f.jpg?thumb=1&w=50&h=50"],
		["净水器","https://www.mi.com/search?keyword=%E5%87%80%E6%B0%B4%E5%99%A8","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12f4b26ced3716d07bfcc6beba751188.jpg?thumb=1&w=50&h=50"],
		["微波炉","https://www.mi.com/buy?product_id=10330","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7dcbb8c268574041ce0b4b98e591cf1.jpg?thumb=1&w=50&h=50&f=webp&q=90"],
		["电烤箱","https://www.mi.com/buy?product_id=9866","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7f39b7ac49227fc59c3f2b2105d25d6.jpg?thumb=1&w=50&h=50&f=webp&q=90"],
		["扫地机器人","https://www.mi.com/search?keyword=%E6%89%AB%E5%9C%B0%E6%9C%BA%E5%99%A8%E4%BA%BA","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/603beb09930e32addd1b362bf43c7ac2.jpg?thumb=1&w=50&h=50"],
		["吸尘器","https://www.mi.com/search?keyword=%E5%90%B8%E5%B0%98%E5%99%A8","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/26deda5474eb7eb7e5b34547c58b9893.jpg?thumb=1&w=50&h=50"],
		["空气净化器","https://www.mi.com/search?keyword=%E7%A9%BA%E6%B0%94%E5%87%80%E5%8C%96%E5%99%A8","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e997ed31cd5199ec0a24eeb48a37b1e7.jpg?thumb=1&w=50&h=50"],
		["电饭煲","https://www.mi.com/search?keyword=%E7%94%B5%E9%A5%AD%E7%85%B2","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/390e15818dd103b2f96f4ac742d47379.jpg?thumb=1&w=50&h=50"],
		["电磁炉","https://www.mi.com/search?keyword=%E7%94%B5%E7%A3%81%E7%82%89","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d93e6a98403262a506c9e9b22293cdae.jpg?thumb=1&w=50&h=50"],
		["电水壶","https://www.mi.com/search?keyword=%E7%94%B5%E6%B0%B4%E5%A3%B6","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/39c8ccbebd08687bc6780373b7ef2a95.jpg?thumb=1&w=50&h=50"],
		["滤水壶","https://www.mi.com/search?keyword=%E6%BB%A4%E6%B0%B4%E5%A3%B6","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9ffcebcacca008ed2d92a692f7312ef6.jpg?thumb=1&w=50&h=50"],
		["落地风扇","https://www.mi.com/search?keyword=%E8%90%BD%E5%9C%B0%E9%A3%8E%E6%89%87","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3a3e4238b70ef8db89ae77f8a3762fc8.png?thumb=1&w=50&h=50"],
		["投影仪","https://www.mi.com/projection-youth/","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c12fd1da9fed662842d6f5c57d7737c9.png?thumb=1&w=50&h=50"],
		["灯具","https://www.mi.com/search?keyword=%E7%81%AF%E5%85%B7","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c0a6b523433a492dbf32035b2983d98e.jpg?thumb=1&w=50&h=50"],
		["插线板","https://www.mi.com/search?keyword=%E6%8F%92%E6%8E%92","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d1c8cfb055709db380c6de981a4c894b.jpg?thumb=1&w=50&h=50"],
		["新风机","https://www.mi.com/search?keyword=%E6%96%B0%E9%A3%8E%E6%9C%BA","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1cc417a7cae8c4ff8b0041fa29003717.jpg?thumb=1&w=50&h=50"],
		["电暖器","https://www.mi.com/search?keyword=%E7%94%B5%E6%9A%96%E5%99%A8","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6aa1871d84aaae98cd676f5e2cf5c2f2.jpg?thumb=1&w=50&h=50"],
		["电压力锅","https://www.mi.com/buy?product_id=9270","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ba8d2a2d383f612575d323ce159bdce3.jpg?thumb=1&w=50&h=50"],
        ["料理机","https://www.mi.com/search?keyword=%E6%96%99%E7%90%86%E6%9C%BA","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0bf0ba35dc3ad57115c59f0ebde0fd1d.jpg?thumb=1&w=50&h=50"]
    ],
	[
		["小米手环6 NFC版","https://www.mi.com/shouhuan6/nfc","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/baba53e0cfd7bf0958edd84f8c5fcbbb.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米手环6 标准版","https://www.mi.com/shouhuan6","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/baba53e0cfd7bf0958edd84f8c5fcbbb.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["Redmi 手表","https://www.mi.com/redmi-watch-mulan","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69bd883c1fc06ce41ff0fa1423b77e4e.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米手环5NFC","https://www.mi.com/shouhuan5/nfc","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8e8c85f251ed8b5cd54651c4be13bc68.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米手环5","https://www.mi.com/shouhuan5","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/18f75b53afbe8ce2e858cb5622d60613.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米手表","https://www.mi.com/search?keyword=%E6%89%8B%E8%A1%A8","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3cc76c2ce836255c1b2e3e1cf477cfef.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["平衡车","https://www.mi.com/search?keyword=%E5%B9%B3%E8%A1%A1%E8%BD%A6","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/50180b158690a40f9cbc684c7646d297.jpg?thumb=1&w=50&h=50"],
		["滑板车","https://www.mi.com/search?keyword=%E6%BB%91%E6%9D%BF%E8%BD%A6","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4e9da27ebbeeb38078910c97173c4671.jpg?thumb=1&w=50&h=50"],
		["自行车","https://www.mi.com/buy?product_id=11368","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/749c779fd3789ba94033da8aaa547dcd.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["车载充电器","https://www.mi.com/search?keyword=%E8%BD%A6%E8%BD%BD%E5%85%85%E7%94%B5%E5%99%A8","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/787c807176455f9ae40146af11e98b1e.jpg?thumb=1&w=50&h=50&f=webp&q=90"],
		["智能后视镜","https://www.mi.com/search?keyword=%E5%90%8E%E8%A7%86%E9%95%9C","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/971c8c01a246c7ac69a4c9be9e77e832.jpg?thumb=1&w=50&h=50"],
		["智能记录仪","https://www.mi.com/search?keyword=%E8%AE%B0%E5%BD%95%E4%BB%AA","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2748064a9ac9969e53851479d55f1a9.jpg?thumb=1&w=50&h=50"],
		["无线车充","https://www.mi.com/wireless-car-charger/","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/efd04d4a90822e7e2f04a365083f2607.jpg?thumb=1&w=50&h=50"],
		["充气宝","https://www.mi.com/search?keyword=%E5%85%85%E6%B0%94%E5%AE%9D","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4003fd9fe0f81232c5e7c6ce2a9b3b7.png?thumb=1&w=50&h=50&f=webp&q=90"],
        ["石英表","https://www.mi.com/search?keyword=%E7%9F%B3%E8%8B%B1%E8%A1%A8","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f941386e72f745b02e8921b6c8055cd6.jpg?thumb=1&w=50&h=50&f=webp&q=90"]
    ],
	[
		["打印机","https://www.mi.com/search?keyword=%E6%89%93%E5%8D%B0%E6%9C%BA","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=50&h=50"],
		["喷墨打印机","https://www.mi.com/buy?product_id=10780","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b1c8b0308b1591ab93b7fe0937a52427.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["喷墨打印机墨水","https://www.mi.com/buy?product_id=10779","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a18e471294cf49b6937ae90fac6d583.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米路由器","https://www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E8%B7%AF%E7%94%B1%E5%99%A8","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4670a965ac5f0dd32689e06c27cea78f.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["智能家庭","https://www.mi.com/search?keyword=%E6%99%BA%E8%83%BD%E5%AE%B6%E5%BA%AD","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa7c5302bf6c8e040b084dee50fa699f.jpg?thumb=1&w=50&h=50&f=webp&q=90"],
		["对讲机","https://www.mi.com/search?keyword=%E5%AF%B9%E8%AE%B2%E6%9C%BA","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21fedf7ba9019bce59cbc4856f907076.jpg?thumb=1&w=50&h=50"],
		["摄像机","https://www.mi.com/search?keyword=%E6%91%84%E5%83%8F%E6%9C%BA","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/067f4a6f0ffb264ed40734a97deae52d.jpg?thumb=1&w=50&h=50"],
		["照相机","https://www.mi.com/search?keyword=%E7%85%A7%E7%9B%B8%E6%9C%BA","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/81d89cfdb72d0445ed4ef19942d9dedb.jpg?thumb=1&w=50&h=50"],
		["智能门锁","https://www.mi.com/search?keyword=%E6%99%BA%E8%83%BD%E9%97%A8%E9%94%81","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4fb7885d49255b93f7245aa53501294c.jpg?thumb=1&w=50&h=50"],
		["视频门铃","https://www.mi.com/search?keyword=%E9%97%A8%E9%93%83","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/feaab5bd13257dbe8f30b80b6a4472be.jpg?thumb=1&w=50&h=50"],
		["小爱老师","https://www.mi.com/search?keyword=%E5%B0%8F%E7%88%B1%E8%80%81%E5%B8%88","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/90b75c1046e486c19f14effd9b45f488.png?thumb=1&w=50&h=50"],
		["Redmi路由器","https://www.mi.com/search?keyword=Redmi%E8%B7%AF%E7%94%B1%E5%99%A8","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/51eacc66512a31713808a60b5695ae28.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小爱音箱","https://www.mi.com/search?keyword=%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d5963e212402fa5ebd2e71dd10c426c.jpg?thumb=1&w=50&h=50"],
		["云服务空间年卡","https://www.mi.com/buy?product_id=10000197","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7646993f6c382fb32ebd9bfda8ba6158.png?thumb=1&w=50&h=50&f=webp&q=90"],
        ["云服务空间月卡","https://www.mi.com/buy?product_id=8262","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7646993f6c382fb32ebd9bfda8ba6158.png?thumb=1&w=50&h=50&f=webp&q=90"]
    ],
	[
		["移动电源","https://www.mi.com/search?keyword=%E5%85%85%E7%94%B5%E5%AE%9D","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["数据线","https://www.mi.com/search?keyword=usb%E6%95%B0%E6%8D%AE%E7%BA%BF","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/45dd7a2c4fc3d17d5d261ed3eed7cd15.jpg?thumb=1&w=50&h=50"],
		["车充","https://www.mi.com/search?keyword=%E8%BD%A6%E8%BD%BD%E5%85%85%E7%94%B5%E5%99%A8","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/397d8119508e8e3c895fc30ece88e799.jpg?thumb=1&w=50&h=50"],
		["充电器","https://www.mi.com/search?keyword=%E5%85%85%E7%94%B5%E5%99%A8","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/864bcd18999a7b0fe22365f7ea7909e0.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["电池","https://www.mi.com/search?keyword=%E5%BD%A9%E8%99%B9%E7%94%B5%E6%B1%A0","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/10ec831749f1c657fc0a494feab15ed4.jpg?thumb=1&w=50&h=50"],
		["自拍杆","https://www.mi.com/search?keyword=%E8%87%AA%E6%8B%8D%E6%9D%86","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2725e04c955dc060ac142fabbf809c1e.jpg?thumb=1&w=50&h=50"],
		["手机壳","https://www.mi.com/search?keyword=%E6%89%8B%E6%9C%BA%E5%A3%B3","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5c6e60e48edf17219724faad95963b93.jpg?thumb=1&w=50&h=50"],
		["手机贴膜","https://www.mi.com/search?keyword=%E6%89%8B%E6%9C%BA%E8%B4%B4%E8%86%9C","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e9e248c899fd895c9267f494ea1aaebf.jpg?thumb=1&w=50&h=50"],
		["无线充电器","https://www.mi.com/search?keyword=%E6%97%A0%E7%BA%BF%E5%85%85%E7%94%B5%E5%99%A8","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27074367aa02371a3c3c417c41195346.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["平板配件","https://www.mi.com/search?keyword=%E5%B9%B3%E6%9D%BF%E9%85%8D%E4%BB%B6","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6ce8ff4bc1e6ded2d40c53b2aa83b98c.jpg?thumb=1&w=50&h=50"],
		["黑鲨配件","https://www.mi.com/search?keyword=%E9%BB%91%E9%B2%A8%E9%85%8D%E4%BB%B6","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9c3ead590f49767a4f562b7285215f5e.jpg?thumb=1&w=50&h=50"],
        ["其他配件","https://www.mi.com/search?keyword=%E5%85%B6%E4%BB%96%E7%94%B5%E6%BA%90%E9%85%8D%E4%BB%B6","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d9989807dbc15c1a82bc49acc1f06f.jpg?thumb=1&w=50&h=50"]
    ],
	[
		["洗手机","https://www.mi.com/dispenser/","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&w=50&h=50"],
		["剃须刀","https://www.mi.com/search?keyword=%E5%89%83%E9%A1%BB%E5%88%80","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60d7bdf307ceaba08b3275246ad3ab53.jpg?thumb=1&w=50&h=50"],
		["修剪器","https://www.mi.com/buy?product_id=10974","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96b5d738ce5926e3a6969ad68fa1521d.jpg?thumb=1&w=50&h=50&f=webp&q=90"],
		["牙刷","https://www.mi.com/search?keyword=%E7%89%99%E5%88%B7","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/15447769c461fdc71e84a7badb83f09b.jpg?thumb=1&w=50&h=50"],
		["吹风机","https://www.mi.com/hair-dryer/","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bba7ce79f4d61939c69b7a26bf507bae.jpg?thumb=1&w=50&h=50"],
		["体重秤","https://www.mi.com/search?keyword=%E4%BD%93%E9%87%8D%E7%A7%A4","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/459afd0eb2a3bc6313e7ac62bd3a52df.png?thumb=1&w=50&h=50"],
		["体脂秤","https://www.mi.com/search?keyword=%E4%BD%93%E8%84%82%E7%A7%A4","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fe6166ca2026008abb86bc67dfd8211d.jpg?thumb=1&w=50&h=50"],
		["早教启智","https://www.mi.com/search?keyword=%E6%97%A9%E6%95%99%E5%90%AF%E6%99%BA","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2cb10391d6527bf64126a63446a38e2e.jpg?thumb=1&w=50&h=50"],
		["益智积木","https://www.mi.com/search?keyword=%E7%9B%8A%E6%99%BA%E7%A7%AF%E6%9C%A8","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d9d211ae20e700690ce9eec644ac3f31.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["儿童手表","https://www.mi.com/search?keyword=%E5%84%BF%E7%AB%A5%E6%89%8B%E8%A1%A8","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0b3a592784632760a7ef25de50147a7.jpg?thumb=1&w=50&h=50"],
		["儿童滑板车","https://www.mi.com/search?keyword=%E5%84%BF%E7%AB%A5%E6%BB%91%E6%9D%BF%E8%BD%A6","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9f6a34ed8071b821ee5aa8d32a7be95d.jpg?thumb=1&w=50&h=50"],
		["婴儿推车","https://www.mi.com/babyfoldingcar/","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=50&h=50"],
		["走步机","https://www.mi.com/treadmill/?cfrom=search","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fb1fee7e2f2963baae34d3611a2b7e9f.jpg?thumb=1&w=50&h=50"],
        ["智能遥控车","https://www.mi.com/buy?product_id=12418","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5852aab5992fdb1db09cd89edcb802c0.png?thumb=1&w=50&h=50&f=webp&q=90"]
    ],
	[
		["Redmi AirDots 3","https://www.mi.com/buy?product_id=2210700010","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/49d3d8258e12b50d49aae75d7ccdb5af.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小爱音箱 Art 电池版","https://www.mi.com/buy?product_id=13032","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71d2ba249ae5d3f2d4517ddf9c0f881a.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小爱触屏音箱Pro 8","https://www.mi.com/aispeaker-pro8","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/146ad5dbbe9721c031aa168d4bf580ec.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["Redmi小爱触屏音箱 8","https://www.mi.com/redmi-xai","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7628d4253b1c1fccb5606095d0c5bbe3.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小爱音箱 Pro ","https://www.mi.com/buy?product_id=10745","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/360215a1e32317abb912d48c3e80dd20.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米小爱音箱","https://www.mi.com/buy?product_id=10744","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/374ce749560e0e74a792b6222048a472.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米小爱触屏音箱","https://www.mi.com/aispeaker-touch/?cfrom=search","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/abe665fafbef94eb3626ae8baf1de97e.jpg?thumb=1&w=50&h=50"],
		["Redmi音箱","https://www.mi.com/redmiaispeaker-play","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dacef871b6af373b0212e28b028890b8.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米小爱音箱 Play","https://www.mi.com/aispeaker-play","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d5963e212402fa5ebd2e71dd10c426c.jpg?thumb=1&w=50&h=50"],
		["线控耳机","https://www.mi.com/search?keyword=%E7%BA%BF%E6%8E%A7%E8%80%B3%E6%9C%BA","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8b3d235f4a5a5bf5c9d8d066d2166e6c.jpg?thumb=1&w=50&h=50"],
		["蓝牙耳机","https://www.mi.com/search?keyword=%E8%93%9D%E7%89%99%E8%80%B3%E6%9C%BA","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1b6fa86f424bc8b0355ea899ae0dd39b.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["头戴耳机","https://www.mi.com/search?keyword=%E5%A4%B4%E6%88%B4%E8%80%B3%E6%9C%BA","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/28a77451da1dbd0d3e42d529777997c3.jpg?thumb=1&w=50&h=50"],
		["品牌耳机","https://www.mi.com/search?keyword=%E5%93%81%E7%89%8C%E8%80%B3%E6%9C%BA","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4885bda69e45b870a5bcf5bbaea1548b.jpg?thumb=1&w=50&h=50"],
		["蓝牙音箱","https://www.mi.com/search?keyword=%E8%93%9D%E7%89%99%E9%9F%B3%E7%AE%B1","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e8b89fb3702dc7c41248898f2b86f6d.png?thumb=1&w=50&h=50&f=webp&q=90"],
		["小米AI音箱","https://www.mi.com/aispeaker/","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/db89d422ef877cf7290616fef515e413.jpg?thumb=1&w=50&h=50"],
		["小米小爱音箱HD","https://www.mi.com/aispeaker-hd/","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4df2fa022495e79f890a943a9d7e70a5.jpg?thumb=1&w=50&h=50"],
        ["k歌耳机","https://www.mi.com/search?keyword=k%E6%AD%8C%E8%80%B3%E6%9C%BA","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a290d924c1bbd1e3ce64e96f497d4059.jpg?thumb=1&w=50&h=50"]
    ],
	[
		["小背包","https://www.mi.com/buy?product_id=11674","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=50&h=50&f=webp&q=90"],
		["双肩包","https://www.mi.com/search?keyword=%E5%8F%8C%E8%82%A9%E5%8C%85","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg?thumb=1&w=50&h=50"],
		["胸包","https://www.mi.com/search?keyword=%E8%83%B8%E5%8C%85","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2846c64ffd97969c639979da9bb97974.jpg?thumb=1&w=50&h=50&f=webp&q=90"],
		["旅行箱","https://www.mi.com/search?keyword=%E6%97%85%E8%A1%8C%E7%AE%B1","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5138635ef1396e35856ec942e3b6c0.jpg?thumb=1&w=50&h=50&f=webp&q=90"],
		["运动鞋","https://www.mi.com/search?keyword=%E8%BF%90%E5%8A%A8%E9%9E%8B","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e899d08e36c306570d4fe3c75df90a42.jpg?thumb=1&w=50&h=50"],
		["眼镜","https://www.mi.com/search?keyword=%E7%9C%BC%E9%95%9C","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d521bd58668f66c50562b8fa8949f67c.jpg?thumb=1&w=50&h=50"],
		["床垫","https://www.mi.com/search?keyword=%E5%BA%8A%E5%9E%AB","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/aba45662667dceaf4ba0e5b08f44d3a7.jpg?thumb=1&w=50&h=50"],
		["枕头","https://www.mi.com/search?keyword=%E6%9E%95%E5%A4%B4","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/744306b95df4d130bdfc346ff2b3c871.png?thumb=1&w=50&h=50"],
		["螺丝刀","https://www.mi.com/search?keyword=%E8%9E%BA%E4%B8%9D%E5%88%80","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/458169c8138413666feb860068ce1a56.jpg?thumb=1&w=50&h=50"],
		["保温杯","https://www.mi.com/search?keyword=%E4%BF%9D%E6%B8%A9%E6%9D%AF","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/813d173eff50a83abb8abd5abde5f5a6.jpg?thumb=1&w=50&h=50"],
		["驱蚊器","https://www.mi.com/search?keyword=%E9%A9%B1%E8%9A%8A%E5%99%A8","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/59d3a701ac0bbb78f1b1d0ea7ebc7505.jpg?thumb=1&w=50&h=50"],
		["毛巾/浴巾","https://www.mi.com/search?keyword=%E6%AF%9B%E5%B7%BE","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21c3ec8638dd75f5c54f1a69864a1cc9.jpg?thumb=1&w=50&h=50"],
		["米兔","https://www.mi.com/search?keyword=%E7%B1%B3%E5%85%94","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ac95ad25bb8f6391abcb937b03c1743.png?thumb=1&w=50&h=50&f=webp&q=90"],
        ["笔","https://www.mi.com/search?keyword=%E7%AC%94","https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c9279a17e9399958420af64e449e3214.jpg?thumb=1&w=50&h=50"]
    ]
]

var ad_list=document.getElementsByClassName("ad-inner");
{/* <li>
    <a href="javascript:;">
        <div class="item-img" style="background-image: url('https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=50&h=50&f=webp&q=90');"></div>
        <div class="item-name">Redmi MAX 86″ 超大屏...</div>
    </a>
</li> */}
for(var i=0;i<10;i++){
    ad_list[i].innerHTML="";
    for(var j=0;j<all[i].length;j++){
        li=document.createElement("li");
        a=document.createElement("a");
        div_img=document.createElement("div");
        div_name=document.createElement("div");
        
        a.href=all[i][j][1];
        
        div_img.className="item-img";
        div_img.style.backgroundImage="url(\'"+all[i][j][2]+"\')";
        
        div_name.className="item-name";
        div_name.innerText=all[i][j][0];

        a.appendChild(div_img);
        a.appendChild(div_name);
        li.appendChild(a);
        ad_list[i].appendChild(li)
    }

}
