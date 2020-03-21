import React from 'react';
import ReactDOM from 'react-dom';
import * as Functions from './ScoreTable';
import './App.sass';

export default class AddNewResultButton extends React.Component {

  handleClick() {
    var name = document.getElementById("nameInput").value;
    var score = document.getElementById("scoreInput").value;

    Functions.addToTable(name, score);
  }

  render (){
    return(
      <button className="button is-success" onClick={this.handleClick}><i className="fas fa-plus-square fa-fw"></i>&nbsp;Add new result</button>
    )
  }
}
