// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.


const $ = require('jquery');

// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.scss');


import './materialize/materialize';

import './../css/materialize.css';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
import React from 'react';
import ReactDOM from 'react-dom';


import Styles from './Styles';



ReactDOM.render(<Styles />,    document.getElementById('root'));
