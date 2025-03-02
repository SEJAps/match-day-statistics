import { ReactNode, SVGProps } from "react"
export interface ILocation { team: TTeam, stat: string }
// Objeto para almacenar las estadísticas
export type InitialStats = {
  goals: number | string,
  center_attacks: number | string,
  right_attacks: number | string,
  left_attacks: number | string,
  crosses: number | string,
  corners: number | string,
  fouls: number | string,
  dangerous_fouls: number | string,
  offsides: number | string,
  goal_cahances_in: number | string,
  merit_stop: number | string,
  shoot_out: number | string,
}
export interface TeamStats {
  goals: number,
  center_attacks: number,
  right_attacks: number,
  left_attacks: number,
  crosses: number,
  corners: number,
  fouls: number,
  dangerous_fouls: number,
  offsides: number,

  goal_cahances_in: number,
  merit_stop: number,
  shoot_out: number,
}
export type TTeam = "all" | "local" | "guest"
export type Props = {
  children: ReactNode
}

export type TStats = {
  local: InitialStats,
  guest: InitialStats,
  localName: string,
  guestName: string
}

export type DataMatch = TStats & {
  user: {
    email: string,
    name: string
  }
}

export type SVGP = {
  props?: SVGProps<SVGSVGElement>
}