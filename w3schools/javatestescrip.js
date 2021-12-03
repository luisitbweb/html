/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global Event, myVideo */

var txt = "";
var person = {fname: "luis", lname: "carlos", age: "29"};
person.nacionalidade = "brasileito.";
var x;
for (x in person) {
    txt += person[x] + " ";
}
document.getElementById("demo").innerHTML = txt;

function person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
        this.lastName = name;
    };
}
var myMother = new person("Sally", "Rally", 48, "green");
myMother.changeName("Doe");
document.getElementById("demo").innerHTML =
        "My mother's last name is " + myMother.lastName;

function pessoa(primeiroNome, segundoNome, idade, olho) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.idade = idade;
    this.olho = olho;
    // acrescentando nacionalidades no construtor
    this.nacionalidade = "inglês,";
    this.nacionalidad = "inglesa.";
}
var meuPai = new pessoa("luis", "carlos", 55, "azul");
var minhamae = new pessoa("irani", "maria", 48, "verde");

document.getElementById("demo").innerHTML = "Meu Pai é " + meuPai.nacionalidade +
        " Minha Mãe é " + minhamae.nacionalidad;

function pessoa(primeiro, segundo, idade, olho) {
    this.primeiroNome = primeiro;
    this.seungodoNome = segundo;
    this.idade = idade;
    this.olho = olho;
    this.nome = function () {
        return this.primeiroNome + " " + this.seungodoNome;
    };
}
pessoa.prototype.nacionalidade = "Brasileiro";

var meuPai = new pessoa("luis", "carlos", 55, "azul");
document.getElementById("demo").innerHTML = "Meu Pai é " +
        meuPai.nome() + " é" + meuPai.nacionalidade + ".";

function pessoa(primeiro, segundo, idade, olho) {
    this.primeiroNome = primeiro;
    this.seungodoNome = segundo;
    this.idade = idade;
    this.olho = olho;
}
pessoa.prototype.nome = function () {
    return this.primeiroNome + " " + this.seungodoNome;
};
pessoa.prototype.nacionalidade = " Brasileiro";

var meuPai = new pessoa("luis", "carlos", 55, "azul");
document.getElementById("demo").innerHTML = "Meu Pai é " +
        meuPai.nome() + " é" + meuPai.nacionalidade + ".";

function minha(a, b) {
    return a * b;
}
document.getElementById("demo").innerHTML = minha.toString();

var l = maiorValor(10, 123, 500, 44, 99);
function maiorValor() {
    var a, maior = 0;
    for (a = 0; a < arguments.length; a++) {
        if (arguments[a] > maior) {
            maior = arguments[a];
        }
    }
    return maior;
}
document.getElementById("demo").innerHTML = l;

var t = somaTudo(2, 5, 123, 500, 44, 99);

function somaTudo() {
    var s, soma = 0;
    for (s = 0; s < arguments.length; s++) {
        soma += arguments[s];
    }
    return soma;
}
document.getElementById("demo").innerHTML = t;

var objeto = {
    primeiroNome: "luis",
    segundoNome: "carlos",
    nomeCompleto: function () {
        return this.primeiroNome + " " + this.segundoNome + ".";
    }
};
document.getElementById("demo").innerHTML = objeto.nomeCompleto();

var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var x = document.getElementById("demo");
x.innerHTML = "Browser inner window width: " + w + ",  height: " + h + ".";


document.getElementById("demo").innerHTML = "Screen Width: " + screen.width;
document.getElementById("demo").innerHTML = "Screen Height: " + screen.height;
document.getElementById("demo").innerHTML = "Available Screen Windth: " + screen.availWidth;
document.getElementById("demo").innerHTML = "Available Screen Height: " + screen.availHeight;
document.getElementById("demo").innerHTML = "Screen Color Depth: " + screen.colorDepth;
document.getElementById("demo").innerHTML = "Screen Pixel Depth: " + screen.pixelDepth;
document.getElementById("demo").innerHTML = "Page location is: " + window.location.href;         // document.getElementById("demo").innerHTML = "Page hostname is: " + window.location.hostname;
document.getElementById("demo").innerHTML = "Page path is: " + window.location.pathname;
document.getElementById("demo").innerHTML = "Page protocol is: " + window.location.protocol;

function novoDoc() {
    window.location.assign("http://www.w3schools.com");
}

function voltar() {
    window.history.back();
}

function proximo() {
    document.getElementById("demo").innerHTML = window.history.forward() + "http://www.w3schools.com";
}

function cook() {
    document.getElementById("demo").innerHTML = "Cookies ativado: " + navigator.cookieEnabled;
}

