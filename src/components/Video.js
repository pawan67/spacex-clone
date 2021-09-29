import React from 'react'

function Video() {
    return (
        <div>
            <video autoPlay muted loop id="myVideo">
        <source src="/images/bgvideos.mp4" />
      </video> 
        </div>
    )
}

export default Video
