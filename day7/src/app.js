import Table from "./js/table";
import {string} from "./js/a";

console.log(Table);

console.log(string);

console.log(document.querySelector('.wrap'));

import "./css/style.css";
import "./font/iconfont.css";
import "./sass/index.scss";

console.log('hello');

const xhr = new XMLHttpRequest();
xhr.onload = function(){
    if(xhr.status===200){
        console.log(xhr.responseText);
    }
}
xhr.open('get','/getdata?name=zs');
xhr.send(null);


const xhr1 = new XMLHttpRequest();
xhr1.onload = function(){
    if(xhr.status===200){
        console.log(xhr.responseText);
    }
}
xhr1.open('post','/login');
// xhr1.setRequestHeader('content-type','application/json')
// xhr1.send(JSON.stringify({
//     name:"zs",
//     pwd:1234
// }));

xhr1.setRequestHeader('content-type','application/x-www-form-urlencoded');
xhr1.send('name=zs&pwd=1234');
//{"name":"zs","pwd":1234}