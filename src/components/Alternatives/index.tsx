import { SelectAlternatives } from "../../selectAlternatives";

import "./styles.css";


export function Alternatives(input: any) {
  const [ selectedAlternatives, correctAlternative ] = SelectAlternatives(input["onSelectInterval"]);

  console.log(selectedAlternatives)
  console.log(correctAlternative)

  return (
      <table className="alternativesTable">
        <thead>
          <tr>
            <th>Select the correct alternative:</th>
          </tr>
        </thead>

        <tbody>
          {selectedAlternatives.map((selectedAlternative: any) => (
              <button className="alternatives">
                <tr key={selectedAlternative}>
                  <td>{selectedAlternative}</td>
                  <td className="answer" hidden>{selectedAlternative === correctAlternative ? "✔" : "✖"}</td>
                </tr>
              </button>
          ))}
        </tbody>
      </table>
  );
}