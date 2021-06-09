import React, {useEffect, useRef} from "react";
import "./outputForm.scss"

interface typeProps {
    arrayOutput: Array<string>
}
interface typeStyleLast {
    width:string,
    animationDuration:string,
    animationTimingFunction:string,
    animationDelay:string
}

const Output:React.FC<typeProps> = (props:typeProps) => {
    const refTitle = useRef<HTMLSpanElement>(null),
        refFragment = useRef<HTMLDivElement>(null),
        width = useRef<number|undefined>(0)

    useEffect(()=>{
        if(refFragment.current && refTitle.current)
            width.current = Math.floor((refFragment.current.offsetWidth * 6) / refTitle.current.offsetWidth);
    },[props.arrayOutput])
    return <div ref={refFragment}>
        <p><span ref={refTitle}>Вывод:</span></p>
        {
            props.arrayOutput.map((value:string,index:number)=>{
                if(index===(props.arrayOutput.length-1)) {
                    let regex:RegExp = new RegExp(`([^\\s]{0,${width.current}})`),
                        arraySpan:Array<string> = value.split(regex),
                        reducerSpan:number = 0;
                    return <p className="lastOutput" key={index}>
                        {
                            arraySpan.map((valueSpan:string, indexSpan:number)=>{
                                let lengthSpan:number = valueSpan.length,
                                    style:typeStyleLast = {
                                        width:`${lengthSpan}ch`,
                                        animationDuration:`${lengthSpan/4}s, ${reducerSpan/4}s`,
                                        animationTimingFunction:`steps(${lengthSpan}), ease-in-out`,
                                        animationDelay: `${reducerSpan/4}s, 0s`
                                    }
                                reducerSpan+=lengthSpan;
                                return <span style={style} key={indexSpan} className="output">{valueSpan}</span>
                            })
                        }
                    </p>
                }
                return <p key={index}>
                    {value}
                </p>
            })
        }
    </div>;
}

export default Output;