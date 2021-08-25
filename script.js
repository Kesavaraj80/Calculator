const main_container = document.createElement("div");
main_container.setAttribute('class','main-box');
document.body.append(main_container);
main_container.innerHTML=`
<input type="text" class="input1" id="box1">
<div class="buttons">
    <button class="btn" onclick="clr()">CL</button>
    <button class="btn" onclick="del()">DEL</button>
    <button class="btn" onclick="display('%')">%</button>
    <button class="btn" onclick="display('/')">/</button>
</div>
<div class="buttons">
    <button class="btn" onclick="display('9')">9</button>
    <button class="btn" onclick="display('8')">8</button>
    <button class="btn" onclick="display('7')">7</button>
    <button class="btn" onclick="display('*')">*</button>
</div>
<div class="buttons">
    <button class="btn" onclick="display('6')">6</button>
    <button class="btn" onclick="display('5')">5</button>
    <button class="btn" onclick="display('4')">4</button>
    <button class="btn" onclick="display('-')">-</button>
</div>
<div class="buttons">
    <button class="btn" onclick="display('3')">3</button>
    <button class="btn" onclick="display('2')">2</button>
    <button class="btn" onclick="display('1')">1</button>
    <button class="btn" onclick="display('+')">+</button>
</div>
<div class="buttons">
    <button class="btn" onclick="display('0')">0</button>
    <button class="btn" onclick="display('00')">00</button>
    <button class="btn" onclick="display('.')">.</button>
    <button class="btn" onclick="calc()">=</button>
</div>`

function display(num){
    document.getElementById('box1').value+=num;
}
function del(){
    document.querySelector(".input1").value=document.getElementById('box1').value.slice(0,-1);
}
function calc(){
    try{
        document.getElementById('box1').value=eval(document.getElementById('box1').value);
    }
    catch{
        alert("Invalid Calculation")
    }
}
function clr(){
    document.getElementById('box1').value="";
}