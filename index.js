import {getCookie} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.8/cookie.js";
import {getJSON} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.8/api.js";
import {redirect} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.8/url.js";

if (getCookie("login")){
    getJSON("https://asia-southeast2-awangga.cloudfunctions.net/florka/data/user","login",getCookie("login"),responseFunction);
}else{
    redirect("/login");
}


function responseFunction(result){
    console.log(result);
    if (result.status === 200){
        redirect("/dashboard");
    }else{
        redirect("/daftar");
    }
}