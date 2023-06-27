import styled from "styled-components";

export const ContainerHeader = styled.header`
    height:150px;
    background-color:#212121;
    box-shadow: 0px 2px 10px 
`
export const LinksMenu = styled.div`
    nav {
        display:flex;
        justify-content:center;
    }
    a {
        font-size: 20px;
        text-decoration:none;
        color:#fff;
        margin: 5px 10px;
    }

    a:hover {
        color:#ff2600;
    }
`

export const Title = styled.div`
    display:block;
    text-align: center;
    color:#ffff;
    
h1 {
    font-size:38px;
    margin:15px 0px;
}
p a {
    text-decoration:none;
    color: #ffff;
}

p a:hover {
    color:#ff2600;

}
`