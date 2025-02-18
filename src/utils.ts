import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable'
import { TStats } from "./types";
import i18n from "./features/i18n"

const downloadCSV = (stats: TStats) => {
  const { local, guest, localName, guestName } = stats;

  let csvContent = `Estadística,${localName},${guestName}\n`;

  Object.keys(local).forEach((stat) => {
    csvContent += `${i18n.t(stat)},${local[i18n.t(stat) as keyof typeof local]},${guest[i18n.t(stat) as keyof typeof guest]}\n`;
  });

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  link.href = url;
  link.download = `estadisticas_${localName}_vs_${guestName}_${timestamp}.csv`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const downloadPDF = (stats: TStats) => {
  const { local, guest, localName, guestName } = stats;
  const doc = new jsPDF();

  // Título del PDF
  doc.setFontSize(16);
  doc.text(`${i18n.t("stats")}: ${localName} vs ${guestName}`, 14, 20);

  // Preparar datos para la tabla
  const tableData = Object.keys(local).map((stat) => [
    local[stat as keyof typeof local],
    i18n.t(stat),
    guest[stat as keyof typeof guest],
  ]);

  // Crear la tabla
  autoTable(doc, {
    head: [[localName, i18n.t("stats"), guestName]],
    body: tableData,
    theme: "grid",
    headStyles: {
      fillColor: [76, 175, 80],
      textColor: 255,
    },
    styles: {
      halign: "center",
      fontSize: 10,
    },
    margin: { top: 30, bottom: 20 }, // Ajuste de márgenes
  });

  // Pie de página con la fecha y hora
  const timestamp = new Date().toLocaleString();
  doc.setFontSize(10);
  doc.text(`Generado el: ${timestamp}`, 14, doc.internal.pageSize.height - 10);

  // Descargar el archivo PDF
  doc.save(`estadisticas_${localName}_vs_${guestName}.pdf`);
};

// storage
const storage = globalThis.localStorage;
const userLocalStorage = ({ email, name }: { email: string, name: string }) => {
  const dataToJson = JSON.stringify({ email, name });
  storage.setItem("user", dataToJson)
}
const getUserLocalStorage = () => {
  return JSON.parse(storage.getItem("user") as string)
}
const removeUserLocalStorage = () => {
  storage.removeItem("user")
}
type DataMatch = TStats & {
  user: {
    email: string,
    name: string
  }
}
const createStatsByMatchActive = (match: DataMatch) => {
  const dataToJson = JSON.stringify(match);
  storage.setItem("macth_stats", dataToJson)
}
const getStatsByMatchActive = () => {
  return JSON.parse(storage.getItem("macth_stats") as string)
}
const removeStatsByMatchActive = () => {
  storage.removeItem("macth_stats")
}
export {
  storage,
  downloadCSV,
  downloadPDF,
  userLocalStorage,
  getUserLocalStorage,
  removeUserLocalStorage,
  createStatsByMatchActive,
  getStatsByMatchActive,
  removeStatsByMatchActive
}



