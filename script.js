

// function myFunction(event) { 
//     let answer = event.target;
//     let question1 = document.getElementById("question1");
//     let question2 = document.getElementById("question2");
// console.log(answer.value )

// let options = document.querySelectorAll("option")

// // Initially make all options clickable
// options.forEach(option => {
//     option.disabled = false;
//     option.style.backgroundColor = ""; // Reset the background color
//     option.style.color = "black"; 
// });


//     // Change the background color based on the value
//     // if(question1.style.display != "none"){
//     //     question2.style.display = "none";
//     //     if(answer.value === "Antarctica"){ 
//     //         answer.style.backgroundColor = "green";
//     //         }
//     //         else{
//     //             // console.log("mmm")
//     //             answer.style.backgroundColor = "red";
//     //             let correctAnswer = document.querySelector('option[value="Antarctica"]');
//     //                        // Delay before changing background color
//     //                        setTimeout(() => {
//     //                         correctAnswer.style.backgroundColor = "green";
//     //                     }, 500); // Change color after 2 seconds (2000 milliseconds)
//     //         }
             
//     // }
//     //  if(question2.style.display != "none"){
//     // //  question1.style.display = "none";
//     // console.log("op 2 click")
//     //     if(answer.value === "Vatican City"){
//     //         answer.style.backgroundColor = "green";
//     //         }
//     //         else{
//     //             console.log("wsro")
//     //             answer.style.backgroundColor = "red";
//     //             let correctAnswer = document.querySelector('option[value="Vatican City"]');
//     //                        // Delay before changing background color
//     //                        setTimeout(() => {
//     //                         correctAnswer.style.backgroundColor = "green";
//     //                     }, 500); // Change color after 2 seconds (2000 milliseconds)
//     //         }
//     // }

//     // Disable all options after selection
//     options.forEach(option => {
//         option.disabled = true;
//     });
// }


let count = 0;
let options = document.querySelectorAll("option")
// Initially make all options clickable
options.forEach(option => {
    option.disabled = false;
    option.style.backgroundColor = ""; // Reset the background color
    option.style.color = "black"; 
});

options.forEach(option => {
    option.addEventListener('click', myFunction);
});    


     
// next function
    let questions = [
        document.getElementById("question1"),
        document.getElementById("question2"),
        document.getElementById("question3"),
        document.getElementById("question4")
    ];
    let currentIndex = 0;
    let next = document.getElementById("next");
     next.onclick = () => {
        if(currentIndex == 3){
            //alert();
            let playAgain = document.getElementById("score");
            score.style.display = "inline";
            let scoreNo = document.getElementById("scoreNo");
            scoreNo.innerHTML = `Your score is ${count}/4!`;
            let content = document.getElementById("content");
            content.style.display = "none";
            return;
        }
    questions[currentIndex].classList.remove("active");
    
    currentIndex = (currentIndex + 1) % questions.length;
    questions[currentIndex].classList.add("active");


    // Initially make all options clickable
    options.forEach(option => {
        option.disabled = false;
        option.style.backgroundColor = ""; // Reset the background color
        option.style.color = "black"; 
    });
    }


     function myFunction(event) { 
        let answersArray = [
            "Antarctica",
            "Vatican City",
            "Blue whale",
            "Australia"
        ];
        
    let currentQues = document.querySelectorAll("div")
    currentQues.forEach(ques =>{
if (ques.classList.contains("active")){
    console.log("yes")
    let ans = event.target;

    if(answersArray.includes(ans.value)){ 
                ans.style.backgroundColor = "rgb(131, 210, 13)";
                
                count++;
    }
    else{
        ans.style.backgroundColor = "rgb(220, 76, 76)";
        //let correctAnswer = document.querySelector(`option[value="Antarctica"]`);
        answersArray.forEach(answer => {
            // Check if an option with this value exists
            let option = document.querySelector(`option[value="${answer}"]`);
            if (option) {
                    // Delay before changing background color
                    setTimeout(() => {
                        option.style.backgroundColor = "rgb(131, 210, 13)";
                    }, 500); // Change color after 2 seconds (2000 milliseconds)
            } 
        
    })

}

    // Disable all options after selection
    options.forEach(option => {
        option.disabled = true;
    });
    
}
})
     }