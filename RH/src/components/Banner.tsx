import { FunctionComponent } from "react"
import bannerVideo from "../assets/banneVideo.mp4"

const Banner:FunctionComponent = () =>{
    return(
        <div className="relative h-screen">
            <video src={bannerVideo} loop autoPlay muted className="object-cover absolute h-4/6 w-screen "></video>

        <div className="absolute top-0 p-10 h-4/6 w-full bg-teal-600 bg-opacity-55">
                <h1 className="text-5xl font-extrabold text-white">FacilitaRH</h1>
            </div>
        </div>
    )
}

export default Banner