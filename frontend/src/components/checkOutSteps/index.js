import React from "react";
import ConfirmOrder from "../confirmOrder";
import Shipping from "../shipping";
import axios from "../../utils/axiosConfig";

import "./index.scss";

const CheckOutSteper = () => {
    const [step, setStep] = React.useState(0);
    React.useEffect(() => {
        const payTMEmbed = async () => {
            const { data } = await axios.get("/api/v1/paytm-MID");
            const url = `https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/${data.MID}.js`;
            const scriptElement = document.createElement("script");
            scriptElement.src = url;
            scriptElement.async = true;
            scriptElement.type = "application/javascript";
            document.body.appendChild(scriptElement);
        };
        payTMEmbed();
    }, []);
    return (
        <div className="check-out">
            {step === 0 && <Shipping setStep={setStep} />}
            {step === 1 && <ConfirmOrder setStep={setStep} />}
            {step === 2 && <Shipping setStep={setStep} />}
            <div className="cont-btns">
                {step !== 0 && (
                    <button
                        className="continue"
                        type="button"
                        onClick={() => setStep((prev) => prev - 1)}
                    >
                        Previous
                    </button>
                )}
            </div>
        </div>
    );
};

export default CheckOutSteper;
