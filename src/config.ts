import { InitialStats } from "./types"
const TILE_AP = 'Match day statistics';
const BUSINESS = 'Sports stats';
const EMAIL_BUSINESS = "matchdaystatsmds@gmail.com"
const initialStat = {
  corners: 0,
  offsides: 0,
  rightAttacks: 0,
  leftAttacks: 0,
  centerAttacks: 0,
  crosses: 0,
  fouls: 0,
  dangerousFouls: 0,
  penalties: 0,
  yellowCards: 0,
  redCards: 0,
  throwIns: 0,
  chances: 0,
  goals: 0
}

const statNames = {
  corners: 'Corners',
  offsides: 'Fueras de Juego',
  rightAttacks: 'Ataques por Derecha',
  leftAttacks: 'Ataques por Izquierda',
  centerAttacks: 'Ataques por Centro',
  crosses: 'Balones al Área',
  fouls: 'Faltas',
  dangerousFouls: 'Faltas Peligrosas',
  penalties: 'Penaltis',
  yellowCards: 'Tarjetas Amarillas',
  redCards: 'Tarjetas Rojas',
  throwIns: 'Saques de Banda',
  chances: 'Ocasiones de Gol',
  goals: 'Goles'
} as InitialStats

export {
  TILE_AP,
  BUSINESS,
  EMAIL_BUSINESS,
  statNames,
  initialStat,

}