function app() {
    document.getElementById("demo").innerHTML = "Nome é: " + navigator.appName + ". Nome de code é: " + navigator.appCodeName + ".";
}

function pro() {
    document.getElementById("demo").innerHTML = "O motor do navegador é: " + navigator.product;
}

function versao() {
    document.getElementById("demo").innerHTML = navigator.appVersion;
}

function versao2() {
    document.getElementById("demo").innerHTML = navigator.userAgent;
}

function plata() {
    document.getElementById("demo").innerHTML = navigator.platform;
}

function idioma() {
    document.getElementById("demo").innerHTML = navigator.language;
}

function java() {
    document.getElementById("demo").innerHTML = "java esta: " + navigator.javaEnabled();
}

function alerta() {
    window.alert("Esperando confirmação!");
}

function confirma() {
    var r;
    if (confirm("Pressione o Botão!") === true) {
        r = "Você Pressionou Ok!";
    } else {
        r = "Você Pressionou Cancelar!";
    }
    document.getElementById("demo").innerHTML = r;
}

function pessoa() {
    var p = prompt("Por favor entre com seu nome", "");
    if (p !== null) {
        document.getElementById("demo").innerHTML = "Ola " + p + "! Como esta o seu dia hoje?";
    }
}

function quebra() {
    window.alert("Ola, \n Como vai você?");
}

function sec() {
    window.setTimeout(function () {
        alert('Ola.');
    }, 3000);
}

function para() {
    window.clearTimeout(sec);
}

function setCookie(cnome, cvalor, exdata) {
    var d = new Date();
    d.setTime(d.getTime() + (exdata * 24 * 60 * 60 * 1000));
    var expira = "expira = " + d.toUTCString();
    document.cookie = cnome + "=" + cvalor + "; " + expira;
}

function getCookie(cnome) {
    var nome = cnome + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ')
            c = c.substring(1);
        if (c.indexof(name) === 0)
            return;
        c.substring(nome.length, c.length);
    }
    return "";
}

function checkCookie() {
    var usernome = getCookie("usernome");
    if (usernome !== "") {
        alert("Bem vindo novamente " + usernome);
    } else {
        usernome = prompt("Por favor insira seu nome:", "");
        if (usernome !== "" && usernome !== null) {
            setCookie("usernome", usernome, 365);
        }
    }
}

function evento() {
    var obj = document.getElementById("demo");
    obj.style.color = "blue";
    obj.innerHTML = "Ola JQuery!";
}
onload = evento;

// o equivalente em jquery e diferente
function evet() {
    $("demo").html("Ola JQuery!");
}
$(document).ready(evet);

function jqy() {
    $("#h01").attr("style", "color:red").html("Ola JQuery!");
}
$(document).ready(jqy);

function etv() {
    var obj = document.getElementById("demo");
    obj.innerHTML = "Ola Prototype!";
}
onload = etv;

// o prototype equivalente e diferente:
function pty() {
    $("demo").insert(" Ola Prototype!");
}
Event.observe(window, "load", pty);

function ptt() {
    $("h01").writeAttribute("style", "color:red").insert(" Ola Prototype!");
}
Event.observe(window, "load", ptt);

function p() {
    var x = document.getElementById("demo");
    x.style.fontSize = "25px";
    x.style.color = "red";
}

function valida() {
    var x, text;
    x = document.getElementById("num").value;
    if (isNaN(x) || x < 1 || x > 10) {
        text = "A entrada não e valida!";
    } else {
        text = "Entrada Ok!";
    }
    document.getElementById("demo").innerHTML = text;
}

function con() {
    console.log(5 + 16);
}

// numeros com exponencial notacao cientifica

var x = 123e5;
var x = 123e-5;

// funcao html data draggable

function show(animal) {
    var animalType = animal.getAttribute("data-animal-type");
    alert("O " + animal.innerHTML + " e um " + animalType + ".");
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTrasnfer.setData("Text", ev.target.id);
}

function drop(ev) {
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
}

function onaf() {
    alert("Este documento esta sendo impresso!");
}

function onbe() {
    alert("O mostra um aleta depois de imprimir o documento.");
}

function unlo() {
    return "Escrever algo inteligente aqui.";
}

function onha() {
    alert("O onhashchange atribuem alerta quando houver alterações na parte ancora começa com simbolo #");
}

function onlo() {
    alert("Imagem e carregada.");
}

function online() {
    alert("Seu navegador esta trabalhando online.");
}

function offline() {
    alert("Seu navegador esta trabalhando offline.");
}

function pagehide() {
    alert("Ola Mundo!");
}

function pageshow() {
    alert("ola Mundo!");
}

