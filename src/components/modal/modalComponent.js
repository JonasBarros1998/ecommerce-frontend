import React from 'react'
const ModalComponent = props => {
    return (
        <div class="modal fade bd-example-modal-lg" id={ props.id } tabindex="-1" 
                                role="dialog" 
                                aria-labelledby={ props.ariaLabelledby } 
                                aria-hidden="true">
            <div class={ props.classModal } role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">{props.title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        { props.body }
                    </div>
                    {
                        props.footer == true ?
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">{ props.btnClose }</button>
                                <button type="button" class="btn btn-primary">{ props.btnSave }</button>
                            </div>
                            : <div> </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default ModalComponent