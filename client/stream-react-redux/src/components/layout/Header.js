import React from 'react'
import GoogleAuth from '../../components/GoogleAuth'
import { Link } from 'react-router-dom'


class Header extends React.Component{
    render(){
        return(
            <div className="ui secondary pointing menu">
                <Link to="/" className="item">
                    ColorStream
                </Link>
                <div className="right menu">
                    <Link to="/" className="item">
                        Streams
                    </Link>
                    <GoogleAuth/>
                </div>
            </div>
        )
    }
}

export default Header;