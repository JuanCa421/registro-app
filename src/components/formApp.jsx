import { useState } from "react";

export const Formulario = ({ addNew }) => {
    const infoAlumno = {
        nombre: '',
        indica: '',
        sativa: '',
        floracion: '',
        genetica: '',
        thc: '',
        fecha: ''
    };

    const [informacion, setInformacion] = useState(infoAlumno);
    const { nombre, indica, sativa, floracion, genetica, fecha, thc } = informacion;

    const cambioInput = (e) => {
        setInformacion({
            ...informacion,
            [e.target.name]: e.target.value
        });
    };

    const guardar = () => {
        if (nombre && indica && sativa && floracion && genetica && fecha && thc) {
            addNew(informacion);
            setInformacion(infoAlumno);
        } else {
            alert("Debe ingresar todos los datos");
        }
    };
    const limpiar = () => {
        setInformacion({
            nombre: '',
            indica: '',
            sativa: '',
            floracion: '',
            genetica: '',
            fecha: '',
            thc: ''
        });
        alert("Todos los campos han sido limpiados");
    };


    return (
        <form className="card">
            <div className="card-body">
                <div>
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        value={nombre}
                        onChange={cambioInput}
                        className="form-control" />
                </div>
                <div>
                    <label>Indica%</label>
                    <input
                        type="text"
                        name="indica"
                        value={indica}
                        onChange={cambioInput}
                        className="form-control" />
                </div>
                <div>
                    <label>Sativa%</label>
                    <input
                        type="text"
                        name="sativa"
                        value={sativa}
                        onChange={cambioInput}
                        className="form-control" />
                </div>
                <div>
                    <label>Floracion</label>
                    <input
                        type="text"
                        name="floracion"
                        value={floracion}
                        onChange={cambioInput}
                        className="form-control" />
                </div>
                <div>
                    <label>Genetica</label>
                    <input
                        type="text"
                        name="genetica"
                        value={genetica}
                        onChange={cambioInput}
                        className="form-control" />
                </div>
                <div>
                    <label>THC%</label>
                    <input
                        type="text"
                        name="thc"
                        value={thc}
                        onChange={cambioInput}
                        className="form-control" />
                </div>
                <div>
                    <label>Fecha</label>
                    <input
                        type="date"
                        name="fecha"
                        value={fecha}
                        onChange={cambioInput}
                        className="form-control" />
                </div>
                <div className="card-footer text-center ">
                <input
                        type="button"
                        class="btn btn-success"
                        value="limpiar"
                        onClick={limpiar}
                        className="btn btn-secondary" />
                    <input
                        type="button"
                        value="guardar"
                        onClick={guardar}
                        className="btn btn-primary" />
                    
                </div>




            </div>
        </form>
    );
};
