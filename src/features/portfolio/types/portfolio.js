/**
 * Portfolio domain contracts documented with JSDoc instead of TypeScript.
 *
 * @typedef {{ label: string, url: string }} PortfolioLink
 * @typedef {{ id: string, title: string, summary: string, coverImage?: string, projectUrl?: string, repositoryUrl?: string, technologies: string[] }} PortfolioProject
 * @typedef {{ displayName: string, headline: string, bio: string, location?: string, avatarUrl?: string, links: PortfolioLink[], projects: PortfolioProject[] }} PortfolioProfile
 * @typedef {{ id: string, slug: string, ownerId: string, title: string, description: string, profile: PortfolioProfile, createdAt: string, updatedAt: string, publishedAt?: string }} PortfolioDocument
 */
export {};
