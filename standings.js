const groupA = [
  { team: "Zion Stars FC", p: 2, w: 2, d: 0, l: 0, gf: 5, ga: 1, gd: 4, pts: 6, status: "qualify" },
  { team: "Saudi City", p: 2, w: 1, d: 0, l: 1, gf: 3, ga: 2, gd: 1, pts: 3, status: "qualify" },
  { team: "California FC", p: 2, w: 0, d: 0, l: 2, gf: 1, ga: 6, gd: -5, pts: 0, status: "watch" }
];

const groupB = [
  { team: "Domenase Young Boys", p: 2, w: 1, d: 1, l: 0, gf: 3, ga: 2, gd: 1, pts: 4, status: "qualify" },
  { team: "All Stars", p: 2, w: 1, d: 1, l: 0, gf: 2, ga: 1, gd: 1, pts: 4, status: "qualify" },
  { team: "Sabongida", p: 2, w: 0, d: 0, l: 2, gf: 1, ga: 3, gd: -2, pts: 0, status: "watch" }
];

const groupC = [
  { team: "Lafila Bumbu", p: 3, w: 2, d: 1, l: 0, gf: 6, ga: 2, gd: 4, pts: 7, status: "qualify" },
  { team: "Ajaarazama Fc", p: 3, w: 2, d: 0, l: 1, gf: 5, ga: 3, gd: 2, pts: 6, status: "qualify" },
  { team: "Real Kampala Utd", p: 3, w: 1, d: 0, l: 2, gf: 3, ga: 4, gd: -1, pts: 3, status: "qualify" },
  { team: "ATM Of Jamasi", p: 3, w: 0, d: 1, l: 2, gf: 2, ga: 7, gd: -5, pts: 1, status: "watch" }
];

const bestLoserCandidates = [
  { team: "Carlifonia FC", group: "A", pts: 0, gd: -5 },
  { team: "Sabongida", group: "B", pts: 0, gd: -2 }
];

const quarterFinals = [
  "Zion Stars FC vs Domenase Young Boys",
  "Saudi City vs Lafila Bumbu",
  "Ajaarazama Fc vs All Stars",
  "Sabongida vs Real Kampala United"
];

const semiFinals = [
  "Zion Stars FC vs Ajaarazama FC",
  "Real Kampala United vs Saudi City"
];

const finalMatch = [
  "Zion Stars FC vs Saudi City"
];

function renderTable(containerId, data) {
  const container = document.getElementById(containerId);

  let html = `
    <table class="standings-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Team</th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GF</th>
          <th>GA</th>
          <th>GD</th>
          <th>PTS</th>
        </tr>
      </thead>
      <tbody>
  `;

  data.forEach((team, index) => {
    html += `
      <tr class="${team.status}">
        <td>${index + 1}</td>
        <td>${team.team}</td>
        <td>${team.p}</td>
        <td>${team.w}</td>
        <td>${team.d}</td>
        <td>${team.l}</td>
        <td>${team.gf}</td>
        <td>${team.ga}</td>
        <td>${team.gd}</td>
        <td><strong>${team.pts}</strong></td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  container.innerHTML = html;
}

function renderBestLoser() {
  const container = document.getElementById("bestLoserCard");
  container.innerHTML = "";

  bestLoserCandidates.forEach(team => {
    container.innerHTML += `
      <div class="best-loser-row">
        <strong>${team.team} (Group ${team.group})</strong>
        <span>${team.pts} PTS | GD ${team.gd}</span>
      </div>
    `;
  });

  container.innerHTML += `
    <div class="best-loser-row">
      <strong>Current Best Loser</strong>
      <span>Sabongida</span>
    </div>
  `;
}

function renderBracket(containerId, matches) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  matches.forEach((match, index) => {
    container.innerHTML += `
      <div class="bracket-match">
        <p><strong>${match}</strong></p>
        <span>Match ${index + 1}</span>
      </div>
    `;
  });
}

renderTable("groupA", groupA);
renderTable("groupB", groupB);
renderTable("groupC", groupC);
renderBestLoser();
renderBracket("quarterFinals", quarterFinals);
renderBracket("semiFinals", semiFinals);
renderBracket("finalMatch", finalMatch);