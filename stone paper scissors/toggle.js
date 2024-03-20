
let choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg1")
let userScore = 0
let cpuScore = 0
let userscore = document.querySelector(".user-score")
let cpuscore = document.querySelector(".cpu-score")



const comChoice = () =>{
    const arr = ["stone", "paper", "scissors"]
    const cpu = arr[Math.floor(Math.random()*arr.length)]
    return cpu
}

const showWinner = (userwin, userChoice, cpuChoice)=>{
    if(userwin){
        msg.innerText = `You Win🎉 ${userChoice} beats ${cpuChoice}`

    }
    else{
        msg.innerText = `Computer Win! ${cpuChoice} beats ${userChoice}`
        
    }
}
const draw = ()=>{
    msg.innerText = "Draw"
}

const playgame = (userChoice)=>{
    const cpuChoice = comChoice()
    console.log("user",userChoice)
    console.log("cpu",cpuChoice)

    if(cpuChoice == userChoice){
        draw()
    }
    else{
        let userwin = true
        
        if(cpuChoice == "stone" && userChoice == "paper"){
            console.log("user win")
            userwin = true
            userScore++
            userscore.innerText = userScore

        }else if(cpuChoice == "paper" && userChoice == "scissors"){
            console.log("user win")
            userwin = true
            userScore++
            userscore.innerText = userScore

        
        }else if(cpuChoice == "scissors" && userChoice == "stone"){
        console.log("user win")
            userwin = true
            userScore++
            userscore.innerText = userScore


        }else{
        console.log("cpu win")
            userwin = false
            cpuScore++
            cpuscore.innerText = cpuScore

        }
        showWinner(userwin,userChoice,cpuChoice)
    }
}


choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
        playgame(userChoice)
    })
})

