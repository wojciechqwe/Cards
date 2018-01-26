window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    
    var mainPage = document.querySelector('#main');
    var topCounter = document.querySelector('#result');
    var bottomCounter = document.querySelector('#result1');



	buttonGood.addEventListener("click", function(){
    	if(window.location.href.indexOf("READY") > -1){
    		if(first == 0)
    			{
    				screenClick();
    				first = 1;
    			}
    		else
    			{
    				greenButton();
    			}
    	}
    	else if(window.location.href.indexOf("OPTIONS") > -1){
        	MoveNext();
        	}
    	else if(window.location.href.indexOf("index") > -1){
    	    document.getElementById("id1").style.WebkitAnimation = "upmovebot 50s";
    	    document.getElementById("id2").style.WebkitAnimation = "botmovebot 50s";
    	    document.getElementById("header1").style.WebkitAnimation = "header1up 50s";
    	    document.getElementById("header2").style.WebkitAnimation = "header2up 50s";
    	    $( "h3" ).fadeTo( "fast", 0 );
    	    $( "h4" ).fadeTo( "fast", 1 );
    	    
        	}
	});
	
	
	
	
	
	buttonBad.addEventListener("click", function(){
    	if(window.location.href.indexOf("READY") > -1){
    	redButton();
    	}
    	else if(window.location.href.indexOf("OPTIONS") > -1){
        	MoveBack();
        	}
    	else if(window.location.href.indexOf("index") > -1){
    		document.getElementById("header1").style.WebkitAnimation = "header1down 50s";
    		document.getElementById("header2").style.WebkitAnimation = "header2down 50s";
    		$( "h3" ).fadeTo( "fast", 1 );
    		$( "h4" ).fadeTo( "fast", 0 );
    	    document.getElementById("id1").style.WebkitAnimation = "upmoveup 50s";
    	    document.getElementById("id2").style.WebkitAnimation = "botmoveup 50s";
        	}
    });



mainPage.addEventListener("click", function() {
	if(window.location.href.indexOf("READY") > -1 && lenghtOfLesson > -1){
	screenClick();
	}
	else if(window.location.href.indexOf("OPTIONS") > -1){
		if(resetData==1)
			{RepeatAll();
			document.getElementById("info").innerHTML = "Words have been weakened.";	
			}
		else if(resetData==2){}
		else if(resetData==3){}
		else if(resetData==4){
			var temporary = localStorage.getItem("wtq");
			if(temporary == 1) temporary = 2;
			else if(temporary == 2) temporary = 3;
			else temporary = 1;
			localStorage.setItem("wtq", temporary);
			whatToQuestion = localStorage.getItem("wtq");				
			if(whatToQuestion == 1){
				document.getElementById("demo").innerHTML = "First i want to see<br>kanji";}
			else if(whatToQuestion == 2){
				document.getElementById("demo").innerHTML = "First i want to see<br>meaning";}
			else{
				document.getElementById("demo").innerHTML = "First i want to see<br>readings";}
			
		}
		else if (n==0){
			document.getElementById("info").innerHTML = "Tap top of the screen to strengthen word.<br>Tap bottom to weaken it.";	
		}	
		else
			{
			first = 1;
			screenClick();
			}
    	}
});

