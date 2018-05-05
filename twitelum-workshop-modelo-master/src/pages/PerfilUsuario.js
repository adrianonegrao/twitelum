import React from 'react'
import Helmet from 'react-helmet'

export default class PerfilUsuario extends React.Component{
    render(){

        console.log(this.props.match.params.login)

        return (
            <div>
                <Helmet title={`Twitelum - ${this.props.match.params.login}`} />
                oi 
            </div>
        )
    }
}