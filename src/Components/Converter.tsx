import React, {useState} from 'react';
function Converter() {
    const [state, setState] = useState('');
    const [stateColor, setStateColor] = useState('antiquewhite');
    const blockOutput = React.useRef<HTMLDivElement>(null);

    const handler:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const output:HTMLDivElement | null = blockOutput.current;
        const newValue = e.target.value;
        setState(newValue)
        if (e.target.value.length == 7 && e.target.value[0] === '#') {
            checkOutput(newValue);
        } else if (e.target.value[0] !== '#' || e.target.value.length > 7) {
            if(output) output.textContent = `#Ошибка`;
            setStateColor(`#4287f5`);
        }
    }

    const checkOutput = (value:string):void => {
        const output: HTMLDivElement | null = blockOutput.current;
        if(value[0] === '#' && value.length === 7) {
            const hex :string = value;
            const r :number = parseInt(hex.slice(1, 3), 16);
            const g :number = parseInt(hex.slice(3, 5), 16);
            const b :number = parseInt(hex.slice(5, 7), 16);
           if(output) output.textContent = `rgb: (${r}, ${g}, ${b})`;
            setStateColor(`rgb(${r}, ${g}, ${b})`);
        }

    }
    return (
        <div className='container' style={{backgroundColor: stateColor}}>
            <input type='text' value={state} onChange={handler}/>
            <div className='output' ref={blockOutput}></div>
        </div>
    );
}

export default Converter;
