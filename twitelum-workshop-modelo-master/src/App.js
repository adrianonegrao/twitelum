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
            novoTweet : '',
            tweets: []
        }
    }

    adicionaTweet = (event) => {
        event.preventDefault();
        //console.log('Adicionando...')
        const novoTweet = this.state.novoTweet

        this.setState({
            tweets: [novoTweet, ...this.state.tweets], //spread operator
            novoTweet : ''
        })
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
                    <form className="novoTweet" onSubmit={this.adicionaTweet}>
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
                        <button disabled={ this.state.novoTweet.length > 140 } type="submit" className="novoTweet__envia">Tweetar</button>
                    </form>
                </Widget>
                <Widget>
                    <TrendsArea />
                </Widget>
            </Dashboard>
            <Dashboard posicao="centro">
                <Widget>
                    <div className="tweetsArea">
                            {
                                this.state.tweets.length === 0 ?
                                'Vai la digita um tweet' 
                                : ''
                            }
                            {
                                this.state.tweets.map(
                                    (tweet, index) => <Tweet key={index} texto={tweet} /> )
                            }
                    </div>
                </Widget>
            </Dashboard>
        </div>
      </Fragment>
    );
  }
}

export default App;
