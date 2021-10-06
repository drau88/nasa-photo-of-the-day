import React from "react";



const MainDisplay = (props) => {

    const { apiData } = props;
    console.log(props);
    return (
        <div className='displayContainer'>
            <img src={apiData.url} alt='Amazing space pic'></img>
            <h2>Credit goes to: {apiData.copyright} </h2>
            <h2>What am I looking at?</h2>
            <p>{apiData.explanation}</p>
        </div>

    )
};

export default MainDisplay;
