import React, { Component } from 'react';

class Articles extends Component {

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <nav>
                        <a href={'/'} className="brand-logo">lien vers home depuis react</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="">On verra</a></li>
                            <li><a href="">On verra</a></li>
                            <li><a href="">On verra</a></li>
                        </ul>

                    </nav>

                </div>

            </div>
        );
    }
}
export default Articles;