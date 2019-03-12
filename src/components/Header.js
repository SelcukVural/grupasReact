import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component{
 
    constructor(){
        super();
        this.state = {
            isNavOpen : false

        }

    }
    buttonClicked(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
        
    }
    render(){
        return(  <header>
            <nav className="container navbar navbar-expand-lg navbar-light justify-content-between "> {/* justify-content-between flexi kaldırıyor sola yapıştırıcak menuyu */}
                <a className="navbar-brand" href="#">GRUPAS</a>
                <button className="navbar-toggler" type="button" onClick={this.buttonClicked.bind(this)} >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse" style={{display: this.state.isNavOpen ? "block" : "none" }}> 
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <Link to="/" activeClassName="active" className="nav-link">Ana Sayfa</Link>

                    </li>
                    <li className="nav-item ">
                        <Link to="/hakkimizda" activeClassName="active" className="nav-link">Hakımızda</Link>

                    </li>
                    <li className="nav-item ">
                        <Link to="/iletisim" activeClassName="active" className="nav-link">İletişim</Link>

                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                                 </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li> */}
                </ul>

                </div>
               
            </nav>
        </header>)


    }


}


export default Header;