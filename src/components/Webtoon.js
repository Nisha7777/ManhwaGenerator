import React from 'react';

function Webtoon(props) {
return(
    <div>
        <h1>{props.title}</h1>
        <h4>{props.genre}</h4>
        <h5>{props.synopsis}</h5>
    </div>
);}

export default Webtoon;