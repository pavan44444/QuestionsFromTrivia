fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple")
.then((response)=>response.json())
.then((data)=>{
    let count = 1;
        data.results.forEach(element => {
            let divElement = document.createElement("div");
            //question
            let questoinDisplayElement = document.createElement("h1");
            questoinDisplayElement.setAttribute("class","question");
            questoinDisplayElement.textContent = `question${count++} : ${element.question}`;
            divElement.appendChild(questoinDisplayElement);
            //type
            let typeDisplayElement = document.createElement("p");
            typeDisplayElement.setAttribute("class","type");
            typeDisplayElement.textContent = `type : ${element.type}`;
            divElement.appendChild(typeDisplayElement);

            //difficulty
             let difficultyDisplayElement = document.createElement("p");
             difficultyDisplayElement.setAttribute("class","difficulty");
            difficultyDisplayElement.textContent = `difficulty : ${element.difficulty}`;
            divElement.appendChild(difficultyDisplayElement);

            //category
            let categoryDisplayElement = document.createElement("p");
            categoryDisplayElement.setAttribute("class","category");
            categoryDisplayElement.textContent = `cateogry : ${element.category}`;
            divElement.appendChild(categoryDisplayElement);
            //correct_answer
            let correctanswerDisplayElement = document.createElement("p");
            correctanswerDisplayElement.setAttribute("class","correctanswer");
            correctanswerDisplayElement.textContent = `correct answer : ${element.correct_answer}`;
            divElement.appendChild(correctanswerDisplayElement);
          //incorrect_answer
           
            document.body.appendChild(divElement);
        });   
})
.catch(()=>console.log("failed"));
//darklight mode
const toggleButton = document.querySelector(".darklight");
toggleButton.addEventListener('click', ()=>{
    document.body.classList.toggle('darklight');

});
