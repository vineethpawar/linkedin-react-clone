import React from 'react'
import NetworkLeft from '../../components/networkleft/NetworkLeft.js'
import NetworkRight from '../../components/networkright/NetworkRight.js'
import "./NetworkScreen.css"
function NetworkScreen() {
    return (
        <div className="network">
            <div className="network__left__flex"> 
                 <NetworkLeft/>
              </div>
            <div className="network__right__flex"> 
                <NetworkRight/>
            </div>
         
           


        </div>
    )
}

export default NetworkScreen
