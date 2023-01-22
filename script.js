let Video1=document.getElementById('Video1');
let Video2=document.getElementById('Video2');
let Option = ["Stone2.mp4","Paper2.mp4","Scissors2.mp4"];
let Player;
let Computer;
var Score1=0;
var Score2=0;

document.getElementById('StoneButton').addEventListener('click' , function(){
    Video1.src="Stone1.mp4";
    let ComputerOption=Math.floor(Math.random() *Option.length)
    Player="Stone1.mp4";
    Computer=Option[ComputerOption]
    Video2.src=Computer;

    Scores();
})

document.getElementById('PaperButton').addEventListener('click' , function(){
    Video1.src="Paper1.mp4";
    let ComputerOption=Math.floor(Math.random() *Option.length)
    Player="Paper1.mp4";
    Computer=Option[ComputerOption]
    Video2.src=Computer;

    Scores();
})

document.getElementById('ScissorsButton').addEventListener('click' , function(){
    Video1.src="Scissors1.mp4";
    let ComputerOption=Math.floor(Math.random() *Option.length)
    Player="Scissors1.mp4";
    Computer=Option[ComputerOption]
    Video2.src=Computer;

    Scores();
})

function Scores(){

    // Player Wins

    if((Player=="Stone1.mp4" && Computer=="Scissors2.mp4")||
    (Player=="Scissors1.mp4" && Computer=="Paper2.mp4")||
    (Player=="Paper1.mp4" && Computer=="Stone2.mp4"))
    {
        Score1+=5;
    }

    // Computer Wins

    if((Computer=="Stone2.mp4" && Player=="Scissors1.mp4")||
    (Computer=="Scissors2.mp4" && Player=="Paper1.mp4")||
    (Computer=="Paper2.mp4" && Player=="Stone1.mp4"))
    {
        Score2+=5;
    }

    document.getElementById('Score1').innerHTML="Score: "+ Score1;
    document.getElementById('Score2').innerHTML="Score: "+ Score2;
    return Score1 ,Score2;
}

document.getElementById('ReloadButton').addEventListener('click' , function(){
    location.reload();
})

document.getElementById('WinnerButton').addEventListener('click' , function(){
    Scores();

    if(Score1>Score2)
    {
        window.alert(" 🎉Hurray! You Won 🥳 ");
        location.reload();
    }

    else if(Score2>Score1)
    {
        window.alert(" Better Luck Next Time! 😐");
        location.reload();
    }
    else
    {
        window.alert(" It Was A Draw Match!");
        location.reload();
    }
})

 

