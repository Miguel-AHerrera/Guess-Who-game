var equipos = [{name: "America", america:"si", europa:"no", espana:"no", inglaterra:"no", mexico:"si", argentina:"no", copa_mx:"si"},
                {name: "River Plate", america:"si" ,europa:"no", espana:"no", inglaterra:"no", mexico:"no", argentina:"si", copa_libertadores:"no"},
                {name: "Boca Juniors",america:"si", europa:"no", espana:"no", inglaterra:"no", mexico:"no", argentina:"si", copa_libertadores:"si"},
                {name: "Chivas", america:"si", europa:"no", espana:"no", inglaterra:"no", mexico:"si", argentina:"no", copa_mx:"no"},
                {name: "Barcelona", america:"no", europa:"si", espana:"si", inglaterra:"no", mexico:"no", argentina:"no", copas_del_rey:"si"},
                {name: "Real Madrid", america:"no", europa:"si", espana:"si", inglaterra:"no", mexico:"no", argentina:"no", copas_del_rey:"no"},
                {name: "Chelsea", america:"no", europa:"si", espana:"no", inglaterra:"si", mexico:"no", argentina:"no", copa_fa:"no"},
                {name: "Manchester United", america:"no", europa:"si", espana:"no", inglaterra:"si", mexico:"no", argentina:"no", copa_fa:"si"}];

var contador_America = 0;
var contador_Europa = 0;
var contador_Mexico = 0;
var contador_Argentina = 0;
var contador_Espana = 0;
var contador_Inglaterra = 0;

var i = 0;
var j = 0;

function generateTeam(){
x = Math.round(Math.random());
ran = Math.floor(Math.random()* 8);
return seleccion = equipos[ran];
}


var preguntas = ["Tu equipo juega en America?", "Tu equipo juega en Europa?", "Tu equipo juega en Mexico?", "Tu equipo juega en Argentina?", "Tu equipo juega en Espana?",
"Tu equipo juega en Inglaterra?","Tu equipo tiene mas copas mx?", "Tu equipo tiene mas copas libertadores?", "Tu equipo tiene mas FA cups?", "Tu equipo tiene mas copas del rey?",
  "Tu equipo es el Barcelona", "Tu equipo es el Real Madrid", "Tu equipo es el America", "Tu equipo son las Chivas",
"Tu equipo es el Manchested United",  "Tu equipo es el Chelsea", "Tu equipo es el Boca Juniors", "Tu equipo es el River Plate"];
var candidatos = equipos;

