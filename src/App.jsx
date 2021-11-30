import { useState } from "react";
import "./App.css";
import { Hero, About, Education, Experience, More } from "./components";
import { CV } from "./CV/CV";

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
        <Hero hero={hero} />
        <About hero={hero} />
        <nav>
          <button 
          className="button"
          onClick={()=> setShowEducation(true)}>Education</button>
          <button 
          className="button"
          onClick={()=> setShowEducation(false)}>Experience</button>
        </nav>
        <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
        </div>
	      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
	      />
    </div>
  );
}

export default App;
