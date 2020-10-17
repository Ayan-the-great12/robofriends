import React from 'react';

const Scroll = (props) => {
    // console.log(props.children); it shows a object which have a massive properties also include its children CardList
    return (
        <div style={{overflow:'scroll',border:'4px solid white', height:'800px' }}>
            {props.children}
        </div>
    );
}
export default Scroll;