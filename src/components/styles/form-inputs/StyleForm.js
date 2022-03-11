import styledComponents from 'styled-components';

export const StyleForm = styledComponents.form`
padding: 12px 12px;
display: flex;
flex-direction: column;
align-content: space-between;
box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;


label{
    color: #50473b;   
    margin-bottom: 10px;
    font-size: large;
    text-transform: uppercase;
}

input{
    min-height: 35px;
    padding: 3px 8px 3px 8px ;
    border: none;
    border-radius: 12px 12px 12px 12px;
    max-width: 90;
    margin-bottom: 20px;
}
`