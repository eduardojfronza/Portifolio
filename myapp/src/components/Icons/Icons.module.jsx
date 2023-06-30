import styled from "styled-components";

export const StyledLink = styled.a`
    display:flex;    
    
    color:white;
    font-size:16px;
    text-decoration:none;
    margin: 5px 0px;
    
    &:hover {
        color:red;
    }
    
    p{
        margin:0 5px;
    }

    span {
        margin:2px 0;
    }
`