topCounter.addEventListener("click", function() {
	if(n>0){
		Good();
	first = 1;
	screenClick();
	screenClick();

	var daysToRepeat = localStorage.getItem("memoryTime"+n) - day;
	if(daysToRepeat<0)
		{daysToRepeat = 0;}
	
document.getElementById("demo").innerHTML = kanji[n];
document.getElementById("result").innerHTML = "Familiarity<br>" + localStorage.getItem("memory"+n);
document.getElementById("result1").innerHTML = "Days to repeat<br> " +daysToRepeat;
document.getElementById("info").innerHTML = "";
	}
	else if(resetData==2){
		var temporary = localStorage.getItem("noc");
		temporary = temporary - 1 + 1 + 1;
		localStorage.setItem("noc", temporary);
		numberOfCards = localStorage.getItem("noc");
		document.getElementById("demo").innerHTML = "Number of Cards: "+localStorage.getItem("noc");
	}
	else if(resetData==3){
		var temporary = localStorage.getItem("lol");
		temporary = temporary - 1 + 1 + 1;
		localStorage.setItem("lol", temporary);
		lenghtOfLesson = localStorage.getItem("lol");
		document.getElementById("demo").innerHTML = "Lesson's lenght: "+localStorage.getItem("lol");
	}
});
bottomCounter.addEventListener("click", function() {
	if(n>0) {
	Bad();
	first = 1;
	screenClick();
	screenClick();

	var daysToRepeat = localStorage.getItem("memoryTime"+n) - day;
	if(daysToRepeat<0)
		{daysToRepeat = 0;}
	
document.getElementById("demo").innerHTML = kanji[n];
document.getElementById("result").innerHTML = "Familiarity<br>" + localStorage.getItem("memory"+n);
document.getElementById("result1").innerHTML = "Days to repeat<br> " +daysToRepeat;
document.getElementById("info").innerHTML = "";
}
else if(resetData==2){
	var temporary = localStorage.getItem("noc");
	temporary = temporary - 1;
	localStorage.setItem("noc", temporary);
	numberOfCards = localStorage.getItem("noc");
	document.getElementById("demo").innerHTML = "Number of Cards: "+localStorage.getItem("noc");
}
else if(resetData==3){
	var temporary = localStorage.getItem("lol");
	temporary = temporary - 1;
	localStorage.setItem("lol", temporary);
	lenghtOfLesson = localStorage.getItem("lol");
	document.getElementById("demo").innerHTML = "Lesson's lenght: "+localStorage.getItem("lol");
}
});

document.body.style.backgroundImage = "url('background" + Math.floor(Math.random()*10) + ".png')";
var i = 1;
var sweet = Math.floor(Math.random()*10 / 2);
while(i < 6)
	{
		document.getElementById("flying" + i).style.backgroundImage = "url('sweet" + sweet + ".png')";
		i++;
	}
};


