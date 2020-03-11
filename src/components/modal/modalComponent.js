import React from 'react'
const ModalComponent = props => {
    return (
        <div className="modal fade bd-example-modal-lg" id={ props.id } tabIndex="-1" 
                                role="dialog" 
                                aria-labelledby={ props.ariaLabelledby } 
                                aria-hidden="true">
            <div className={ props.classModal } role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">{props.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        { props.body }
                    </div>
                    {
                        props.footer === true ?
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">{ props.btnClose }</button>
                                <button type="button" className="btn btn-primary">{ props.btnSave }</button>
                            </div>
                            : <div> </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default ModalComponent