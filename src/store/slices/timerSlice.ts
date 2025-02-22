import { createSlice } from "@reduxjs/toolkit";

interface IntInitialMatchStat{
    time: number,
    extraTime: number,
    half: "first" | "second" | "finished" | null,
    isRunning: boolean,
    firstHalfTime: number,
    firstHalfExtra: number,
    secondHalfTime: number,
    secondHalfExtra: number,
  }
// Estado inicial del partido
const initialState = {
    time: 0,
    extraTime: 0,
    half: 'first',
    isRunning: false,
    firstHalfTime: 0,
    firstHalfExtra: 0,
    secondHalfTime: 0,
    secondHalfExtra: 0
  } as IntInitialMatchStat

  const timerSlice = createSlice({
    name: 'timerSlice',
    initialState: initialState,
    reducers: {
       startFirstHalf: (state) => {
            return { ...state, half: "first", isRunning: true };
        },
        endFirstHalf: (state) => {
            return {
              ...state,
              isRunning: false,
              half: "second",
              firstHalfTime: state.time,
              firstHalfExtra: state.extraTime,
              time: 0,
              extraTime: 0,
            };
        },
        startSecondHalf: (state) => {
            return { ...state, isRunning: true };
        },
        endSecondHalf: (state) => {
            return {
              ...state,
              isRunning: false,
              half: "finished",
              secondHalfTime: state.time,
              secondHalfExtra: state.extraTime,
            };
        },
        tick: (state) => {
            if (!state.isRunning) return state;
            if (state.time < 2700) {
              return { ...state, time: state.time + 1 };
            }
            return { ...state, extraTime: state.extraTime + 1 };
        },
        pause: (state) => {
            return { ...state, isRunning: !state.isRunning };
        },
        reset: () => {
            return initialState;
        }
    }
  })
  export const { startFirstHalf,pause, endFirstHalf, startSecondHalf, endSecondHalf, tick, reset } = timerSlice.actions
  export default timerSlice.reducer