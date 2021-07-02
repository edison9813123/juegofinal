import React from 'react';
import { useEffect } from 'react';

export const Reiniciar = props => {
    const jugador = {}
    useEffect(() => {
        jugador.usuario = props.nuevoJugador
        if (props.gameStatus === 'lost') {
            jugador.puntuacion = 0
        } else {
            jugador.puntuacion = 10
        }
        props.onSubmit(jugador)
    }, [])
    return (
        <div className="game-done">
            <div
                className="message"
                style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
            >
                {props.gameStatus === 'lost' ? 'Perdiste' : 'Ganador'}
            </div>
            <button onClick={props.onClick}>Juega otra vez</button>
        </div>
    );
}