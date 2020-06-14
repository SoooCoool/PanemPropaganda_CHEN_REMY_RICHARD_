
	function init()	{
		Quest = new Array() 
		for (var idx = 1; idx < 10; idx++)//indiquer ici le nombre de questions par cession + 1 
			{ 
				Quest[idx] = Math.random() 
				Quest[idx] = Quest[idx] * 10//indiquer ici le nombre total de questions
				Quest[idx] = Math.ceil(Quest[idx]) 
				for (var j = 1; j < idx; j++) 
				{ 
				 if (Quest[idx] == Quest[j]) 
					{ 
						Quest[idx] = Math.random() 
						Quest[idx] = Quest[idx] * 10//indiquer ici le nombre total de questions 
						Quest[idx] = Math.ceil(Quest[idx]) 
						j = -1 
					} 
				} 
			}
	}
	
	function initq(iRows,iCols) 
	{ 
		var i; 
		var j; 
		var a = new Array(iRows); 
		for (i=0; i < iRows; i++) 
		{ 
			a[i] = new Array(iCols); 
			for (j=0; j < iCols; j++) 
			{ 
				a[i][j] = ""; 
			} 
		} 
	return(a);
   				 
}
var questions = initq(11,9);


questions[1][1] = "Quelle est la devise des Hunger Games ?"
questions[1][2] = "La neige se pose toujours au sommet"
questions[1][3] = "Puisse le sort vous être favorable"
questions[1][4] = "Que la force soit avec vous"
questions[1][5] = "À  fond la forme"
questions[1][6] = "B"
questions[1][7] = "Puisse le sort vous être favorable"

questions[2][1] = "Qui est notre vénérable Président?"
questions[2][2] = "Coriolanus Snow"
questions[2][3] = "Coriolanus Sun"
questions[2][4] = "Coriolanus Rain"
questions[2][5] = "Coriolanus Wind"
questions[2][6] = "A"
questions[2][7] = "Coriolanus Snow"

questions[3][1] = "Qui est le SEUL vainqueur des Hunger Games appartenant au district 12 ?"
questions[3][2] = "Christopher Marshall"
questions[3][3] = "Haymitch Abernathy"
questions[3][4] = "Finnick Odair"
questions[3][5] = "Dr Gaul"
questions[3][6] = "B"
questions[3][7] = "Finnick Odair"

questions[4][1] = "Quel est le rôle du Disctrict 6?"
questions[4][2] = "Les Transports"
questions[4][3] = "L'agriculture"
questions[4][4] = "Le charbon"
questions[4][5] = "Les animaux"
questions[4][6] = "A"
questions[4][7] = "Les Transports"

questions[5][1] = "Qui a imaginé les Hunger Games?"
questions[5][2] = "Sejanus Plinth"
questions[5][3] = "Sophie Chen"
questions[5][4] = "Albus Dumbeldor"
questions[5][5] = "Casca Highbottom"
questions[5][6] = "D"
questions[5][7] = "Casca Highbottom"

questions[6][1] = "Quelle note mérite notre projet ?"
questions[6][2] = "Une excellente  note !"
questions[6][3] = "Une très bonne note !"
questions[6][4] = "Une bonne note ?"
questions[6][5] = "Une mauvaise note ... :'("
questions[6][6] = "A"
questions[6][7] = " Une excellente note !  Mais ce que n'est notre humble avis :)"

questions[7][1] = "Qui est Seneca Crane?"
questions[7][2] = "Un tribut"
questions[7][3] = "Le boulanger"
questions[7][4] = "Le maître des jeux"
questions[7][5] = "Professeur de Web"
questions[7][6] = "C"
questions[7][7] = "Le maître des jeux"

questions[8][1] = "En quoi croyons-nous?"
questions[8][2] = "Le Capitol"
questions[8][3] = "Le Capitol"
questions[8][4] = "Le Capitol"
questions[8][5] = "Le Capitol"
questions[8][6] = "A"	
questions[8][7] = "Le Capitol"

questions[9][1] = "Katniss Everdeen vient de quel District?"
questions[9][2] = "Du 12"
questions[9][3] = "Du 2"
questions[9][4] = "Du Capitol"
questions[9][5] = "De L'EFREI"
questions[9][6] = "A"
questions[9][7] = "Du 12"

questions[10][1] = "Quand est parus le premier Roman de Suzanne Collin?"
questions[10][2] = "Le 26 juin 1997"
questions[10][3] = "Le 14 mai 2000"
questions[10][4] = "Le 11 septembre 2001"
questions[10][5] = "Le 14 septembre 2008"
questions[10][6] = "D"
questions[10][7] = "Le 14 septembre 2008"

function nextQuestion(form){ 	
	var quizEnd = eval(10 * 1);

    if(form.questNo.value == quizEnd) {

	   form.question.value = "";
	   
       form.choiceA.value = "";
       form.choiceB.value = "";
       form.choiceC.value = "";
       form.choiceD.value = "";

       form.yourChoice.value = "";

       form.results.value = "Fin du Quiz."; } else {

    if(form.questNo.value == "") {form.questNo.value = 1} else {
    
       form.questNo.value = eval(form.questNo.value) + 1;

    }

	var NumAleat = Quest[form.questNo.value];
	
	form.question.value = questions[NumAleat][1];
    form.choiceA.value = questions[NumAleat][2];
    form.choiceB.value = questions[NumAleat][3];
    form.choiceC.value = questions[NumAleat][4];
    form.choiceD.value = questions[NumAleat][5];

    form.yourChoice.value = "";

    form.results.value = "";

    if(form.myScore.value == "") {
		form.myScore.value = 0; 
	} 
	else {
    	form.myScore.value = form.myScore.value; }
   }

}

function EvalSound(soundobj) {
	var thissound= eval("document."+soundobj);
	thissound.Play();
}

function testrep(form) {
    var myScore = 0;
    var curve = 0;
	var pourc = 0
	var NumAleat = Quest[form.questNo.value];

	if(form.results.value != "") {
		form.results.value = "Une seule reponse est autorisee. Clickez sur ''Question suivante'' pour continuer."; 
	}

    else if(form.yourChoice.value == questions[NumAleat][6]) {
    	form.myScore.value = eval(form.myScore.value) + eval(1);
    	form.results.value = "Correct";
	} 
	else {
    	form.results.value = "Faux. Vous auriez dû repondre " + questions[NumAleat][7];
	}
}

	
function repa(form){
	if(form.results.value == "")
{
	form.yourChoice.value = "A";
	form.tda.value = "Votre choix";}
}
		
function repb(form) {
	if(form.results.value == ""){
		form.yourChoice.value = "B";
		form.tdb.value = "Votre choix"
	}
}

function repc(form){ 
	if(form.results.value == ""){
		form.yourChoice.value = "C";
		form.tdc.value = "Votre choix";
	}
}

function repd(form){ 
	if(form.results.value == "")
	{
		form.yourChoice.value = "D";
		form.tdd.value = "Votre choix";
	}
}

function clearRep(form){
    form.tda.value = "";
    form.tdb.value = "";
    form.tdc.value = "";
    form.tdd.value = "";
}


function clearForm(form){
    
    form.questNo.value = "";
    form.question.value = "";
    form.choiceA.value = "";
    form.choiceB.value = "";
    form.choiceC.value = "";
    form.choiceD.value = "";
    form.yourChoice.value = "";
    form.results.value = "";
    form.myScore.value = "";
    form.percent.value = "";
    form.tda.value = "";
    form.tdb.value = "";
    form.tdc.value = "";
    form.tdd.value = "";
	form.cmt.value = "";
}



	
