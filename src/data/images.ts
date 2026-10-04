/**
 * ALL site imagery lives here. Replace any URL with your own photo
 * (keep the same key) and it updates everywhere on the site.
 */
export const images = {
  logo: "/logo.webp",

  // Hero slider
  heroWing: "/044e606e-05dc-4ab5-a634-3f17d103a589.webp",
  heroRedSea: "/a5e4fe93-d5c3-4129-9c5c-cdb2863bc8c5.webp",
  heroMakkah: "/cbc23798-1eae-423c-a32e-07b781466129.webp",
  heroPassport: "/a4bb66cc-9ff5-49ea-8c93-82d1982fd11b.webp",

  // CTA banner
  ctaDesert: "/af444f5f-cb49-4a71-af37-a85c426b5f86.webp",

  // About / general travel
  airport: "/874ae71d-38e6-4dcd-ba44-81692ac396cd.webp",
  planeWindow: "/381817f3-3934-483b-b728-1ae90aa7bbbb.webp",
  familyTravel: "/ee175449-1c08-4dd2-b663-2429620f9c45.webp",

  // Dahab
  dahabBlueHole: "/04f6a63c-1889-49f8-a1af-bdfb2b5d930c.webp",
  dahabCoast: "/01773c34-2ba5-4bcc-b5aa-1b42c2f16a20.webp",
  dahabBedouin: "/9867bfa6-b9ac-43a0-a04c-23d92cd7320b.webp",
  // Sharm El Sheikh
  sharmReef: "/63ea6037-9f39-4df5-9434-0a6b4a6dc662.webp",
  sharmBoat: "/71397252-e359-4d57-abac-d58831119540.webp",
  sharmResort: "/e3060485-d8cc-4b0f-a26b-3e8ea300c21a.webp",
  // Hurghada
  hurghadaGiftun: "/b4355e49-8fe8-4cec-9f86-721e9d19d02b.webp",
  hurghadaMarina: "/4ffd7444-6335-403e-9bab-ab42bbb0488e.webp",
  hurghadaSafari: "/cb8f5e2d-c769-4689-b4c2-b3a3f1b5bd00.webp",
  // Nuweiba
  nuweibaCamp: "/4aa7caa8-3453-4406-a0a2-4485f4d13ded.webp",
  nuweibaCanyon: "/e5cffc38-23f5-4690-a261-bf424136d1db.webp",
  nuweibaStars: "/feec5b80-c2b6-4ca7-b07c-86a1dfa10707.webp",
  // Saint Catherine
  catherineMonastery: "/caa92309-f133-42b5-af19-c08c5efa69c1.webp",
  catherineSunrise: "/a9a88b4b-e504-4768-853f-149a9288bfb5.webp",
  catherineWadi: "/598fbb6d-a44c-415e-90c4-75b1c93d343c.webp",
  // Ras Sedr
  sedrKite: "/37e4fe3f-56b3-483c-af63-07a1e90af5b9.webp",
  sedrBeach: "/0effa8d2-0a5a-4a9b-8ef6-9d7deadebc5c.webp",
  sedrBbq: "/8d7c3a22-ec5c-4904-81a5-d4493b1c99a9.webp",
  // Ain Sokhna
  sokhnaResort: "/f2e872a2-ddc9-4415-8f24-ddd810c142aa.webp",
  sokhnaCafe: "/65b3f074-c3d0-496b-b21c-f61ec6f4be8f.webp",
  sokhnaPool: "/742f413e-40fb-45ed-be51-0b409b1064f7.webp",

  // Gulf
  dubai: "/907a6e5a-4ea8-4055-a03b-b119354c3d83.webp",
  abuDhabi: "/9799c272-6f26-4028-bf19-e14d50f58c9d.webp",
  doha: "/62a41008-915c-4e31-a1cc-a9d2e118c732.webp",
  riyadh: "/e28bddb4-feac-44b1-817e-49b949e614cc.webp",
  kuwait: "/2585314f-8357-435d-8542-3fbfb1d5ac78.webp",
  muscat: "/37ac4906-a30d-4cbf-8e22-256aefd614a9.webp",
  manama: "/9edf8f8d-f990-4d7b-af1d-4ee3cfee6a9f.webp",
  dubaiMarina: "/gulf-dubai-marina.webp",
  burjAlArabResort: "/gulf-burj-al-arab-resort.webp",

  // Europe
  paris: "/066e11b9-d7a9-478a-91e7-3c8ed50ac652.webp",
  rome: "/171899d7-7584-47be-864e-62e7d2448a01.webp",
  barcelona: "/5b2075d7-d154-4621-b6f7-a60a60c6235a.webp",
  vienna: "/8f6e9219-801c-4340-aec0-a8d6df3978cf.webp",
  santorini: "/1a7e5830-15e4-4f15-a4f9-55f60dce0cf6.webp",
  amsterdam: "/390c31bb-81cc-4a82-8474-c4795991880c.webp",

  // Umrah
  madinah: "/34d84f05-e48f-44af-ab49-b86af7862d13.webp",
  umrahHotel: "/852608a6-c561-40c6-8ca9-bd971eb8d071.webp",
  ramadan: "/12188c3b-11c7-4651-bc43-ab80f74bd5e0.webp",
  haramNight: "/umrah-haram-night.webp",
  haramDusk: "/umrah-haram-dusk.webp"
} as const;

export type ImageKey = keyof typeof images;