import { getCollection, type CollectionEntry } from "astro:content";

export const cvData = await getCollection("cv");
export const skillData = cvData.filter(
  (cvCategory) => cvCategory.id == "skills"
);
export const personalProjectData = cvData.filter(
  (cvCategory) => cvCategory.id == "personal projects"
);
export const workExperienceData = cvData.filter(
  (cvCategory) => cvCategory.id == "work experience"
);
export const educationData = cvData.filter(
  (cvCategory) => cvCategory.id == "education"
);
export const mathData = cvData.filter(
  (cvCategory) => cvCategory.id == "math"
);
