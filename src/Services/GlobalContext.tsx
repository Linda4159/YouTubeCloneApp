import {createContext,useState} from "react"

interface Ivalue{
    toggle:boolean;
    ToggleSideBar:()=>void;
    setToggle:React.Dispatch<React.SetStateAction<boolean>>
}

export const GlobalContext = createContext<Ivalue>({
    toggle:false,
    ToggleSideBar:()=>{},
    setToggle:()=>{}
})

export const GlobalProvider = ({children}:React.PropsWithChildren)=>{
    const[toggle,setToggle] = useState(false)
    const ToggleSideBar = ()=>{
        setToggle(!toggle)
    }

return<GlobalContext.Provider
value={{
    ToggleSideBar,
    toggle,
    setToggle
}}
>
    {children}
</GlobalContext.Provider>
}