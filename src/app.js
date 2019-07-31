import React from 'react';
import ReactDOM from 'react-dom';
import Kanban from './components/Kanban'
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import axios from 'axios';

ReactDOM.render(<Kanban />, document.getElementById('app'));
