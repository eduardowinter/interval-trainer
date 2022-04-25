import React from 'react';
import './App.css';
import { Alternatives } from './components/Alternatives';
import { SelectInterval } from './selectInterval';
import { PlayInterval } from './playInterval';
import { EvaluateAnswer } from './evaluateAnswer';


function App() {
  const selectedNotes = SelectInterval();

  const note1 = selectedNotes[0];
  const note2 = selectedNotes[1];

  const intervalNames = {
    'C4': 
      {
        'C4': 'Primeira Justa',
        'C#4': 'Segunda menor',
        'D4': 'Segunda maior',
        'D#4': 'Terça menor',
        'E4': 'Terça maior',
        'F4': 'Quarta justa', 
        'F#4': 'Quarta aumentada / Quinta diminuta',
        'G4': 'Quinta justa',
        'G#4': 'Sexta menor',
        'A4': 'Sexta maior',
        'A#4': 'Sétima menor',
        'B4': 'Sétima maior',
        'C5': 'Oitava justa'
      },
    'C#4':
      {
        'C4': 'Segunda menor',
        'C#4': 'Primeira Justa',
        'D4': 'Segunda menor',
        'D#4': 'Segunda maior',
        'E4': 'Terça menor',
        'F4': 'Terça maior', 
        'F#4': 'Quarta justa',
        'G4': 'Quarta aumentada / Quinta diminuta',
        'G#4': 'Quinta justa',
        'A4': 'Sexta menor',
        'A#4': 'Sexta maior',
        'B4': 'Sétima menor',
        'C5': 'Sétima maior'
      },    
    'D4':
      {
        'C4': 'Segunda maior',
        'C#4': 'Segunda menor',
        'D4': 'Primeira Justa',
        'D#4': 'Segunda menor',
        'E4': 'Segunda maior',
        'F4': 'Terça menor', 
        'F#4': 'Terça maior',
        'G4': 'Quarta justa',
        'G#4': 'Quarta aumentada / Quinta diminuta',
        'A4': 'Quinta justa',
        'A#4': 'Sexta menor',
        'B4': 'Sexta maior',
        'C5': 'Sétima menor'
      },
    'D#4':
      {
        'C4': 'Terça menor',
        'C#4': 'Segunda maior',
        'D4': 'Segunda menor',
        'D#4': 'Primeira Justa',
        'E4': 'Segunda menor',
        'F4': 'Segunda maior', 
        'F#4': 'Terça menor',
        'G4': 'Terça maior',
        'G#4': 'Quarta justa',
        'A4': 'Quarta aumentada / Quinta diminuta',
        'A#4': 'Quinta justa',
        'B4': 'Sexta menor',
        'C5': 'Sexta maior'
      },
    'E4':
      {
        'C4': 'Terça maior',
        'C#4': 'Terça menor',
        'D4': 'Segunda maior',
        'D#4': 'Segunda menor',
        'E4': 'Primeira Justa',
        'F4': 'Segunda menor', 
        'F#4': 'Segunda maior',
        'G4': 'Terça menor',
        'G#4': 'Terça maior',
        'A4': 'Quarta justa',
        'A#4': 'Quarta aumentada / Quinta diminuta',
        'B4': 'Quinta justa',
        'C5': 'Sexta menor'
      },
    'F4':
      {
        'C4': 'Quarta justa',
        'C#4': 'Terça maior',
        'D4': 'Terça menor',
        'D#4': 'Segunda maior',
        'E4': 'Segunda menor',
        'F4': 'Primeira Justa', 
        'F#4': 'Segunda menor',
        'G4': 'Segunda maior',
        'G#4': 'Terça menor',
        'A4': 'Terça maior',
        'A#4': 'Quarta justa',
        'B4': 'Quarta aumentada / Quinta diminuta',
        'C5': 'Quinta justa'
      },
    'F#4':
      {
        'C4': 'Quarta aumentada / Quinta diminuta',
        'C#4': 'Quarta justa',
        'D4': 'Terça maior',
        'D#4': 'Terça menor',
        'E4': 'Segunda maior',
        'F4': 'Segunda menor',
        'F#4': 'Primeira Justa',
        'G4': 'Segunda menor',
        'G#4': 'Segunda maior',
        'A4': 'Terça menor',
        'A#4': 'Terça maior',
        'B4': 'Quarta justa',
        'C5': 'Quarta aumentada / Quinta diminuta'
      },
    'G4':
    {
      'C4': 'Quinta justa',
      'C#4': 'Quarta aumentada / Quinta diminuta',
      'D4': 'Quarta justa',
      'D#4': 'Terça maior',
      'E4': 'Terça menor',
      'F4': 'Segunda maior', 
      'F#4': 'Segunda menor',
      'G4': 'Primeira Justa',
      'G#4': 'Segunda menor',
      'A4': 'Segunda maior',
      'A#4': 'Terça menor',
      'B4': 'Terça maior',
      'C5': 'Quarta justa'
    },
    'G#4':
    {
      'C4': 'Sexta menor',
      'C#4': 'Quinta justa',
      'D4': 'Quarta aumentada / Quinta diminuta',
      'D#4': 'Quarta justa',
      'E4': 'Terça maior',
      'F4': 'Terça menor', 
      'F#4': 'Segunda maior',
      'G4': 'Segunda menor',
      'G#4': 'Primeira Justa',
      'A4': 'Segunda menor',
      'A#4': 'Segunda maior',
      'B4': 'Terça menor',
      'C5': 'Terça maior'
    },
    'A4':
    {
      'C4': 'Sexta maior',
      'C#4': 'Sexta menor',
      'D4': 'Quinta justa',
      'D#4': 'Quarta aumentada / Quinta diminuta',
      'E4': 'Quarta justa',
      'F4': 'Terça maior', 
      'F#4': 'Terça menor',
      'G4': 'Segunda maior',
      'G#4': 'Segunda menor',
      'A4': 'Primeira Justa',
      'A#4': 'Segunda menor',
      'B4': 'Segunda maior',
      'C5': 'Terça menor'
    },
    'A#4':
    {
      'C4': 'Sétima menor',
      'C#4': 'Sexta maior',
      'D4': 'Sexta menor',
      'D#4': 'Quinta justa',
      'E4': 'Quarta aumentada / Quinta diminuta',
      'F4': 'Quarta justa', 
      'F#4': 'Terça maior',
      'G4': 'Terça menor',
      'G#4': 'Segunda maior',
      'A4': 'Segunda menor',
      'A#4': 'Primeira Justa',
      'B4': 'Segunda menor',
      'C5': 'Segunda maior'
    },
    'B4':
    {
      'C4': 'Sétima maior',
      'C#4': 'Sétima menor',
      'D4': 'Sexta maior',
      'D#4': 'Sexta menor',
      'E4': 'Quinta justa',
      'F4': 'Quarta aumentada / Quinta diminuta', 
      'F#4': 'Quarta justa',
      'G4': 'Terça maior',
      'G#4': 'Terça menor',
      'A4': 'Segunda maior',
      'A#4': 'Segunda menor',
      'B4': 'Primeira Justa',
      'C5': 'Segunda menor'
    },
    'C5':
    {
      'C4': 'Oitava justa',
      'C#4': 'Sétima maior',
      'D4': 'Sétima menor',
      'D#4': 'Sexta maior',
      'E4': 'Sexta menor',
      'F4': 'Quinta justa', 
      'F#4': 'Quarta aumentada / Quinta diminuta',
      'G4': 'Quarta justa',
      'G#4': 'Terça maior',
      'A4': 'Terça menor',
      'A#4': 'Segunda maior',
      'B4': 'Segunda menor',
      'C5': 'Primeira Justa'
    },
  };

  const intervalSymbol = intervalNames[note1 as keyof typeof intervalNames];

  const intervalName = intervalSymbol[note2 as keyof typeof intervalSymbol];

  return (
    <div className="App">
      <header className="App-header">
        <button className="Play-interval" onClick={() => PlayInterval(note1, note2)}>Play Interval</button>
        <Alternatives
          onSelectInterval={intervalName}
        />
        <div className="bottom-buttons">
          <button 
            className="evaluate-answer" 
            onClick={() => EvaluateAnswer()}>
              Evaluate Answer!
          </button>
          <button 
            className="next-interval" 
            onClick={() => document.location.reload()}>
              Next Interval
          </button>
        </div>
      </header>
    </div>
  );

  
}

export default App;
