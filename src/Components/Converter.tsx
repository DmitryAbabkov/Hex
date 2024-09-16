import React, {useState} from 'react';
function Converter() {
    const [state, setState] = useState('');
    const [stateColor, setStateColor] = useState('antiquewhite');
    const blockOutput = React.useRef<HTMLDivElement>(null);

    const handler:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setState(e.target.value)
        if (state.length < 6) {
            return state
        } else {
            checkOutput();
        }
    }

    const checkOutput = ():void => {
        const output:any = blockOutput.current;
        if(state[0] == '#' && state.length == 6) {
            const hex :string = state;
            const r :number = parseInt(hex.slice(1, 3), 16);
            const g :number = parseInt(hex.slice(3, 5), 16);
            const b :number = parseInt(hex.slice(5, 7), 16);
            output.textContent = `rgb: (${r}, ${g}, ${b})`;
            setStateColor(`rgb(${r}, ${g}, ${b})`);
        } else {
            output.textContent = `#Ошибка`;
            setStateColor(`#4287f5`);
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
