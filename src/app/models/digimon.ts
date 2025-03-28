import { Evolution } from "./evolution";

export interface Digimon {
    id: string;
    name: string;
    level: string;
    type: string;
    attribute: string;
    powers: string[];
    partners: Partner[];
    firstAppearance: {
      series: string;
      episode: number;
    };
    evolutions: Evolution[];
    description: string;
    imageUrl: string;
  }

  export interface Partner {
    name: string;
    series: string;
    description: string;
  }