function popstate() {
    alert("Voce alterou o historico de janelas!");
}

function resize() {
    alert("Voce redimensionou a janela do navegador!");
}

function storage() {
    alert("Voce atualizou a web storage. 'armazenamento online'");
}

function unload() {
    alert("Obrigodo por estar estudo para ter um vida melhor!");
}

//focus = altera a cor de fundo de input para amarelo
function focusFoc() {
    document.getElementById("fnome").style.background = "yellow";
}

// não focus = altera a cor fundo de input para vermelho
function blurBl() {
    document.getElementById("fnome").style.background = "red";
}

function funOnchi() {
    var s = document.getElementById("onchi").value;
    document.getElementById("onch").innerHTML = "Você selecionou: " + s;
}

function oncon() {
    alert("Botao direito do mouse dentro desta caixa para ver o menu de contexto!");
}

function onin() {
    var o = document.getElementById("on").value;
    document.getElementById("oni").innerHTML = "Você escreveu: " + o;
}

function oniva() {
    alert("voce deve preencher o formulario!");
}

function res() {
    alert("Formulario de resposta.");
}

function sea() {
    var x = document.getElementById("sear");
    document.getElementById("demo").innerHTML = "Voce esta procurando por: " + x.value;
}

function sel() {
    alert("Voce selecionou algum texto!");
}

function sub() {
    alert("O formulario foi enviado.");
}

function keydown() {
    document.getElementById("demo").style.backgroundColor = "red";
}

function keyup() {
    document.getElementById("demo").style.backgroundColor = "green";
}

function onk() {
    alert("voce precionou uma tecla dentro do campo de entrada.");
}

function field() {
    document.getElementById("fiel2").value = document.getElementById("fiel1").value;
}

function fiel() {
    document.getElementById("demo").style.color = "blue";
}

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function dragging(event) {
    document.getElementById("demo").innerHTML = "The p element is being dragged";
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "The p element was dropped";
}

function data() {
    document.getElementById("demo").innerHTML = Date();
}

function get() {
    var d = new Date();
    document.getElementById("h01").innerHTML = d.getFullYear();
}

function gett() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.getTime();
}

function gete() {
    var d = new Date();
    d.setFullYear(2015, 4, 29);
    document.getElementById("h01").innerHTML = d;
}

function to() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toUTCString();
}

function getd() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.getDay();
}