var kanji = ["Have a great lesson", "日","一","国","人","年","大","十","二","本","中","長","出","三","時","行","見","月","後","前","生","五","間","上","東","四","今","金","九","入","学","高","円","子","外","八","六","下","来","気","小","七","山","話","女","北","午","百","書","先","名","川","千","水","半","男","西","電","校","語","土","木","聞","食","車","何","南","万","毎","白","天","母","火","右","読","友","左","休","父","雨"];
var answers = ["","day/ sun/ Japan","one","country","person","year","large/ big","ten","two","book/ present/ main/ true/ real/ counter for long things","in/ inside/ middle/ mean/ center","long/ leader","exit/ leave","three","time/ hour","going/ journey","see/ hopes/ chances/ idea/ opinion/ look at/ visible","month/ moon","behind/ back/ later","in front/ before","life/ genuine/ birth","five","interval/ space","above/ up","east","four","now","gold","nine","enter/ insert","study/ learning/ science","tall/ high/ expensive","circle/ yen/ round","child/ sign of the rat/ 11PM-1AM/ first sign of Chinese zodiac","outside","eight","six","below/ down/ descend/ give/ low/ inferior","come/ due/ next/ cause/ become","spirit/ mind","little/ small","seven","mountain","tale/ talk","woman/ female","north","noon/ sign of the horse/ 11AM-1PM/ seventh sign of Chinese zodiac","hundred","write","before/ ahead/ previous/ future/ precedence","name/ noted/ distinguished/ reputation","stream/ river","thousand","water","half/ middle/ odd number/ semi-/ part-","male","west/ Spain","electricity","exam/ school/ printing/ proof/ correction","word/ speech/ language","soil/ earth/ ground/ Turkey","tree/ wood","hear/ ask/ listen","eat/ food","car","what","south","ten thousand","every","white","heavens/ sky/ imperial","mama/ mother","fire","right","read","friend","left","rest/ day off/ retire/ sleep","father","rain"];
var readings = ["","ニチ、ジツ、ひ、か","イチ、イツ、ひと","コク、くに","ジン、ニン、ひと","ネン、とし","ダイ、タイ、おお","ジュウ、ジ、とう、と","ニ、ふた","ホン、もと","チュウ、なか","チョウ、なが","シュツ、で、だ","サン、みっ、み","ジ、とき","コウ、ギョウ、い、ゆ、おこな","ケン、み","ゲツ、ガツ、つき","ゴウ、コウ、あと、のち、うし、おく","ゼン、まえ","セイ、ショウ、い、う","ゴ、いつ","カン、ケン、あいだ、ま","ジョウ、うえ、あ","トウ、ひがし","シ、よ、よっ、よん","コン、キン、いま","キン、コン、かね","キュウ、ク、ここの","ニュウ、はい、い","ガク、まな","コウ、たか","エン、まる","シ、ス、こ","ガイ、ゲ、そと、ほか、はず","ハチ、や、やっ、よう","ロク、む、むっ、むい","カ、ゲ、した、くだ","ライ、く、きた","キ、ケ","ショウ、ちい、こ、お","シチ、なな","サン、やま","ワ、はなし、はな","ジョ、ニョ、おんな、め","ホク、きた","ゴ","ヒャク","ショ、か","セン、さき","メイ、ミョウ、な","セン、かわ","セン、ち","スイ、みず","ハン、なか","ダン、ナン、おとこ","セイ、サイ、にし","デン","コウ","ゴ、かた","ド、ト、つち","ボク、モク、き","ブン、モン、き","ショク、た、く","シャ、くるま","カ、なに、なん","ナン、みなみ","マン、バン","マイ","ハク、ビャク、しろ","テン、あめ、あま","ボ、はは、かあ","カ、ひ","ユウ、ウ、みぎ","ドク、トク、よ","ユウ、とも","サ、ひだり","キュウ、やす","フ、ちち、とう","ウ、あめ、あま"];
var n = 0;
var l = kanji.length;
if(localStorage.getItem("noc") < 1){
	localStorage.setItem("noc", 5);
}
if(localStorage.getItem("lol") < 1){
	localStorage.setItem("lol", 15);
}
if(localStorage.getItem("wtq") < 1){
	localStorage.setItem("wtq", 1);
}
var whatToQuestion = localStorage.getItem("wtq");
var numberOfCards = localStorage.getItem("noc");
var lenghtOfLesson = localStorage.getItem("lol");
var first = 0;
var whichAnswer = 0;
var resetData = 0;


var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);


	


function screenClick() {
	if(first == 0){
	greenButton();
	first = 1;
	}
	else{
		if(window.location.href.indexOf("READY") > -1){	
			if(whichAnswer == 0)
			{document.getElementById("demo").style.fontSize = "55px";document.getElementById("demo").innerHTML = answers[n];whichAnswer++;}
			else if(whichAnswer == 1)
			{document.getElementById("demo").style.fontSize = "40px";document.getElementById("demo").innerHTML = readings[n];whichAnswer++;}
			else
			{document.getElementById("demo").style.fontSize = "80px";document.getElementById("demo").innerHTML = kanji[n];whichAnswer=0;}
		}
		else{			
			if(whichAnswer == 0)
			{document.getElementById("demo").style.fontSize = "40px";document.getElementById("demo").innerHTML = answers[n];whichAnswer++;}
			else if(whichAnswer == 1)
			{document.getElementById("demo").style.fontSize = "35px";document.getElementById("demo").innerHTML = readings[n];whichAnswer++;}
			else
			{document.getElementById("demo").style.fontSize = "50px";document.getElementById("demo").innerHTML = kanji[n];whichAnswer=0;}
		}
	}
}


