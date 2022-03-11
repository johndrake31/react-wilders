import styledComponents from 'styled-components';

export const StyleContainer = styledComponents.div`
max-width: 800px;
margin-left: auto;
margin-right: auto;
padding: 24px;
text-align: center;
color: #342f2f
`;

export const StyleContainerRose = styledComponents(StyleContainer)`
    background-color: #eb7c7c75;
    border-radius: 12px 12px 12px 12px;
`;
export const StyleContainerBlue = styledComponents(StyleContainer)`
    background-color: #7c9feb75;
`;
export const StyleContainerGreen = styledComponents(StyleContainer)`
    background-color: #aaeb7c75;
    border-radius: 0 0 12px 12px;
`;
