import styled from "styled-components";

export const Input = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "1em",
  }))`
    border: 2px solid palevioletred;
    margin: ${props => props.size};
    font-family: "JetBrains Mono",monospace;
    padding: ${props => props.size};
    border-radius: 5px;
  `;