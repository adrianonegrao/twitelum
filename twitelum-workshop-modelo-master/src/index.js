import React from 'react';
import ReactDOM from 'react-dom';

// CSS Global
import './assets/css/reset.css'
import './assets/css/container.css'
import './assets/css/btn.css'
import './assets/css/icon.css'
import './assets/css/iconHeart.css'
import './assets/css/notificacao.css'

import './assets/css/novoTweet.css'
// import './index.css';


import Home from './Home';
import PerfilUsuario from './pages/PerfilUsuario'
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter} from 'react-router-dom' //Lembrar de rodar: npm i reacr-router-dom
import {Switch} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <PerfilUsuario />
            <Home />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
