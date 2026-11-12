export const SKILLS = [
  ["Python", "Tech"], ["Web Dev", "Tech"], ["Data Analysis", "Tech"], ["Arduino", "Tech"], ["Machine Learning", "Tech"],
  ["UI Design", "Design"], ["Photo Editing", "Design"], ["Video Editing", "Design"], ["Sketching", "Design"],
  ["Guitar", "Music"], ["Singing", "Music"], ["Piano", "Music"],
  ["Spanish", "Languages"], ["French", "Languages"], ["Japanese", "Languages"], ["Public Speaking", "Languages"],
  ["Calculus", "Academics"], ["Thermodynamics", "Academics"], ["Resume Writing", "Academics"],
  ["Chess", "Life"], ["Cooking", "Life"], ["Budgeting", "Life"],
];
export const CATEGORIES = ["Tech", "Design", "Music", "Languages", "Academics", "Life"];
export const CAT_COLOR = { Tech: "bg-sky", Design: "bg-blush", Music: "bg-sun", Languages: "bg-mint", Academics: "bg-lilac", Life: "bg-orange-200" };
export const catOf = (name) => (SKILLS.find(([n]) => n.toLowerCase() === name.toLowerCase()) || [])[1];
