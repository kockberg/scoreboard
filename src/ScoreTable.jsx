import React from 'react';
import ReactDOM from 'react-dom';
//import './App.sass';

export var highscores = [
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

var sortOrder = 0;

// Adds a name and a score from the user input into the table and sorts the scores.
export function addToTable(nameInput, scoreInput) {
  scoreInput = scoreInput.replace(',', '.');
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
      sortScores();
      updateTable();
      document.getElementById("nameInput").value = '';
      document.getElementById("scoreInput").value = '';
  }
}

export function changeOrderClick(){
  if(sortOrder == 0){
    sortOrder = 1;
  } else if(sortOrder == 1){
    sortOrder = 0;
  }
  updateTable();
}

export function getHighestId(){
  var highest = 0;
    for(var i = 0; i < highscores.length; i++){
        if(highscores[i].id > highest){
            highest = highscores[i].id;
        }
    }
    return highest;
}

export function sortScores(changeOrder){
  highscores.sort(function (a, b) {
    if(sortOrder == 1){
        //document.getElementById("title1").innerHTML = "Wall of Shame";
        //document.body.style.background = "#FF8C00";
        return parseFloat(a.score) - parseFloat(b.score);
    } else if(sortOrder == 0){
        //document.getElementById("title1").innerHTML = "Wall of Fame";
        //document.body.style.background = "#333";
        return parseFloat(b.score) - parseFloat(a.score);
    }
  });
}

export function updateTable(e, changeOrder){
  sortScores(changeOrder)
  ReactDOM.render(<ScoreTable />, document.getElementById('scoretableid'));
}

export default class ScoreTable extends React.Component {
  createTable = () => {
    sortScores()
    var table = []

    var headRow = []
    headRow.push(<th className="is-narrow"><p>{'#'}</p></th>)
    headRow.push(<th>{'Name'}</th>)
    headRow.push(<th className="thscore"><p onClick={changeOrderClick}>{'Score'}</p></th>)
    console.log(highscores)
    table.push(<thead><tr>{headRow}</tr></thead>)

    // Outer loop to create parent
    for (var i = 0; i < highscores.length; i++) {
      var children = []
      //Inner loop to create children
      children.push(<td>{i + 1}</td>)
      children.push(<td>{highscores[i].name}</td>)
      children.push(<td>{highscores[i].score}</td>)
      //Create the parent and add the children
      table.push(<tbody><tr>{children}</tr></tbody>)
    }
    return table
  }


  render() {
    return(
      <div id="scoretableid">
        <table className="table is-bordered is-hoverable is-fullwidth">
          {this.createTable()}
        </table>
      </div>
    )
  }

}
