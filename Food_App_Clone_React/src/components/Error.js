import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();
    return (
        <div>
            <h1 className="text-center font-bold text-lg mt-auto mb-auto">Ooops...Something went wrong...</h1>
            <h2 className="text-center font-bold text-lg mt-auto mb-auto">{err.status} : {err.statusText}</h2>
        </div>
    )
}

export default Error;