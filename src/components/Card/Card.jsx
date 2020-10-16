import React from 'react';
import './Card.scss';

class Card extends React.Component {
    render() {
        return (
            <div className="github-profile">
                <img src="https://placehold.it/75" />
                <div className="info">
                    <div className="name">Name here</div>
                    <div className="company">Company here</div>
                </div>
            </div>
        );
    }
}

export default Card;