import React, { Component } from 'react';

class Styles extends Component {
    constructor(props) {
        super(props);
        this.state = { searchText:"", placeHolder:"Rechercher des info"}
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <nav>
                        <a href={'/article'} className="brand-logo">lien vers article depuis react</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="">On verra</a></li>
                            <li><a href="">On verra</a></li>
                            <li><a href="">On verra</a></li>
                        </ul>

                    </nav>
                    <div className="row">
                        <input className="searchText"  onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder} />
                        <p>{this.state.searchText}</p>
                    </div>

                </div>

            </div>
        );
    }
    handleChange(e) {
        this.setState({searchText: e.target.value});
    };
}
export default Styles;