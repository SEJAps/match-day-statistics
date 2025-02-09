import { InitialStats } from "./types"
const ROOT = `root`;
const TILE_AP = 'Match day stats';
const BUSINESS = 'Sports stats';
const EMAIL_BUSINESS = "matchdaystatsmds@gmail.com"


const initialStat = {
  goals: 0,
  center_attacks: 0,
  right_attacks: 0,
  left_attacks: 0,
  crosses: 0,
  corners: 0,
  fouls: 0,
  dangerous_fouls: 0,
  offsides: 0,
  chances: 0,
  goal_cahances_in: 0,
  merit_stop: 0,
  shoot_out: 0

} as InitialStats


const statNames = {
  goals: 'Goles',
  center_attacks: 'Ataques por Centro',
  right_attacks: 'Ataques por Derecha',
  left_attacks: 'Ataques por Izquierda',
  crosses: 'Balones al Área',
  corners: 'Corners',
  fouls: 'Faltas',
  dangerous_fouls: 'Faltas Peligrosas',
  offsides: 'Fueras de Juego',
  chances: 'Ocasión',
  goal_cahances_in: 'Ocasiones de Gol 3 palos',
  merit_stop: 'Parada de merito',
  shoot_out: 'Tiros fuera'

} as InitialStats

export {
  TILE_AP,
  BUSINESS,
  EMAIL_BUSINESS,
  statNames,
  initialStat,
  ROOT
}