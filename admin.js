const stats = [
  { value: 10, label: "Registered Teams" },
  { value: 136, label: "Registered Players" },
  { value: 18, label: "Scheduled Fixtures" },
  { value: 18, label: "Completed Matches" },
  { value: 27, label: "Goals Scored" },
  { value: 11, label: "Yellow Cards" },
  { value: 2, label: "Red Cards" },
  { value: 7, label: "Sponsors / Partners" }
];

const modules = [
  {
    icon: "🏟️",
    title: "Add Team",
    description: "Create and manage registered teams including team logo and team details.",
    link: "admin-add-team.html"
  },
  {
    icon: "🧍",
    title: "Add Player",
    description: "Register tournament players with image, age, position, and captain status.",
    link: "admin-add-player.html"
  },
  {
    icon: "📅",
    title: "Add Fixture",
    description: "Create fixtures, match dates, venues, and competition rounds.",
    link: "admin-add-fixture.html"
  },
  {
    icon: "⚽",
    title: "Match Results",
    description: "Update completed matches with scores, stats, player ratings, and events.",
    link: "admin-results.html"
  },
  {
    icon: "📊",
    title: "Update Standings",
    description: "Manage groups, points table, qualification spots, and knockout setup.",
    link: "admin-standings.html"
  },
  {
    icon: "🤝",
    title: "Add Sponsor",
    description: "Upload sponsor information, logos, and sponsor category sections.",
    link: "admin-sponsors.html"
  },
  {
    icon: "📈",
    title: "Tournament Overview",
    description: "View all tournament analytics including goals, cards, teams, and player stats.",
    link: "admin-overview.html"
  },
  {
    icon: "🗑️",
    title: "Reset Tournament",
    description: "Clear tournament demo data and prepare for a fresh tournament setup.",
    link: "admin-reset.html"
  }
];

const activities = [
  {
    title: "New Team Added",
    description: "Zongo Stars has been added to Group A.",
    time: "2 hours ago"
  },
  {
    title: "Fixture Updated",
    description: "Jamasi Lions vs Unity FC now scheduled for Saturday 4:00 PM.",
    time: "4 hours ago"
  },
  {
    title: "Match Result Submitted",
    description: "Victory Boys 2 - 1 Northern Blazers recorded successfully.",
    time: "Yesterday"
  },
  {
    title: "Player Registered",
    description: "Captain added for Royal Boots with updated player profile.",
    time: "Yesterday"
  },
  {
    title: "Sponsor Added",
    description: "New media partner successfully included on sponsors page.",
    time: "2 days ago"
  }
];

function renderStats() {
  const statsGrid = document.getElementById("statsGrid");
  statsGrid.innerHTML = "";

  stats.forEach(stat => {
    statsGrid.innerHTML += `
      <div class="stat-card">
        <h3>${stat.value}</h3>
        <p>${stat.label}</p>
      </div>
    `;
  });
}

function renderModules() {
  const modulesGrid = document.getElementById("modulesGrid");
  modulesGrid.innerHTML = "";

  modules.forEach(module => {
    modulesGrid.innerHTML += `
      <div class="module-card">
        <div class="module-icon">${module.icon}</div>
        <h3>${module.title}</h3>
        <p>${module.description}</p>
        <a href="${module.link}" class="module-btn">Open Module</a>
      </div>
    `;
  });
}

function renderActivities() {
  const activityList = document.getElementById("activityList");
  activityList.innerHTML = "";

  activities.forEach(activity => {
    activityList.innerHTML += `
      <div class="activity-item">
        <div>
          <h4>${activity.title}</h4>
          <p>${activity.description}</p>
        </div>
        <span class="activity-time">${activity.time}</span>
      </div>
    `;
  });
}

renderStats();
renderModules();
renderActivities();