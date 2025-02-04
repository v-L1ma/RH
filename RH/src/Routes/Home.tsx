import { FunctionComponent } from "react"
import SideBar from "../components/SideBar"

const Home:FunctionComponent = ()=>{
    return(
        <div className="flex">
        <SideBar/>
        <main className="flex flex-col items-center w-full gap-5">
            
        </main>
        </div>
    )
}

export default Home