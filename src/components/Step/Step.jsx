import React from "react";
import { Container, Circle, Label } from './styles';

export default function Step(props) {
    return (
        <Container>
            <Circle>{props.index + 1}</Circle>
            <Label>{props.label}</Label>
        </Container>
    )
}