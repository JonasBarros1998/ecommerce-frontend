import React, {useState} from 'react';

const VerifieldUserContainers = () =>  {

    const [verifieldEmail, setverifieldEmail] = useState("")
 
    return (
        <form className="row login_form" method="post">
            <div className="col-md-12 form-group">
                <input type="email" className="form-control"
                    name="verifield" placeholder="e-mail" ref={(email) => email = setverifieldEmail} />
            </div>

            <div className="col-md-12 form-group">
                <button type="submit" value="submit" className="primary-btn">Prosseguir</button>
            </div>
        </form>
    )
}

export {VerifieldUserContainers}