function geta() {
    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("demo").innerHTML = days[d.getDay()];
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("h01").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(function () {
        startTime();
    }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    ;  // aicionar zero na frete dos numeros < 10
    return i;
}
function copia() {
    alert("voce copio o texto");
}
function recorte() {
    alert("voce cortou o texto!");
}
function cola() {
    alert("voce colou o texto aki!");
}
function idade() {
    var age, voteable;
    age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
        voteable = "Erro na entrada";
    } else {
        voteable = (age < 18) ? "Muito Jovem" : "Velho o Bastante";
    }
    document.getElementById("demo").innerHTML = voteable;
}
function can() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(20, 20, 150, 100);
}
function ciba() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
    my_gradient.addColorStop(0, "black");
    my_gradient.addColorStop(1, "white");
    ctx.fillStyle = my_gradient;
    ctx.fillRect(20, 20, 150, 100);
}
function esdi() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    var my_gradient = ctx.createLinearGradient(0, 0, 170, 0);
    my_gradient.addColorStop(0, "black");
    my_gradient.addColorStop(1, "white");
    ctx.fillStyle = my_gradient;
    ctx.fillRect(20, 20, 150, 100);
}
function pvb() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    var my_gradient = ctx.createLinearGradient(0, 0, 170, 0);
    my_gradient.addColorStop(0, "black");
    my_gradient.addColorStop(0.5, "red");
    my_gradient.addColorStop(1, "white");
    ctx.fillStyle = my_gradient;
    ctx.fillRect(20, 20, 150, 100);
}
function ipd(direction) {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    var img = document.getElementById("lamp");
    var pat = ctx.createPattern(img, direction);
    ctx.rect(0, 0, 150, 100);
    ctx.fillStyle = pat;
    ctx.fill();
}
function dia() {
    var greeting;
    if (new Date().getHours() < 13) {
        greeting = "Bom Dia!";
    } else if (new Date().getHours() < 19) {
        greeting = "Boa tarde!";
    } else {
        (new Date().getHours() > 19);
        greeting = "Boa noite!";
    }
    document.getElementById("demo").innerHTML = greeting;
}
function diasemana() {
    var day;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }
    document.getElementById("h01").innerHTML = "Hoje é " + day + "!";
}
function car() {
    var cars = ["BMW", "Volvo", "Ferrari", "Ford"];
    var i, len, text;
    for (i = 0, len = cars.length, text = ""; i < len; i++) {
        text += cars[i] + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}
function strok() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    // preenchendo com gradiente
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 5;
    ctx.strokeRect(20, 20, 150, 100);
}
function smile() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.font = "25px Verdana";
    // cria o gradiente
    var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    // preenche com gradiente
    ctx.strokeStyle = gradient;
    ctx.strokeText("Big Smile!", 29, 78);
}
function shadow() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.shadowBlur = 20;
    ctx.fillStyle = "red";

    ctx.shadowColor = "black";
    ctx.fillRect(20, 20, 100, 80);

    ctx.shadowColor = "blue";
    ctx.fillRect(140, 20, 100, 80);
}
function bl() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.shadowBlur = 40;
    ctx.shadowColor = "red";
    ctx.fillStyle = "black";
    ctx.fillRect(20, 20, 100, 80);
}
function offo() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 20;
    ctx.shadowColor = "black";
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 100, 80);
}
function ofo() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 20;
    ctx.shadowColor = "black";
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 100, 80);
}
function tcf() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try {
        x = Number(x);
        if (x == "")
            throw "esta vazia!";
        if (isNaN(x))
            throw "não é um numero!";
        if (x > 10)
            throw "é Muito alto!";
        if (x < 5)
            throw "é Muito baixo!";
    } catch (err) {
        message.innerHTML = "Entrada " + err;
    } finally {
        document.getElementById("demo").value = "";
    }
}
function rg() {
    var str = "Visite W3Schools!";
    var n = str.search(/w3schools/i);
    document.getElementById("message").innerHTML = n;
}
function mw() {
    var str = document.getElementById("message").innerHTML;
    var txt = str.replace(/microsoft/i, "W3Schools");
    document.getElementById("message").innerHTML = txt;
}
function d() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(0.5, "red");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
}
function dado() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 100);
}
function adco() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(0.3, "magenta");
    grd.addColorStop(0.5, "blue");
    grd.addColorStop(0.6, "green");
    grd.addColorStop(0.8, "yellow");
    grd.addColorStop(1, "red");
    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
}
function lcp() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.lineCap = "butt";
    ctx.moveTo(20, 20);
    ctx.lineTo(200, 20);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(20, 40);
    ctx.lineTo(200, 40);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineCap = "square";
    ctx.moveTo(20, 60);
    ctx.lineTo(200, 60);
    ctx.stroke();
}
function lj() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.lineJoin = "round";
    ctx.miterLimit = 5;
    ctx.moveTo(20, 20);
    ctx.lineTo(100, 50);
    ctx.lineTo(20, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.lineJoin = "bevel";
    ctx.miterLimit = 10;
    ctx.moveTo(50, 10);
    ctx.lineTo(120, 50);
    ctx.lineTo(40, 120);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.lineJoin = "miter";
    ctx.miterLimit = 15;
    ctx.moveTo(80, 0);
    ctx.lineTo(140, 50);
    ctx.lineTo(60, 140);
    ctx.stroke();
}
function ola(x) {
    if (x.checked === true) {
        document.getElementById("ola").style.WebkitBackfaceVisibility = "visible";
        document.getElementById("ola").style.backfaceVisibility = "visible";
    } else {
        document.getElementById("ola").style.WebkitBackfaceVisibility = "hidden";
        document.getElementById("ola").style.backfaceVisibility = "hidden";
    }
}
function rec() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");

    // retangulo vermelho
    ctx.beginPath();
    ctx.lineWidth = "6";
    ctx.strokeStyle = "red";
    ctx.rect(5, 5, 290, 140);
    ctx.stroke();

    // retangulo verde
    ctx.beginPath();
    ctx.lineWidth = "4";
    ctx.strokeStyle = "green";
    ctx.rect(30, 30, 50, 50);
    ctx.stroke();

    // retangulo azul
    ctx.beginPath();
    ctx.lineWidth = "10";
    ctx.strokeStyle = "blue";
    ctx.rect(50, 50, 150, 80);
    ctx.stroke();
}
function recle() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 300, 150);
    ctx.clearRect(20, 20, 120, 80);
}
function prop() {
    var pessoa = {
        firstname: "john",
        lastname: "doe",
        age: 50,
        eyecolor: "blue"
    };
    document.getElementById("h01").innerHTML = pessoa.firstname + " tem " + pessoa.age + " Anos.";
}
function fr() {
    var txt = "";
    var pessoa = {fname: "john", lname: "doe", age: "25"};
    var x;
    for (x in pessoa) {
        txt += pessoa[x] + " ";
    }
    pessoa.nationality = "English";
    delete pessoa.nationality;
    document.getElementById("message").innerHTML = pessoa.fname + " é " + pessoa.nationality + ".";
}
function coo() {
    document.getElementById("message").innerHTML = "Cookies associados com este documento: " + document.cookie;
}
function dm() {
    document.getElementById("h01").innerHTML = document.domain;
}
function lt() {
    document.getElementById("message").innerHTML = document.lastModified;
}
function rr() {
    document.getElementById("h01").innerHTML = document.referrer;
}
function tt() {
    document.getElementById("h01").innerHTML = document.title;
}
function ucd() {
    document.getElementById("message").innerHTML = document.URL;
}
function ow() {
    document.open("text/html", "replace");
    var s = document.write("<h2>Aprender sobre o HTML DOM e divertido!</h2>");
    document.close();
    document.getElementById("h01").innerHTML = s;
}
function aj() {
    var w = window.open();
    w.document.open();
    w.document.write("<h1>Olá Mundo!</h1>");
    w.document.close();
    document.getElementById("h01").innerHTML = w;
}
function ge() {
    var x = document.getElementsByTagName("input");
    document.getElementById("message").innerHTML = x.length;
}
function st() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(20, 100);
    ctx.lineTo(70, 100);
    ctx.strokeStyle = "red";
    ctx.stroke();
}
function bp() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.strokeStyle = "green";
    ctx.moveTo(0, 75);
    ctx.lineTo(250, 75);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "purple";
    ctx.moveTo(50, 0);
    ctx.lineTo(150, 130);
    ctx.stroke();
}
function cp() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(20, 100);
    ctx.lineTo(70, 100);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
}
function cl() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.rect(50, 20, 200, 120);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 150, 100);
}
function cl1() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.rect(50, 20, 200, 120);
    ctx.stroke();
    ctx.clip();
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 150, 100);
}
function qd() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.quadraticCurveTo(20, 100, 200, 20);
    ctx.stroke();
}
function bz() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
    ctx.stroke();
}
function ac() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
}
function ac1() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(100, 20);
    ctx.arcTo(150, 20, 150, 70, 50);
    ctx.lineTo(150, 120);
    ctx.stroke();
}
function pp() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.rect(20, 20, 150, 100);
    if (ctx.isPointInPath(20, 50)) {
        ctx.stroke();
    }
}
function an() {
    document.getElementById("message").innerHTML = "Número de âncoras são: " + document.anchors.length;
}
function ar() {
    document.getElementById("h01").innerHTML = document.anchors[0].innerHTML;
}
function tlc() {
    document.getElementById("message").innerHTML = "Numero de Links: " + document.links.legth;
}
function tlc1() {
    document.getElementById("h01").innerHTML = "O href do primero link é: " + document.links[0].href;
}
function tfd() {
    document.getElementById("h01").innerHTML = "Numero de Formularios: " + document.forms.length;
}
function tfd1() {
    document.getElementById("message").innerHTML = "O nome do primeiro formulario é: " + document.forms[0].name;
}
function tic() {
    document.getElementById("h01").innerHTML = "Numero de Imagens: " + document.images.length;
}
function tic1() {
    document.getElementById("h01").innerHTML = "O id da primeira imagem e: " + document.images[0].id;
}
function cm() {
    document.getElementById("message").style.visibility = "hidden";
}
function cm1() {
    document.getElementById("message").style.visibility = "visible";
}
function bgChange(bg) {
    document.body.style.background = bg;
}
function desab() {
    document.getElementById("btn").disabled = true;
}
function enc() {
    var x = document.getElementById("btn").name;
    document.getElementById("h01").innerHTML = x;
}
function tip() {
    var x = document.getElementById("btn").type;
    document.getElementById("message").innerHTML = x;
}
function val() {
    var x = document.getElementById("btn").value;
    document.getElementById("h01").innerHTML = x;
}
function loc() {
    var x = document.getElementById("button").innerHTML;
    document.getElementById("message").innerHTML = x;
}
function mc() {
    var c = document.getElementById("mc");
    var ctx = c.getContext("2d");
    ctx.strokeRect(5, 5, 25, 15);
    ctx.scale(2, 2);
    ctx.strokeRect(5, 5, 25, 15);
    ctx.scale(2, 2);
    ctx.strokeRect(5, 5, 25, 15);
    ctx.scale(2, 2);
    ctx.strokeRect(5, 5, 25, 15);
}
function cm() {
    var c = document.getElementById("mc");
    var ctx = c.getContext("2d");
    ctx.rotate(20 * Math.PI / 280);
    ctx.fillRect(50, 20, 100, 50);
}
function tra() {
    var c = document.getElementById("mc");
    var ctx = c.getContext("2d");
    ctx.fillRect(10, 10, 100, 50);
    ctx.translate(70, 70);
    ctx.fillRect(10, 10, 100, 50);
}
function traf() {
    var c = document.getElementById("mc");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, 250, 100);
    ctx.transform(1, 0.5, -0.5, 1, 30, 10);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 250, 100);
    ctx.transform(1, 0.5, -0.5, 1, 30, 10);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 250, 100);
}
function setra() {
    var c = document.getElementById("mc");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, 250, 100);
    ctx.setTransform(1, 0.5, -0.5, 1, 30, 10);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 250, 100);
    ctx.setTransform(1, 0.5, -0.5, 1, 30, 10);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 250, 100);
}
function sb() {
    document.getElementById("frm1").submit();
}
function rts() {
    document.getElementById("frm1").reset();
}
function vlr() {
    var x = document.getElementById("bnt");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br />";
    }
    document.getElementById("demo").innerHTML = text;
}
function ebr() {
    var x = document.getElementById("frm1").acceptCharset;
    document.getElementById("demo").innerHTML = x;
}
function abt() {
    var x = document.getElementById("frm1").action;
    document.getElementById("demo").innerHTML = x;
}
function vat() {
    var x = document.getElementById("frm1").enctype;
    document.getElementById("demo").innerHTML = x;
}
function nlt() {
    var x = document.getElementById("frm1").length;
    document.getElementById("demo").innerHTML = x;
}
function mtd() {
    var x = document.getElementById("frm1").method;
    document.getElementById("demo").innerHTML = x;
}
function nfm() {
    var x = document.getElementById("frm1").name;
    document.getElementById("demo").innerHTML = x;
}
function avk() {
    var x = document.getElementById("frm1").target;
    document.getElementById("demo").innerHTML = x;
}
function disable() {
    document.getElementById("select").disabled = true;
}
function enable() {
    document.getElementById("select").disabled = false;
}
function obid() {
    document.getElementById("demo").innerHTML = document.getElementById("select").form.id;
}
function obtr() {
    document.getElementById("demo").innerHTML = document.getElementById("select").length;
}
function changeSize() {
    document.getElementById("select").size = 4;
}
function slmtp() {
    document.getElementById("select").multiple = true;
}
function getOption() {
    var obj = document.getElementById("select");
    document.getElementById("demo").innerHTML = obj.options[obj.selectedIndex].text;
}
function getOptions() {
    var x = document.getElementById("select");
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
        txt = txt + " " + x.options[i].text;
    }
    document.getElementById("demo").innerHTML = txt;
}
function getIndex() {
    document.getElementById("demo").innerHTML = document.getElementById("select").selectedIndex;
}
function changeText() {
    var x = document.getElementById("select");
    x.options[x.selectedIndex].text = "Melon";
}
function removerOption() {
    var x = document.getElementById("select");
    x.remove(x.selectedIndex);
}
function link() {
    var x = document.getElementById("anchor").href;
    document.getElementById("demo").innerHTML = x;
}
function lga() {
    var x = document.getElementById("anchor").hreflang;
    document.getElementById("demo").innerHTML = x;
}
function fla() {
    var x = document.getElementById("anchor").id;
    document.getElementById("demo").innerHTML = x;
}
function getfol() {
    var x = document.getElementById("anchor").rel;
    document.getElementById("demo").innerHTML = x;
}
function ent() {
    var x = document.getElementById("anchor").type;
    document.getElementById("demo").innerHTML = x;
}
function ft() {
    var c = document.getElementById("mc");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("Hello Word", 10, 50);
}
function tal() {
    var c = document.getElementById("mc");
    var ctx = c.getContext("2d");
    // cria um linha vermelha na posicao150
    ctx.strokeStyle = "red";
    ctx.moveTo(150, 20);
    ctx.lineTo(150, 170);
    ctx.stroke();
    ctx.font = "15px Arial";
    // mostrar os valores alinhar texto diferente
    ctx.textAlign = "start";
    ctx.fillText("textAlign = start", 150, 60);
    ctx.textAlign = "end";
    ctx.fillText("textAlign = end", 150, 80);
    ctx.textAlign = "left";
    ctx.fillText("textAlign = left", 150, 100);
    ctx.textAlign = "center";
    ctx.fillText("textAlign = center", 150, 120);
    ctx.textAlign = "right";
    ctx.fillText("textAlign = right", 150, 140);
}
function bali() {
    var c = document.getElementById("mc");
    var ctx = c.getContext("2d");
    // desenhar uma linha vermelha em y=100
    ctx.strokeStyle = "red";
    ctx.moveTo(5, 100);
    ctx.lineTo(395, 100);
    ctx.stroke();
    ctx.font = "20px Arial";
    // coloque cada palavra em y=100 com valores de linha diferente da Base de dados de texto 
    ctx.textBaseline = "top";
    ctx.fillText("Top", 5, 100);
    ctx.textBaseline = "bottom";
    ctx.fillText("Bottom", 50, 100);
    ctx.textBaseline = "middle";
    ctx.fillText("Middle", 120, 107);
    ctx.textBaseline = "alphabetic";
    ctx.fillText("Alphabetic", 190, 99);
    ctx.textBaseline = "hanging";
    ctx.fillText("Hanging", 290, 101);
}
function met() {
    var c = document.getElementById("mc");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    var txt = "Hello Word!";
    ctx.fillText("Width:" + ctx.measureText(txt).width, 10, 50);
    ctx.fillText(txt, 10, 100);
}
window.onload = function dieb() {
    var c = document.getElementById("mc");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img, 90, 130, 50, 60, 10, 10, 50, 60);
};
function vd() {
    var v = document.getElementById("video1");
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var i;

    v.addEventListener("play", function () {
        i = window.setInterval(function () {
            ctx.drawImage(v, 5, 5, 260, 125);
        }, 20);
    }, false);
    v.addEventListener("pause", function () {
        window.clearInterval(i);
    }, false);
    v.addEventListener("ended", function () {
        clearInterval(i);
    }, false);
}
function arc() {
    var x = document.getElementById("venus").alt;
    document.getElementById("h01").innerHTML = x;
}
function coo() {
    var x = document.getElementById("venus").coords;
    document.getElementById("demo").innerHTML = x;
}
function sap() {
    var x = document.getElementById("venus").shape;
    document.getElementById("h01").innerHTML = x;
}
function ref() {
    var x = document.getElementById("venus").href;
    document.getElementById("demo").innerHTML = x;
}
function pro() {
    var x = document.getElementById("venus").protocol;
    document.getElementById("demo").innerHTML = x;
}
function hne() {
    var x = document.getElementById("venus").hostname;
    document.getElementById("h01").innerHTML = x;
}
function pt() {
    var x = document.getElementById("venus").port;
    document.getElementById("h01").innerHTML = "Port: " + x;
}
function phe() {
    var x = document.getElementById("venus").pathname;
    document.getElementById("demo").innerHTML = x;
}
function sch() {
    var x = document.getElementById("venus").search;
    document.getElementById("h01").innerHTML = x;
}
function hh() {
    var x = document.getElementById("venus").hash;
    document.getElementById("h01").innerHTML = x;
}
function tta() {
    var x = document.getElementById("venus").target;
    document.getElementById("h01").innerHTML = x;
}
function ffa() {
    var x = document.getElementById("htmldom").href;
    document.getElementById("demo").innerHTML = x;
}
function enc() {
    var x = document.getElementById("htmldom").target;
    document.getElementById("h01").innerHTML = "Destino de base para todos os links: " + x;
}
function wth() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    var imgData = ctx.createImageData(100, 100);
    alert("A largura da imgData é: " + imgData.width);
    var i;
    for (i = 0; i < imgData.data.length; i += 25) {
        imgData.data[i + 0] = 255;
        imgData.data[i + 1] = 0;
        imgData.data[i + 2] = 0;
        imgData.data[i + 3] = 255;
    }
    ctx.putImageData(imgData, 10, 10);
}
function ht() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    var imgData = ctx.createImageData(210, 100);
    alert("A altura da imgData é: " + imgData.height);
    var i;
    for (i = 0; i < imgData.data.length; i += 22) {
        imgData.data[i + 0] = 255;
        imgData.data[i + 1] = 0;
        imgData.data[i + 2] = 0;
        imgData.data[i + 3] = 255;
    }
    ctx.putImageData(imgData, 10, 10);
}
function dta() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    var imgData = ctx.createImageData(100, 100);
    var i;
    for (i = 0; i < imgData.data.length; i += 15) {
        imgData.data[i + 0] = 255;
        imgData.data[i + 1] = 0;
        imgData.data[i + 2] = 0;
        imgData.data[i + 3] = 255;
    }
    ctx.putImageData(imgData, 10, 10);
}
function gid() {
    document.getElementById("scream").onload = function () {
        var c = document.getElementById("Can");
        var ctx = c.getContext("2d");
        var img = document.getElementById("scream");
        ctx.drawImage(img, 0, 0);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);
        // inverter as cores
        var i;
        for (i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] = 255 - imgData.data[i];
            imgData.data[i + 1] = 255 - imgData.data[i + 1];
            imgData.data[i + 2] = 255 - imgData.data[i + 2];
            imgData.data[i + 3] = 255;
        }
        ctx.putImageData(imgData, 0, 0);
    };
}
function pid() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 50, 50);
    function copy() {
        var imgData = ctx.getImageData(10, 10, 50, 50);
        ctx.putImageData(imgData, 10, 70);
    }
}
function globalalpha() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 75, 50);
    // tornar a transparencia ligada
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 75, 50);
    ctx.fillStyle = "green";
    ctx.fillRect(80, 80, 75, 50);
}
function globalcompositeoperation() {
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 75, 50);
    ctx.fillStyle = "blue";
    ctx.globalCompositeOperation = "source-over";
    ctx.fillRect(50, 50, 75, 50);
    ctx.fillStyle = "red";
    ctx.fillRect(150, 20, 75, 50);
    ctx.fillStyle = "blue";
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillRect(180, 50, 75, 50);
}
function suporteTipo(e, vidType, codType) {
    var vid = document.createElement('video');
    isSupp = vid.canPlayType(vidType + ';codecs="' + codType + '"');
    if (isSupp === "") {
        isSupp = "No";
    }
    e.target.parentNode.innerHTML = "Resposta: " + isSupp;
}
function recarregar() {
    document.getElementById("mp4_src").src = "movie.mp4";
    document.getElementById("ogg_src").src = "movie.ogg";
    document.getElementById("myVideo").load();
}
function playVid() {
    myVideo.play();
    var vid = document.getElementById("myVideo");
}
function pausa() {
    myVideo.pause();
    var vid = document.getElementById("myVideo");
}
function audioTracks() {
    alert(vid.audioTracks.length);
    var vid = document.getElementById("myVideo");
}
function ativarAutoPlay() {
    var vid = document.getElementById("myVideo");
    vid.autoplay = true;
    vid.load();
}
function desabilitarAutoPlay() {
    var vid = document.getElementById("myVideo");
    vid.autoplay = false;
    vid.load();
}
function verificarEstadoAutoplay() {
    var vid;
    alert(vid.autoplay);
}
function buffer() {
    var vid = document.getElementById("myVideo");
    alert("start: " + vid.buffered.start(0) + "final: " + vid.buffered.end(0));
}
function controlador() {
    var vid = document.getElementById("myVideo");
    alert("Controle: " + vid.controller);
}
function ativaControle() {
    var vid = document.getElementById("myVideo");
    vid.controls = true;
    vid.load();
}
function desativaControle() {
    var vid = document.getElementById("myVideo");
    vid.controls = false;
    vid.load();
}
function verificaEstadoControle() {
    var vid = document.getElementById("myVideo");
    alert(vid.controls);
}
function atualSrc() {
    var vid = document.getElementById("myVideo");
    alert(vid.currentSrc);
}
function mudoPadrao() {
    var vid = document.getElementById("myVideo");
    vid.defaultMuted = true;
    vid.load();
}
function obeterVelocidadeReproducao() {
    var vid = document.getElementById("myVideo");
    alert(vid.defaultPlaybackRate);
}
function definirVelocidadeReproducao() {
    var vid = document.getElementById("myVideo");
    vid.defaultPlaybackRate = 0.5;
    vid.load();
}
function obeterDuracao() {
    var vid = document.getElementById("myVideo");
    alert(vid.duration);
}
function verificarTermino() {
    var vid = document.getElementById("myVideo");
    alert(vid.ended);
}
function erro() {
    var vid = document.getElementById("myVideo");
    alert(vid.error.code);
}
function enableLoop() {
    var vid = document.getElementById("myVideo");
    vid.loop = true;
    vid.load();
}
function disableLoop() {
    var vid = document.getElementById("myVideo");
    vid.loop = false;
    vid.load();
}
function checkLoop() {
    var vid = document.getElementById("myVideo");
    alert(vid.loop);
}
function setMedGroup() {
    var vid1 = document.getElementById("myVideo1");
    var vid2 = document.getElementById("myVideo2");
    vid1.mediaGroup = 'teste';
    vid2.mediaGroup = 'teste';
}
function getMedGroup() {
    var vid1 = document.getElementById("myVideo1");
    var vid2 = document.getElementById("myVideo2");
    alert("Video 1 midia grupo: " + vid1.mediaGroup + ". Video 2 midia grupo: " + vid2.mediaGroup);
}