import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStat } from "../../config";
import { createStatsByMatchActive, getStatsByMatchActive, getUserLocalStorage } from "../../utils";
import { TeamStats, TTeam } from "../../types";

const matchActive = getStatsByMatchActive();
const user = getUserLocalStorage();


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
      action: PayloadAction<{ team: TTeam; stat: keyof TeamStats; value: number }>) => {
      const team = action.payload.team === "local" ? state.local : state.guest;
      team[action.payload.stat] += 1;
    },
    decrement: (state,
      action: PayloadAction<{ team: TTeam; stat: keyof TeamStats; value: number }>) => {
      const team = action.payload.team === "local" ? state.local : state.guest;
      if (team[action.payload.stat] <= 0) {
        team[action.payload.stat] = 0;
      } else {
        team[action.payload.stat] -= 1;
      }
    },
    resetStats: (state) => {
      Object.keys(state.local).forEach((key) => {
        state.local[key as keyof TeamStats] = 0;
        state.guest[key as keyof TeamStats] = 0;
      });
    },
    updateTeamName: (state, action: PayloadAction<{ team: TTeam; name: string }>) => {
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
