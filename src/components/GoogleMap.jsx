import React from 'react'

const GoogleMap = () => {
    return (
        <>
            <div className="map-area">
                <div className="maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6589.685579261041!2d75.62039678705618!3d35.2891166985545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e46392bac10283%3A0xc2f7a786f9833d7!2sSkardu!5e1!3m2!1sen!2s!4v1706092566467!5m2!1sen!2s"
                        width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>

                </div>
            </div>
        </>
    )
}

export default GoogleMap