import styledComponents from 'styled-components';

export const StyleButton = styledComponents.button`
align-items: center;
background-clip: padding-box;
background-color: #F76C6C;
border: 1px solid transparent;
border-radius: .25rem;
box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
box-sizing: border-box;
color: #fff;
cursor: pointer;
display: inline-flex;
font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
font-size: 16px;
font-weight: 600;
justify-content: center;
line-height: 1.25;
margin: 0;
min-height: 3rem;
padding: calc(.875rem - 1px) calc(1.5rem - 1px);
position: relative;
text-decoration: none;
transition: all 250ms;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
vertical-align: baseline;
width: auto;


&:hover,
&:focus {
    
background-color: #fb8332;
box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

&:hover {
transform: translateY(-1px);
}

&:active {
background-color: #c85000;
box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
transform: translateY(0);
}
`;

export const StyleButtonR = styledComponents(StyleButton)`
    background-color: #eb7c7c75;
    color: #282525;
`;
export const StyleButtonB = styledComponents(StyleButton)`
    background-color: #7c9feb75;
    color: #282525;
`;
export const StyleButtonG = styledComponents(StyleButton)`
    background-color: #aaeb7c75;
    color: #282525;
`;
export const StyleButtonY = styledComponents(StyleButton)`
    background-color: #e2eb7c75;
    color: #282525;
`;

