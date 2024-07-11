import React from 'react'
import { useGps } from "../context/GpsContext";

function StatusDot({ status }){

    return(
            <span className={
                `inline-block w-3 h-3 rounded-full ${status ? 'bg-green-500': 'bg-red-500'}`}>
            </span>
        )
}
function GpsCard({ gps }) {
    return (
        <div className="border p-4 rounded shadow">
            <p>CONTROL </p>
            <p><strong>Codigo GPS:</strong> {gps.gpsid}</p>
            <p><strong>Punto 1: </strong> {gps.punto1} <StatusDot status={gps.punto1}/></p>
            <p><strong>Punto 2: </strong> {gps.punto2} <StatusDot status={gps.punto2}/></p>
            <p><strong>Punto 3: </strong> {gps.punto3} <StatusDot status={gps.punto3}/></p>
        </div>
    )
}

export default GpsCard