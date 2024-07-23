

import React, { useState } from 'react';

export const Tabla = ({ info, delData }) => {
    const [data, setData] = useState(info);
    const [newItem, setNewItem] = useState({
        nombre: '',
        indica: '',
        sativa: '',
        floracion: '',
        genetica: '',
        thc:'',
        fecha: ''
    });

    const eliminar = (item) => {
        setData(data.filter(i =>
            i.nombre !== item.nombre ||
            i.indica !== item.indica ||
            i.sativa !== item.sativa ||
            i.floracion !== item.floracion ||
            i.genetica !== item.genetica ||
            i.fecha !== item.fecha||
            i.thc !== item.thc
        ));
    }

    const editar = (item) => {
        setEditItem(item);
        setNewItem(item);
    }

    

    

    return (
        <>
            <table className="table table-bordered table-hover">
                <thead class="table-dark">
                    <tr>
                        <th scope='col' >Nombre</th>
                        <th scope='col'>Indica%</th>
                        <th scope='col'>Sativa%</th>
                        <th scope='col'>floracion</th>
                        <th scope='col'>genetica</th>
                        <th scope='col'>THC%</th>
                        <th scope='col'>Fecha</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.nombre}</td>
                            <td>{item.indica}</td>
                            <td>{item.sativa}</td>
                            <td>{item.floracion}</td>
                            <td>{item.genetica}</td>
                            <td>{item.thc}</td>
                            <td>{item.fecha}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => eliminar(item)}>Eliminar</button>
                                <button className="btn btn-warning" onClick={() => editar(item)}>Editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            
        </>
    );
}
