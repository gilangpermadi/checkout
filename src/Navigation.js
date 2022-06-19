import React from "react";
import { Step } from './components';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #FFFAE6;
    border-radius: 35px;
    padding: 15px 35px;
    position: absolute;
`;

export default function Navigation(props) {
    return (
        <Container>
            <Wrapper>
                {props.labels.map((item, index) => {
                    return(
                        <Step label={item} key={index} index={index}></Step>
                    )
                })}
            </Wrapper>
        </Container>
    )
}