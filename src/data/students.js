// Sample data. Replace with a real API later.
export const ME = {
  id: "me", name: "You", dept: "Computer Science", year: 2,
  bio: "Happy to explain code. Desperate to learn design and Spanish.",
  teach: ["Python", "Guitar"], learn: ["UI Design", "Spanish", "Public Speaking"],
};

export const STUDENTS = [
  { id: "s1", name: "Aanya Sharma", dept: "Design", year: 3, bio: "Figma nerd, chai enthusiast.", teach: ["UI Design", "Sketching"], learn: ["Python", "Web Dev"] },
  { id: "s2", name: "Rohan Mehta", dept: "Mechanical", year: 2, bio: "Builds robots on weekends.", teach: ["Arduino", "Thermodynamics"], learn: ["Guitar", "Data Analysis"] },
  { id: "s3", name: "Sofia Alvarez", dept: "Exchange student", year: 3, bio: "Native Spanish speaker.", teach: ["Spanish", "Cooking"], learn: ["Web Dev", "Chess"] },
  { id: "s4", name: "Kabir Singh", dept: "Electronics", year: 4, bio: "Placement season survivor.", teach: ["Resume Writing", "Public Speaking"], learn: ["Machine Learning", "Piano"] },
  { id: "s5", name: "Meera Iyer", dept: "Mathematics", year: 1, bio: "Calculus is just a love story.", teach: ["Calculus", "Chess"], learn: ["Photo Editing", "Singing"] },
  { id: "s6", name: "Dev Patel", dept: "Computer Science", year: 3, bio: "Gym, gaming, and grad school prep.", teach: ["Machine Learning", "Web Dev"], learn: ["Public Speaking", "Budgeting"] },
  { id: "s7", name: "Ishita Rao", dept: "Architecture", year: 2, bio: "Sketchbook always open.", teach: ["Sketching", "Photo Editing", "Video Editing"], learn: ["Python", "Japanese"] },
  { id: "s8", name: "Yuki Tanaka", dept: "Biotech", year: 2, bio: "Anime taught me Japanese. Really.", teach: ["Japanese", "Piano"], learn: ["Guitar", "Spanish"] },
];

export const INCOMING = [
  { id: "i1", from: "s2", skill: "Guitar", message: "Can you teach me basic chords? I can help with Arduino in return.", status: "Pending" },
  { id: "i2", from: "s7", skill: "Python", message: "Need help with loops for my studio project!", status: "Pending" },
];
