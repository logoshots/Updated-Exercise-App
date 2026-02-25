import { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

function App() {
    const [selectedExercise, setSelectedExercise] = useState(null);

    const exercises = [
        { name: "Pushups", type: "repetition" },
        { name: "Running", type: "duration" },
        { name: "Planking", type: "duration" }
    ];

    if (selectedExercise === null) {
        return (
            <div>
                <h1>Select an Exercise</h1>

                {exercises.map((exercise, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedExercise(exercise)}
                        style={{ margin: "10px", padding: "10px" }}
                    >
                        {exercise.name}
                    </button>
                ))}
            </div>
        );
    }

    return (
        <div>
            <h1>{selectedExercise.name}</h1>

            {selectedExercise.type === "repetition" ? (
                <RepetitionExercise name={selectedExercise.name} />
            ) : (
                <DurationExercise name={selectedExercise.name} />
            )}
        </div>
    );
}

export default App;