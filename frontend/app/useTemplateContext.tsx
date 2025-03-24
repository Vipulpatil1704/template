import { useContext } from 'react'
import {TemplateContext} from './template-provider'

export const useTemplateContext = () => {
    const context = useContext(TemplateContext)
    if (!context){
        throw new Error('useTemplateContext must be used within a TemplateProvider')
    }
    return context;
}