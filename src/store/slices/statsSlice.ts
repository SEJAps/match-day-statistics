import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStat } from "../../config";
import { createStatsByMatchActive, getStatsByMatchActive, getUserLocalStorage } from "../../utils";

const matchActive = getStatsByMatchActive();
const user = getUserLocalStorage();
interface TeamStats {
  corners: number;
  offsides: number;
  rightAttacks: number;
  leftAttacks: number;
  centerAttacks: number;
  crosses: number;
  fouls: number;
  dangerousFouls: number;
  penalties: number;
  yellowCards: number;
  redCards: number;
  throwIns: number;
  chances: number;
  goals: number;
}

interface StatsState {
  local: TeamStats;
  guest: TeamStats;
  localName: string;
  guestName: string;
  existStats: boolean
}

const initialState: StatsState = {
  local: matchActive && matchActive.local || initialStat,
  guest: matchActive && matchActive.guest || initialStat,
  localName: matchActive && matchActive.localName || "",
  guestName: matchActive && matchActive.guestName || "",
  existStats: !!matchActive
};

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    increment: (state,
      action: PayloadAction<{ team: "local" | "guest"; stat: keyof TeamStats; value: number }>) => {
      state[action.payload.team][action.payload.stat] += 1
    },
    decrement: (state,
      action: PayloadAction<{ team: "local" | "guest"; stat: keyof TeamStats; value: number }>) => {
      if (state[action.payload.team][action.payload.stat] <= 0) {
        state[action.payload.team][action.payload.stat] = 0
      } else {
        state[action.payload.team][action.payload.stat] -= 1
      }
    },
    resetStats: (state) => {
      Object.keys(state.local).forEach((key) => {
        state.local[key as keyof TeamStats] = 0;
        state.guest[key as keyof TeamStats] = 0;
      });
    },
    updateTeamName: (state, action: PayloadAction<{ team: "local" | "guest"; name: string }>) => {
      state[action.payload.team === "local" ? "localName" : "guestName"] = action.payload.name;
    },
    saveStats: (state) => {
      createStatsByMatchActive({
        guest: state.guest,
        local: state.local,
        guestName: state.guestName,
        localName: state.localName,
        user: {
          email: user && user.email,
          name: user && user.name,
        }
      })
    }
  },
});

export const { resetStats, updateTeamName, increment, decrement, saveStats } = statsSlice.actions;
export default statsSlice.reducer;
