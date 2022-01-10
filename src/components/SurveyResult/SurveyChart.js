import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title,);

const SurveyChart = (props) => {

  const firstAnswer = [0, 0, 0, 0];
  const secondAnswer = [0, 0, 0, 0];
  const thirdAnswer = [0, 0, 0, 0];
  const fourthAnswer = [0, 0, 0, 0];
  let total = 0;
  let counter = 0;

  props.getData.forEach(post => {
      //Answer1
      if (post.userAnswer1 === props.getData2[0].answer1) {
          firstAnswer[0]++;
      } else if (post.userAnswer1 === props.getData2[0].answer2) {
          secondAnswer[0]++
      } else if (post.userAnswer1 === props.getData2[0].answer3) {
          thirdAnswer[0]++
      } else if (post.userAnswer1 === props.getData2[0].answer4) {
          fourthAnswer[0]++
      }
     
      //Answer2
      if (post.userAnswer2 === props.getData2[1].answer1) {
          firstAnswer[1]++
      } else if (post.userAnswer2 === props.getData2[1].answer2) {
          secondAnswer[1]++
      } else if (post.userAnswer2 === props.getData2[1].answer3) {
          thirdAnswer[1]++
      } else if (post.userAnswer2 === props.getData2[1].answer4) {
          fourthAnswer[1]++
      }

      //Answer3
      if (post.userAnswer3 === props.getData2[2].answer1) {
          firstAnswer[2]++
      } else if (post.userAnswer3 === props.getData2[2].answer2) {
          secondAnswer[2]++
      } else if (post.userAnswer3 === props.getData2[2].answer3) {
          thirdAnswer[2]++
      } else if (post.userAnswer3 === props.getData2[2].answer4) {
          fourthAnswer[2]++
      }

      //Answer4
      if (post.userAnswer4 === props.getData2[3].answer1) {
          firstAnswer[3]++
      } else if (post.userAnswer4 === props.getData2[3].answer2) {
          secondAnswer[3]++
      } else if (post.userAnswer4 === props.getData2[3].answer3) {
          thirdAnswer[3]++
      } else if (post.userAnswer4 === props.getData2[3].answer4) {
          fourthAnswer[3]++
      }

  });
  
      total = firstAnswer[0] + secondAnswer[0] + thirdAnswer[0] + fourthAnswer[0];

  for (counter = 0; counter < 4; counter++) {
      firstAnswer[counter] = (firstAnswer[counter] * 100 / total).toFixed(0);
      secondAnswer[counter] = (secondAnswer[counter] * 100 / total).toFixed(0);
      thirdAnswer[counter] = (thirdAnswer[counter] * 100 / total).toFixed(0);
      fourthAnswer[counter] = (fourthAnswer[counter] * 100 / total).toFixed(0);
  }


  const chartList = props.getData2.map((chart) => (
    <div key={chart.id} style={{ width: "20%" , display:'inline-block'}}><Doughnut data={{type: "doughnut",
  labels: [chart.answer1 , chart.answer2, chart.answer3, chart.answer4],
  datasets: [
    {
      data: [firstAnswer[chart.id -1], secondAnswer[chart.id - 1], thirdAnswer[chart.id - 1], fourthAnswer[chart.id - 1]],
      backgroundColor: [
        'rgb(197, 112, 150)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)'
        
      ],
      borderColor: [
        'rgba(197, 112, 150, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        
      ],
      borderWidth: 1,
    },
  ]}} options={{
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: chart.questions,
      },
    },
  }}/></div>
  )
  );
  

  return (
    <div style={{display:'flex', justifyContent:'space-evenly'}}>
      {chartList}   
    </div>
  );
};

export default SurveyChart;
