import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IntInitialMatchStat {
  time: number;
  extraTime: number;
  half: "first" | "second" | "finished" | null;
  isRunning: boolean;
  firstHalfTime: number;
  firstHalfExtra: number;
  secondHalfTime: number;
  secondHalfExtra: number;
  isExtraTimeActive: boolean;
}

const initialState: IntInitialMatchStat = {
  time: 0,
  extraTime: 0,
  half: null, // Estado inicial sin mitad activa
  isRunning: false,
  firstHalfTime: 0,
  firstHalfExtra: 0,
  secondHalfTime: 0,
  secondHalfExtra: 0,
  isExtraTimeActive: false,
};

const timerSlice = createSlice({
  name: 'timerSlice',
  initialState,
  reducers: {
    startFirstHalf: (state) => {
      state.half = "first";
      state.isRunning = true;
      state.isExtraTimeActive = false;
      state.time = 0;
      state.extraTime = 0;
    },
    endFirstHalf: (state) => {
      state.isRunning = false;
      state.half = "second";
      state.firstHalfTime = state.time;
      state.firstHalfExtra = state.extraTime;
      state.time = 0;
      state.extraTime = 0;
      state.isExtraTimeActive = false;
    },
    startSecondHalf: (state) => {
      state.isRunning = true;
      state.isExtraTimeActive = false;
      state.time = 0;
      state.extraTime = 0;
    },
    endSecondHalf: (state) => {
      state.isRunning = false;
      state.half = "finished";
      state.secondHalfTime = state.time;
      state.secondHalfExtra = state.extraTime;
      state.isExtraTimeActive = false;
    },
    tick: (state) => {
      if (!state.isRunning) return;
      if (state.time < 2700) {
        state.time++;
        if (state.time === 2700) {
          state.isExtraTimeActive = true;
        }
      } else {
        state.extraTime++;
      }
    },
    pause: (state) => {
      state.isRunning = !state.isRunning;
    },
    reset: () => initialState,
    setExtraTime: (state, action: PayloadAction<number>) => {
      state.extraTime = action.payload;
      // Desactivar la entrada manual al confirmar
      state.isExtraTimeActive = false;
    },
  },
});

export const { startFirstHalf, pause, endFirstHalf, startSecondHalf, endSecondHalf, tick, reset, setExtraTime } = timerSlice.actions;
export default timerSlice.reducer;
