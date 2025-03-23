import { FunctionComponent } from "react";

interface TimerProps{
    time:number | undefined;
    label:string;
}

const Timer:FunctionComponent<TimerProps> = ({time, label}) =>{
    return(
        <div>
            <div className="h-20 w-20 rounded-xl flex items-center justify-center">
                <p className="text-3xl font-bold">{time}</p>
            </div>
            <div>
                <p className="text-center">{label}</p>
            </div>
        </div>
    )
}

export default Timer