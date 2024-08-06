export interface Company {
  id: number;
  name: string;
  password: string;
  professional_list: string[];
}

export interface Professional {
  id: number;
  username: string;
  password: string;
  primary_skill: string;
  company_list: string[];
}

export interface DB {
  company: Company[];
  professional: Professional[];
}

export const db = {
  company: [
    {
      id: 24,
      name: "GamingSoft",
      password: "235#$sd",
      professional_list: ["john_doe", "jane23", "mike_wilson", "emily_brown"],
    },
    {
      id: 23,
      name: "ReadStong",
      password: "235#$sd",
      professional_list: ["john_doe", "alex_smith", "sarah_jones", "david_johnson"],
    },
  ],
  professional: [
    {
      id: 12,
      username: "john_doe",
      password: "123Qwer",
      primary_skill: "Software Developer",
      company_list: ["ReadStong", "GamingSoft"],
    },
    {
      id: 13,
      username: "jane23",
      password: "123Qwer",
      primary_skill: "UI/UX Designer",
      company_list: ["GamingSoft"],
    },
    {
      id: 14,
      username: "alex_smith",
      password: "password123",
      primary_skill: "Software Developer",
      company_list: ["ReadStong"],
    },
    {
      id: 15,
      username: "sarah_jones",
      password: "password123",
      primary_skill: "Software Developer",
      company_list: ["ReadStong"],
    },
    {
      id: 16,
      username: "mike_wilson",
      password: "password123",
      primary_skill: "QA Engineer",
      company_list: ["GamingSoft"],
    },
    {
      id: 17,
      username: "emily_brown",
      password: "password123",
      primary_skill: "QA Engineer",
      company_list: ["GamingSoft"],
    },
    {
      id: 18,
      username: "david_johnson",
      password: "password123",
      primary_skill: "Software Developer",
      company_list: ["ReadStong"],
    },
  ],
};

export default db;
