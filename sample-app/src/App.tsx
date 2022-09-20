import { useState } from "react";

interface ThingToLearn {
  label: string;
  url: string;
}

function App() {
  const [list, setList] = useState<ThingToLearn[]>([]);

  return (
    <div>
      <h1>Things to Learn</h1>

      <button
        type="button"
        onClick={() => {
          fetch("http://localhost:8000/")
            .then(response => response.json())
            .then((payload: ThingToLearn[]) => {
              console.log(payload);
              setList(payload);
            });
        }}
      >
        Fetch List
      </button>

      <ol>
        {list.map((row: any, idx: number) => {
          return (
            <li key={idx}>
              <a href={row.url}>{row.label}</a>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
