const teamForm = document.getElementById("teamForm");
const teamsGrid = document.getElementById("teamsGrid");

let teams = [
  {
    name: "Zion Stars FC",
    logo: "https://res.cloudinary.com/da83jfgyb/image/upload/q_auto/f_auto/v1775196342/Zion_Star_team_crest_ashqys.jpg",
    group: "A",
    coach: "Coach JT",
    description: "A disciplined and energetic squad known for fast attacking football."
  },
  {
    name: "ATM of Jamasi",
    logo: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/466965568_866375255684117_4638645980266441554_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeGqEJRJO5OXbYMza1IDGhug-6I9LMf3drr7oj0sx_d2umucw9RvafrFPi2HjXPZveiNxDKBvxfXp0tgfs0-pMuS&_nc_ohc=VL0FRKsmAfkQ7kNvwFCCCjZ&_nc_oc=AdrstES9Mr7kl42bcz3AgPejHdZhDTKKty5xZqrltHpx6mZr4eKqqm48bdxuuyZ-juE&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=ekuQYOfcvRyV132M3wf7gQ&_nc_ss=7a3a8&oh=00_Af2EGSyhbc_ADkK74xB8eckyHUhU42uy1HXbMxA6b6cIxA&oe=69D9A5A7",
    group: "A",
    coach: "Coach Bahudeen",
    description: "A technically balanced team with strong midfield control and tactical discipline."
  }
];

function renderTeams() {
  teamsGrid.innerHTML = "";

  teams.forEach(team => {
    teamsGrid.innerHTML += `
      <div class="team-card">
        <img src="${team.logo}" alt="${team.name}" class="team-logo" />
        <div class="team-content">
          <span class="team-badge">Group ${team.group}</span>
          <h3>${team.name}</h3>
          <p><strong>Coach:</strong> ${team.coach || "Not set"}</p>
          <p>${team.description || "No description provided."}</p>
        </div>
      </div>
    `;
  });
}

teamForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("teamName").value.trim();
  const logo = document.getElementById("teamLogo").value.trim();
  const group = document.getElementById("teamGroup").value;
  const coach = document.getElementById("teamCoach").value.trim();
  const description = document.getElementById("teamDescription").value.trim();

  if (!name || !logo || !group) {
    alert("Please fill in Team Name, Logo URL, and Group.");
    return;
  }

  const newTeam = {
    name,
    logo,
    group,
    coach,
    description
  };

  teams.push(newTeam);
  renderTeams();
  teamForm.reset();

  alert(`${name} has been added successfully.`);
});

renderTeams();