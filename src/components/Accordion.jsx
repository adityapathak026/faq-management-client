import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'

const Accordion = ({ question, answer, ...props }) => {

    const [show, setShow] = useState(false)

    return (
        <>
            <div className='accordionContainer' >
                <span>{question}</span>
                <p onClick={() => setShow(!show)}>{show ? '-' : '+'}</p>
            </div>

            {show && <p className='answers'>{answer}</p>}
        </>
    )
}

export default Accordion;