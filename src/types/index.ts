export type ContactValues = {
  name: string;
  email: string;
  message: string;
};

export type Experience = {
  id: string;
  jobTitle: string;
  company: string;
  dateRange: string;
  description: string;
};

export type Project = {
  id: string;
  name: string;
  descriptionKey: string;
  image: string;
  repository: string;
  website: string;
  skills: string[];
};

export type Skill = {
  id: string;
  name: string;
  icon: string;
};
