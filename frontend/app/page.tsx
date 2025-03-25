'use client'
import {useEffect} from "react";
import {useTemplateContext} from './useTemplateContext'
import { useRouter } from "next/navigation";
export type Template = {
  id?: number,
  name:string,
  content:string
}
export default function Home() {
  const {state,dispatch} = useTemplateContext()
  const router= useRouter()
  useEffect(()=>{
    const fetchTemplates = async() => {
      try {
        dispatch({type:'FETCH'})
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
    fetchTemplates();
  },[])
  const handleOnclick = (id?:number) => {
    console.log("helo");
    if (id){
      router.push(`/templates/${id}`);
    }
    else {
      console.error("Template Id is required");
    }
  }

  return (
    <div>
      <h1>Templates</h1>
{state.isLoading ? (
  <p>Loading...</p>
) : state.errors.length > 0 ? (
  <div>
    <p>Error: {state.errors || "Something went wrong!"}</p>
  </div>
) : (
  state.templates.length > 0 ? (
    state.templates.map((template:Template) => { 
      return <div key={template.id} onClick={()=>handleOnclick(template.id)}>
        <h2>{template.name}</h2>
        {/* Render HTML content safely */}
        <div dangerouslySetInnerHTML={{ __html: template.content }} />
      </div>
})
  ) : (
    <p>No templates available.</p>
  )
)}
    </div>
  );
}
