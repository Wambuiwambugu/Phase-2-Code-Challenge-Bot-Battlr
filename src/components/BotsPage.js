import React, { useState } from "react";
import { useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [armybots, setArmyBots] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [botToDisplay, setBotToDisplay] = useState({})

  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then(res => res.json())
    .then(data => setBots(data))
  },[]);
  
  
  function displayBots(chosenBot){
    if (chosenBot){
       setIsClicked(true);
       setBotToDisplay(chosenBot)
    };
  };
  function specsUnmount(){
    setIsClicked(false)
  }
  function addToArmy(){
    if (!armybots.includes(botToDisplay)){
      setArmyBots([...armybots,botToDisplay]);
    }
    specsUnmount()
  }

  function handleRemove(removedBot){
    if (armybots.includes(removedBot)){
      setArmyBots(armybots.filter((bot) => bot.id !== removedBot.id))
    };
  };
  function handleDeleteBot(deletedBot){
    console.log(deletedBot)
    fetch(`http://localhost:8002/bots/${deletedBot.id}`,{
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => console.log(data))

    setBots(bots.filter((bot) => bot.id !== deletedBot.id));
    setArmyBots(armybots.filter((bot) => bot.id !== deletedBot.id));
  };
  
  
  const botCollection = () => {
    return <BotCollection botData={bots} chooseBots={displayBots} deleteBot={handleDeleteBot} />
  };
  const botSpecs = () => {
    return <BotSpecs bot={botToDisplay} unmount={specsUnmount} handleAdd={addToArmy}/>
  }
  const display = isClicked? botSpecs : botCollection
  

    
    
  return (
    <div>
      <YourBotArmy armyBotData={armybots} removedBots={handleRemove} deleteBot={handleDeleteBot} />
     {display()}
    </div>
  )
}

export default BotsPage;
