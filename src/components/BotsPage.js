import React, { useState } from "react";
import { useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [armybots, setArmyBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then(res => res.json())
    .then(data => setBots(data))
  },[]);
  function manageBotArmy(chosenBot){
    if (!armybots.includes(chosenBot)){
      setArmyBots([...armybots,chosenBot])  
    };
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

    setBots(bots.filter((bot) => bot.id !== deletedBot.id))
    

  }

    
    
  return (
    <div>
      <YourBotArmy armyBotData={armybots} removedBots={handleRemove} deleteBot={handleDeleteBot} />
      <BotCollection botData={bots} chooseBots={manageBotArmy} deleteBot={handleDeleteBot} />
    </div>
  )
}

export default BotsPage;
