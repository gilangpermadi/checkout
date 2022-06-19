import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.15);
    width: 100%;
`;

const Label = styled.label`
    color: #999;
    font-weight: normal;
    opacity: 0.75;
    order: 1;
    /*outline: 0;*/
    padding-left: 2px;
    pointer-events: none;
    text-shadow: none;
    text-transform: capitalize;
    transform-origin: left top;
    transform: scale(1) translate3d(0, 22px, 0);
    transition: 200ms ease all;
`;

const Input = styled.input`
    border-radius: 0;
    display: flex;
    font-size: 100%;
    line-height: 25px;
    text-shadow: none;

    border: 0;
    color: #000;
    flex: 1 1 auto;
    order: 2;

    &:focus {
        outline: 0;
    }

    &:not(:focus) {
        color: transparent;
    }

    &:focus + ${Label} {
        color: #3949AB;
        opacity: 1;
        transform: scale(0.8) translate3d(0, 5px, 0);
    }
`;

export {
    Container,
    Label,
    Input
}
