// DashboardCard.jsx
import React from 'react';
import {
    mdiLogout, mdiHome, mdiRoutes, mdiSortNumericVariant, mdiCarMultiple, mdiFileAccount, mdiAccountMultiple, mdiGroup, mdiAccountMultipleMinusOutline, mdiAccountMultipleCheck, mdiAccountMultiplePlus, mdiControllerClassic, mdiController, mdiCommentRemoveOutline, mdiCalendarSync
} from '@mdi/js'

import Icon from "@mdi/react";


function DashboardCard({ title, count }) {
    return (

        <div className=" bg-zinc-700 max-w-md w-full p-10 rounded-md">
            <header className=" flex justify-between">
                <h1 className=" text-2xl font-bold">DATOS: </h1>
            </header>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{count}</p>
        </div>

    );
}

export default DashboardCard;



