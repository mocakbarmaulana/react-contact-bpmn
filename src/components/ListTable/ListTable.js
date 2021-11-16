import React from 'react';

import "./styles.css"

const ListTable = ({lists}) => {
    console.log(lists)
    return (
        <table className="table">
            <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Necessary</td>
                <td style={{width: "200px", textAlign: "center"}}>Action</td>
            </tr>
            </thead>
            <tbody>
                {
                    lists ? (
                        lists.length ? (
                            lists.map(list => (
                                <tr key={list.id}>
                                    <td>{list.name}</td>
                                    <td>{list.email}</td>
                                    <td>{list.necessary}</td>
                                    <td className="wrapperButton">
                                        <button className="button buttonClaim">Claim</button>
                                        {/*<button className="button buttonClaimed">Claimed</button>*/}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} style={{textAlign: "center"}}>Tidak ada data</td>
                            </tr>
                        )
                    ) : (
                        <tr>
                            <td colSpan={4} style={{textAlign: "center"}}>Tidak ada data</td>
                        </tr>
                    )
                }

            </tbody>
        </table>
    );
};

export default ListTable;