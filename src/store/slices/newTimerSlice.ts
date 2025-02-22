import { createSlice } from "@reduxjs/toolkit";

interface TimerState {
    time: number;
    isRunning: boolean;
    period: number; // 1: primer tiempo, 2: descuento primer tiempo, 3: segundo tiempo, 4: descuento segundo tiempo, 5: finalizado
    extraTime: number;
    isExtraTimeRunning: boolean;
  }
  
  const initialState: TimerState = {
    time: 0,
    isRunning: false,
    period: 1,
    extraTime: 0,
    isExtraTimeRunning: false,
  };
  
  const newTimerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
      startPauseResume: (state) => {
        if (state.period < 5) {
          state.isRunning = !state.isRunning;
        }
      },
      incrementTime: (state) => {
        if (state.isRunning) {
          state.time += 1;
        }
      },
      startExtraTime: (state) => {
        state.isExtraTimeRunning = true;
      },
      incrementExtraTime: (state) => {
        if (state.isExtraTimeRunning) {
          state.extraTime += 1;
        }
      },
      nextPeriod: (state) => {
        if (state.period === 1 && state.time >= 45 * 60) {
          state.isRunning = false;
          state.period = 2;
        } else if (state.period === 2) {
          state.isExtraTimeRunning = false;
          state.period = 3;
          state.time = 0;
          state.extraTime = 0;
        } else if (state.period === 3 && state.time >= 45 * 60) {
          state.isRunning = false;
          state.period = 4;
        } else if (state.period === 4) {
          state.isExtraTimeRunning = false;
          state.period = 5;
          localStorage.setItem("matchTime", JSON.stringify(state.time + state.extraTime));
        }
      },
      reset: (state) => {
        state.time = 0;
        state.extraTime = 0;
        state.isRunning = false;
        state.isExtraTimeRunning = false;
        state.period = 1;
      },
    },
  });
  
  export const { startPauseResume, incrementTime, startExtraTime, incrementExtraTime, nextPeriod, reset } = newTimerSlice.actions;
export default newTimerSlice.reducer;