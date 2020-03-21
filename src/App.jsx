import React from 'react';
import ScoreTable from './ScoreTable';
import AddNewResultButton from './AddNewResultButton';
import DownloadDataButton from './DownloadDataButton';
import * as Components from './Components';

import './App.sass';

function App() {
  return (
    <div className="is-fullwidth">
        <div className="container center">
            <div className="notification">
                <div className="container is-fullhd">
                    <div className="container">
                      <h2 className="title is-2 has-text-centered" id="title">Wall of Fame</h2>
                      <div className="column">
                        <ScoreTable></ScoreTable>
                      </div>
                    </div><br/>
                    <article className="media">
                        <figure className="media-left">
                          <Components.NameInputField></Components.NameInputField>

                          <nav className="level">
                              <div className="level-left">
                                  <div className="level-item">
                                    <AddNewResultButton></AddNewResultButton>
                                  </div>
                                  <div className="level-item">
                                    <DownloadDataButton></DownloadDataButton>
                                  </div>
                              </div>
                          </nav>
                        </figure>
                        <div className="media-content">
                          <Components.ScoreInputField></Components.ScoreInputField>
                        </div>
                    </article>
                </div>
            </div>
        </div>
      </div>
  );
}

export default App;
