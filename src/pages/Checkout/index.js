import React from "react";
import "./index.css";
import Delivery from "./Delivery";
import Shipment from "./Shipment";
import Finish from "./Finish";
import Summary from "./Summary";

const Checkout = (props) => {
    
    const renderComponent = (value) => {
        switch(value) {
            case 1:
                return <Delivery/>
        }
    }
    return (
        <div className='row content'>
            <div className='column left'>
                {renderComponent(props.currentStep)}
            </div>
            <div className='column right'>
                <Summary currentStep={props.currentStep}/>
            </div>
        </div>
    )
}

export default Checkout;