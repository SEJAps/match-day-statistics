// Objeto para almacenar las estadísticas
let stats = {
  team1: {
    corners: 0,
    offsides: 0,
    rightAttacks: 0,
    leftAttacks: 0,
    centerAttacks: 0,
    crosses: 0,
    fouls: 0,
    dangerousFouls: 0,
    penalties: 0,
    yellowCards: 0,
    redCards: 0,
    throwIns: 0,
    chances: 0,
    goals: 0
  },
  team2: {
    corners: 0,
    offsides: 0,
    rightAttacks: 0,
    leftAttacks: 0,
    centerAttacks: 0,
    crosses: 0,
    fouls: 0,
    dangerousFouls: 0,
    penalties: 0,
    yellowCards: 0,
    redCards: 0,
    throwIns: 0,
    chances: 0,
    goals: 0
  }
};



// Add new objects for storing half statistics
let firstHalfStats = JSON.parse(JSON.stringify(stats));
let secondHalfStats = JSON.parse(JSON.stringify(stats));
let currentHalf = null;

// Timer variables
let firstHalfStartTime = 0;
let secondHalfStartTime = 0;
let firstHalfExtraTimeStart = null;
let secondHalfExtraTimeStart = null;
let firstHalfTimerInterval = null;
let secondHalfTimerInterval = null;

// Add variables to store final times
let firstHalfFinalTime = null;
let firstHalfFinalExtraTime = null;
let secondHalfFinalTime = null;
let secondHalfFinalExtraTime = null;

// Sound effect
const endHalfSound = document.getElementById('endHalfSound');

// Objeto para almacenar las ubicaciones de las estadísticas
let statLocations = {
  team1: {},
  team2: {}
};

let currentStatAction = null;

function startHalf(half) {
  // Reset final times when starting new half
  if (half === 'First') {
    firstHalfFinalTime = null;
    firstHalfFinalExtraTime = null;
  } else {
    secondHalfFinalTime = null;
    secondHalfFinalExtraTime = null;
  }

  currentHalf = half;
  stats = JSON.parse(JSON.stringify({
    team1: {
      corners: 0,
      offsides: 0,
      rightAttacks: 0,
      leftAttacks: 0,
      centerAttacks: 0,
      crosses: 0,
      fouls: 0,
      dangerousFouls: 0,
      penalties: 0,
      yellowCards: 0,
      redCards: 0,
      throwIns: 0,
      chances: 0,
      goals: 0
    },
    team2: {
      corners: 0,
      offsides: 0,
      rightAttacks: 0,
      leftAttacks: 0,
      centerAttacks: 0,
      crosses: 0,
      fouls: 0,
      dangerousFouls: 0,
      penalties: 0,
      yellowCards: 0,
      redCards: 0,
      throwIns: 0,
      chances: 0,
      goals: 0
    }
  }));
  statLocations = { team1: {}, team2: {} };
  document.getElementById('markers').innerHTML = '';

  if (half === 'First') {
    firstHalfStartTime = Date.now();
    firstHalfExtraTimeStart = null;
    if (firstHalfTimerInterval) clearInterval(firstHalfTimerInterval);
    firstHalfTimerInterval = setInterval(() => updateTimer('First'), 1000);
  } else {
    secondHalfStartTime = Date.now();
    secondHalfExtraTimeStart = null;
    if (secondHalfTimerInterval) clearInterval(secondHalfTimerInterval);
    secondHalfTimerInterval = setInterval(() => updateTimer('Second'), 1000);
  }

  // Update button states
  document.getElementById('startFirstHalf').disabled = true;
  document.getElementById('startSecondHalf').disabled = true;
  document.getElementById(`end${half}Half`).disabled = false;

  updateDisplay();
}

