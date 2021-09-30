var m=[];
for(let i=0;i<3;i++){
    var a=i;
    m[i]=function(){
        alert(a);
    }
}
m[0]();
m[1]();
m[2]();