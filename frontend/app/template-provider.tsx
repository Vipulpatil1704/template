'use client'
 
import {createContext, useReducer} from 'react'
export const TemplateContext = createContext<{state:typeof initialState,dispatch:React.Dispatch<any>} | null>(null)
const FETCH = 'FETCH'
const SUCCESS = 'SUCCESS'
const FAILED  = 'FAILED'

export const initialState = {
    isLoading:false,
    errors:[],
    templates:[]
}

const reducer = (state:typeof initialState,action:any) => {
    switch (action.type) {
        case FETCH:
            return {...state,isLoading:true}
        case SUCCESS:
            return {...state,isLoading:false,templates:action.payload}
        case FAILED:
            return {...state,isLoading:false,errors:action.payload}
        default:
            return state;
    }
}

export default function TemplateProvider({
  children,
}: {
  children: React.ReactNode
}) {
    const [state,dispatch] = useReducer(reducer,initialState)
  return <TemplateContext.Provider value={{state,dispatch}}>{children}</TemplateContext.Provider>
}