import React, { useState } from "react";

export default function MoodLog() {
  const [mood, setMood] = useState([]);

  return (
    <div>
      <label for="cycle">Select your mood for today : </label>
      <select
        onChange={(e) => setMood(e.target.value)}
        defaultValue={mood}
        className="m-2"
      >
        <option value="great">Great!</option>
        <option value="medium">So so</option>
        <option value="horrible">Horrible...</option>
      </select>
    </div>
  );
}
