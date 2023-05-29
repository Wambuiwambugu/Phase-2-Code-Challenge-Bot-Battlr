import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({armyBotData}) {
const botCard = armyBotData.map((armybot) => {
  return <BotCard key={armybot.id} bot={armybot} />
})

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botCard}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
