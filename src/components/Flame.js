import React, { useState } from "react";
import './style.css';

function Flame() {
    let [firstName, setFirstName] = useState('');
    let [secondName, setSecondName] = useState('');
    let [relationshipStatus, setRelationshipStatus] = useState('');

    const handleCalculateRelationship = () => {
        if (firstName === "" || secondName === "") {
            setRelationshipStatus("Please Enter valid input");
            return;
        }

        let name1 = firstName.split("");
        let name2 = secondName.split("");

        name1.forEach((char) => {
            let index = name2.indexOf(char);
            if (index !== -1) {
                name1.splice(name1.indexOf(char), 1);
                name2.splice(index, 1);
            }
        });

        let remainingChars = [...name1, ...name2];
        let length = remainingChars.length % 6;

        switch (length) {
            case 0:
                setRelationshipStatus("Siblings");
                break;
            case 1:
                setRelationshipStatus("Friends");
                break;
            case 2:
                setRelationshipStatus("Love");
                break;
            case 3:
                setRelationshipStatus("Affection");
                break;
            case 4:
                setRelationshipStatus("Marriage");
                break;
            case 5:
                setRelationshipStatus("Enemy");
                break;
            default:
                setRelationshipStatus("");
                break;
        }
    };

    const handleClear = () => {
        setFirstName("");
        setSecondName("");
        setRelationshipStatus("");
    }

    return (
        <div>
            <input type="text" name="name1" value={firstName} placeholder="first name" id="input1" data-testid="input1" onChange={(e) => setFirstName(e.target.value)}></input>
            <input type="text" name="name2" value={secondName} placeholder="second name" id="input2" data-testid="input2" onChange={(e) => setSecondName(e.target.value)}></input>
            <button id="calculate_relationship" data-testid="calculate_relationship" onClick={handleCalculateRelationship}>Calculate Relationship Future</button>
            <button id="clear" data-testid="clear" onClick={handleClear}>Clear</button>
            <h3 data-testid="answer">{relationshipStatus}</h3>
        </div>
    )
}

export default Flame;

