import React from 'react'

const EspecificationComponent = props => {

    const keysObject = Object.keys(props.especification)
    const valuesObject = Object.values(props.especification)

    return (
        <div className="table-responsive">
            <table className="table">
                <tbody>
                    {
                        valuesObject.map((itemEspecification, index) => (
                            <tr key={index}>
                                <td><h5>{keysObject[index]}</h5></td>
                                <td><h5>{itemEspecification}</h5></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default EspecificationComponent