function endHalf(half) {
  if (half === 'First') {
    firstHalfStats = JSON.parse(JSON.stringify(stats));
    document.getElementById('startSecondHalf').disabled = false;
    clearInterval(firstHalfTimerInterval);
    firstHalfTimerInterval = null;

    // Store final times for first half
    const elapsed = Date.now() - firstHalfStartTime;
    firstHalfFinalTime = {
      minutes: Math.min(45, Math.floor(elapsed / 60000)),
      seconds: Math.floor((elapsed % 60000) / 1000)
    };

    if (firstHalfExtraTimeStart) {
      const extraElapsed = Date.now() - firstHalfExtraTimeStart;
      firstHalfFinalExtraTime = {
        minutes: Math.floor(extraElapsed / 60000),
        seconds: Math.floor((extraElapsed % 60000) / 1000)
      };
    }
  } else {
    secondHalfStats = JSON.parse(JSON.stringify(stats));
    clearInterval(secondHalfTimerInterval);
    secondHalfTimerInterval = null;

    // Store final times for second half
    const elapsed = Date.now() - secondHalfStartTime;
    secondHalfFinalTime = {
      minutes: Math.min(45, Math.floor(elapsed / 60000)),
      seconds: Math.floor((elapsed % 60000) / 1000)
    };

    if (secondHalfExtraTimeStart) {
      const extraElapsed = Date.now() - secondHalfExtraTimeStart;
      secondHalfFinalExtraTime = {
        minutes: Math.floor(extraElapsed / 60000),
        seconds: Math.floor((extraElapsed % 60000) / 1000)
      };
    }
  }

  document.getElementById(`end${half}Half`).disabled = true;
  endHalfSound.play();
  currentHalf = null;

  if (half === 'First') {
    firstHalfStartTime = null;
    firstHalfExtraTimeStart = null;
  } else {
    secondHalfStartTime = null;
    secondHalfExtraTimeStart = null;
  }

  updateTimer(half);
}

