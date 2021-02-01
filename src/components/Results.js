import React from 'react';
import '../scss/results.scss';

const Results = (props) =>{
    return (
        <div className="result-container">
            {console.log("Hiiiiiiiiii>>>>",props)}
            <pre>count:{
            JSON.stringify(props.count, null, 2)}</pre>
            <pre role="pre">,results:{
            JSON.stringify(props.data, null, 2)}</pre>
        </div>
    )
}

export default Results;