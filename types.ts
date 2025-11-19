
export enum ProjectStatus {
  RELEASED = 'Released',
  IN_PRODUCTION = 'In Production',
  ANNOUNCED = 'Announced'
}

export interface TeamMember {
  role: string;
  name: string;
}

export interface AnimeProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  status: ProjectStatus;
  tags: string[];
  year: string;
  longDescription: string;
  releaseDate: string;
  team: TeamMember[];
}

export interface CharacterIdea {
  name: string;
  role: string;
  description: string;
}

export interface PitchResult {
  title: string;
  logline: string;
  synopsis: string;
  characters: CharacterIdea[];
  visualStyle: string;
}
