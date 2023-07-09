import './nav.scss';
import logo from './imgs/logo.png';

export const Nav = () => {

    return(
        <nav className="navbar navbar-expand-sm navbar-dark nav-custom layout__header">
            <div id="contenedor_logo" className="container-fluid">
                <a className="navbar-brand " href="#">
                    <img src={logo} alt="" width="140" height="50" className="logo"></img>
                </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Portfolio</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarOpcionesMultiples" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarOpcionesMultiples">
                        <li><a className="dropdown-item" href="#">Page 1</a></li>
                        <li><a className="dropdown-item" href="#">Page 2</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>			
                </ul>		  
              </div>
            </div>
        </nav>
    )

}