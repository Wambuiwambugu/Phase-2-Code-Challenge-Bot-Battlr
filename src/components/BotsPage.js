import React, { useState } from "react";
import { useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [armybots, setArmyBots] = useState([])

  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then(res => res.json())
    .then(data => setBots(data))
  },[]);

  function addToBotArmy(chosenBot){
    setArmyBots([...armybots, chosenBot])
  }


  return (
    <div>
      <YourBotArmy armyBotData={armybots}/>
      <BotCollection botData={bots} chooseBots={addToBotArmy} />
    </div>
  )
}

export default BotsPage;
