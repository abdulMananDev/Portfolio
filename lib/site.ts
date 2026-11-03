export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://malikmanan.com"
).replace(/\/$/, "");

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/abdul-manan-malik-81163b1b2/",
  github: "https://github.com/abdulMananDev",
} as const;
