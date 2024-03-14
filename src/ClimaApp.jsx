import React from 'react'
import { useState } from 'react'
import useWeather from './hooks/useWeather'

export const ClimaApp = () => {
    const [ciudad, setCiudad] = useState("Caracas")
    const [data, loading, error] = useWeather(ciudad)
    console.log(data)
    const cambiarInput = (e) => {
        setCiudad(e.target.value)
    }
    return (
        <>
            <h1>App del clima</h1>

            <div className="container">
                <form onSubmit={(e)=> e.preventDefault()}>
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                    <input type="text" placeholder='Ingresa el nombre de una ciudad' onChange={cambiarInput} />
                </form>
                <div className="caja-informacion">
                    <div className="informacion">
                        {loading && ( <p>Cargando...</p> )}
                        {error && ( <p>No hay resultado de: {ciudad}</p> )}
                        {data && (
                            <>
                                <p className='ciudad'><b>Ciudad:</b> {data.city}</p>

                                <p className="temperatura"><b>Temperatura</b> {Math.round(data.temp)}°C</p>
                                <p className="temperatura"><b>Temperatura  mínima</b> {Math.round(data.temp_min)}°C</p>
                                <p className="temperatura"><b>Temperatura máxima</b> {Math.round(data.temp_max)}°C</p>
                                <p className="meto"><b>Tiempo meteorológico:</b> {data.lluvia.description}</p>
                            </>
                        )}


                    </div>
                    <div className="imagen">
                        {data && (<img src={`https://openweathermap.org/img/wn/${data.lluvia.icon}@2x.png`} alt="" />)}
                    </div>
                </div>
            </div>
        </>
    )
}
