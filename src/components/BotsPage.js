import React, { useState } from "react";
import { useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then(res => res.json())
    .then(data => setBots(data))
  },[])


  return (
    <div>
      <YourBotArmy />
      <BotCollection botData={bots} />
    </div>
  )
}

export default BotsPage;
