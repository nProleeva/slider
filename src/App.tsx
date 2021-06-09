import React, {useEffect, useRef} from 'react';
import './App.scss';
import Form from "./form";
import Time from "./time";

const App:React.FC<{}> = () => {

    const clientX = useRef<number>(0)
    const refForm = useRef<HTMLDivElement>(null);
    const refTime = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        refTime.current?.classList.add("none");
    },[]);
    function touchStart(event:React.TouchEvent<HTMLDivElement>){
        clientX.current = event.touches[0].clientX;
    }
    function touchMove(event:React.TouchEvent<HTMLDivElement>){
        let target:HTMLElement = (event.touches[0].target as HTMLElement);
        while(target!==refForm.current&&target!==refTime.current) {
            target = target.parentElement as HTMLElement;
        }
        if(!target.classList.contains("none")) {
            if (target === refForm.current && event.touches[0].clientX - clientX.current < 0) {
                refTime.current?.classList.remove("none");
                refForm.current.classList.add("none");
            } else if (target === refTime.current && event.touches[0].clientX - clientX.current > 0) {
                refForm.current?.classList.remove("none");
                refTime.current.classList.add("none");
            }
        }
    }
    return (
        <div className="App" onTouchMove={touchMove} onTouchStart={touchStart}>
            <Form ref={refForm}/>
            <Time ref={refTime}/>
        </div>
    );
}

export default App;
