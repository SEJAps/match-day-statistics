import { FC } from "react";
import { InitialStats } from "../types";

export const Guest: FC<{ stat: InitialStats }> = ({ stat }) => {
  const updateStat = (team: string, stat: string, num: number) => {
    console.log(team, stat, num)
  }
  return (<td>
    <div className="stat-control">
      <button className="stat-button subtract-stat" onClick={() => updateStat('team1', '${stat}', -1)}>-</button>
      <span className="stat-value">{stat.center_attacks}</span>
      <button className="stat-button add-stat" onClick={() => updateStat('team1', '${stat}', 1)}>+</button>
    </div>
  </td>)
}