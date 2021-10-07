import React, { useState } from "react";
import styled from 'styled-components';


const StyledBackground = styled.div `
    background-image: url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80');
    display: flex;
    justify-content: center;
    height: 100%;
`

const StyledDisplay = styled.div `
    background-color: ${pr => pr.theme.darkness};
    color: ${pr => pr.theme.textColor};
    width: 75%;

    img {
        width: 75%;
    }
`


const MainDisplay = (props) => {

    const { apiData } = props;
    const [buttonClicked, setButtonClicked] = useState(false);
    const [buttonText, setButtonText] = useState('Find out!');
    console.log(props);

    const clickButton = () => {
        if (buttonClicked !== true){
            setButtonClicked(true);
            setButtonText('Close');
        } else {
            setButtonClicked(false);
            setButtonText('Find out!');
        }
    };

    return (
        <StyledBackground>
        <StyledDisplay>
            <h1>From the awesome people at NASA:</h1>
            <h2>{apiData.title}</h2>
            <img src={apiData.url} alt='Amazing space pic'></img>
            <h2>Credit goes to: {apiData.copyright} </h2>
            <h2>What am I looking at?</h2>
            <button onClick={clickButton}>{buttonText}</button>
           { buttonClicked ? <p>{apiData.explanation}</p> : <p></p> }
        </StyledDisplay>
        </StyledBackground>

    )
};

export default MainDisplay;
