import React, { useState } from 'react'


export const Sesion = ({ handleSubmited, handleStars }) => {

    const [usuario, setUsuario] = useState('')
    let jugador = {};
    const [estrella, setEstrella] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        jugador.usuario = usuario
        jugador.puntuacion = 0
        handleSubmited(jugador)
        handleStars(estrella)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Bienvenidos!</h1>
                <h3>Ingrese su Nombre</h3>
                <input
                    id=""
                    label="Ingrese usuario"
                    value={usuario}
                    onChange={e => setUsuario(e.target.value)}
                    required
                />
                <h1>Ingrese el numero de estrellas a comenzar</h1>
                <input
                    id=""
                    label="Ingrese usuario"
                    value={estrella}
                    onChange={e => setEstrella(e.target.value)}
                    required
                />
                <button>Añadir Estrellas</button>
            </form>


        </div>
    )
}