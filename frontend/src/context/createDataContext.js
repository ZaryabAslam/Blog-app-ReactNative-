// creating this general context, so that if u have multiple context in an app
//then u can simply refer this file and alot of extra code will be saved

import React, { useReducer } from 'react'

//reducer func, actions for helper functins and initialstate
export default (reducer, actions, initialState) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState)

        // actions === {addblogpost: (dispatch)=> {return ()=>}}
    //now we want add blogpost to have enable a run of dispatch on every key then anything within it, list etc
        const boundActions = {};
        // for (let key in actions) {
        //     //key === addblogpost
        //     //boundactions[key] === boundactions.addblogpost and the former is dispatch and return of each item
        //     boundActions[key] = actions[key](dispatch);
        // }

        return <Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>
    }
    return { Context, Provider };
};