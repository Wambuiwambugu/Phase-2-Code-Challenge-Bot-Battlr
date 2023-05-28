import React from "react";
import BotCard from "./BotCard";
// import { useEffect } from "react";

function BotCollection({botData}) {
  // Your code here
  const botCard = botData.map((bot) => {
    return <BotCard bot={bot} key={bot.id} />
  })
  
  return (
    <div className="ui four column grid">
      <div className="row">
        {botCard}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
