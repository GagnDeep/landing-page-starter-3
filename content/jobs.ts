import { Job } from "@/schemas/content"

export const jobs: Job[] = [
  {
    id: "req-101",
    title: "Senior Inland Marine Underwriter",
    company: "{{VERIFY: Company Name}}",
    location: "Chicago, IL (Hybrid)",
    salaryRange: {
      value: "{{VERIFY: Salary Range}}",
      source: "{{VERIFY: Job Posting Source}}",
      verificationDate: "2024-03-12",
    },
    postedDate: "2024-03-10",
  },
  {
    id: "req-102",
    title: "Underwriting Director, Cyber",
    company: "{{VERIFY: Company Name}}",
    location: "New York, NY (Remote)",
    salaryRange: {
      value: "{{VERIFY: Salary Range}}",
      source: "{{VERIFY: Job Posting Source}}",
      verificationDate: "2024-03-12",
    },
    postedDate: "2024-03-11",
  },
  {
    id: "req-103",
    title: "Portfolio Manager",
    company: "Chubb",
    location: "Chicago, IL",
    salaryRange: { value: "{{VERIFY: Chubb Portfolio Manager Salary}}", source: "Unknown", verificationDate: "2024-03-01" },
    postedDate: "2024-03-01",
  }
]
