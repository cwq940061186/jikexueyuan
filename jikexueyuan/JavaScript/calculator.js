//设一些公共变量作为存储。
var val1 = "";
var val2 = "";
var sign = "";

//读取html元素的id
var pRes = document.getElementById("result");
var pNum = document.getElementById("calNum")

var bReset = document.getElementById("b-reset");
var bDel = document.getElementById("b-del");
var bCha = document.getElementById("b-cha");
var bRem = document.getElementById("b-rem");
var bValue = document.getElementById("b-value");

var bOne = document.getElementById("b-one");
var bTwo = document.getElementById("b-two");
var bThree = document.getElementById("b-three");
var bTour = document.getElementById("b-four");
var bFive = document.getElementById("b-five");
var bSix = document.getElementById("b-six");
var bSeven = document.getElementById("b-seven");
var bEight = document.getElementById("b-eight");
var bNine = document.getElementById("b-nine");
var bZero = document.getElementById("b-zero");
var bDot = document.getElementById("b-dot");

var bPlus = document.getElementById("b-plus");
var bReduce = document.getElementById("b-reduce");
var bMultiply = document.getElementById("b-multiply");
var bDivide = document.getElementById("b-divide");

//添加dom2事件处理程序
bReset.addEventListener("click", recRes, false);
bDel.addEventListener("click", delRes, false);
bCha.addEventListener("click", chaPAN, false);
bRem.addEventListener("click", function () { calculator('%') }, false);
bValue.addEventListener("click", valueCal, false);

bOne.addEventListener("click", function () { pushNum(1) }, false);
bTwo.addEventListener("click", function () { pushNum(2) }, false);
bThree.addEventListener("click", function () { pushNum(3) }, false);
bTour.addEventListener("click", function () { pushNum(4) }, false);
bFive.addEventListener("click", function () { pushNum(5) }, false);
bSix.addEventListener("click", function () { pushNum(6) }, false);
bSeven.addEventListener("click", function () { pushNum(7) }, false);
bEight.addEventListener("click", function () { pushNum(8) }, false);
bNine.addEventListener("click", function () { pushNum(9) }, false);
bZero.addEventListener("click", function () { pushNum(0) }, false);
bDot.addEventListener("click", function () { pushNum('.') }, false);

bPlus.addEventListener("click", function () { calculator('+') }, false);
bReduce.addEventListener("click", function () { calculator('-') }, false);
bMultiply.addEventListener("click", function () { calculator('*') }, false);
bDivide.addEventListener("click", function () { calculator('/') }, false);

//添加针对ie的事件处理程序
bReset.attachEvent("onclick", recRes);
bDel.attachEvent("onclick", delRes);
bCha.attachEvent("onclick", chaPAN);
bRem.attachEvent("onclick", function () { calculator('%') });
bValue.attachEvent("onclick", valueCal);

bOne.attachEvent("onclick", function () { pushNum(1) });
bTwo.attachEvent("onclick", function () { pushNum(2) });
bThree.attachEvent("onclick", function () { pushNum(3) });
bTour.attachEvent("onclick", function () { pushNum(4) });
bFive.attachEvent("onclick", function () { pushNum(5) });
bSix.attachEvent("onclick", function () { pushNum(6) });
bSeven.attachEvent("onclick", function () { pushNum(7) });
bEight.attachEvent("onclick", function () { pushNum(8) });
bNine.attachEvent("onclick", function () { pushNum(9) });
bZero.attachEvent("onclick", function () { pushNum(0) });
bDot.attachEvent("onclick", function () { pushNum('.') });

bPlus.attachEvent("onclick", function () { calculator('+') });
bReduce.attachEvent("onclick", function () { calculator('-') });
bMultiply.attachEvent("onclick", function () { calculator('*') });
bDivide.attachEvent("onclick", function () { calculator('/') });

//功能代码
function recRes() {
    //清空显示屏的内容
    document.getElementById("calNum").innerHTML = "";
}

function delRes() {
    //删除已输入数字的最后一位
    var valArray = document.getElementById("calNum").innerHTML.split("");
    valArray.pop();

    document.getElementById("calNum").innerHTML = valArray.join("");
    //把结果输出到页面

    val1 = document.getElementById("calNum").innerHTML;
    //存储最新值
}

function chaPAN() {
    //更改数字的正负
    var valArray = document.getElementById("calNum").innerHTML.split("");

    if (valArray[0] == "-") {
        valArray.shift();
        document.getElementById("calNum").innerHTML = valArray.join("");
        //把结果输出到页面
    } else {
        valArray.unshift("-");
        document.getElementById("calNum").innerHTML = valArray.join("");
        //把结果输出到页面
    }
    //存储最新值
    val1 = document.getElementById("calNum").innerHTML;
}

function pushNum(inputNum) {
    //点击数字按钮后把数字添加到显示器
    var valArray = document.getElementById("calNum").innerHTML.split("");
    valArray.push(inputNum);
    //alert(inputNum);

    document.getElementById("calNum").innerHTML = valArray.join("");
    //把答案输出到页面
    val1 = document.getElementById("calNum").innerHTML;
}

function calculator(operator) {
    //运算符方法
    sign = operator;
    //alert(operator);
    var res2 = document.getElementById("calNum").innerHTML;
    if (!res2.trim()) {
        val2 = document.getElementById("result").innerHTML;
    } else {
        val2 = document.getElementById("calNum").innerHTML;
    }
    recRes();
}


function valueCal() {
    //运算结果。

    if (!val1.trim() || !val2.trim()) {
        document.getElementById("result").innerHTML = "请输入数字";
        //排除空值

    } else if (isNaN(val1) || isNaN(val2)) {
        document.getElementById("result").innerHTML = "请输入数字";
        //排除非数值
    } else {
        if (sign == "+") {
            document.getElementById("result").innerHTML = parseFloat((Number(val1) + Number(val2)).toFixed(8));
            recRes();
        } else if (sign == "-") {
            document.getElementById("result").innerHTML = parseFloat((val2 - val1).toFixed(8));
            recRes();
        } else if (sign == "%") {
            document.getElementById("result").innerHTML = parseFloat((val2 % val1).toFixed(8));
            recRes();
        } else if (sign == "*") {
            document.getElementById("result").innerHTML = parseFloat((val2 * val1).toFixed(8));
            recRes();
        } else if (sign == "/") {
            if (val1 == 0) {
                document.getElementById("result").innerHTML = "NAN";
                recRes();
            } else {
                document.getElementById("result").innerHTML = parseFloat((val2 / val1).toFixed(8));
                recRes();
            }
        }
    }
}