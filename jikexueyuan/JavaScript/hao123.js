var bChangeGreen = document.getElementById("skin-item-green");
var bChangePink = document.getElementById("skin-item-pink");
var bChangeBlue = document.getElementById("skin-item-blue");
var bChangeGray = document.getElementById("skin-item-gray");

var navRecommend = document.getElementById("nav-recommend");
var recTitle = document.getElementById("nav-recommend-title");
var oftenIndex = document.getElementById("often-index");
var navType = document.getElementById("nav-type");

bChangeGreen.addEventListener("click", changeGreen, false);
bChangePink.addEventListener("click", changePink, false);
bChangeBlue.addEventListener("click", changeBlue, false);
bChangeGray.addEventListener("click", changeGray, false);

changeGreen.attachEvent("onclick", changeGreen);
changePink.attachEvent("onclick", changePink);
changeBlue.attachEvent("onclick", changeBlue);
changeGray.attachEvent("onclick", changeGray);

function changeGreen() {
    document.getElementById("nav-recommend").style.borderColor = "#ADE0C1";
    document.getElementById("often-index").style.borderColor = "#ADE0C1";

    document.getElementById("nav-recommend-title").style.color = "#07AC72";
    document.getElementById("nav-type").style.borderTopColor = "#07AC72";

    document.getElementById("nav-type").children[0].style.background = "#0AA770";
    document.getElementById("set-first").style.background = "#0AA770";

    document.getElementById("rec-recommend-index").getElementsByTagName("a")[0].style.color = "#07AC72";
    document.getElementById("rec-recommend-index").getElementsByTagName("a")[1].style.color = "#07AC72";
    document.getElementById("rec-recommend-index").getElementsByTagName("a")[2].style.color = "#07AC72";
    document.getElementById("rec-recommend-index").getElementsByTagName("a")[3].style.color = "#07AC72";
    document.getElementById("rec-recommend-index").getElementsByTagName("a")[4].style.color = "#07AC72";
    document.getElementById("rec-recommend-index").getElementsByTagName("a")[5].style.color = "#07AC72";

    cookie("color", "green");
}

function changePink() {
    document.getElementById("nav-recommend").style.borderColor = "#FAEBD7";
    document.getElementById("often-index").style.borderColor = "#FAEBD7";

    document.getElementById("nav-recommend-title").style.color = "#DC143C";
    document.getElementById("nav-type").style.borderTopColor = "#DC143C";

    document.getElementById("nav-type").children[0].style.background = "#FF6EB4";
    document.getElementById("set-first").style.background = "#FF6EB4	";

    document.getElementById("rec-recommend-index").getElementsByTagName("a")[0].style.color = "#DC143C";
    document.getElementById("rec-recommend-index").getElementsByTagName("a")[1].style.color = "#DC143C";
    document.getElementById("rec-recommend-index").getElementsByTagName("a")[2].style.color = "#DC143C";
    document.getElementById("rec-recommend-index").getElementsByTagName("a")[3].style.color = "#DC143C";
    document.getElementById("rec-recommend-index").getElementsByTagName("a")[4].style.color = "#DC143C";
    document.getElementById("rec-recommend-index").getElementsByTagName("a")[5].style.color = "#DC143C";

    cookie("color", "pink");
}

function changeBlue() {
    document.getElementById("nav-recommend").style.borderColor = "#1E90FF";
    document.getElementById("often-index").style.borderColor = "#1E90FF";

    document.getElementById("nav-recommend-title").style.color = "#4169E1";
    document.getElementById("nav-type").style.borderTopColor = "#4169E1";

    document.getElementById("nav-type").children[0].style.background = "#00CED1";
    document.getElementById("set-first").style.background = "#00CED1";

    document.getElementById("rec-recommend-index").getElementsByTagName("a")[0].style.color = "#1E90FF";
    document.getElementById("rec-recommend-index").getElementsByTagName("a")[1].style.color = "#1E90FF";
    document.getElementById("rec-recommend-index").getElementsByTagName("a")[2].style.color = "#1E90FF";
    document.getElementById("rec-recommend-index").getElementsByTagName("a")[3].style.color = "#1E90FF";
    document.getElementById("rec-recommend-index").getElementsByTagName("a")[4].style.color = "#1E90FF";
    document.getElementById("rec-recommend-index").getElementsByTagName("a")[5].style.color = "#1E90FF";

    cookie("color", "blue");
}

function changeGray() {
    document.getElementById("nav-recommend").style.borderColor = "#808080";
    document.getElementById("often-index").style.borderColor = "#808080";

    document.getElementById("nav-recommend-title").style.color = "#696969";
    document.getElementById("nav-type").style.borderTopColor = "#696969";

    document.getElementById("nav-type").children[0].style.background = "#808080";
    document.getElementById("set-first").style.background = "#808080";

    document.getElementById("rec-recommend-index").getElementsByTagName("a")[0].style.color = "#808080";
    document.getElementById("rec-recommend-index").getElementsByTagName("a")[1].style.color = "#808080";
    document.getElementById("rec-recommend-index").getElementsByTagName("a")[2].style.color = "#808080";
    document.getElementById("rec-recommend-index").getElementsByTagName("a")[3].style.color = "#808080";
    document.getElementById("rec-recommend-index").getElementsByTagName("a")[4].style.color = "#808080";
    document.getElementById("rec-recommend-index").getElementsByTagName("a")[5].style.color = "#808080";

    cookie("color", "gray");
}

//cookie操作
function cookie(name, value, opts) {
    if (typeof value !== 'undefined') {
        var expires = '';
        opts = opts || {};

        if (value === null) {
            value = '';
            opts.expires = -1;
        }

        if (opts.expires) {
            var date = new Date();
            date.setTime(date.getTime() + (opts.expires * 60 * 60 * 1000));
            expires = '; expires=' + date.toGMTString();
        }

        var path = opts.path ? '; path=' + opts.path : '';
        var domain = opts.domain ? '; domain=' + opts.domain : '';
        var secure = opts.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {

        var cookies;

        if (document.cookie && document.cookie !== '') {
            cookies = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));

            if (cookies) {
                return decodeURIComponent(cookies[2]);
            } else {
                return null;
            }
        }
    }
}