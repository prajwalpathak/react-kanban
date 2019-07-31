import React from 'react';
import Board from 'react-trello'
import data from "../../public/data.json";


export default class Kanban extends React.Component {


    state = {

    }

    render() {
        return <Board data={data} />
    }
}