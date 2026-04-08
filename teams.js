const teams = [
  {
    id: 1,
    name: "Zion Stars FC",
    group: "A",
    logo: "https://res.cloudinary.com/da83jfgyb/image/upload/q_auto/f_auto/v1775196342/Zion_Star_team_crest_ashqys.jpg",
    description: "One of the strongest attacking sides in the competition."
  },
  {
    id: 2,
    name: "Saudi City",
    group: "A",
    logo: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/482321685_660681719943722_5074565297441536885_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e06c5d&_nc_eui2=AeGKtZg8sX4jBrBYXSatZfUnUbtsU6Y94f5Ru2xTpj3h_sv5dfRDm6e8gEO5CFxd9pUo4MAJIkQweFkIj7uIqEvQ&_nc_ohc=Lw-FjuKFrxwQ7kNvwG2tGUf&_nc_oc=AdpI_eOB6592WZKGxYG8cTYXeI8HraxDXajmq6tY9KyTyg2BN_tBBvt0EFckUET-ums&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=mPdrT2FSN45lZf5ngSHePA&_nc_ss=7a3a8&oh=00_Af1n74qxpCXx0ZxAJKFHUrzEXwo9ClybQIOIfyfQT9jM9A&oe=69D98695",
    description: "A balanced side known for discipline and sharp finishing."
  },
  {
    id: 3,
    name: "California FC",
    group: "A",
    logo: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/482304324_660681699943724_3272088155386659125_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e06c5d&_nc_eui2=AeEoyfWjMXPC_x8QMOheUsi51Y_LeSZIZsXVj8t5JkhmxZKrWpl4UM8XRssw_EY8u-PBtMBj0-8l0dGwyiUx6Edn&_nc_ohc=9F3XyUtOyh0Q7kNvwHchZyg&_nc_oc=Adoamzh_rae6ns9IffEssq2-ap62dANXz2dTlZBrS6OL9fZMI_JKuAmmUpP1sY-M1uQ&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=hmYU6p5XuHl3onPy7psQzw&_nc_ss=7a3a8&oh=00_Af3OmVn9qP_K6sYtgYvDkXHIExtkfjfMsA4HP0LslXrwuQ&oe=69D9B62A",
    description: "A determined squad ready to challenge the favorites."
  },
  {
    id: 4,
    name: "Domenase Young Boys",
    group: "B",
    logo: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/481813988_660681386610422_1697956979681118129_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e06c5d&_nc_eui2=AeGRZjadzGkyUe0ekDpk-7CtgQS6Hs9TAfmBBLoez1MB-clbDsVLbunle7DDvGQE37L3dB6X18Pja4RQYhEuNgDG&_nc_ohc=3tdMZZKYkKMQ7kNvwEaf2kx&_nc_oc=AdqQS12LS3TIfOj6MmQuBkne_cm84PovwGLBWlHyjvUq7FOSjfRMSrcktrY7EYwftzU&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=Rl8QDftAArBf5op_LDFI-g&_nc_ss=7a3a8&oh=00_Af3qo-aOKVN4dI4JAYRXehDoMBvcHpb-1RD5hDUgFuNzZw&oe=69D9BBFA",
    description: "Known for compact defending and dangerous counters."
  },
  {
    id: 5,
    name: "All Stars",
    group: "B",
    logo: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/481826628_660681643277063_2845843150655606476_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e06c5d&_nc_eui2=AeETwJpsWlE-qiLU5DbL1Uw6rl-SeS87SgOuX5J5LztKA9j4Q0BWOmAef1UQmIyTUvTi5jWM8Q124AIMN63xvoZI&_nc_ohc=KBy2s-nflEEQ7kNvwECYUv_&_nc_oc=Ado9PgL00F3HANArb4-Jf17WMx7vGQjWfzo1oW8YMPBzwewni0VtytS67ohrtfCipEc&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=Y1bKruMOYTQIIS9akkVpjA&_nc_ss=7a3a8&oh=00_Af3fpDbecqFvi4frOSu3HbszOHI31GgsAdBod6zHFlHC6g&oe=69D988E9",
    description: "A fearless side of old players with physical strength and intensity."
  },
  {
    id: 6,
    name: "Sabongida",
    group: "B",
    logo: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/481922312_660681613277066_5251856122851878814_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e06c5d&_nc_eui2=AeGK5dWnb1PnXgtnhlXchXTINu-FqrcRQZk274WqtxFBmQHC7mUmBRrHTRLrJqH2smxx9HRxXZ3SECxGgmWfN62n&_nc_ohc=55Dy0aAt2QUQ7kNvwEIbKo_&_nc_oc=AdqrxPfwO_z3_WEkDx_rS_0BJT3LGjsOY4swl3ersYQN1vRVhht0ttm-HuVCizvbD9I&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=_2vsx6VlWihk63Z2izTJoA&_nc_ss=7a3a8&oh=00_Af2Yw3cBuJpvB9FS4EZkhoOpBF8myv78a4fTtTfmCGBMlw&oe=69D9AF8A",
    description: "Fast transition football and aggressive pressing."
  },
  {
    id: 7,
    name: "Lafila Bumbu",
    group: "C",
    logo: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/482258645_660684186610142_745589537082268825_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e06c5d&_nc_eui2=AeGUbZHNiHTaYdjI63jOja75xaLxR95wlQrFovFH3nCVCv1vvL4WlY5QjtCZg_4FDMhkjyibp7x40Gu7XCdSOPwD&_nc_ohc=PaYmuyACCFUQ7kNvwHdI3ke&_nc_oc=AdpBoSZ-dbjxOWP5fplVIhkkMmca5A5LhO04UGjMb2o3VT7k1eM2GJnT60rpi6AkLZk&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=h8ZsH0moLTHJHWWTC2FFnw&_nc_ss=7a3a8&oh=00_Af04XNjxD2_n84UZyb_vG9RJLWQrXexDqbwg7HhLx8t5Gg&oe=69D99288",
    description: "Tournament heavyweights with elite technical quality."
  },
  {
    id: 8,
    name: "Ajaarazama FC",
    group: "C",
    logo: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/482275718_660681466610414_5160021508432332972_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e06c5d&_nc_eui2=AeESqgQ8ZRCaqdc1gWDbNBYXvF25iJOJfUu8XbmIk4l9S7AVXvAXrVQpSzU8g1Z7pLU4F-8WYKJwAg4QO8uiNbiN&_nc_ohc=TxWR08Fl_MEQ7kNvwFv8baE&_nc_oc=AdruIU4wX9kWzAFdEBZ51T5lDPqiHQ0aDinYgBDa8bDk1SUKck_pPxERj77gGnfJtSM&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=n4y0qcHp3a0ZuCJ3-IyfTA&_nc_ss=7a3a8&oh=00_Af3Rv9b61lD5aacxv9NDZvrNYjnIP0XExCZ7Bgvu0Oa4Rw&oe=69D99CC8",
    description: "Stylish football with a lot of creativity in attack."
  },
  {
    id: 9,
    name: "Real Kampala United",
    group: "C",
    logo: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/482262114_660681716610389_4607102018795471670_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e06c5d&_nc_eui2=AeHpv5ycHHkwowmqvooJUt7IdEYz6wqCmd50RjPrCoKZ3jLYuwPnYzlWsVv7w9LRK_EFZyjugEZDHmC-hr6kprXP&_nc_ohc=DtJhsyIaHVQQ7kNvwFxcVuX&_nc_oc=Adpjp1A9FSaBDLe_3EPFcRO8ZMHB7EY7n0xK0uSWLnd17LTVRj9UfD1wqZNJY606jYw&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=NzCtp9V-KtWMUj_ENFqcUQ&_nc_ss=7a3a8&oh=00_Af3XFn33He0G6sk7zvYWXlslk_MkZRfKlA-eHYC3jGd6PQ&oe=69D9B04C",
    description: "A youthful squad full of pace and hunger."
  },
  {
    id: 10,
    name: "ATM Of Jamasi",
    group: "C",
    logo: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/466965568_866375255684117_4638645980266441554_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeGqEJRJO5OXbYMza1IDGhug-6I9LMf3drr7oj0sx_d2umucw9RvafrFPi2HjXPZveiNxDKBvxfXp0tgfs0-pMuS&_nc_ohc=VL0FRKsmAfkQ7kNvwFCCCjZ&_nc_oc=AdrstES9Mr7kl42bcz3AgPejHdZhDTKKty5xZqrltHpx6mZr4eKqqm48bdxuuyZ-juE&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=ekuQYOfcvRyV132M3wf7gQ&_nc_ss=7a3a8&oh=00_Af2EGSyhbc_ADkK74xB8eckyHUhU42uy1HXbMxA6b6cIxA&oe=69D9A5A7",
    description: "A resilient team that never gives up easily."
  }
];

