import {getCookie} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.8/cookie.js";
import {getJSON} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.8/api.js";
import {redirect} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.8/url.js";

if (getCookie("login")){
    console.log(getCookie("login"));
    getJSON("https://asia-southeast2-qrcreate-447114.cloudfunctions.net/qrcreate/data/user","login",getCookie("login"),responseFunction);
}else{
    // redirect("/login");
}


function responseFunction(result){
    console.log(result);
    if (result.status === 200){
        // redirect("/qr");
    }else{
        // redirect("/login");
    }
}