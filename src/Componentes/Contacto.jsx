import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { TemaContext } from "../Componentes/TemaContext";
import './Contacto.css';

function Contacto() {
    const { darkTheme } = useContext(TemaContext);

    return (
        <div className={`${darkTheme ? 'rouseDarkThemeForm' : 'rouseLightThemeForm'}`}>
            <h1>Formulario de contacto</h1>
            <form className="container w-50">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Nombre</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Empresa</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">teléfono</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Comentarios</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Deje su consulta...'></textarea>
                </div>
                <Button variant="dark">Enviar</Button>
            </form>
        </div>
    )
}

export default Contacto