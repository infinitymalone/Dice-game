function myFunction()
{
    var randomNumber1= Math.floor((Math.random()*6)+1);
    var randomDiceImg="dice"+randomNumber1+".png";
    var image1=document.querySelectorAll("img")[0];
    image1.setAttribute("src",randomDiceImg);

    var randomNumber2= Math.floor((Math.random()*6)+1);
    var randomDiceImg2="dice"+randomNumber2+".png";
    var image2=document.querySelectorAll("img")[1];
    image2.setAttribute("src",randomDiceImg2);

    if(randomNumber1>randomNumber2)
        {
        document.querySelector("h1").innerHTML="🚩PLayer 1 wins🚩";
        document.querySelector("h1").style.fontSize="55px";
        }
        else if(randomNumber1<randomNumber2)
        {
        document.querySelector("h1").innerHTML="🚩PLayer 2 wins🚩";
        document.querySelector("h1").style.fontSize="55px";
        }
    else 
    {
        document.querySelector("h1").innerHTML="🤞DRAW🤞";
        document.querySelector("h1").style.fontSize="55px";
    }
}    







