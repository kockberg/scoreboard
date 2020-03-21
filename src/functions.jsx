import React from 'react';

// Variables.
var lastAddition;
var sortOrder = 0;

// Some sample data.

var highscores =
[
    { "id" : 1, "name": "Pat Haynes", "score": "985195" },
    { "id" : 2, "name": "Sherry Briggs", "score": "654332" },
    { "id" : 3, "name": "Matthew Salazar", "score": "763316" },
    { "id" : 4, "name": "Ruben Robinson", "score": "646546" },
    { "id" : 5, "name": "Andrew Logan", "score": "192348" },
    { "id" : 6, "name": "Rafael Mccarthy", "score": "951349" },
    { "id" : 7, "name": "Bert Henry", "score": "987431" },
    { "id" : 8, "name": "Dawn Olson", "score": "842216" },
    { "id" : 9, "name": "Gabriel Manning", "score": "159464" },
    { "id" : 10, "name": "Armando Abbott", "score": "987633" }
];

// Functions

// Adds a name and a score from the user input into the table and sorts the scores.
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function addToTable(nameInput, scoreInput) {
    if(nameInput.trim() == "" || scoreInput.trim() == "" ){
        alert("Name or score can't be empty!");
    }
    else if(isNaN(scoreInput)){
        alert("Score must be numeric!");
    }
    else if(parseInt(scoreInput.trim()) < 0) {
        alert("Score must be at least 0!");
    }
    else{
        var id = getHighestId() + 1;
        highscores[highscores.length] = { "id": id, "name": nameInput, "score": scoreInput };
        console.log(highscores);
        sortScores();
        createTable(id);
        document.getElementById("nameInput").value = '';
        document.getElementById("scoreInput").value = '';
    }
}

// Creates the table based on the highscores.
function createTable(addedId){
    var scoretable = document.getElementById("scoretable");
    scoretable.innerHTML = "";
    var tbl = document.createElement("table");
    tbl.className = "table is-striped is-fullwidth is-hoverable";
    tbl.id = "scoretableid";
    var thead = document.createElement("thead");
    tbl.appendChild(thead);
    var thRow = document.createElement("tr");
    thead.appendChild(thRow);
    var th1 = document.createElement("th");
    th1.className = "is-narrow";
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    thRow.appendChild(th1);
    thRow.appendChild(th2);
    thRow.appendChild(th3);
    th1.appendChild(document.createTextNode("#"));
    th2.appendChild(document.createTextNode("Name"));
    th3.appendChild(document.createTextNode("Score"));
    th3.id = "scoreth";
    th3.onclick = function() {
        sortScores(null, true);
        createTable();
    }
    var position = getAddedScoresPosition(addedId);
    for(var i = 0; i < highscores.length; i++){
        var tr = tbl.insertRow();
        if(addedId != null && i == position){
          tr.className = "newAddition";
        }
        if(i == 0){
          tr.className = "golden";
        } else if(i == 1){
          tr.className = "silver";
        } else if(i == 2){
          tr.className = "bronze";
        }
        var td1 = tr.insertCell();
        if(i < 3){
          var medal = document.createElement("i");
          medal.className = "fas fa-medal";
          td1.appendChild(medal);
        }else{
          td1.appendChild(document.createTextNode((i+1).toString()));
        }
        var td2 = tr.insertCell();
        td2.appendChild(document.createTextNode(highscores[i].name));
        var td3 = tr.insertCell();
        td3.appendChild(document.createTextNode(highscores[i].score));
    }
    scoretable.appendChild(tbl);
}

// Handles the download function for the download button. Exports the data as JSON file.
function downloadData(){
  const filename = "highscores.json";
  const jsonStr = JSON.stringify(highscores);

  var element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(jsonStr));
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function getAddedScoresPosition(addedId){
    for(var i = 0; i < highscores.length; i++){
        if(highscores[i].id == addedId){
            return i;
        }
    }
}

function getHighestId(){
    var highest = 0;
    for(var i = 0; i < highscores.length; i++){
        if(highscores[i].id > highest){
            highest = highscores[i].id;
        }
    }
    return highest;
}

// Sorts the highscores table.
function sortScores(_highscoreJSON, changeOrder){
    var highscoreJSON = _highscoreJSON;
    if(highscoreJSON == null){
        highscoreJSON = highscores;
    }
    if(changeOrder == true){
        if(sortOrder == 0){
          sortOrder = 1;
        } else if(sortOrder == 1){
          sortOrder = 0;
        }
    }

    highscoreJSON.sort(function (a, b) {
    if(sortOrder == 1){
        document.getElementById("title1").innerHTML = "Wall of Shame";
        document.body.style.background = "#FF8C00";
        return parseInt(a.score) - parseInt(b.score);
    } else if(sortOrder == 0){
        document.getElementById("title1").innerHTML = "Wall of Fame";
        document.body.style.background = "#333";
        return parseInt(b.score) - parseInt(a.score);
    }
    });
}

sortScores(highscores, 0);
createTable();
