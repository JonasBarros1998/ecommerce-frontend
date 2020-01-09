import React from 'react'

const DescriptionComponent = props => {

    return (
        <div className="tab-pane fade show active" id="home" role="tabpanel"
            aria-labelledby="home-tab">
            <div>


                <p className="text-grey-p">{props.descriptionProduct}</p>

            </div>
        </div>
    );
}

export default DescriptionComponent