import { ReactNode } from "react"

// Objeto para almacenar las estadísticas
export type InitialStats = {
  corners: number | string,
  offsides: number | string,
  rightAttacks: number | string,
  leftAttacks: number | string,
  centerAttacks: number | string,
  crosses: number | string,
  fouls: number | string,
  dangerousFouls: number | string,
  penalties: number | string,
  yellowCards: number | string,
  redCards: number | string,
  throwIns: number | string,
  chances: number | string,
  goals: number | string
}

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