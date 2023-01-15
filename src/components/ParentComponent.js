import { useState } from "react";
import Form from "./Form"

function ParentComponent() {

    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry")

    function handleFirstNameChange(event) {
        setFirstName(event.target.vale);
    }

    function handleLastNameChange(event) {
        setLastName(event.target.vale);
    }

    return (
        <Form 
            firstName={firstName}
            lastName={lastName}
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}    
        />
    );
}
 
export default ParentComponent;