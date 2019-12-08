function ohayou(){
    alert('Hello!');
}
function fuck(){
    window.alert('犯すぞ');
}
function write_test(){
    const array = [];
    for(let i=1;i<=10;i++){
        array[i-1] = i;
    }
    window.alert(array);
}
function json_test(){
    var obj= {
        name:"Baka",
        age:24
    };
    const array = [obj.name,obj.age];
    alert(obj.name);
    alert(obj.age);
    alert(array);
}

function parseJSON(){
    var str = '{"width":160,"height":120}';
    var obj = JSON.parse(str);
    window.alert(obj)
}
function click(){
    document.getElementById("text-button").innerHTML = "クリックされた";
}
