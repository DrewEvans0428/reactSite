import React from 'react';

function CardList({ cards }) {
    return (
        <div>

            {cards.map((card) => (
                <div key={card._id}>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    </div>
            ))}
        </div>
    );

}

export default CardList;