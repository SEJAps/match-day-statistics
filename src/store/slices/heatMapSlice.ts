import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeatData { x: number, y: number, value: number }
type Team = string
type InitialState = {
  team: Team,
  heatMarksData: HeatData[]
}
export interface HeatMap {
  team: Team,
  data: HeatData
}
const initialState = {
  team: "",
  heatMarksData: []
} as InitialState

export const heatMapSlice = createSlice({
  name: "heatMapSlice",
  initialState,
  reducers: {
    createHeatMark: (state, action: PayloadAction<HeatMap>) => {
      const { payload } = action
      state.team = payload.team
      state.heatMarksData = [...state.heatMarksData, payload.data]
    },
    removeHeatMark: () => {

    },
    updateHeatMark: () => {

    },
    deleteHetMark: () => { }
  }
})
export const { createHeatMark } = heatMapSlice.actions
export default heatMapSlice.reducer