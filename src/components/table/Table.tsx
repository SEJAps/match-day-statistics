import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { increment, decrement } from "../../store/slices/statsSlice";
import tableCSS from './table.module.css'

export const Table: FC = () => {
  const { local, guest, guestName, localName } = useAppSelector(state => state.stats)
  const dispatch = useAppDispatch();
  return (
    <table className={tableCSS.table}>
      <thead className={tableCSS.thead}>
        <tr className={tableCSS.tr}>
          <th className={tableCSS.th}>
            <div className={tableCSS.team__title}>
              <h2 className={tableCSS.title}>Local</h2>
              <h3 className={tableCSS.nameTeam}>{localName}</h3>
            </div>
          </th>
          <th>Estadística</th>
          <th>
            <div className={tableCSS.team__title}>
              <h2 className={tableCSS.title}>Visitante</h2>
              <h3 className={tableCSS.nameTeam}>{guestName}</h3>
            </div>
          </th>
        </tr>
      </thead>
      <tbody className={tableCSS.tbody}>
        {Object.keys(local).map((stat) => (
          <tr className={tableCSS.tr} key={stat}>
            <td className={tableCSS.td}>
              <div className={tableCSS.stat_control}>
                <button className={`${tableCSS.stat_button} ${tableCSS.subtract_stat}`} onClick={() => dispatch(decrement({ team: "local", stat: stat as keyof typeof local, value: -1 }))}>-</button>
                <span className={tableCSS.stat_value}>{local[stat as keyof typeof local]}</span>
                <button className={`${tableCSS.stat_button} ${tableCSS.add_stat}`} onClick={() => dispatch(increment({ team: "local", stat: stat as keyof typeof local, value: 1 }))}>+</button>
              </div>
            </td>
            <td className={tableCSS.td}>{stat}</td>
            <td className={tableCSS.td}>
              <div className={tableCSS.stat_control}>
                <button className={`${tableCSS.stat_button} ${tableCSS.subtract_stat}`} onClick={() => dispatch(decrement({ team: "guest", stat: stat as keyof typeof guest, value: -1 }))}>-</button>
                <span className={tableCSS.stat_value}>{guest[stat as keyof typeof guest]}</span>
                <button className={`${tableCSS.stat_button} ${tableCSS.add_stat}`} onClick={() => dispatch(increment({ team: "guest", stat: stat as keyof typeof guest, value: 1 }))}>+</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
// "stat-button subtract-stat"