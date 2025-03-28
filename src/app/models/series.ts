export interface DigimonSeries {
    id: string;
    title: string;
    year: number;
    episodes: number;
    arcs: Arc[];
    description: string;
    imageUrl: string;
  }
  
  export interface Arc {
    name: string;
    startEpisode: number;
    endEpisode: number;
    description: string;
  }