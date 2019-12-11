import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user, i, id) => {
        return <Card 
                key={id} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
                />
    })
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;