import { useState } from "react";

function WeightExercise({ name }) {
    const [weight, setWeight] = useState(0);

    return (
        <div>
            <h2>{name}</h2>

            <p>Weight: {weight} lbs</p>

            <button onClick={() => setWeight(weight + 5)}>Add 5 lbs</button>
            <button onClick={() => setWeight(weight + 10)}>Add 10 lbs</button>
            <button onClick={() => setWeight(weight + 25)}>Add 25 lbs</button>
            <button onClick={() => setWeight(weight + 45)}>Add 45 lbs</button>

            <button onClick={() => setWeight(0)}>Reset</button>
        </div>
    );
}

export default WeightExercise;