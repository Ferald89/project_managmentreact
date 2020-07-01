import React from 'react';
import { Link } from 'react-router-dom';

// Local
import './styles/Home.css';
import platziconfLogoImage from '../images/logod.svg';
import astronautsImage from '../images/hero-image.svg';

class Home extends React.Component{
    render(){
        return(
            <div className="Home">
            <div className="container">
              <div className="row">
                <div className="Home__col col-12 col-md-4">
                  <img
                    src={platziconfLogoImage}
                    alt="Platzi Conf Logo"
                    className="img-fluid mb-2"
                  />
    
                  <h1>Sistema De Control De Projetos</h1>
                  <Link className="btn btn-primary" to="/badges">
                    Start
                  </Link>
                </div>
    
                <div className="Home__col d-none d-md-block col-md-8">
                  <img
                    src={astronautsImage}
                    alt="Astronauts"
                    className="img-fluid p-10"
                    height="50%"
                    width="50%"
                  />
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Home;