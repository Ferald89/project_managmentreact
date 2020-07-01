import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar" >
                <div className="container-fluid">
                    <Link>
                        <img className="Navbar__bramd-logo" src="" alt="Logo"/>
                        <span className="font-weight-light">Deica</span>
                        <span className="font-weight-bold">Project Managment</span>
                    </Link>
                </div>
            </div>);
        }
    };


export default Navbar;
