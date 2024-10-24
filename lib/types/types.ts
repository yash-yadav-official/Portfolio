import { LucideIcon } from "lucide-react";

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  summary: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  link: string;
}

export interface PageState {
  skills: number;
  projects: number;
  education: number;
}


export interface EducationTabProps {
  education: Education[];
  currentPage: PageState;
  paginateData: <T>(data: T[], page: number) => T[];
}

export interface ProfileTabProps {
  personalInfo: PersonalInfo;
}


export interface SkillsTabProps {
  skills: Skill[];
  currentPage: PageState;
  paginateData: <T>(data: T[], page: number) => T[];
}

export interface ProjectsTabProps {
  projects: Project[];
  currentPage: PageState;
}


export interface UpdatePageButtonProps {
  direction: 'prev' | 'next'
  currentPage: number
  totalPages: number
  onUpdate: (newPage: number) => void
}