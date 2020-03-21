import React from 'react';
import ReactDOM from 'react-dom';

export class NameInputField extends React.Component {
  render (){
    return(
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" placeholder="Name" id="nameInput"></input>
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </p>
      </div>
    )
  }
}

export class ScoreInputField extends React.Component {
  render (){
    return(
      <div className="field">
        <p className="control has-icons-left has-icons-right">
        <input className="input" placeholder="Score" id="scoreInput"></input>
          <span class="icon is-small is-left">
            <i class="fas fa-gamepad"></i>
          </span>
        </p>
      </div>
    )
  }
}
