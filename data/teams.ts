export type TeamData = {
  id: string;
  name: string;
  mascot: string;
  colors: string[]; // school colors
  logoUrl: string; // public logo URL
};

export const teams: TeamData[] = [
  {
    id: "duke",
    name: "Duke Blue Devils",
    mascot: "Blue Devil",
    colors: ["#001A57", "#FFFFFF"],
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Duke_Blue_Devils_basketball_logo.svg",
  },
  {
    id: "north_carolina",
    name: "North Carolina Tar Heels",
    mascot: "Rameses",
    colors: ["#4B9CD3", "#FFFFFF"],
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9c/UNC_Tar_Heels_logo.svg",
  },
  {
    id: "gonzaga",
    name: "Gonzaga Bulldogs",
    mascot: "Spike the Bulldog",
    colors: ["#041E42", "#C41230"],
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Gonzaga_Bulldogs_logo.svg",
  },
  {
    id: "kentucky",
    name: "Kentucky Wildcats",
    mascot: "Wildcat",
    colors: ["#005DAA", "#FFFFFF"],
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Kentucky_Wildcats_logo.svg",
  },
  // Add more teams here…
];
