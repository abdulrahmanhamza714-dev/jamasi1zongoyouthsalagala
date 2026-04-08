// Sample teams (same as admin-add-team.js)
const teams = [
  "Zion Stars FC",
  "ATM Of Jamasi",
  "Ajaarazama FC",
  "Lafila Bumbu",
  "Real kampala United",
  "All Stars",
  "Sabongida FC",
  "Saudi City",
  "Domenase Young Boys",
  "California FC"
  
];

// Players array
let players = [
  {
    name: "Imaadideen Ibrahim",
    image: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/467325898_866374789017497_8033943267902777591_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=689c2a&_nc_eui2=AeHTyqX9mQIp1LXDHndhDe2hYRwLhAhawathHAuECFrBq0OgLAlP6gd3FFLrpJntEmQUSJpR4_T0Fxos1clyvx6l&_nc_ohc=PtWMNOCND7sQ7kNvwGcGrLy&_nc_oc=AdqyCFW9x-P8yJ7J_sOYThRDXnDuldSDqSjlfqppcxNBSyPhDBzXhikA_DmxwG_8UWA&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=jHp_5Vs6vQ3btevrCmDHxQ&_nc_ss=7a3a8&oh=00_Af0xjTU1xKw0MubutO_hJjzkYNauc4sy3z6UrZEQREJwmA&oe=69D9A765",
    age: 18,
    number: 7,
    position: "Forward",
    team: "Zion Stars FC",
    captain: "NO",
    description: "A lightning-fast Attaking LW with excellent finishing skills."
  }

  

];



const playerForm = document.getElementById("playerForm");
const playersGrid = document.getElementById("playersGrid");
const playerTeamSelect = document.getElementById("playerTeam");

// Populate team dropdown
teams.forEach(team => {
  const option = document.createElement("option");
  option.value = team;
  option.textContent = team;
  playerTeamSelect.appendChild(option);
});

// Render players
function renderPlayers() {
  playersGrid.innerHTML = "";

  players.forEach(player => {
    playersGrid.innerHTML += `
      <div class="player-card">
        <img src="${player.image}" alt="${player.name}" class="player-image" />
        <div class="player-content">
          <span class="player-badge">${player.position} • ${player.team}</span>
          <h3>${player.name} ${player.captain === "Yes" ? "👑" : ""}</h3>
          <p><strong>Age:</strong> ${player.age}</p>
          <p><strong>Jersey #:</strong> ${player.number}</p>
          <p>${player.description || "No description provided."}</p>
        </div>
      </div>
    `;
  });
}

// Add player form submit
playerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("playerName").value.trim();
  const image = document.getElementById("playerImage").value.trim();
  const age = parseInt(document.getElementById("playerAge").value);
  const number = parseInt(document.getElementById("playerNumber").value);
  const position = document.getElementById("playerPosition").value;
  const team = document.getElementById("playerTeam").value;
  const captain = document.getElementById("playerCaptain").value;
  const description = document.getElementById("playerDescription").value.trim();

  if (!name || !image || !age || !number || !position || !team) {
    alert("Please fill in all required fields.");
    return;
  }

  const newPlayer = { name, image, age, number, position, team, captain, description };
  players.push(newPlayer);
  renderPlayers();
  playerForm.reset();

  alert(`${name} has been added successfully.`);
});

renderPlayers();