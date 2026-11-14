import { z } from "zod";

const portfolioLinkSchema = z.object({
  label: z.string().trim().min(1).max(40),
  url: z.url()
});

const portfolioProjectSchema = z.object({
  id: z.string().min(1),
  title: z.string().trim().min(1).max(100),
  summary: z.string().trim().min(1).max(500),
  coverImage: z.url().optional(),
  projectUrl: z.url().optional(),
  repositoryUrl: z.url().optional(),
  technologies: z.array(z.string().trim().min(1).max(40)).max(20)
});

export const portfolioProfileSchema = z.object({
  displayName: z.string().trim().min(1).max(80),
  headline: z.string().trim().min(1).max(120),
  bio: z.string().trim().max(1200),
  location: z.string().trim().max(100).optional(),
  avatarUrl: z.url().optional(),
  links: z.array(portfolioLinkSchema).max(12),
  projects: z.array(portfolioProjectSchema).max(50)
});

export type PortfolioProfileInput = z.infer<typeof portfolioProfileSchema>;
