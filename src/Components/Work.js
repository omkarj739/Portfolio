import React from 'react'
import styled from 'styled-components';
import "../Styles/work.css"

function Work(props) {
    return (
            <Container>
                <div className="container_work">
                    <h1>{props.title}</h1>
                    <p>{props.details}</p>
                    <p>{props.subDetails}</p>
                    <Info>    
                    <h5><span></span>JavaScript</h5>
                    </Info>
                </div>
            </Container>            
    )
};
const Info = styled.div `
display:flex;
`;

const Container = styled.div `
min-width:25%;
max-width:100%;
padding:2rem;
display:flex;
flex-direction:column;
cursor:pointer;
letter-spacing:2px;
h1{
    font-size:2.5rem;
    color:white;
}
p{
    color:gray;
    padding-top:1rem;
    font-size:1.2rem;
}
h5{
    color:gray;
    font-size:1rem;
    width:100%;
}
span{
    overflow:hidden;
    display:inline-block;
    height:1rem;
    width:1rem;
    border-radius:50%;
    margin-right:1rem;
    margin-top:1rem;
    background-color:#cddc39 !important;
        
}

&:hover{
    transition: all 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border-radius:4px;
    -moz-box-shadow:    1px 1px 4px 4px #ccc;
    -webkit-box-shadow: 1px 1px 4px 4px #ccc;
    box-shadow:         1px 1px 4px 4px #ccc;
    background-color:#55198b !important;
    p,h1,h5{
        background-color:#55198b !important;
    }
}
`;


export default Work;
