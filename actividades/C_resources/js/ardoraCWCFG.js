//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Buen trabajo"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Qw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Og","Og","Og","Og","VA","QQ","Qg","TA","QQ","Og","Og","Og","Og","Og"],["Og","Og","Og","Og","Og","VQ","Og","Og","Og","Og","Og","Og","Og","Og"],["Og","Og","Og","Og","Og","VA","Og","Og","Og","Og","Og","Og","Og","Og"],["Og","Og","Og","Og","Og","Tw","Og","Og","Og","Og","Og","Og","Og","Og"],["Og","Og","UA","Og","Og","Uw","Og","Og","Og","Og","Og","Og","Og","Og"],["Og","Og","QQ","Og","Og","VA","Og","Og","Og","Og","Og","Og","Og","Og"],["Og","Og","Rw","Og","Og","QQ","Og","Og","Og","Og","Og","Og","TA","Og"],["Og","SA","SQ","UA","RQ","Ug","Vg","SQ","Tg","Qw","VQ","TA","Tw","Og"],["Og","Og","Tg","Og","Og","Og","Og","Og","Og","QQ","Og","Og","Qw","Og"],["Og","Og","QQ","Og","Og","Og","Og","Og","Og","Qg","Og","Og","QQ","Og"],["Og","Og","Vw","Og","Og","Og","Og","Og","Og","RQ","Og","Og","TA","Og"],["Og","Og","RQ","Og","Og","Og","Og","Og","Og","Qw","Og","Og","RQ","Og"],["Og","Og","Qg","Og","Og","Og","Og","Og","Og","RQ","Og","Og","Uw","Og"],["Og","Og","Og","Og","Og","Og","Og","Og","SA","Ug","RQ","Rg","Og","Og"],["Og","Og","Og","Og","Og","Og","Og","Og","Og","QQ","Og","Og","Og","Og"]];
var x1=[5,2,9,6,3,13,10];
var y1=[1,8,14,1,5,7,8];
var x2=[9,13,12,6,3,13,10];
var y2=[1,8,14,8,13,13,15];
var imaCW=["","","","","","",""];
var audioCW=["","","","","","",""];
var defCW=["Se utiliza para presentar información y se compone de filas columnas y celdas","Es una conexión de una página a otro destino como, por ejemplo, otra página o una ubicación diferente en la misma página","Atributo que colocamos a la etiqueta \"A\" para indicar el destino","Atributo que define si el fichero debe empezar a reproducirse por si solo o debe intervenir el usuario","Se le denomina cuando entramos a navegar a un url:","Son enlaces dentro de la misma página","Parte de la pagina HTML que incluye todo el contenido interno sobre la propia página que el usuario no puede ver"];
var colNum=14;
var rowNum=15;
