import { useEffect, useState } from "react";
import { Formulario } from "./components/formApp";
import { Tabla } from "./components/tableApp";

const inicial = () => {


    return JSON.parse(localStorage.getItem('errores')) || [];
}

export const IndexApp = () => {
    const [data, setData] = useState(inicial());

    const addData = (valores) => {
        setData([...data, valores]);
    }

    useEffect(() => {
        localStorage.setItem('errores', JSON.stringify(data));
    }, [data]);

    const deleteData = (valor) => {
        setData(data.filter(item => item !== valor));
    }

    return (
        <>
            <div className="bg-success p-5 text-center text-white">
                <header class="text-bg-dark p-3 text-left">
                    <h1> Registro de Semillas
                    </h1>
                </header>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="mt-3 col-4">
                        <Formulario addNew={addData} />
                    </div>
                    <div className="mt-3 col-8">
                        <Tabla info={data} delData={deleteData} />
                    </div>
                </div>
            </div>
        </>
    );
}

