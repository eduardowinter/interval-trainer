export function SelectInterval() {
  const notesList = [
    'C4',
    'C#4',
    'D4',
    'D#4',
    'E4',
    'F4',
    'F#4',
    'G4',
    'G#4',
    'A4',
    'A#4',
    'B4',
    'C5',
  ]

  const notSelectedNotes = [...notesList]

  const selectedNotes = []

  for( var i = 0; i < 5; i++){
    const selectedNote = notSelectedNotes[Math.floor(Math.random() * notSelectedNotes.length)];
    
    selectedNotes.push(selectedNote)

    for( var ii = 0; ii < notSelectedNotes.length; ii++){ 
                                    
      if ( notSelectedNotes[ii] === selectedNote) { 
        notSelectedNotes.splice(ii, 1); 
          ii--; 
      }
    }       
  }

  return selectedNotes;
}
