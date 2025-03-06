import { FC } from "react";
// import { TTEam } from "../types";

export const Local: FC<{ param: string }> = ({ param }) => {
  // const [count, setCount] = useState<number>(0)

  // const handlerIncrement = useCallback(() => {
  //   setCount(state => state + 1)
  // }, [])
  // const handlerDecrement = useCallback(() => {
  //   if (count <= 0) return
  //   setCount(state => state - 1)
  // }, [count])
  // const updateStat = (team: string, stat: string, num: number) => {
  //   console.log(team, stat, num)
  // }
  return (
    <td>
      <div className="stat-control">
        <button className="stat-button subtract-stat">-</button>
        <span className="stat-value">{param}</span>
        <button className="stat-button add-stat">+</button>
      </div>
    </td>
  );
};
