import "../Styling/App.css";
import React, { useState } from "react";
import Data from "../Data/data";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <h1>Speak Another Language</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Page"
        id="inputSearchTerm"
      />

      <section>
        <table>
          <tr>
            <th className="tableColumn">English Word</th>
            <th className="tableColumn">French Spelling</th>
            <th className="tableColumn">French Pronunciation</th>
            <th className="tableColumn">Spanish Spelling</th>
            <th className="tableColumn">Mandarin Pronunciation</th>
          </tr>

          {Data &&
            Data.filter((item) =>
              item.englishWord
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ).map((x, xKey) => (
              <tr key={xKey}>
                <td className="tableColumn">{x.englishWord}</td>
                <td className="tableColumn">{x.frenchSpelling}</td>
                <td className="tableColumn">{x.frenchPronunciation}</td>
                <td className="tableColumn">{x.spanishSpelling}</td>
                <td className="tableColumn">{x.mandarianPronunciation}</td>
              </tr>
            ))}
        </table>
      </section>
    </>
  );
};

export default App;
