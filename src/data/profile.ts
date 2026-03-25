export type CertType = "professional" | "event" | "path";

export const profile = {
  name: "Sair",
  alias: "also known as SairSides",
  bio: "I’m Sair (SairSides), a beginner cybersecurity specialist and aspiring pentester/security engineer focused on ethical hacking labs, defensive security fundamentals, and continuous hands-on learning.",

  socials: [
  {
    label: "TryHackMe",
    url: "https://tryhackme.com/p/Saihacke",
    icon: "https://assets.tryhackme.com/img/logo/tryhackme_logo_full.svg"
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/kurshad-yusifbayli-1b7bb73b5/",
    icon: "/icons/linkedin.svg"
  },
  {
    label: "Discord",
    url: "https://discord.com/users/928567350263963678",
    subtext: "@sairsides",
    icon: "/icons/discord.svg"
  }
  ],

  certificates: [
    {
      title: "Pre Security (SEC0) Certification",
      issuer: "TryHackMe",
      issued: "March 22, 2026",
      validity: "3 Years",
      type: "professional" as CertType,
      url: "https://assets.tryhackme.com/certification-certificate/69bfb582648dd68af073f502.pdf"
    },
    {
      title: "LoveAtFirstBreach",
      issuer: "TryHackMe",
      issued: "2026",
      validity: "N/A",
      type: "event" as CertType,
      url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-5ZFVFTQGES.pdf"
    },
    {
      title: "Pre Security Path Completion",
      issuer: "TryHackMe",
      issued: "2026",
      validity: "N/A",
      type: "path" as CertType,
      url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-CBNUVGCJUS.pdf"
    }
  ],

  badges: [
    {
      label: "Network Fundamentals Badge",
      url: "https://tryhackme.com/Saihacke/badges/network-fundamentals?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6864fa1215e69f1e01770c05",
      icon: "https://assets.tryhackme.com/img/badges/networkfundamentals.png"
    },
    {
      label: "World Wide Web Badge",
      url: "https://tryhackme.com/Saihacke/badges/world-wide-web?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6864fa1215e69f1e01770c05",
      icon: "https://assets.tryhackme.com/img/badges/howthewebworks.png"
    },
    {
      label: "Web Fund Badge",
      url: "https://tryhackme.com/Saihacke/badges/web-fund?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6864fa1215e69f1e01770c05",
      icon: "https://assets.tryhackme.com/img/badges/webbed.png"
    },
    {
      label: "Terminaled Badge",
      url: "https://tryhackme.com/Saihacke/badges/terminaled?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6864fa1215e69f1e01770c05",
      icon: "https://assets.tryhackme.com/img/badges/linux.png"
    },
    {
      label: "First Step Into SOC Badge",
      url: "https://tryhackme.com/Saihacke/badges/first-step-into-soc?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6864fa1215e69f1e01770c05",
      icon: "https://assets.tryhackme.com/img/badges/first-step-into-soc.png"
    }
  ],

  iframeSrc: "https://tryhackme.com/api/v2/badges/public-profile?userPublicId=5095391"
};