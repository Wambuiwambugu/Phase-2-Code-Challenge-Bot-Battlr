import React from "react";
import BotCard from "./BotCard";
// import { useEffect } from "react";

function BotCollection({botData, chooseBots,deleteBot}) {
  
   
  // Your code here
  const botCard = botData.map((bot) => {
    return <BotCard  bot={bot} key={bot.id} botPick={chooseBots} botDelete={deleteBot} />
  });
  
  return (
    <div className="ui four column grid">
      <div className="row"  >
        {botCard}
      </div>
    </div>
  );
}

export default BotCollection;
