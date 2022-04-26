import {Crossword,CrosswordImperative,CrosswordProviderImperative} from '@jaredreisinger/react-crossword';
import React, { useCallback, useEffect, useRef, useState } from 'react' 
import {Button} from '@chakra-ui/react'
import styled, { css } from 'styled-components'
 const data = {
        across: {
          3: {
            clue: 'Gain,réduction volontaire de l\'effort,sobriété,dans une activité, une oeuvre',
            answer: 'ECONOMIE',
            row: 1,
            col: 7,
          },
          6:{
            clue:"Le Diplôme Supérieur de Comptabilité et de Gestion",
            answer:'DSCG',
            row:3,
            col:2,
          },
          9:{
            clue:"Publication qui sert de guide",
            answer:'INDICATEURS',
            row:5,
            col:0,
          },
          10:{
            clue:"Action d'administer des affaires publiques ou privées,gestion",
            answer:'ADMINISTRATION',
            row:7,
            col:6,
          },
        },
        down: {
          5: {
            clue: "Contrôle de la comptabilité et de la gestion d'une société",
            answer:'AUDIT',
            row:2,
            col:0,
          },
          2: {
            clue: "Action, manière de gérer, d'organiser, d'administrer, de diriger",
            answer: 'GESTION',
            row:1,
            col:3,
          },
          8: {
            clue: "Fait de pouvoir exiger d'autrui en fonction des règles sociales",
            answer: 'DROIT',
            row:4,
            col:9,
          },
          1: {
            clue: "Système de lois et de dispositions relatives au fisc, à l'administration des finances",
            answer: 'FISCALITE',
            row:0,
            col:13,
          },
          4: {
            clue: "Rapport d'activité dans une entreprise, généralement rendu public et annexé au bilan",
            answer: 'REPORTING',
            row:1,
            col:17,
          },
          7: {
            clue: "Ensemble des recettes et dépenses",
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
