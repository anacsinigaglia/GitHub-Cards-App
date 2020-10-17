import React from 'react';
import Card from '../Card/Card';
import { testData } from '../testData';

function ListCards(props) {

    return (
        <div>
            {testData.map(profile => <Card {...profile} />)}
        </div>
    )
}

export default ListCards;