import './index.scss'
import { useState } from 'react';

export default function Diario(){
    const [token, setToken] = useState(null);
    const [data,serData] = useState('')
    const [diario,serDiario] = useState('')



    return(
        <div className='diario'>
            <h1>Bem vindo {token?.nome}</h1>
            <input type="date" className='in1'  value={data}  onChange={(e) => serData(e.target.value)} />

            <input type="text" className='in2' placeholder='digite seu  texto'  value={diario} onChange={(e) => serDiario(e.target.value)} />

        </div>
    )
}