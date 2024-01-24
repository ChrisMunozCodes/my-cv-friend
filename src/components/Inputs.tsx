import React from "react"
import { useState } from "react"
import { PdfProps } from 'myTypes';

export default function Inputs(props: PdfProps) {
    const [nameInput, setNameInput] = useState('');

        props.pdf.setNameInput = setNameInput || ''
        props.pdf.nameInput = nameInput || ''
    return (
        <div className="min-w-full min-h-full flex">
            <section className="w-3/5 flex flex-col">
            <Name pdf={props.pdf.nameInput} />
                <Title />
                <Summary />
            </section>
            <section className="w-2/5">
                <Contact />
            </section>
        </div>
    )
}

function Name(props: PdfProps) {
    return (
        <input 
            type="text" 
            placeholder="Name" 
            value={props.pdf.nameInput || ''}
            onChange={e => props.pdf.setNameInput && props.pdf.setNameInput(e.target.value)} 
            className="input input-bordered input-primary w-full max-w-xs m-5" 
        />
    );
}

function Title() {

    return (
        <input type="text" placeholder="Title" className="input input-bordered input-primary w-full max-w-xs m-5" />
    )
    
}

function Summary() {

    return (
        <textarea className="textarea textarea-primary m-5" placeholder="Summary"></textarea>
    )
    
}

function Contact() {
    const [phoneInput, setPhoneInput] = useState('');
    return (
        <div className="w-full h-1/3 flex flex-col justify-end items-end">
            <input type="text" placeholder="Phone" name="phone" onChange={e => (setPhoneInput(e.target.value))} className="input input-bordered input-primary w-full max-w-xs m-2" />
            <input type="text" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs m-2" />
            <input type="text" placeholder="Portfolio" className="input input-bordered input-primary w-full max-w-xs m-2" />
            <input type="text" placeholder="Github" className="input input-bordered input-primary w-full max-w-xs m-2" />
            <input type="text" placeholder="Linkedin" className="input input-bordered input-primary w-full max-w-xs m-2" />
            <input type="text" placeholder="Twitter" className="input input-bordered input-primary w-full max-w-xs m-2" />
        </div>
    )
    
}