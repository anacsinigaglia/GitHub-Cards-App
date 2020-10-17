import React from 'react';
import Card from '../Card/Card';

function ListCards(props) {

    return (
        <div>
            {props.profiles.map(profile => <Card {...profile} />)}
        </div>
    )
}

export default ListCards;