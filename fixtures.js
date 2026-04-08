const upcomingFixtures = [
  {
    id: 1,
    home: "Zion Stars FC",
    away: "Saudi City",
    date: "June 12, 2026",
    time: "3:30 PM",
    venue: "Jamasi Rashadiyya Park",
    stage: "Group A",
    status: "Upcoming"
  },
  {
    id: 2,
    home: "ATM of Jamasi",
    away: "Ajaarazama",
    date: "June 13, 2026",
    time: "4:30 PM",
    venue: "Jamasi Rashadyya Park",
    stage: "Group C",
    status: "Upcoming"
  },
  {
    id: 3,
    home: "Domenase Young Boys",
    away: "All Stars",
    date: "June 14, 2026",
    time: "2:00 PM",
    venue: "Jamasi Rashadiyya Park",
    stage: "Group B",
    status: "Upcoming"
  }
];

const completedMatches = [
  {
    id: 101,
    home: "California FC",
    away: "Saudi City",
    homeScore: 2,
    awayScore: 1,
    date: "June 10, 2026",
    time: "9:00 AM",
    venue: "Jamasi Rashadiyya Park",
    stage: "Group A",
    status: "FT",
    scorers: [
      "California FC: Khalid Issah (14')",
      "Saudi City: Baba Tetteh (62')",
      "California FC: Kweku Majeed (75')"
    ],
    ratings: [
      "Khalid Issah — 8.7",
      "Baba Tetteh — 7.9",
      "Habib Yakubu — 7.5",
      "Kweku Majeed — 8.1"
    ],
    stats: {
      possession: "54% - 46%",
      shotsOnTarget: "6 - 4",
      shotsOffTarget: "5 - 3",
      corners: "7 - 2",
      yellowCards: "2 - 1",
      redCards: "0 - 0",
      substitutions: "4 - 3"
    },
    manOfTheMatch: "Khalid Issah",
    note: "Group stage match"
  },
  {
    id: 102,
    home: "Saudi City",
    away: "Ajaarazama FC",
    homeScore: 1,
    awayScore: 1,
    date: "June 9, 2026",
    time: "3:30 PM",
    venue: "Jamasi Main Park",
    stage: "Quarter Final",
    status: "Pens 4-3",
    scorers: [
      "Saudi City: Muntari Aziz (23')",
      "Ajaarazama FC: Suleman Bashir (70')"
    ],
    ratings: [
      "Muntari Aziz — 8.2",
      "Rahim Tanko — 7.8",
      "Suleman Bashir — 8.4",
      "Kojo Yakubu — 7.6"
    ],
    stats: {
      possession: "48% - 52%",
      shotsOnTarget: "5 - 5",
      shotsOffTarget: "4 - 6",
      corners: "3 - 4",
      yellowCards: "1 - 3",
      redCards: "0 - 0",
      substitutions: "5 - 5"
    },
    manOfTheMatch: "Suleman Bashir",
    note: "Draw went straight to penalties (No extra time)"
  },
  {
    id: 103,
    home: "California FC",
    away: "Zion Stars FC",
    homeScore: 0,
    awayScore: 3,
    date: "June 8, 2026",
    time: "4:00 PM",
    venue: "Jamasi Rashadiyya Park",
    stage: "Group A",
    status: "FT",
    scorers: [
      "Zion Stars: Abdul Karim (11')",
      "Zion Stars: Abdul Karim (52')",
      "Zion Stars: Mubarak Fuseini (81')"
    ],
    ratings: [
      "Abdul Karim — 9.1",
      "Mubarak Fuseini — 8.0",
      "Nasiru Adams — 6.8",
      "Ibrahim Kofi — 6.9"
    ],
    stats: {
      possession: "42% - 58%",
      shotsOnTarget: "2 - 8",
      shotsOffTarget: "4 - 6",
      corners: "2 - 7",
      yellowCards: "2 - 1",
      redCards: "0 - 0",
      substitutions: "3 - 4"
    },
    manOfTheMatch: "Abdul Karim",
    note: "Group stage match"
  }
];

const upcomingContainer = document.getElementById("upcomingFixtures");
const completedContainer = document.getElementById("completedMatches");
const matchModal = document.getElementById("matchModal");
const closeModal = document.getElementById("closeModal");
const matchHeader = document.getElementById("matchHeader");
const statsContainer = document.getElementById("statsContainer");
const scorersContainer = document.getElementById("scorersContainer");
const ratingsContainer = document.getElementById("ratingsContainer");
const infoContainer = document.getElementById("infoContainer");