function updateTimer(half) {
  const startTime = half === 'First' ? firstHalfStartTime : secondHalfStartTime;
  const extraTimeStart = half === 'First' ? firstHalfExtraTimeStart : secondHalfExtraTimeStart;
  const mainTimeDisplay = document.getElementById(`${half.toLowerCase()}HalfMainTime`);
  const extraTimeDisplay = document.getElementById(`${half.toLowerCase()}HalfExtraTime`);

  // If the half is finished, show final times
  if (half === 'First' && firstHalfFinalTime) {
    mainTimeDisplay.textContent = `${String(firstHalfFinalTime.minutes).padStart(2, '0')}:${String(firstHalfFinalTime.seconds).padStart(2, '0')}`;
    mainTimeDisplay.classList.remove('inactive-time');

    if (firstHalfFinalExtraTime) {
      extraTimeDisplay.textContent = `+${String(firstHalfFinalExtraTime.minutes).padStart(2, '0')}:${String(firstHalfFinalExtraTime.seconds).padStart(2, '0')}`;
      extraTimeDisplay.classList.remove('inactive-time');
    }
    return;
  }

  if (half === 'Second' && secondHalfFinalTime) {
    mainTimeDisplay.textContent = `${String(secondHalfFinalTime.minutes).padStart(2, '0')}:${String(secondHalfFinalTime.seconds).padStart(2, '0')}`;
    mainTimeDisplay.classList.remove('inactive-time');

    if (secondHalfFinalExtraTime) {
      extraTimeDisplay.textContent = `+${String(secondHalfFinalExtraTime.minutes).padStart(2, '0')}:${String(secondHalfFinalExtraTime.seconds).padStart(2, '0')}`;
      extraTimeDisplay.classList.remove('inactive-time');
    }
    return;
  }

  // If no start time, show zeros
  if (!startTime) {
    mainTimeDisplay.textContent = '00:00';
    mainTimeDisplay.classList.add('inactive-time');
    extraTimeDisplay.textContent = '+00:00';
    extraTimeDisplay.classList.add('inactive-time');
    return;
  }

  // Regular timer update logic continues...
  mainTimeDisplay.classList.remove('inactive-time');
  extraTimeDisplay.classList.remove('inactive-time');

  const elapsed = Date.now() - startTime;
  const minutes = Math.floor(elapsed / 60000);
  const seconds = Math.floor((elapsed % 60000) / 1000);

  if (minutes >= 45 && !extraTimeStart) {
    if (half === 'First') {
      firstHalfExtraTimeStart = Date.now();
    } else {
      secondHalfExtraTimeStart = Date.now();
    }
    endHalfSound.play();
  }

  mainTimeDisplay.textContent = `${String(Math.min(45, minutes)).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  if (extraTimeStart) {
    const extraElapsed = Date.now() - extraTimeStart;
    const extraMinutes = Math.floor(extraElapsed / 60000);
    const extraSeconds = Math.floor((extraElapsed % 60000) / 1000);
    extraTimeDisplay.textContent = `+${String(extraMinutes).padStart(2, '0')}:${String(extraSeconds).padStart(2, '0')}`;
  } else {
    extraTimeDisplay.textContent = '+00:00';
    extraTimeDisplay.classList.add('inactive-time');
  }
}

function showLocationModal(team, stat) {
  currentStatAction = { team, stat };
  const modal = document.getElementById('locationModal');
  modal.style.display = 'block';

  // Update field image title to show current stat
  const modalTitle = document.getElementById('modalTitle');
  modalTitle.textContent = `${statNames[stat]} - ${team === 'team1' ? 'Equipo Local' : 'Equipo Visitante'}`;

  // Show only markers for current stat
  updateMarkersVisibility(team, stat);

  const fieldImage = document.getElementById('fieldImage');
  fieldImage.onclick = handleFieldClick;
}

function updateMarkersVisibility(currentTeam, currentStat) {
  const allMarkers = document.querySelectorAll('.stat-marker');
  allMarkers.forEach(marker => {
    if (marker.dataset.stat === currentStat) {
      marker.style.display = 'flex';
    } else {
      marker.style.display = 'none';
    }
  });
}

function handleFieldClick(event) {
  const fieldImage = document.getElementById('fieldImage');
  const rect = fieldImage.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;

  if (currentStatAction) {
    const { team, stat } = currentStatAction;

    if (!statLocations[team][stat]) {
      statLocations[team][stat] = [];
    }

    statLocations[team][stat].push({ x, y });
    stats[team][stat]++;

    updateDisplay();
    addMarker(x, y, team, stat, stats[team][stat]);

    document.getElementById('locationModal').style.display = 'none';
    currentStatAction = null;
    fieldImage.onclick = null;
  }
}

function addMarker(x, y, team, stat, count) {
  const markers = document.getElementById('markers');
  const marker = document.createElement('div');
  marker.className = `stat-marker ${team}-marker`;
  marker.dataset.team = team;
  marker.dataset.stat = stat;
  marker.style.left = `${x}%`;
  marker.style.top = `${y}%`;
  marker.textContent = count;
  markers.appendChild(marker);
}

function cancelLocation() {
  const modal = document.getElementById('locationModal');
  modal.style.display = 'none';
  currentStatAction = null;
  document.getElementById('fieldImage').onclick = null;
}

function resetStats() {
  for (const team in stats) {
    for (const stat in stats[team]) {
      stats[team][stat] = 0;
    }
  }
  // Clear stat locations
  statLocations = {
    team1: {},
    team2: {}
  };
  // Clear markers
  document.getElementById('markers').innerHTML = '';
  updateDisplay();
}

// Restore all markers when updating display
function restoreMarkers() {
  const markers = document.getElementById('markers');
  markers.innerHTML = '';

  for (const team in statLocations) {
    for (const stat in statLocations[team]) {
      statLocations[team][stat].forEach((location, index) => {
        addMarker(location.x, location.y, team, stat, index + 1);
      });
    }
  }

  // If modal is open, show only current stat markers
  if (currentStatAction) {
    updateMarkersVisibility(currentStatAction.team, currentStatAction.stat);
  }
}

// Función para actualizar la visualización de las estadísticas
function updateDisplay() {
  const statsTable = document.getElementById('statsTable');
  let html = '<table class="stats-table">';

  // Encabezado
  const team1Name = document.getElementById('team1').value || 'Equipo Local';
  const team2Name = document.getElementById('team2').value || 'Equipo Visitante';

  html += `<tr><th>${team1Name}</th><th>Estadística</th><th>${team2Name}</th></tr>`;

  // Filas de estadísticas
  for (const stat in stats.team1) {
    html += `<tr>
      <td>
        <div class="stat-control">
          <button class="stat-button subtract-stat" onclick="updateStat('team1', '${stat}', -1)">-</button>
          <span class="stat-value">${stats.team1[stat]}</span>
          <button class="stat-button add-stat" onclick="updateStat('team1', '${stat}', 1)">+</button>
        </div>
      </td>
      <td>${statNames[stat]}</td>
      <td>
        <div class="stat-control">
          <button class="stat-button subtract-stat" onclick="updateStat('team2', '${stat}', -1)">-</button>
          <span class="stat-value">${stats.team2[stat]}</span>
          <button class="stat-button add-stat" onclick="updateStat('team2', '${stat}', 1)">+</button>
        </div>
      </td>
    </tr>`;
  }

  html += '</table>';
  statsTable.innerHTML = html;
  restoreMarkers();
}

function updateStat(team, stat, value) {
  if (value > 0) {
    showLocationModal(team, stat);
  } else {
    const newValue = stats[team][stat] + value;
    if (newValue >= 0) {
      stats[team][stat] = newValue;
      // Remove last location if exists
      if (statLocations[team][stat] && statLocations[team][stat].length > 0) {
        statLocations[team][stat].pop();
      }
      updateDisplay();
    }
  }
}

// Función para descargar las estadísticas en formato CSV
function downloadStats(period = 'total') {
  const team1Name = document.getElementById('team1').value || 'Equipo Local';
  const team2Name = document.getElementById('team2').value || 'Equipo Visitante';

  let statsToUse;
  let periodName;

  switch (period) {
    case 'first':
      statsToUse = firstHalfStats;
      periodName = '1ra_Parte';
      break;
    case 'second':
      statsToUse = secondHalfStats;
      periodName = '2da_Parte';
      break;
    case 'total':
      statsToUse = combineTotalStats();
      periodName = 'Total';
      break;
  }

  let csv = `Estadística,${team1Name},${team2Name}\n`;

  for (const stat in statsToUse.team1) {
    csv += `${statNames[stat]},${statsToUse.team1[stat]},${statsToUse.team2[stat]}\n`;
  }

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  link.href = URL.createObjectURL(blob);
  link.download = `estadisticas_${periodName}_${team1Name}_vs_${team2Name}_${timestamp}.csv`;

  link.click();
  URL.revokeObjectURL(link.href);
}

function combineTotalStats() {
  const totalStats = JSON.parse(JSON.stringify(stats));

  for (const team in totalStats) {
    for (const stat in totalStats[team]) {
      totalStats[team][stat] = firstHalfStats[team][stat] + secondHalfStats[team][stat];
    }
  }

  return totalStats;
}

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const team1Name = document.getElementById('team1').value || 'Equipo Local';
  const team2Name = document.getElementById('team2').value || 'Equipo Visitante';

  // Título
  doc.setFontSize(16);
  doc.text(`Estadísticas: ${team1Name} vs ${team2Name}`, 14, 20);

  // Preparar datos para la tabla
  const tableData = [];
  for (const stat in stats.team1) {
    tableData.push([
      stats.team1[stat],
      statNames[stat],
      stats.team2[stat]
    ]);
  }

  // Crear tabla
  doc.autoTable({
    startY: 30,
    head: [[team1Name, 'Estadística', team2Name]],
    body: tableData,
    theme: 'grid',
    headStyles: {
      fillColor: [76, 175, 80],
      textColor: 255
    },
    styles: {
      halign: 'center',
      fontSize: 10
    },
    margin: { top: 30 }
  });

  // Pie de página con fecha
  const timestamp = new Date().toLocaleString();
  doc.setFontSize(10);
  doc.text(`Generado el: ${timestamp}`, 14, doc.internal.pageSize.height - 10);

  // Descargar PDF
  doc.save(`estadisticas_${team1Name}_vs_${team2Name}.pdf`);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('startFirstHalf').addEventListener('click', () => startHalf('First'));
  document.getElementById('endFirstHalf').addEventListener('click', () => endHalf('First'));
  document.getElementById('startSecondHalf').addEventListener('click', () => startHalf('Second'));
  document.getElementById('endSecondHalf').addEventListener('click', () => endHalf('Second'));

  // Initialize both timers
  updateTimer('First');
  updateTimer('Second');

  // Set up regular updates for both timers
  setInterval(() => {
    updateTimer('First');
    updateTimer('Second');
  }, 1000);
});

// Inicializar la visualización
updateDisplay();