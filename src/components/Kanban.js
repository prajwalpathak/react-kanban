import React from 'react';
import Board from 'react-trello'
import data from "../../public/data.json";

var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyi2CN2ILdkHpMYl' }).base('appmXZCKuTeXwhJ8Y');

export default class Kanban extends React.Component {

    state = {
        data: []
    }

    componentDidMount() {
        base('Bugs & Issues').select({
        }).firstPage((err, records) => {
            if (err) {
                console.error(err);
                return;
            }
            records.forEach((record) => {
                console.log(record._rawJson);
                this.setState({ data: this.state.data.concat(record._rawJson) });
            });
        });



    }

    render() {
        return <Board data={data} />
    }
}