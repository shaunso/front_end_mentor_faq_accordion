async function fetchData() {

  const response = await fetch("data.json");
  const data = await response.json();

  // calculate the means of each data point and insert each one into an array
  // the array is then sorted in order to find the percentile of each data point each time the function is called
  const array = [];
  data.forEach(dataPoint => {
    const reaction = dataPoint[0].score;
    const memory = dataPoint[1].score;
    const verbal = dataPoint[2].score;
    const visual = dataPoint[3].score;

    const mean = (reaction + memory + verbal + visual) / 4;

    array.push(mean);
  });

  // sort the array
  const arraySorted = array.sort();

  // pick a random data point
  const randomNumber = Math.floor(Math.random() * data.length);  

  // random number generated is used to select a result data point
  const reaction = data[randomNumber][0];
  const memory = data[randomNumber][1];
  const verbal = data[randomNumber][2];
  const visual = data[randomNumber][3];
  const mean = (reaction.score + memory.score + verbal.score + visual.score) / 4;

  // find the position of this data point out of the entire dataset
  // and display it on the screen for the user to know their position out of the dataset
  const position = arraySorted.indexOf(mean);
  const dataSetLength = data.length;
  const dataPointPercentile = position / dataSetLength;
  document.getElementById("percentile").textContent = `${(dataPointPercentile * 100).toFixed(0)}%`;

  // displaying the reaction score to the html dynamically by manipulating the DOM
  document.getElementsByClassName("category-image")[0].src = reaction.icon;
  document.getElementsByClassName("category-name")[0].textContent = reaction.category;
  document.getElementsByClassName("score")[0].innerHTML = reaction.score;

  // displaying the memory score to the html dynamically by manipulating the DOM
  document.getElementsByClassName("category-image")[1].src = memory.icon;
  document.getElementsByClassName("category-name")[1].textContent = memory.category;
  document.getElementsByClassName("score")[1].innerHTML = memory.score;

  // displaying the verbal score to the html dynamically by manipulating the DOM
  document.getElementsByClassName("category-image")[2].src = verbal.icon;
  document.getElementsByClassName("category-name")[2].textContent = verbal.category;
  document.getElementsByClassName("score")[2].innerHTML = verbal.score;

  // displaying the visual score to the html dynamically by manipulating the DOM
  document.getElementsByClassName("category-image")[3].src = visual.icon;
  document.getElementsByClassName("category-name")[3].textContent = visual.category;
  document.getElementsByClassName("score")[3].innerHTML = visual.score;

/////////
  // computing the overall score which is an average of the four categories and manipulating the DOM to display this value
  const reactionScore = +reaction.score;
  const memoryScore = +memory.score;
  const verbalScore =  +verbal.score;
  const visualScore = +visual.score;
  const scoreSum = reactionScore + memoryScore + verbalScore + visualScore;
  const overallScore = scoreSum / 4;
  document.getElementById("overall-result").textContent = overallScore.toFixed(0);    
}

fetchData()