function greenButton() {
var check = 0;
if(lenghtOfLesson > -1)
{
Good();
}

while(check == 0){
var m = n+1;
	if(lenghtOfLesson == 0||lenghtOfLesson == -1)
	{
		if(lenghtOfLesson == 0) document.getElementById("demo").style.fontSize = "55px";document.getElementById("demo").innerHTML = '<a href="index.html">That was a<br>FANTASTIC<br>lesson!</a>';
	lenghtOfLesson = -1
	break;
	}
	if( numberOfCards == 0)
	{
	n=0;
	numberOfCards = 5;
	}
	else if( n < l-1 && localStorage.getItem("memory"+m)<5 || localStorage.getItem("memoryTime"+m)<=day && localStorage.getItem("memory"+m)<8 ){
	n=n+1;
	lenghtOfLesson = lenghtOfLesson - 1;
	numberOfCards = numberOfCards - 1;
	check = 1;
	//Answer(); // DEBUG
	if(whatToQuestion == 1){
	whichAnswer = 0;
	document.getElementById("demo").style.fontSize = "80px";document.getElementById("demo").innerHTML = kanji[n];}
	else if(whatToQuestion == 2){
	whichAnswer = 1;
	document.getElementById("demo").style.fontSize = "55px";document.getElementById("demo").innerHTML = answers[n];}
	else{
	whichAnswer = 2;
	document.getElementById("demo").style.fontSize = "40px";document.getElementById("demo").innerHTML = readings[n];}
	
	}
	else if( n == l)
	{
	n=0;
	}
	else {
	n=n+1;
	}
}
}


function redButton() {
var check = 0;
if(lenghtOfLesson > -1)
{
Bad();
}

while(check == 0){
var m = n+1;
	if(lenghtOfLesson == 0 || lenghtOfLesson == -1)
	{
		if(lenghtOfLesson == 0) document.getElementById("demo").style.fontSize = "55px";document.getElementById("demo").innerHTML = '<a href="index.html">Uff...<br>We\'re finally here!</a>';
		lenghtOfLesson = -1
		break;
	}
	if( numberOfCards == 0)
	{
	n=0;
	numberOfCards = 5;
	}
	else if( n < l-1 && localStorage.getItem("memory"+m)<5 || localStorage.getItem("memoryTime"+m)<=day && localStorage.getItem("memory"+m)<8){
	n=n+1;
	lenghtOfLesson = lenghtOfLesson - 1;
	numberOfCards = numberOfCards - 1;
	check = 1;
	//Answer(); // DEBUG
	if(whatToQuestion == 1){
		whichAnswer = 0;
		document.getElementById("demo").style.fontSize = "80px";document.getElementById("demo").innerHTML = kanji[n];}
		else if(whatToQuestion == 2){
		whichAnswer = 1;
		document.getElementById("demo").style.fontSize = "55px";document.getElementById("demo").innerHTML = answers[n];}
		else{
		whichAnswer = 2;
		document.getElementById("demo").style.fontSize = "40px";document.getElementById("demo").innerHTML = readings[n];}
	}
	else if( n == l)
	{
	n=0;
	}
	else {
	n=n+1;
	}
}
}



function RepeatAll() {
	var i = l-1;
	while(i>0)
	{
	var temporary = localStorage.getItem("memory"+i);
	temporary = temporary - 1;
	if(temporary < 0)
	temporary = 0;
	if(temporary > 4)
	temporary = 4;
	localStorage.setItem("memory"+i, temporary)
	localStorage.setItem("memoryTime"+i, day);
		i--;
	}
	}

function Good(){
	var temporary = localStorage.getItem("memory"+n);
	temporary = temporary - 1 + 1 + 1;
	localStorage.setItem("memory"+n, temporary);
	localStorage.setItem("memoryTime"+n, day);
	if(temporary == 5)
	{
		temporary = day + 2;
		localStorage.setItem("memoryTime"+n, temporary);
	}
	else if(temporary == 6)
	{
		temporary = day + 7;
		localStorage.setItem("memoryTime"+n, temporary);
	}
	else if(temporary == 7)
	{
		temporary = day + 30;
		localStorage.setItem("memoryTime"+n, temporary);
	}
	else if(temporary > 7)
	{
		temporary = day + 99;
		localStorage.setItem("memoryTime"+n, temporary);
		localStorage.setItem("memory"+n, 8);		
	}

	}

