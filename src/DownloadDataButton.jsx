import React from 'react';
import ReactDOM from 'react-dom';
import * as Functions from './ScoreTable';
import './App.sass';

export default class DownloadDataButton extends React.Component {

  handleClick() {
    const filename = "highscores.json";
    const jsonStr = JSON.stringify(Functions.highscores);

    var element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(jsonStr));
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  render (){
    return(
      <button className="button is-info" onClick={this.handleClick}><i className="fas fa-download fa-fw"></i>&nbsp;Download Data</button>
    )
  }
}
