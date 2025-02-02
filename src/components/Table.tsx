import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { increment, decrement } from "../store/slices/statsSlice";

export const Table: FC = () => {
  const { local, guest, guestName, localName } = useAppSelector(state => state.stats)
  const dispatch = useAppDispatch();
  return (
    <table className="stats-table">
      <thead>
        <tr>
          <th>
            <div className='team__title'>
              <h2>Local</h2>
              <h3>{localName}</h3>
            </div>
          </th>
          <th>Estadística</th>
          <th>
            <div className=''>
              <h2>Visitante</h2>
              <h3>{guestName}</h3>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(local).map((stat) => (
          <tr key={stat}>
            <td>
              <div className="stat-control">
                <button className="stat-button subtract-stat" onClick={() => dispatch(decrement({ team: "local", stat: stat as keyof typeof local, value: -1 }))}>-</button>
                <span className="stat-value">{local[stat as keyof typeof local]}</span>
                <button className="stat-button add-stat" onClick={() => dispatch(increment({ team: "local", stat: stat as keyof typeof local, value: 1 }))}>+</button>
              </div>
            </td>
            <td>{stat}</td>
            <td>
              <div className="stat-control">
                <button className="stat-button subtract-stat" onClick={() => dispatch(decrement({ team: "guest", stat: stat as keyof typeof guest, value: -1 }))}>-</button>
                <span className="stat-value">{guest[stat as keyof typeof guest]}</span>
                <button className="stat-button add-stat" onClick={() => dispatch(increment({ team: "guest", stat: stat as keyof typeof guest, value: 1 }))}>+</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}