import React, {useState, useEffect, useRef, ForwardedRef} from "react";
import "./time.scss";

type typeOption = "numeric" | "2-digit" | undefined;

interface formatTime {
    hour: typeOption,
    minute: typeOption,
    second: typeOption,
    hour12: boolean
}

const Time = React.forwardRef<HTMLDivElement, {}>((props:{}, refDiv:ForwardedRef<HTMLDivElement>) => {
    const [currentTime, setCurrentTime] = useState<string>('');
    const timeId = useRef<NodeJS.Timeout|undefined>(undefined);

    useEffect(launchClock, []);
    useEffect(()=>{
        return()=>clearTimeout(timeId.current as (number | undefined));
    },[]);

    function launchClock():void {
        const options:formatTime = {
            hour: 'numeric', minute: 'numeric', second: 'numeric',
            hour12: false
        };
        setCurrentTime((new Date()).toLocaleString('en-US', options))
        timeId.current = setInterval(() => {
            setCurrentTime((new Date()).toLocaleString('en-US', options));
        },1000);

    }

    return <div className="time" ref={refDiv}><span>{currentTime}</span></div>;
})
export default Time