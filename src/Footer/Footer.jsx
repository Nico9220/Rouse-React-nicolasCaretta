import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
    return (
        <div className='foot'>
            <div className='botonesFoot'>
                <h4>Rouse Distribuciones</h4>
                <ul><li><Link to={'/Contacto'} className="contactenosBtn">Contactenos</Link></li></ul>
                <ul><li><Link to={'/Nosotros'} className="contactenosBtn">¿Quiénes somos?</Link></li></ul>
            </div>
            <div>
                <h4 className='redes'>Seguinos en nuestras redes</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla exercitationem totam laborum, rerum, iusto ipsa excepturi hic quos deleniti rem dolorem consectetur, autem vero omnis a corporis magni porro libero?</p>
            </div>
        </div >
    )
}

export default Footer