function Bad(){
	var temporary = localStorage.getItem("memory"+n);
	temporary = temporary - 1;
	if(temporary < 0)
	temporary = 0;
	localStorage.setItem("memory"+n, temporary);
	localStorage.setItem("memoryTime"+n, day);
	if(temporary > 5)
	{temporary = 4;
	localStorage.setItem("memory"+n, temporary);
	localStorage.setItem("memoryTime"+n, day);
	}
	}





function Answer() {
document.getElementById("demo").innerHTML = answers[n];


    
	
	var i = 0;
	var wyniki= "wyniki to: <p>";
	while(i<l){
	wyniki = wyniki+ "dla " + i + ": "+ localStorage.getItem("memory"+i) + "<p>";
	document.getElementById("demo1").innerHTML = wyniki;
	i= i+ 1;
	}
}

function MoveNext() {
	whichAnswer = 0;
	resetData=0;
	if( n == l-1)
	{
	n=1;
	}
	else {
	n=n+1;
	}
	var daysToRepeat = localStorage.getItem("memoryTime"+n) - day;
	if(daysToRepeat<0)
		{daysToRepeat = 0;}
	
document.getElementById("demo").style.fontSize = "50px";document.getElementById("demo").innerHTML = kanji[n];
document.getElementById("result").innerHTML = "Familiarity<br>" + localStorage.getItem("memory"+n);
document.getElementById("result1").innerHTML = "Days to repeat<br> " +daysToRepeat;
document.getElementById("info").innerHTML = "";
}

function MoveBack() {
whichAnswer = 0;
if( n > 1 ){
n=n-1;
var daysToRepeat = localStorage.getItem("memoryTime"+n) - day;
if(daysToRepeat<0)
	{daysToRepeat = 0;}

document.getElementById("demo").style.fontSize = "50px";document.getElementById("demo").innerHTML = kanji[n];
document.getElementById("result").innerHTML = "Familiarity<br>" + localStorage.getItem("memory"+n);
document.getElementById("result1").innerHTML = "Days to repeat<br> " +daysToRepeat;
}
else if (resetData == 0){
	n=0;
	resetData=1;
	document.getElementById("demo").innerHTML = "Repeat mode";
	document.getElementById("info").innerHTML = "Tap the screen to weaken<br>all of the words.";
	document.getElementById("result").innerHTML = "";
	document.getElementById("result1").innerHTML = "";
}
else if (resetData == 1){
	n=0;
	resetData=2;
	document.getElementById("demo").innerHTML = "Number of Cards: "+localStorage.getItem("noc");
	document.getElementById("info").innerHTML = "";
	document.getElementById("result").innerHTML = "Give me more!";
	document.getElementById("result1").innerHTML = "<br>I want to slow down...";
}
else if (resetData == 2){
	n=0;
	resetData=3;
	document.getElementById("demo").innerHTML = "Lesson's lenght: "+localStorage.getItem("lol");
	document.getElementById("info").innerHTML = "";
	document.getElementById("result").innerHTML = "I can handle more!";
	document.getElementById("result1").innerHTML = "<br>That's too much for me";
}
else if (resetData == 3){
	n=0;
	resetData=4;
	if(whatToQuestion == 1){
			document.getElementById("demo").innerHTML = "First i want to see<br>kanji";}
		else if(whatToQuestion == 2){
			document.getElementById("demo").innerHTML = "First i want to see<br>meaning";}
		else{
			document.getElementById("demo").innerHTML = "First i want to see<br>readings";}
		
	document.getElementById("info").innerHTML = "";
	document.getElementById("result").innerHTML = "";
	document.getElementById("result1").innerHTML = "You choose how do you want to learn!";
}
}