const players = [
  // Zion Stars
  { teamId: 1, name: "Imaadideen Ibrahim", age: 24, position: "Left Winger", captain: true, image: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/467304526_866373825684260_2636578402759658641_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeEGhJOKgpIpPaEz-A-H2yHGvuo-9zmIDwO-6j73OYgPA2yu3mDZH7SVJ9c9Z2PM6lHg5hXM7cUv90NBkQmjthdl&_nc_ohc=v5YzlwbCYFwQ7kNvwGeaExq&_nc_oc=Adrx_E2wCxajR_F2rCJunN5GJMl2tE2x-rCDo0ksfqaoPImm9Vz29elebHHBYMmvggE&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=s-q-4mnmOyD1LvWOr6kStw&_nc_ss=7a3a8&oh=00_Af3eEpbVoOg-5P0vh7mhh00DqjQAsFXik5ZVQI8YBTCI-Q&oe=69D9AB52" },
  { teamId: 1, name: "Mubarak Fuseini", age: 21, position: "Midfielder", captain: false, image: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/469327027_2636503186535740_3990933894137184563_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeGXr0FUAnMVgJSPeaRLAZ7xj-ieSDrOTCGP6J5IOs5MIe00or-HYSQ0RfAyuTCDFNvzUGF3BqnezRPBdFMXzz4w&_nc_ohc=RMvcKSqdjIkQ7kNvwEw0okk&_nc_oc=Adot7XoXAZ1l1JM1uuSE1WFdsMhlX1NE3lO3mVBfyMk9R5nMfNHEswLSmS9mF4Bpa2Q&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=h6tSiszd7KeHY7d_HumFIw&_nc_ss=7a3a8&oh=00_Af20yqBdihr0sY7B6dqWFFbPSNCkt9hJDrEJO9b50sb_rg&oe=69D9B7FB" },

  // saudi city
  { teamId: 2, name: "Mohammed Rashid", age: 27, position: "Forward", captain: false, image: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/469220374_2636503413202384_2231554456757294296_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeGQ-EctOMChh2CNcZ8jSZORqgMVsw4x7BmqAxWzDjHsGTm7tBWvNqrQFWokTWGIP97N1ZoUUXoTugYfCnWBDQEO&_nc_ohc=SY_yoQlaUQQQ7kNvwFoh8H9&_nc_oc=Adpj7kb1LgT-_Q0DbyGyJWF6dbAZ3hmc2Uhd_iFgnZshyqMWY1HlFEz-26byF0aywgA&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=k9R5z_UbK9Ds0liJzerArw&_nc_ss=7a3a8&oh=00_Af2xAHhQ1gK_WDuxBKDXtyKeQQi82feV6T0NQMeNWPm3Eg&oe=69D9C5B2" },
  { teamId: 2, name: "Yahaya Sule", age: 18, position: "Center Back", captain: true, image: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/469279879_2636502416535817_9088592624652772638_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeFjwzq5wdzxP8T6c9qBG4EC8MSFItCYvM_wxIUi0Ji8z1chBvzIjC52CBN0MzjeYS0q114TlsuakRPNfpl2EN08&_nc_ohc=dHxjreILcXoQ7kNvwFb-fY3&_nc_oc=AdoL53wWKHkfV0ZOmg7vIn0HlZUhpHxC87cyQuga1ZLTZLIt-9AHSbTCfrQUW29Wc7E&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=vey0Xox1xYUlMhVo2ri4YA&_nc_ss=7a3a8&oh=00_Af36R3myyVJ9q00hB5P4zrnU6FD8_WMQkmb1nyYCuKv9Kg&oe=69D9B3DB" },

  // Unity FC
  { teamId: 3, name: "Toffic Mohammed", age: 24, position: "Goalkeeper", captain: true, image: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/467623063_2084803948601571_3648733797419873846_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeFouW4E39kC1oyAI53VcA7I_UdssIr13AT9R2ywivXcBCemH4nxw11Srb0sygFnZSjlYHsae4jXDqCvwMwYz6s9&_nc_ohc=ewfdAiw0lzwQ7kNvwHdjfaT&_nc_oc=AdrS-pdqphrI-aAwGOfHlHEUSh_3BJWLFvA2b-0a_C_yoWoimRFaBpOpMu7M4cHlhKg&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=5EC1VENwD6RSJpseX0dJKg&_nc_ss=7a3a8&oh=00_Af3I7rkMFSPo77rs6WgI2lclOlzOAkkVS6uS1kwz7nFRyQ&oe=69D9C798" },
  { teamId: 3, name: "Ibrahim suleman", age: 19, position: "Attacking Midfielder", captain: false, image: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/469005724_2636502099869182_4382194233537027822_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeHTet16WNANqMb4U86uZiKsBu8ye34G76kG7zJ7fgbvqX-8_BIRT85iSh_01f3Rs0QbJwQmY0dZ-f_rLX7xu7i_&_nc_ohc=yBFavK8pZY4Q7kNvwEA9CBv&_nc_oc=AdqiOAkctEpxrjTdIwLg8BgvDoGZihOyq5r7Gs9Haxm9uRGWLMg-qshmu83QOC_2hBo&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=WtMDti5Q0qNImdzGZ-_e7w&_nc_ss=7a3a8&oh=00_Af1ddH5RgdtuNk_2B9IVNPamjZfXebggr1q176PhGcwjIQ&oe=69D9A392" },

  // Victory Boys
  { teamId: 4, name: "Suleman Bashir", age: 21, position: "Forward", captain: true, image: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/469047662_2636503453202380_7182277248266603326_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeGmkfDwEOAEgQr7y0wN3hSot4f2amaf48G3h_ZqZp_jwTKqbKyeIFJlnFv71rwBJWeIPd8pXGGieKOnQkjDSLdW&_nc_ohc=8tyEzBeDNCYQ7kNvwHNvt7G&_nc_oc=AdohGTOSlNX5ECs1ddLhx7HH5k7kQmiOEb1FD_Rz8vUrRpfRR9TDCCVDOXz-Jo_osEs&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=BOtieAdZp1T0OZ54rRzJrg&_nc_ss=7a3a8&oh=00_Af07Hg3nfMVGQ6y1ObNOyRj2nTqjZP4USZ58Q9WdwLgMsQ&oe=69D9BA73" },
  { teamId: 4, name: "Rahim Tanko", age: 20, position: "Central Midfielder", captain: false, image: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/469119163_2636502393202486_7932666155039012986_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeERylreOFWQyO_ktmfK1xM0z0mOuqhCiH_PSY66qEKIfy3JYa-tIEVKDbcvudj1hgh2VI8Jr1m6xnewa0G3sO8n&_nc_ohc=KFdkXEBLoMYQ7kNvwFyqjFI&_nc_oc=Adrih7_tqIPUE9u3PfmCcwC8iOa2R56Du8-7PXqUh0mMhLkHoJNneQnAiDxxbl1A4o0&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=r7hN2F3Gzbx5DLOIVXxjdA&_nc_ss=7a3a8&oh=00_Af1_RS9R11CMnkTk_Z9PkKP3h3ih0CuhZENlYwRCF1zIkQ&oe=69D9A967" },

  // Salaga Warriors
  { teamId: 5, name: "Muntari Aziz", age: 23, position: "Forward", captain: true, image: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/469184805_2636503383202387_5859486323754346997_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=689c2a&_nc_eui2=AeG8tqXiMWQufGQoAj-p_AktBzu-6zCMt_wHO77rMIy3_IgLzh_kZgy61KGKUjaejfPMygX-ckSQvNEqGYimiD1X&_nc_ohc=0JI8b6aGmJwQ7kNvwGoYLNP&_nc_oc=AdqPOVWjeWt_2AJD2TfRmKA7atU2Fu3X-bwUGRadvC0yUbnV4pIujMcGxOqIJREYZc4&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=Cu-2sAEi1nKj-CVOnoPvxw&_nc_ss=7a3a8&oh=00_Af2b6Wm0YwbALG077m-PHfodMwu1z0p_1iJ1ibULFgJB3w&oe=69D9B178" },
  { teamId: 5, name: "Khalid Yakubu", age: 19, position: "Left Back", captain: false, image: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/469449132_2636502403202485_3022083886874256313_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeFwJuW0pNdzDUgROhxyR6utlvVX7fr-HpyW9Vft-v4enLHlpEXERim1yjPYwvmBTUed22si5Hv71RvycTipfs0H&_nc_ohc=fRt0yozQoeoQ7kNvwHGecZV&_nc_oc=AdosCFi7mu2a77zHnCtlPelRTCqZDr7FESqZiQ10_XL427yykBnb5wxLCu-tFW41CKA&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=TjajyTSZt5MJsiLS_NnGVA&_nc_ss=7a3a8&oh=00_Af0YakojyB8WJ2Em-yCRfSd0UaWnFrvLfl05-vbAjfFJcg&oe=69D9A184" },

  // Northern Blazers
  { teamId: 6, name: "Haruna Osman", age: 20, position: "Forward", captain: true, image: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/469397182_2636502336535825_3430295506514229546_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeE_ZHEE9yOJY8iDDTB2EgAB31_s1zBJVqjfX-zXMElWqCZlCvdDfgp3CpCwHfC3h517ubjouOjzSwiQvWkztow2&_nc_ohc=1OfzjCy-8wMQ7kNvwEHltqN&_nc_oc=Adq5Usq_TNqLSu_Xo-6pV2cvd4r-WT6-V5t-KVktPTybjTw_MLacGQUNJ6ml2uzTIiY&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=Ch1TNE5P9JVAUBNQiXfOyQ&_nc_ss=7a3a8&oh=00_Af0RFZ6eQT8Hl144HuWce-LKoD28eCO1nyEaQIz6HU-5Cw&oe=69D9AC39" },
  { teamId: 6, name: "Isaac Bello", age: 18, position: "Right Winger", captain: false, image: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/469365327_2636503196535739_500042211396179760_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeF6DTKo4kltP8wcapfYo0tMw1QqYl9QuivDVCpiX1C6K9ELYefzoFnb-rUHUaTXWjuUfEmXbKaKVpo6JJYwQgJJ&_nc_ohc=5lu_kC9CjpsQ7kNvwEcXMZc&_nc_oc=Adoc3pxKiw2fDe5PVF1T4duiTBMmPUIosZQokORBs89Ms79uMgdubThsYwl8WcCIvLU&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=orLLSHssGZt-pOU7WF2hxA&_nc_ss=7a3a8&oh=00_Af2JsOwmdnEI-rJ8DtR8QoJMefLf7sf-ktvHFS4l5LvpAQ&oe=69D9BC3C" },

  // Elite XI
  { teamId: 7, name: "Yussif Moro", age: 22, position: "Forward", captain: true, image: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/468962274_2636503256535733_6118754541513930734_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeHWe3zwo4DehkuuLahsf74HQYels0Oej5JBh6WzQ56PktAy1H9voWaDRGz-cC96kx-rzHUNDEu3XtqCzrRnbKvO&_nc_ohc=H6vw8syhf-oQ7kNvwHk5St0&_nc_oc=AdpIpc5NJ8TKz5XiABw2BoHO3F7D6n6VvlSD5LP4hlTp2gAn8UR27B98fdOcKuTR2kQ&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=c2FdDvRhT99BI_yTdZIbgg&_nc_ss=7a3a8&oh=00_Af1Px_rX67m8nlHdqxWDsA5hEQEjsO5XIENmU1OOC2YYnw&oe=69D99C44" },
  { teamId: 7, name: "Aminu Salifu", age: 21, position: "Midfielder", captain: false, image: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/469258092_2636503279869064_912217179486964863_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeG2T3XfsskJBAHf_-mDD6aB9OCcK6M8Gzb04JwrozwbNltsnmUfnUZi5n_MtIZ2xaG93Vd3nuUfLrkhXgdObeYu&_nc_ohc=c2Da9F5cvL0Q7kNvwHpDdOb&_nc_oc=AdovlQY4sG3w8Pf65jHBtRqFqt-HUCjQ79tQlBIGeiNuEM8VoIObUSp86WQjcI_cV3k&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=m6U0L5CS_aU120-VPzSxJQ&_nc_ss=7a3a8&oh=00_Af2lFU8UGPh5joSxzmO_SL6eko95mjUKGykniAvjJBwHzQ&oe=69D9B2D3" },

  // Royal Boots
  { teamId: 8, name: "Nii Mensah", age: 20, position: "Forward", captain: true, image: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/469223842_2636503539869038_6462216600612785420_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeEJDulUyIi7wqz0JVy8DuOvDHZcMAp14LUMdlwwCnXgtSUkByupjK1POElu4L2SYI7em_FStFrCUWOxdUEaxCpK&_nc_ohc=GQ9jXJg2z7wQ7kNvwF_tRfu&_nc_oc=Adpy9BbSgfxsYpvABtUHBqrghxZuedD4dVfzczoWIFXZnBNLGPAJRg9z3m7PxLDmV2c&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=a39L8mDHCFLz5S8YCFeNjQ&_nc_ss=7a3a8&oh=00_Af0bRQPrjjJXfGy9PIUfbU9p568D0y5NDJFs5JIvYmh4Nw&oe=69D9C1FF" },
  { teamId: 8, name: "Sani Umar", age: 19, position: "Attacking Midfielder", captain: false, image: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/467675709_2084803715268261_1777447307959085886_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeF5tm0iYwvaLP6zW0mB6LjiCSbpdzdd0o4JJul3N13SjqK3MMQUFVYTxWOBQaa8wB3HwVBSLVZ85TCgvNxsuGKL&_nc_ohc=-451qzPSl8sQ7kNvwG81W_U&_nc_oc=AdpYpV74_dTmWIpKOpUNUi21WpLxEoMg2mtzERd8mbCAdwGBFGuuDJQlVM6b4bUbh_Y&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=8hG_SABTkCIOmL_1VKSS7w&_nc_ss=7a3a8&oh=00_Af3-CAIeg1GI8Ga-DxnHLSs6rp58xXkjLuWoR69gpfiVnw&oe=69D9A9D2" },

  // Young Falcons
  { teamId: 9, name: "Khalid Issah", age: 21, position: "Forward", captain: true, image: "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/469630824_2729616863909099_5922693659727545945_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeE0_swH0j5NNTmcsFZ8TL4UBdx20dbeltsF3HbR1t6W2ycjTRPJ8TQ075WXFhgnDy7KEKgScOQkE_PKxL6LFotE&_nc_ohc=z8fCi11jlpUQ7kNvwHj40tw&_nc_oc=AdotnGFDsEOe01p_vNVu_8I4Omrzx-9BR1Tt-oBelZbpZMcrD5PVgbJhJmrb0or8dkg&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=eoFJ-YXuUiExdlZ7zCbZvg&_nc_ss=7a3a8&oh=00_Af3borcRLT7apNXDvcwJmMC5Z5NkKmfZ07DMplQZkb17ig&oe=69D9B8E5" },
  { teamId: 9, name: "Baba Tetteh", age: 20, position: "Left Winger", captain: false, image: "https://scontent.facc1-1.fna.fbcdn.net/v/t1.6435-9/199774567_1722956884557046_3538444651499967720_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeG6KfxWmts3hEaqccVPqukgh4sCzLbGiGGHiwLMtsaIYR50gmSioSD_HVi6GC3PsRm5v0VPoEt5MEUwpDiGj0Il&_nc_ohc=9zvPbMRpki4Q7kNvwGZAdEn&_nc_oc=AdrNbxrMw30QMjf2BNQySW5bInZcaPLJ8haYc8BMn63tfmCRh0sVga8HtTp3roI_f1Q&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=N6iyCpHlhkngUVYj4u3O1g&_nc_ss=7a3a8&oh=00_Af154k6U9rNXUFtmDK3NTYkjkXxo2xpo-YSpswlEkpQJFg&oe=69FB4074" },

  // City Rovers
  { teamId: 10, name: "Kweku Majeed", age: 22, position: "Forward", captain: true, image: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/470144766_2100683690346930_6412956437979114804_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeEmSXs-_9ftrC6l9wAhqCCv124Z02C8MMTXbhnTYLwwxFBTCeLXWfLNRxub0h5-pqVG9GalIue0dQZQ0reFMJ9j&_nc_ohc=IGFJw3JwJ4UQ7kNvwGDYpHu&_nc_oc=AdqreGhhPZG8gZ-EC13UqMpWIYSe5lHpMod1cXiLrsQ3AAI_JELXHFzHPy_fW6tYBq8&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=bOY-qDX8hYArUU_n9F2wbw&_nc_ss=7a3a8&oh=00_Af1G5417glfQxr0AC7KoNxEnNk0woiRDleZ5fuP9C6Mw4A&oe=69D9BB8F" },
  { teamId: 10, name: "Habib Yakubu", age: 19, position: "Central Midfielder", captain: false, image: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/469664623_2729616993909086_3349371338963255449_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeGtZ127HQKt7bZ3edZS4on3WmB3WpGJtIZaYHdakYm0hvY723AlJTSzVgHcgO1M8wpWEmH-_pXGyslOhlJAKgI2&_nc_ohc=sFu6X3ecZkIQ7kNvwFw555y&_nc_oc=Adol-igcqTyoxOknutVtSHiwbCUJOHyuBcge7wqgxvWncjH5Cl713_6Xf0kr9PyTU98&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=XSzlB-qAm-u12GzfUPj-dA&_nc_ss=7a3a8&oh=00_Af17nsunABqx4Zkq8exNJZmhwJts8dTMW6hkQ9BLJxW4xQ&oe=69D9A21D" }
];

const teamsGrid = document.getElementById("teamsGrid");
const teamModal = document.getElementById("teamModal");
const closeModal = document.getElementById("closeModal");
const teamModalHeader = document.getElementById("teamModalHeader");
const playersGrid = document.getElementById("playersGrid");

// Render teams
function renderTeams() {
  teamsGrid.innerHTML = "";

  teams.forEach(team => {
    teamsGrid.innerHTML += `
      <div class="team-card" onclick="openTeam(${team.id})">
        <img src="${team.logo}" alt="${team.name}">
        <div class="group-badge">Group ${team.group}</div>
        <h3>${team.name}</h3>
        <p>${team.description}</p>
      </div>
    `;
  });
}

// Open team modal
function openTeam(teamId) {
  const team = teams.find(t => t.id === teamId);
  const teamPlayers = players.filter(player => player.teamId === teamId);

  teamModalHeader.innerHTML = `
    <img src="${team.logo}" alt="${team.name}">
    <div>
      <h2>${team.name}</h2>
      <p>${team.description}</p>
      <div class="team-badge">Group ${team.group}</div>
    </div>
  `;

  playersGrid.innerHTML = "";

  teamPlayers.forEach(player => {
    playersGrid.innerHTML += `
      <div class="player-card">
        <img src="${player.image}" alt="${player.name}">
        <h4>${player.name}</h4>
        <p><strong>Age:</strong> ${player.age}</p>
        <p><strong>Position:</strong> ${player.position}</p>
        ${player.captain ? `<div class="captain-badge">👑 Team Captain</div>` : ""}
      </div>
    `;
  });

  teamModal.classList.add("show");
}

// Close modal
closeModal.addEventListener("click", () => {
  teamModal.classList.remove("show");
});

// Close when clicking outside
teamModal.addEventListener("click", (e) => {
  if (e.target === teamModal) {
    teamModal.classList.remove("show");
  }
});

renderTeams();