import React from 'react';
import ReactDOM from 'react-dom';
import Kanban from './components/Kanban'
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import axios from 'axios';


var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyi2CN2ILdkHpMYl'}).base('appmXZCKuTeXwhJ8Y');

base('Bugs & Issues').select({
    view: 'Bugs by Priority'
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });
});

ReactDOM.render(<Kanban />, document.getElementById('app'));
