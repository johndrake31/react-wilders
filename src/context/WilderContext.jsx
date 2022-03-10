import { createContext, useState } from 'react';


const WilderContext = createContext(null);


export const WilderContextProvider = (props)=>{
    const [wilders, setWilders] = useState([{
        _id: "622721f5d76d0de75c85dcdb",
        name: "1st Wilder",
        city: "San Francisco",
        skills: [
            {
                "title": "HTML",
                "votes": 10,
                _id: "622721f5d76d0de75c85dcdc"
            },
            {
                "title": "React",
                "votes": 5,
                _id: "622721f5d76d0de75c85dcdd"
            }
        ],
        "__v": 0
    }])
    
    const contextValue = {
        wilders: wilders,
        setWilders: setWilders
    }
    return <WilderContext.Provider value={contextValue}>{props.children}</WilderContext.Provider>
}

export default WilderContext;
