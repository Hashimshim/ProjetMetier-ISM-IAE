import {Crossword,CrosswordImperative,CrosswordProviderImperative} from '@jaredreisinger/react-crossword';
import React, { useCallback, useEffect, useRef, useState } from 'react' 
import {Button} from '@chakra-ui/react'
import styled, { css } from 'styled-components'
 const data = {
        across: {
          3: {
            clue: 'Ensemble de ce qui concerne la production, la répartition et la consommation des richesses et de l\'activité',
            answer: 'ECONOMIE',
            row: 1,
            col: 7,
          },
          6:{
            clue:"Un diplôme d'Etat de Grade Master.",
            answer:'DSCG',
            row:3,
            col:2,
          },
          9:{
            clue:"Outils d'évaluation et d'aide à la décision",
            answer:'INDICATEURS',
            row:5,
            col:0,
          },
          10:{
            clue:"Action de gérer un bien, un ensemble de biens",
            answer:'ADMINISTRATION',
            row:7,
            col:6,
          },
        },
        down: {
          5: {
            clue: "Procédure de contrôle de la comptabilité et de la gestion d'une entreprise",
            answer:'AUDIT',
            row:2,
            col:0,
          },
          2: {
            clue: "Management en français  ",
            answer: 'GESTION',
            row:1,
            col:3,
          },
          8: {
            clue: "Ensemble des règles juridiques officielles établies par la société dans le but d'organiser les rapports entre les personnes",
            answer: 'DROIT',
            row:4,
            col:9,
          },
          1: {
            clue: "Pratiques utilisées par un État ou une collectivité pour percevoir des impôts et autres prélèvements obligatoires.",
            answer: 'FISCALITE',
            row:0,
            col:13,
          },
          4: {
            clue: "Expression anglophone de la communication de données",
            answer: 'REPORTING',
            row:1,
            col:17,
          },
          7: {
            clue: "Consiste à fournir l'argent nécessaire à la réalisation d'une opération économique.",
            answer: 'FINANCE',
            row:3,
            col:19,
          },
        },
      };
      
  const CrosswordWrapper = styled.div`
  margin-top:10em;
  max-width:80em;
  display:flex;
  /* and some fun making use of the defined class names */
  .clue.correct {
    ::before {
      content: '\u2713'; /* a.k.a. checkmark: ✓ */
      display: inline-block;
      text-decoration: none;
      color: rgb(100, 200, 100);
      margin-right: 0.25em;
    }
  }
`;


const MyCrossword = () => {
  
  const crossword = useRef(null);
  console.log("crossword : " , crossword)
   const reset = useCallback((event) => {
      var _a;
      (_a = crossword.current) === null || _a === void 0 ? void 0: _a.reset();
    
   },[]);

  return (
    <div >
    
    <CrosswordWrapper>
    <Button onClick={reset}>Reset</Button>
    <Crossword ref={crossword} data={data} acrossLabel="Horizontal" downLabel='Vertical' theme={{gridBackground:'transparent',focusBackground:"#7a3c73",highlightBackground:"#9F7AEA",columnBreakpoint:"1000px"}}/>
    </CrosswordWrapper>
    </div>
  )
}
export default MyCrossword
