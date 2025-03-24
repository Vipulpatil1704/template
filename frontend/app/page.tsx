'use client'
import { useContext, useEffect, useState } from "react";
import { TemplateContext } from "./template-provider";
import {useTemplateContext} from './useTemplateContext'
export type Template = {
  id?: number,
  name:string,
  content:string
}
export default function Home() {
  const {state,dispatch} = useTemplateContext()
  useEffect(()=>{
    const fetchTemplates = async() => {
      try {
        dispatch({type:'FETCH_REQ'})
        const res = await fetch('http://127.0.0.1:8001/api/templates/');
        if (!res.ok){
          throw new Error("Error in fetching templates")
        }
        const data = await res.json();
        dispatch({type:'SUCCESS',payload:data})
      } catch (error) {
        console.log(error)
        dispatch({type:'FAILED',payload:error})
      }
    }
    fetchTemplates()
  },[])
  console.log(state.templates)
  return (
    <div>
      Templates
    </div>
  );
}
