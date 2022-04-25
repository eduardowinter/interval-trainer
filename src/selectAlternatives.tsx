import { shuffle } from "./randomizeArray";

export function SelectAlternatives(selectedInterval: any) {
  
  const correctAlternative = selectedInterval

  const selectedAlternatives = []

  selectedAlternatives.push(correctAlternative)

  const allAlternatives = [
    'Primeira Justa',
    'Segunda menor',
    'Segunda maior',
    'Terça menor',
    'Terça maior',
    'Quarta justa',
    'Quarta aumentada / Quinta diminuta',
    'Quinta justa',
    'Sexta menor',
    'Sexta maior',
    'Sétima menor',
    'Sétima maior',
    'Oitava justa'
  ];

  let notSelectedAlternatives = [...allAlternatives]

  notSelectedAlternatives = notSelectedAlternatives.filter(e => e !== correctAlternative)

  for( var i = 0; i < 4; i++){
    const selectedAlternative = notSelectedAlternatives[Math.floor(Math.random() * notSelectedAlternatives.length)];
    
    selectedAlternatives.push(selectedAlternative)

    for( var ii = 0; ii < notSelectedAlternatives.length; ii++){ 
                                    
      if ( notSelectedAlternatives[ii] === selectedAlternative) { 
        notSelectedAlternatives.splice(ii, 1); 
          ii--; 
      }
    }       
  }

  shuffle(selectedAlternatives);

  return [selectedAlternatives, correctAlternative];
}
  
  


