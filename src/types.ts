import { ReactNode, SVGProps } from "react"

// Objeto para almacenar las estadísticas
export type InitialStats = {
  center_attacks: number | string,
  right_attacks: number | string,
  left_attacks: number | string,
  player_cahanges: number | string,
  crosses: number | string,
  corners: number | string,
  fouls: number | string,
  dangerous_fouls: number | string,
  offsides: number | string,
  chances: number | string,
  goal_chances: number | string,
  goal_cahances_in: number | string,
  merit_stop: number | string,
  goals: number | string
}
export type TTeam = "local" | "guest"
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