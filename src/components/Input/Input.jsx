import React from 'react';
import { Container, Label, Input as SInput } from './styles';

const Input = (props) => {
    const { id, type, placeholder } = props;
    
    return (
        <Container>
            <SInput id={id} type={type} />
            <Label>{placeholder}</Label>
        </Container>
    )
};

export default Input;
