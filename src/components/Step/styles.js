import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px 0;
`;

const Circle = styled.div`
    width: 30px;
    height: 30px;
    line-height: 25px;
    background-color: #FF8A00;
    color: #FFFFFF;
    border-radius: 50%;
    text-align: center;
`;

const Label = styled.span`
    margin-left: 5px;
    color: #FF8A00;
    font-weight: 500;
`;

export {
    Container,
    Circle,
    Label
}