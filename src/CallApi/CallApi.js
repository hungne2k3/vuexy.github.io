import { useEffect, useState } from 'react';

export default function CallApi() {
    const [datas, setDatas] = useState([]);

    const elementTables = ['User', 'Role', 'Plan', 'Billing', 'Status', 'Actions'];

    useEffect(() => {
        fetch('https://api.tablebackend.com/v1/rows/Yoxbu0yKn7R2')
            .then(responsive => responsive.json())
            .then(preview => setDatas(preview.data))
    }, [])

    return (
        <>
            <table >
                <thead>
                    <tr>
                        {elementTables.map((table) => (
                            <th key={table}>{table}</th>
                        ))}
                    </tr>
                </thead>

                <tbody className='v-data-table__tbody'>
                    {datas.map((dataRender) => (
                        <tr className='v-data-table__tr' key={dataRender._id}>
                            <td className='v-data-table__td'>
                                <div className='d-flex'>
                                    <div className='v-avatar'>
                                        <div className='v-img'>
                                            <img className='v-img__img' src={dataRender.attachment} />
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex'>
                                    <div className='v-avatar'>
                                        <h6 className='text-base'>
                                            <a href='#'>{dataRender.name}</a>
                                        </h6>
                                    </div>

                                    <div className='v-email'>
                                        <h6 className='email'>{dataRender.email}</h6>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='role-flex'>
                                    <div className='icon-role'>
                                        <i className={dataRender.iconrole}></i>
                                    </div>

                                    <div className='name-role'>
                                        {dataRender.age}
                                    </div>
                                </div>
                            </td>

                            <td>{dataRender.plane}</td>
                            <td>{dataRender.billing}</td>
                            <td>
                                <div className='v-active'>
                                    <span className='v-chip--label'>
                                        {dataRender.active}
                                    </span>
                                </div>
                            </td>

                            <td>
                                <div className='action'>
                                    <div className='icon-1'>
                                        <i className="icon-active fa-solid fa-trash-can"></i>
                                    </div>

                                    <div className='icon-1'>
                                        <i className="icon-active fa-regular fa-pen-to-square"></i>
                                    </div>

                                    <div className='icon-1'>
                                        <i className="icon-active fa-solid fa-ellipsis-vertical"></i>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}