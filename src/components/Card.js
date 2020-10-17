import React from 'react';

const Card = (props) => {
    const { id, name, email } = props;//Concept of Object Destructuring
    return (
        <div className="tc bg-light-green dib pa3 ma3 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200 `} alt="Robots"></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card; 