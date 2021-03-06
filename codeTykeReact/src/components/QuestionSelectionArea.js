import React from 'react';
import QuestionSelection from './QuestionSelection';

const QuestionSelectionArea = (props) => {

  const [checkboxStatus, setCheckboxStatus] = React.useState([false, false, false, false]);

  var firstTwoAnswers = [],
      secondTwoAnswers = [];

   props.possibleAnswers.map((selection, index)=>{
     if(index < 2){
       firstTwoAnswers.push(<QuestionSelection key={index} selection={selection} index={index}  checkboxStatus={checkboxStatus}  setCheckboxStatus={setCheckboxStatus} />)
     } else {
       secondTwoAnswers.push(<QuestionSelection key={index} selection={selection} index={index}  checkboxStatus={checkboxStatus}  setCheckboxStatus={setCheckboxStatus} />)
     }
   })

    return(
      <div id="questionsBox">
        <div class="flex-space-evenly">
          <div class="flex-row">
            {firstTwoAnswers}
          </div>
          <div class="flex-row">
            {secondTwoAnswers}
          </div>
        </div>
      </div>
    )
}

export default QuestionSelectionArea;
