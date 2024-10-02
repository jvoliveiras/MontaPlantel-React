import './CampoTexto.css'
import { useState } from 'react'

const CampoTexto = (props) => {

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
       
    }

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.required} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto