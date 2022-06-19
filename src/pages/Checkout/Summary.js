import React from "react";
import { Button } from "../../components";
import "./Summary.css";

export default function Summary() {
    return (
        <div className="summary">
            <div className="header">
                <h2 className="text-orange">Summary</h2>
                <h6>10 items purchased</h6>
                <hr/>
            </div>
            <div className="footer">
                <h5>Cost of Goods</h5>
                <Button>Continue to Payment</Button>
            </div>
        </div>
    )
}