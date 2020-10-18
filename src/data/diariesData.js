const diaries = [
  {
    name: "samopoczucie",
    type: "int",
    min: 1,
    max: 5,
    date: "1602962556462",
    colors: ["#ff0000", "#00ff00", "#098ab3", "#ae4582", "#975bca"],
    entries: [
      [
        {
          value: 1,
          description: "Nie zjadłem śniadania",
        },
        {
          value: 2,
          description: "Uciekłem z ostatniej lekcji",
        },
        {
          value: 5,
          description: "Pomogłem Mamie zrobić obiad",
        },
        {
          value: 1,
          description: "Przed snem bolała mnie głowa",
        },
      ],
      [
        {
          value: 3,
          description: "Nie zjadłem śniadania",
        },
        {
          value: 4,
          description: "Uciekłem z ostatniej lekcji",
        },
        {
          value: 4,
          description: "Pomogłem Mamie zrobić obiad",
        },
        {
          value: 5,
          description: "Przed snem bolała mnie głowa",
        },
      ],
    ],
  },
  {
    name: "palenie",
    type: "bool",
    date: "1602962556462",
    colors: ["#ff0000", "#00ff00"],
    entries: [
      [
        {
          value: 1,
          description: "Zapaliłem",
        },
        {
          value: 0,
          description: "Nie zapaliłem",
        },
        {
          value: 1,
          description: "Zapaliłem",
        },
        {
          value: 0,
          description: "Nie zapaliłem",
        },
      ],
      [
        {
          value: 1,
          description: "Zapaliłem",
        },
        {
          value: 0,
          description: "Nie zapaliłem",
        },
        {
          value: 1,
          description: "Zapaliłem",
        },
        {
          value: 0,
          description: "Nie zapaliłem",
        },
      ],
    ],
  },
];

export default diaries;
