import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.43;
background: white;
border: 0.15rem solid grey;
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background:blue;
    color:yellow;
}
&:focus{
    outline:none;
}
`;







