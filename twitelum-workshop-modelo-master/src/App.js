import React, { Component, Fragment } from 'react';
import Cabecalho from './components/Cabecalho'
import NavMenu from './components/NavMenu'
import Dashboard from './components/Dashboard'
import Widget from './components/Widget'
import TrendsArea from './components/TrendsArea'
import Tweet from './components/Tweet'

class App extends Component {

    constructor(){
        super()
        this.state = {
            novoTweet : ''
        }
    }

  render() {
    return (
      <Fragment>
        <Cabecalho>
            <NavMenu usuario="@omariosouto" />
        </Cabecalho>
        <div className="container">
            <Dashboard>
              
                <Widget>
                    <form className="novoTweet">
                        <div className="novoTweet__editorArea">
                            <span className={`
                                novoTweet__status 
                                ${this.state.novoTweet.length > 140 
                                ? 'novoTweet__status--invalido'
                                : ''
                            }
                            `}>
                            
                            { this.state.novoTweet.length }/140</span>
                            <textarea 
                            value = { this.state.novoTweet }
                            onChange={
                                (event) => {
                                    this.setState({
                                        novoTweet: event.target.value
                                    })
                                }
                            }
                            className="novoTweet__editor" placeholder="O que está acontecendo?"></textarea>
                        </div>
                        <button disabled={ this.state.novoTweet. length > 140 } type="submit" className="novoTweet__envia">Tweetar</button>
                    </form>
                </Widget>
                <Widget>
                    <TrendsArea />
                </Widget>
            </Dashboard>
            <Dashboard posicao="centro">
                <Widget>
                    <div className="tweetsArea">
                        <Tweet />
                    </div>
                </Widget>
            </Dashboard>
        </div>
      </Fragment>
    );
  }
}

export default App;