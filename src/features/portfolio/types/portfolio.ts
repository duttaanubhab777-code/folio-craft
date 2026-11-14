export interface PortfolioLink {
  label: string;
  url: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  summary: string;
  coverImage?: string;
  projectUrl?: string;
  repositoryUrl?: string;
  technologies: string[];
}

export interface PortfolioProfile {
  displayName: string;
  headline: string;
  bio: string;
  location?: string;
  avatarUrl?: string;
  links: PortfolioLink[];
  projects: PortfolioProject[];
}

/** Public portfolio contract. Keep editor form state separate from this representation. */
export interface PortfolioDocument {
  id: string;
  slug: string;
  ownerId: string;
  title: string;
  description: string;
  profile: PortfolioProfile;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}
