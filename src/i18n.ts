import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { InitialStats } from "./types";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      goals: 'Goals',
      center_attacks: 'Attacks by Center',
      right_attacks: 'Attacks from the Right',
      left_attacks: 'Attacks from the Left',
      player_cahanges: 'Player change',
      crosses: 'Balls into the Area',
      corners: 'Corners',
      fouls: 'Fouls',
      dangerous_fouls: 'Dangerous Fouls',
      offsides: 'Out of Play',
      chances: 'Chance',
      goal_chances: 'Goal Chances',
      goal_cahances_in: 'Goal occasions 3 sticks',
      merit_stop: 'Merit stop',

    } as InitialStats
  },
  fr: {
    translation: {
      goals: 'Objectifs',
      center_attacks: 'Attaques par centre',
      right_attacks: 'Attaques de la droite',
      left_attacks: 'Ataques por Izquierda',
      player_cahanges: 'Changement de joueur',
      crosses: 'Balles dans la zone',
      corners: 'Coins',
      fouls: 'Fautes',
      dangerous_fouls: 'Fautes dangereuses',
      offsides: 'Hors jeu',
      chances: 'Chance',
      goal_chances: 'Chances de but',
      goal_cahances_in: 'Occasions de but 3 bâtons',
      merit_stop: 'Arrêt au mérite',
    } as InitialStats
  },
  es: {
    translation: {
      goals: 'Goles',
      center_attacks: 'Ataques por Centro',
      right_attacks: 'Ataques por Derecha',
      left_attacks: 'Ataques por Izquierda',
      player_cahanges: 'Cambio de jugador',
      crosses: 'Balones al Área',
      corners: 'Corners',
      fouls: 'Faltas',
      dangerous_fouls: 'Faltas Peligrosas',
      offsides: 'Fueras de Juego',
      chances: 'Ocasión',
      goal_chances: 'Ocasiones de Gol',
      goal_cahances_in: 'Ocasiones de Gol 3 palos',
      merit_stop: 'Parada de merito',
    } as InitialStats
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;