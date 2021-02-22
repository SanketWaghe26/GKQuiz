// import React from "react";

// const Result = ({ score, playAgain }) => {

// };

// export default Result;

import React from 'react'

function Result  ({score, playAgain}) {
    return (
        <div>
            <div className="score-board">
                <div className="score">You scored {score} / 5 correct answer !</div>
                <button className="playBtn" onClick={playAgain}>
                    Play Again !
        </button>
            </div>
        </div>
    )
}

export default Result
