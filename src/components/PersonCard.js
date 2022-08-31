import React, {useState} from "react";

const PersonCard = (props) => {
const { firstName, lastName, Age, haircolor } = props;
const [stateAge, setStateAge] = useState(Age);
return (
<div className="box">
<h2>
    {lastName}, {firstName}
</h2>
    <p>Age:{stateAge}</p>
    <p>Hair Color:{haircolor}</p>
    <button onClick={() => setStateAge(stateAge + 1)}>Birthday Button for {firstName} {lastName}
    </button>
</div>
);
}
export default PersonCard;