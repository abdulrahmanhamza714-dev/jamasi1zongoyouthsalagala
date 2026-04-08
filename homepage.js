const stats = [
  { title: "Registered Teams", value: "10" },
  { title: "Registered Players", value: "130+" },
  { title: "Tournament Groups", value: "3" },
  { title: "Knockout Start", value: "Quarter Finals" }
];

const news = [
  {
    title: "Opening Ceremony Confirmed",
    body: "The tournament will officially begin with a special opening ceremony at the Jamasi main field."
  },
  {
    title: "Penalty Rule in Knockouts",
    body: "All knockout draws will go straight to penalties. No extra time will be played."
  },
  {
    title: "Top Teams Preparing",
    body: "Participating clubs are finalizing their squads and preparing for group stage battles."
  }
];

const topScorers = [
  { name: "Yussif Moro", goals: 6 },
  { name: "Kwame Rashid", goals: 5 },
  { name: "Abdul Karim", goals: 4 },
  { name: "Khalid Issah", goals: 4 },
  { name: "Suleman Bashir", goals: 3 }
];

const topAssists = [
  { name: "Rahim Tanko", assists: 4 },
  { name: "Aminu Salifu", assists: 4 },
  { name: "Sani Umar", assists: 3 },
  { name: "Mubarak Fuseini", assists: 3 },
  { name: "Habib Yakubu", assists: 2 }
];

const sponsors = [
  {
    name: "MTN",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntW6i8q0DWCvyl1o96OBDXYEhm7NJzYRR7Q&s"
  },
  {
    name: "Jay Ams Enterprise",
    image: "https://res.cloudinary.com/da83jfgyb/image/upload/q_auto/f_auto/v1775484581/Jay_ams_enterprise_kaeslc.jpg"
  },
  {
    name: "Deensheriff Estate & Enterprise",
    image: "https://res.cloudinary.com/da83jfgyb/image/upload/q_auto/f_auto/v1775484580/deen_sharif_construction_hxkcpo.jpg"
  },
  {
    name: "123 Rentals and Events",
    image: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494104248_9550336368349069_7511588051482520990_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFwf3wmjnwFNRXdgH1ruYCnSOzn02tVba9I7OfTa1Vtr4OHHiKmzmIP6UuBYXDtR7kYzb_1XCJU5R-U2WIPUk4G&_nc_ohc=lBPAel6FHoIQ7kNvwF27PfY&_nc_oc=AdqceTmCmPNN6ihVFm5DLQxJto_Y5PCKKvv3KDTrXCvQXvWRzg-F4d4x0tIGGUvSXBc&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=98mxy9IDsAjq3llmC_F4iw&_nc_ss=7a3a8&oh=00_Af3VAnzyuRYyZ7nCOVp0ZVb8Jl5IveavMYNQmuNKob0vYQ&oe=69D9A537"
  }
];

// STATS
const statsGrid = document.getElementById("statsGrid");
stats.forEach(stat => {
  statsGrid.innerHTML += `
    <div class="stat-card">
      <h3>${stat.value}</h3>
      <p>${stat.title}</p>
    </div>
  `;
});

// NEWS
const newsGrid = document.getElementById("newsGrid");
news.forEach(item => {
  newsGrid.innerHTML += `
    <div class="news-card">
      <span>Announcement</span>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </div>
  `;
});

// TOP SCORERS
const topScorersContainer = document.getElementById("topScorers");
topScorers.forEach((player, index) => {
  topScorersContainer.innerHTML += `
    <div class="leader-item">
      <strong>${index + 1}. ${player.name}</strong>
      <span>${player.goals} Goals</span>
    </div>
  `;
});

// TOP ASSISTS
const topAssistsContainer = document.getElementById("topAssists");
topAssists.forEach((player, index) => {
  topAssistsContainer.innerHTML += `
    <div class="leader-item">
      <strong>${index + 1}. ${player.name}</strong>
      <span>${player.assists} Assists</span>
    </div>
  `;
});

// SPONSORS
const sponsorsGrid = document.getElementById("sponsorsGrid");
sponsors.forEach(sponsor => {
  sponsorsGrid.innerHTML += `
    <div class="sponsor-card">
      <img src="${sponsor.image}" alt="${sponsor.name}">
      <h3>${sponsor.name}</h3>
    </div>
  `;
});