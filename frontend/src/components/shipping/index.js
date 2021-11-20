import React from "react";
import FORM_INPS from "./const";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { saveShippingInfo } from "../../actions/cartActions";
import { Country, State } from "country-state-city";

const Shipping = ({ setStep }) => {
    const { shippingInfo } = useSelector((state) => state.cart);
    const [state, setState] = React.useState(shippingInfo.state);
    const [country, setCountry] = React.useState(shippingInfo.country);
    const formRef = React.useRef();
    const dispatch = useDispatch();
    const handleShipping = (e) => {
        e.preventDefault();
        let payload = {};
        FORM_INPS.forEach((v) => {
            let key = v.name;
            let value = e.target[key].value;
            payload[key] = value;
        });
        payload["country"] = country;
        payload["state"] = state;
        dispatch(saveShippingInfo(payload));
        setStep(1);
    };

    React.useEffect(() => {
        if (shippingInfo.address) {
            FORM_INPS.forEach((v, i) => {
                formRef.current[i].value = shippingInfo[v.name];
            });
        }
    }, [shippingInfo]);

    return (
        <form
            className="shipping-container"
            onSubmit={handleShipping}
            ref={formRef}
        >
            <div className="head">Shipping Details</div>
            {FORM_INPS.map((v, i) => {
                return (
                    <div className="inp-content" key={i}>
                        <label htmlFor={v.name} className="label">
                            {v.label}
                        </label>
                        <input
                            type={v.type}
                            name={v.name}
                            placeholder=" "
                            minLength={v.minLength || "3"}
                            maxLength={v.maxLength || "100"}
                            pattern={v.pattern}
                            required
                        />
                        <hr className="border-bottom" />
                        <span className="placeholder">{v.placeholder}</span>
                    </div>
                );
            })}
            <div className="inp-content">
                <span className="placeholder">Please select your country</span>
                <select
                    name="country"
                    className="select"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                >
                    <option value="">Country</option>
                    {Country &&
                        Country.getAllCountries().map((item) => (
                            <option key={item.isoCode} value={item.isoCode}>
                                {item.name}
                            </option>
                        ))}
                </select>
            </div>

            {country && (
                <div className="inp-content">
                    <span className="placeholder">
                        Please select your state
                    </span>
                    <select
                        className="inp-content select"
                        required
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    >
                        <option value="">State</option>
                        {State &&
                            State.getStatesOfCountry(country).map((item) => (
                                <option key={item.isoCode} value={item.isoCode}>
                                    {item.name}
                                </option>
                            ))}
                    </select>
                </div>
            )}

            <div className="cont-btns">
                <input type="submit" className="continue" value="Continue" />
            </div>
        </form>
    );
};

export default Shipping;