function responder(preguntas, seleccion){
    flag = 0;
    switch(preguntas){
      case 0:
          if(seleccion.america=="si"){
              document.getElementById("salida").innerHTML = "El equipo si juega en America";
          }else{
              document.getElementById("salida").innerHTML = "El equipo no juega en America";
          }
      break;
      case 1:
          if(seleccion.europa =="si"){
            document.getElementById("salida").innerHTML = "El equipo juega en Europa";
          }else{
            document.getElementById("salida").innerHTML = "El equipo no juega en Europa";
          }
      break;
      case 2:
          if(seleccion.mexico == "si"){
            document.getElementById("salida").innerHTML = "El equipo si juega en Mexico";
          }else{
            document.getElementById("salida").innerHTML = "El equipo no juega en Mexico";
          }
      break;
      case 3:
          if(seleccion.argentina == "si"){
            document.getElementById("salida").innerHTML = "El equipo si juega en Argentina";

          }else{
            document.getElementById("salida").innerHTML = "El equipo no juega en Argentina";
          }
      break;
      case 4:
            if(seleccion.espana == "si"){
              document.getElementById("salida").innerHTML = "El equipo si juega en Espana";
            }else{
              document.getElementById("salida").innerHTML = "El equipo no juega en Espana";
            }
      break;
      case 5:
            if(seleccion.inglaterra == "si"){
              document.getElementById("salida").innerHTML = "El equipo si juega en Inglaterra";
            }else{
              document.getElementById("salida").innerHTML = "El equipo no juega en Inglaterra";
            }
      break;
      case 6:
            if(seleccion.copa_mx == "si"){
              document.getElementById("salida").innerHTML = "El equipo si tiene mas copas MX";
            }else{
              document.getElementById("salida").innerHTML = "El equipo no tiene mas copas MX";
            }
      break;
      case 7:
            if(seleccion.copa_libertadores == "si"){
              document.getElementById("salida").innerHTML = "El equipo si tiene mas copas libertadores";
;
            }else{
              document.getElementById("salida").innerHTML = "El equipo no tiene mas copas libertadores";
;
            }
      break;
      case 8:
            if(seleccion.copa_fa == "si"){
              document.getElementById("salida").innerHTML = "El equipo si tiene mas FA cups";
;
            }else{
              document.getElementById("salida").innerHTML = "El equipo no tiene mas FA cups";
;
            }
      break;
      case 9:
            if(seleccion.copas_del_rey == "si"){
              document.getElementById("salida").innerHTML = "El equipo si tiene mas copas del rey";
;
            }else{
              document.getElementById("salida").innerHTML = "El equipo no tiene mas copas del rey";
;
            }
      break;
      case 10:
            if(seleccion.name == "Barcelona"){
              document.getElementById("salida").innerHTML = "El equipo si es el Barcelona, felicidades ganaste!";
;
              flag = 1;
            }else{
              document.getElementById("salida").innerHTML = "El equipo no es el Barcelona, lo siento";

            }
      break;
      case 11:
            if(seleccion.name == "Real Madrid"){
              document.getElementById("salida").innerHTML = "El equipo si es el Real Madrid, felicidades ganaste!";
;
              flag = 1;
            }else{
              document.getElementById("salida").innerHTML = "El equipo no es el Real Madrid, lo siento";

            }
      break;
      case 12:
            if(seleccion.name == "America"){
              document.getElementById("salida").innerHTML = "El equipo si es el America, felicidades ganaste!";
              flag = 1;
            }else{
              document.getElementById("salida").innerHTML = "El equipo no es el America, lo siento";
            }
      break;
      case 13:
            if(seleccion.name == "Chivas"){
              document.getElementById("salida").innerHTML = "El equipo si son las Chivas, felicidades ganaste!";
              flag = 1;
            }else{
              document.getElementById("salida").innerHTML = "El equipo no son las Chivas, lo siento";
            }
      break;
      case 14:
            if(seleccion.name == "Manchested United"){
              document.getElementById("salida").innerHTML = "El equipo si es el Manchester United, felicidades ganaste!";
              flag = 1;
            }else{
              document.getElementById("salida").innerHTML = "El equipo no es el Manchester United, lo siento";
            }
      break;
      case 15:
            if(seleccion.name == "Chelsea"){
              document.getElementById("salida").innerHTML = "El equipo si es el Chelsea, felicidades ganaste!";
              flag = 1;
            }else{
              document.getElementById("salida").innerHTML = "El equipo no es el Chelsea, lo siento";
            }
      break;
      case 16:
            if(seleccion.name == "Boca Juniors"){
              document.getElementById("salida").innerHTML = "El equipo si es el Boca Juniors, felicidades ganaste!";
              flag = 1;
            }else{
              document.getElementById("salida").innerHTML = "El equipo no es el Boca Juniors, lo siento";
            }
      break;
      case 17:
            if(seleccion.name == "River Plate"){
              document.getElementById("salida").innerHTML = "El equipo si es el River Plate, felicidades ganaste!";
              flag = 1;
            }else{
              document.getElementById("salida").innerHTML = "El equipo no es el River Plate, lo siento";
            }
      break;
      default:
      break;
    }
}

function solicitarPregunta(){
  j = Math.floor(Math.random() * (10 - 1) + 1);
  document.getElementById("salida").innerHTML = preguntas[j];

  if(i == 3){
    y = Math.floor(Math.random()* (18 - 11) + 11);
    document.getElementById("salida").innerHTML = preguntas[y];
  }
  if(i == 4){
      document.getElementById("salida").innerHTML = "Adivine!, buen juego.";
      i = 0;
  }
}


function contestarPregunta(opcion){
  //console.log("Hmmm... interesante, Sigamos");
  if(opcion == 0){
    document.getElementById("salida").innerHTML = "Hmmm... interesante, sigues tu!";
    i = i +1;
  }else{
    document.getElementById("salida").innerHTML = "Hmmm... interesante, sigues tu! megativo";
  }
    console.log(i);
}

function hacerPregunta(opcion){
//  console.log(seleccion);
  responder(opcion, seleccion);
}

inicio();

function inicio(){
  generateTeam();
    if(x === 0){
      document.getElementById("salida").innerHTML = "Empiezo yo!";
    }else{
      document.getElementById("salida").innerHTML = "Dejare que empieces tu!";
    }
}
