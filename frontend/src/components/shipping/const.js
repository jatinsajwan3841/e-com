const FORM_INPS = [
    {
        label: "Please Enter Your Address",
        type: "text",
        name: "address",
        placeholder: "Address",
    },
    {
        label: "Please Enter Your City",
        type: "text",
        name: "city",
        placeholder: "City",
    },
    {
        label: "Please Enter Your Pin Code",
        type: "tel",
        name: "pinCode",
        placeholder: "Pin Code",
        minLength: "6",
        maxLength: "6",
        pattern: "[0-9]{6}",
    },
    {
        label: "Please Enter Your Phone Number",
        type: "tel",
        name: "phoneNumber",
        placeholder: "Phone Number",
        minLength: "10",
        maxLength: "10",
        pattern: "[0-9]{10}",
    },
];

export default FORM_INPS;
