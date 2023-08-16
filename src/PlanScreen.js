import React from 'react'
import './PlanScreen.css'

export default function PlanScreen() {
    const contents = [{planName : 'Premium', description : '4K + HDR'}, {planName : 'Basic', description : '720p'}, {planName : 'Standard', description : '1080p'}]
    return (
        <div className='planScreen'>
            {contents.map((content, id) => {
                return(
                    <div className='planScreen__plan'>
                        <div className='planScreen__info'>
                            <h4 key = {id}>{content.planName}</h4>
                            <h5 key = {id}>{content.description}</h5>
                        </div>
                        <button>Subscribe</button>
                    </div>
                )
            })}
        </div>
    )
}
