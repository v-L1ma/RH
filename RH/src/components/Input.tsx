import { forwardRef, FunctionComponent, useRef } from "react"

interface InputProps{
    type: string;
    id: string;
    placeholder: string;
    label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({label, type, id,placeholder}, ref ) =>{

    return(
        <div className="flex flex-col w-full gap-2">
            <label className="font-semibold" htmlFor={id}>{label}</label>
            <input className=" p-1 border-b-2 border-emerald-950" type={type} id={id} placeholder={placeholder} ref={ref}/>
        </div>
    )
})

export default Input