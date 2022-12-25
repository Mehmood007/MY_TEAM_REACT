import React from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../../helper/navhelper';
import navigationmenu from '../../data/navigation.json';

class Headerthree extends HeaderComponent {
    render() {
        const session_id = localStorage.getItem("session_id")
        function logout() {
            localStorage.removeItem("session_id");

            const fetchData = async () => {
                const session_id = localStorage.getItem("session_id")
                const response = await fetch(
                    `http://127.0.0.1:5000/franchiseSignUp`
                );
                const json = await response.json();

            };
            fetchData().catch(console.error);
        }
        const stickyheader = this.state.isTop ? 'sticky' : '';
        return (
            <header className={"header-absolute header-three sticky-header " + stickyheader} id="can-sticky">
                <div className="container-fluid custom-container-two">
                    <div className="mainmenu-area">
                        <div className="d-flex align-items-center justify-content-between">
                            <nav className="main-menu">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/logo-white.png"} alt="logo" className="normal-logo" />
                                        <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="logo" className="sticky-logo" />
                                    </Link>
                                </div>
                                <div className="menu-items">
                                    <ul>
                                        {navigationmenu.length > 0 ? navigationmenu.map((item, i) => (
                                            <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                                                {item.child ? <Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> : <Link to={item.link}> {item.linkText} </Link>}
                                                {item.child ?
                                                    <ul className="submenu" role="menu">
                                                        {item.submenu.map((sub_item, i) => (
                                                            <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                                                {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                                                {sub_item.submenu ?
                                                                    <ul className="submenu">
                                                                        {sub_item.submenu.map((third_item, i) => (
                                                                            <li className="menu-item" key={i}><Link
                                                                                to={third_item.link}>{third_item.linkText}</Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul> : null}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    : null
                                                }
                                            </li>
                                        )) : null}
                                    </ul>
                                </div>
                            </nav>
                            <div className="main-right">
                                {session_id === null || session_id === undefined ?
                                    <Link to="/login" className="main-btn btn-filled">
                                        Login
                                    </Link> :
                                    <Link to="/" className="main-btn btn-filled" onClick={()=>logout()}>
                                        Logout
                                    </Link>}
                            </div>
                        </div>
                    </div>

                </div>
            </header>
        );
    }
}

export default Headerthree;