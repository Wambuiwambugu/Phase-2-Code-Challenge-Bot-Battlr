import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({armyBotData,removedBots,deleteBot}) {
const botCard = armyBotData.map((armybot) => {
  return <BotCard key={armybot.id} bot={armybot} botPick={removedBots} botDelete={deleteBot} />
});

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
