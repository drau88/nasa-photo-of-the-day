import React from "react";
import styled from 'styled-components';

const StyledDisplay = styled.div `
    background-color: ${pr => pr.theme.darkness};
    color: ${pr => pr.theme.textColor};
`


const MainDisplay = (props) => {

    const { apiData } = props;
    console.log(props);

    

    return (
        <StyledDisplay>
            <h1>From the awesome people at NASA:</h1>
            <h2>{apiData.title}</h2>
            <img src={apiData.url} alt='Amazing space pic'></img>
            <h2>Credit goes to: {apiData.copyright} </h2>
            <h2>What am I looking at?</h2>
            <button>Find out!</button>
            <p>{apiData.explanation}</p>
        </StyledDisplay>

    )
};

export default MainDisplay;