// Render upcoming
function renderUpcomingFixtures() {
  upcomingContainer.innerHTML = "";

  upcomingFixtures.forEach(match => {
    upcomingContainer.innerHTML += `
      <div class="match-card">
        <div class="match-top">
          <div class="stage-badge">${match.stage}</div>
          <div class="status-badge">${match.status}</div>
        </div>

        <div class="match-center">
          <div class="team-box">
            <h3>${match.home}</h3>
            <p>Home</p>
          </div>

          <div class="score-box">
            <h2>VS</h2>
            <p>${match.time}</p>
          </div>

          <div class="team-box">
            <h3>${match.away}</h3>
            <p>Away</p>
          </div>
        </div>

        <div class="match-bottom">
          <p>${match.date} • ${match.venue}</p>
          <button class="details-btn" onclick="showUpcomingDetails(${match.id})">View Details</button>
        </div>
      </div>
    `;
  });
}

// Render completed
function renderCompletedMatches() {
  completedContainer.innerHTML = "";

  completedMatches.forEach(match => {
    completedContainer.innerHTML += `
      <div class="match-card">
        <div class="match-top">
          <div class="stage-badge">${match.stage}</div>
          <div class="status-badge">${match.status}</div>
        </div>

        <div class="match-center">
          <div class="team-box">
            <h3>${match.home}</h3>
            <p>Home</p>
          </div>

          <div class="score-box">
            <h2>${match.homeScore} - ${match.awayScore}</h2>
            <p>Full Time</p>
          </div>

          <div class="team-box">
            <h3>${match.away}</h3>
            <p>Away</p>
          </div>
        </div>

        <div class="match-bottom">
          <p>${match.date} • ${match.venue}</p>
          <button class="details-btn" onclick="openMatch(${match.id})">View Details</button>
        </div>
      </div>
    `;
  });
}

// Upcoming details
function showUpcomingDetails(id) {
  const match = upcomingFixtures.find(m => m.id === id);

  matchHeader.innerHTML = `
    <h2>${match.home} vs ${match.away}</h2>
    <p>${match.stage} • ${match.date} • ${match.time} • ${match.venue}</p>
  `;

  statsContainer.innerHTML = `
    <div class="detail-row"><strong>Status</strong><span>Not yet played</span></div>
    <div class="detail-row"><strong>Kickoff</strong><span>${match.time}</span></div>
    <div class="detail-row"><strong>Venue</strong><span>${match.venue}</span></div>
  `;

  scorersContainer.innerHTML = `
    <div class="detail-row"><strong>Scorers</strong><span>Match not played yet</span></div>
  `;

  ratingsContainer.innerHTML = `
    <div class="detail-row"><strong>Ratings</strong><span>Will appear after match</span></div>
  `;

  infoContainer.innerHTML = `
    <div class="detail-row"><strong>Stage</strong><span>${match.stage}</span></div>
    <div class="detail-row"><strong>Rule</strong><span>Knockout draws go to penalties</span></div>
  `;

  matchModal.classList.add("show");
}

// Completed match details
function openMatch(id) {
  const match = completedMatches.find(m => m.id === id);

  matchHeader.innerHTML = `
    <h2>${match.home} ${match.homeScore} - ${match.awayScore} ${match.away}</h2>
    <p>${match.stage} • ${match.date} • ${match.time} • ${match.venue}</p>
  `;

  statsContainer.innerHTML = `
    <div class="detail-row"><strong>Possession</strong><span>${match.stats.possession}</span></div>
    <div class="detail-row"><strong>Shots on Target</strong><span>${match.stats.shotsOnTarget}</span></div>
    <div class="detail-row"><strong>Shots off Target</strong><span>${match.stats.shotsOffTarget}</span></div>
    <div class="detail-row"><strong>Corner Kicks</strong><span>${match.stats.corners}</span></div>
    <div class="detail-row"><strong>Yellow Cards</strong><span>${match.stats.yellowCards}</span></div>
    <div class="detail-row"><strong>Red Cards</strong><span>${match.stats.redCards}</span></div>
    <div class="detail-row"><strong>Substitutions</strong><span>${match.stats.substitutions}</span></div>
  `;

  scorersContainer.innerHTML = "";
  match.scorers.forEach(item => {
    scorersContainer.innerHTML += `
      <div class="detail-row"><strong>Goal</strong><span>${item}</span></div>
    `;
  });

  ratingsContainer.innerHTML = "";
  match.ratings.forEach(item => {
    ratingsContainer.innerHTML += `
      <div class="detail-row"><strong>Player</strong><span>${item}</span></div>
    `;
  });

  infoContainer.innerHTML = `
    <div class="detail-row"><strong>Man of the Match</strong><span>${match.manOfTheMatch}</span></div>
    <div class="detail-row"><strong>Match Note</strong><span>${match.note}</span></div>
    <div class="detail-row"><strong>Status</strong><span>${match.status}</span></div>
  `;

  matchModal.classList.add("show");
}

// Close modal
closeModal.addEventListener("click", () => {
  matchModal.classList.remove("show");
});

matchModal.addEventListener("click", (e) => {
  if (e.target === matchModal) {
    matchModal.classList.remove("show");
  }
});

renderUpcomingFixtures();
renderCompletedMatches();