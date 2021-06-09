import React, {useEffect, useRef, useState, ForwardedRef} from 'react';
import Output from "./outputForm";
import "./form.scss"

const Form = React.forwardRef<HTMLDivElement, {}>((props:{}, refDiv:ForwardedRef<HTMLDivElement>) => {

    const refTextArea = useRef<HTMLTextAreaElement>(null);
    const [arrayOutput, setArrayOutput] = useState<Array<string>>([]);

    useEffect(()=>{
        if (typeof refTextArea === 'object' && refTextArea?.current) refTextArea.current.focus();
    }, []);

    function onSubmit(event:React.FormEvent<HTMLFormElement>):void {
        if (typeof refTextArea === 'object' && refTextArea?.current) {
            setArrayOutput(arrayOutput.concat(refTextArea.current.value as string));
            refTextArea.current.value = '';
            refTextArea.current.focus();
        }
        event.preventDefault();
        event.stopPropagation();
    }
    return (
        <div className="form" ref={refDiv}>
            <form onSubmit={onSubmit}>
                <textarea ref={refTextArea} required></textarea>
                <input type="submit" value="Send"/>
            </form>
            <Output arrayOutput={arrayOutput}/>
        </div>)
})
export default Form;