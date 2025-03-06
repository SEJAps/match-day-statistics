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
            if (payload.team === "local") {
                state.local = [...state.local, payload.data]
            } else {
                state.guest = [...state.guest, payload.data]
            }
        },
        removeMark: (state, action: PayloadAction<{ team: string, time_stamp: number }>) => {
            const { team, time_stamp } = action.payload;
            if (team === "local") {
                state.local = state.local.filter(mark => mark.time_stamp !== time_stamp);
            } else {
                state.guest = state.guest.filter(mark => mark.time_stamp !== time_stamp);
            }
        },
        updateMark: (state, action: PayloadAction<Mark>) => {
            const { team, data } = action.payload;
            if (team === "local") {
                state.local = state.local.map(mark => mark.time_stamp === data.time_stamp ? data : mark);
            } else {
                state.guest = state.guest.map(mark => mark.time_stamp === data.time_stamp ? data : mark);
            }
        },
        // Add the reset action here
        resetMarks: (state) => {
            state.local = [];
            state.guest = [];
        },
        // Add remove last item action here
        removeLastMark: (state, action: PayloadAction<{ team: string }>) => {
            const { team } = action.payload;
            if (team === "local") {
                state.local = state.local.slice(0, state.local.length - 1);
            } else {
                state.guest = state.guest.slice(0, state.guest.length - 1);
            }
        }
    }
});

export const { createMark, removeMark, updateMark, resetMarks, removeLastMark } = markSlice.actions;
export default markSlice.reducer;