import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTeam } from "../../types";
export interface MarkData {
    team: TTeam | undefined,
    x: number, y: number,
    intensity: number,
    normalizedX?: number;
    normalizedY?: number;
    time_stamp: number,
    stat: string
}

type InitialState = {
    local: MarkData[],
    guest: MarkData[]
}
export interface Mark {
    team: string,
    data: MarkData
}
const initialState = {
    local: [],
    guest: []
} as InitialState

const markSlice = createSlice({
    name: "markSlice",
    initialState,
    reducers: {
        createMark: (state, action: PayloadAction<Mark>) => {
            const { payload } = action
            console.log(payload.team)
            if (payload.team === "local") {
                state.local = [...state.local, payload.data]
            } else {
                state.guest = [...state.guest, payload.data]
            }
        },
        // removeMark: () => { },
        // updateMark: () => { },
        // deleteMark: () => { }
    }
});

export const { createMark } = markSlice.actions;
export default markSlice.reducer;