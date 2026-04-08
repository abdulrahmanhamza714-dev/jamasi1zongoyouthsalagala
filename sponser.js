const featuredSponsor = {
  name: "Jay Ams Enterprise",
  type: "Main Tournament Sponsor",
  image: "https://res.cloudinary.com/da83jfgyb/image/upload/q_auto/f_auto/v1775484581/Jay_ams_enterprise_kaeslc.jpg",
  description:
    "ibee mart proudly supports the Jamasi 1 Zongo Youth Sala Gala by investing in community football, youth development, and tournament excellence.",
  highlight:
    "Official headline partner powering the tournament experience."
};

const sponsors = [
  {
    name: "MTN",
    type: "Media Partner",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntW6i8q0DWCvyl1o96OBDXYEhm7NJzYRR7Q&s",
    description:
      "Providing media visibility, local sports coverage, and promotional awareness for tournament fixtures and highlights."
  },
  {
    name: "KPM Sports Store",
    type: "Community Partner",
    image: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/651579757_1532535212209179_7896641388373220948_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEd9hGbi61Z7PPb91j89XMXP6_AiaVnCEc_r8CJpWcIR2mWpDlgmA5rdP9ksdKHIYr8qKottbetHFxzmxBXQfil&_nc_ohc=1AZsqdfhY_0Q7kNvwFZhkEB&_nc_oc=AdoJunJ8XLCi9qHxwX-yiIScr_s98YhBj0mTVhmlSdWkhjx5Z3Gp3ELtxTTBiMPC-r0&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=mFpMzA9fkbDkjxkSVQIi1g&_nc_ss=7a3a8&oh=00_Af2eSoYsREupexw4l8-N7xdTcM8NpmYLKeUcWecG0rGKjA&oe=69D97ECA",
    description:
      "Providing football kits, bibs, and branded sportswear for teams and matchday activities."
  },
  {
    name: "DeenSheriff Estate & Construction LTD",
    type: "Kit Partner",
    image: "https://res.cloudinary.com/da83jfgyb/image/upload/q_auto/f_auto/v1775484580/deen_sharif_construction_hxkcpo.jpg",
    description:
      "Proudly supporting the tournament and youth community development"
  },
  {
    name: "123 Rentals and Events",
    type: "Refreshment Partner",
    image: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/494104248_9550336368349069_7511588051482520990_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFwf3wmjnwFNRXdgH1ruYCnSOzn02tVba9I7OfTa1Vtr4OHHiKmzmIP6UuBYXDtR7kYzb_1XCJU5R-U2WIPUk4G&_nc_ohc=lBPAel6FHoIQ7kNvwF27PfY&_nc_oc=AdqceTmCmPNN6ihVFm5DLQxJto_Y5PCKKvv3KDTrXCvQXvWRzg-F4d4x0tIGGUvSXBc&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=98mxy9IDsAjq3llmC_F4iw&_nc_ss=7a3a8&oh=00_Af3VAnzyuRYyZ7nCOVp0ZVb8Jl5IveavMYNQmuNKob0vYQ&oe=69D9A537",
    description:
      "Helping support the Jamasi 1 Zongo Youth Sala Gala with canopies and plastic chairs for spectators, officials, and guests."
  },
  {
    name: "Hamza Solutions",
    type: "Technology Partner",
    image: "https://res.cloudinary.com/da83jfgyb/image/upload/q_auto/f_auto/v1775485284/ChatGPT_Image_Apr_5_2026_06_42_07_AM_koy2ig.png",
    description:
      "Providing website development, digital management, and technical support for the tournament."
  },
  {
    name: "Jamasi TV",
    type: "Broadcast Partner",
    image: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/661715340_1285707516994006_4423631451015276651_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGCsErzX12ysO8wPwOKvKYf9VXD0NCcsLL1VcPQ0Jywsk6cU93RJMS7ShAVkIeXD6w0xKgKftlfqookArLiSxzN&_nc_ohc=x66mNHtqq_0Q7kNvwGQrnOa&_nc_oc=AdqL647RhKbS4av-TdPtYlurkRGZYGcw38PmtvP5vzN8vK0rgMgIJs-VWzqRTAKpYUA&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=ot1n41nwtqSOm3Vu37Gv1g&_nc_ss=7a3a8&oh=00_Af1e8uLUUrN4DaSm4LFLR65gAqmyn5-I-AyIjPw9YgGHYQ&oe=69D98F90",
    description:
      "Supporting the tournament’s digital presence, media display, and online tournament operations."
  }
];

function renderFeaturedSponsor() {
  const container = document.getElementById("featuredSponsor");

  container.innerHTML = `
    <img src="${featuredSponsor.image}" alt="${featuredSponsor.name}" class="featured-image" />
    <div class="featured-info">
      <span class="sponsor-type">${featuredSponsor.type}</span>
      <h3>${featuredSponsor.name}</h3>
      <p>${featuredSponsor.description}</p>
      <p class="sponsor-highlight">${featuredSponsor.highlight}</p>
    </div>
  `;
}

function renderSponsors() {
  const grid = document.getElementById("sponsorsGrid");
  grid.innerHTML = "";

  sponsors.forEach((sponsor) => {
    grid.innerHTML += `
      <div class="sponsor-card">
        <img src="${sponsor.image}" alt="${sponsor.name}" class="sponsor-image" />
        <div class="sponsor-content">
          <span class="sponsor-type-badge">${sponsor.type}</span>
          <h3>${sponsor.name}</h3>
          <p>${sponsor.description}</p>
        </div>
      </div>
    `;
  });
}

renderFeaturedSponsor();
renderSponsors();