import type { Dictionary } from './ar';

/** English UI dictionary — professional adaptation of the Arabic content. */
export const en: Dictionary = {
  meta: {
    title: 'Rahhal Travel & Tourism | Trips, Umrah & Visas',
    description: 'Rahhal Travel & Tourism: domestic trips across Egypt, Umrah packages, and Gulf & Europe visas with clear, upfront pricing. Book today.',
    ogLocale: 'en_US'
  },
  brand: {
    name: 'Rahhal',
    full: 'Rahhal Travel & Tourism',
    logoAlt: 'Rahhal Travel & Tourism logo',
    homeLink: 'Rahhal – back to home'
  },
  a11y: {
    skip: 'Skip to main content',
    mainNav: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchLang: 'Choose language',
    langSwitched: 'Language switched to English',
    prev: 'Previous',
    next: 'Next',
    goToSlide: 'Go to slide',
    pauseSlider: 'Pause slideshow',
    playSlider: 'Play slideshow',
    close: 'Close',
    backToTop: 'Back to top',
    whatsappFloat: 'Chat with us on WhatsApp',
    callFloat: 'Call us now',
    openImage: 'View full-size image',
    imageCounter: 'Image',
    of: 'of',
    mapTitle: 'Map showing the Rahhal office location',
    placeholderNote: 'Details to be added',
    opensNewTab: '(opens in a new tab)',
    loading: 'Loading',
    stars: 'stars'
  },
  topbar: {
    call: 'Call',
    whatsapp: 'WhatsApp',
    hours: '[Sat – Thu, 10 AM – 8 PM]',
    hoursLabel: 'Opening hours'
  },
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    trips: 'Trips',
    visas: 'Visas',
    testimonials: 'Testimonials',
    location: 'Location',
    inquiry: 'Inquiry',
    contact: 'Contact',
    book: 'Book Now',
    tripsMenu: {
      domestic: 'Domestic Trips',
      international: 'International Trips',
      umrah: 'Umrah & Hajj'
    }
  },
  hero: {
    srTitle: 'Rahhal Travel & Tourism – Your journey starts here',
    whatsappCta: 'Chat with us on WhatsApp'
  },
  search: {
    label: 'Quick offer search',
    service: 'Service type',
    servicePlaceholder: 'Choose a service',
    options: {
      domestic: 'Domestic trip',
      international: 'International trip',
      umrah: 'Umrah',
      visa: 'Visa'
    },
    destination: 'Destination',
    destinationPlaceholder: 'Where would you like to go?',
    date: 'Expected travel date',
    submit: 'Find an offer'
  },
  stats: {
    label: 'Rahhal in numbers'
  },
  about: {
    title: 'Meet Rahhal',
    p1: 'Rahhal is an Egyptian travel and tourism company founded with one simple goal: to make your journey — from the very first question to the moment you return home — comfortable, transparent and dependable. We bring everything together in one place: domestic getaways to the most beautiful destinations in Sinai and the Red Sea, Gulf visas and travel, European trips and Umrah programs, all handled by a team that knows the details of travel inside out.',
    p2: 'We believe travel is more than a ticket and a hotel — it is memories that stay with you. That is why we care about the small things: choosing the right hotel, timing your trip well, reviewing every document, answering every question quickly, and standing by you throughout your journey.',
    license: 'Company license: [License number / Commercial registration number]',
    visionTitle: 'Our Vision',
    vision: 'To be the first choice for Egyptian travelers who value trust, quality and effortless booking.',
    missionTitle: 'Our Mission',
    mission: 'To deliver professional travel and tourism services at fair, transparent prices, simplify travel and visa procedures for our clients, and treat every client as a special guest.',
    valuesTitle: 'Our Values',
    cta: 'Explore our services',
    experienceBadge: '[+00] years',
    experienceLabel: 'of experience in travel & tourism'
  },
  services: {
    title: 'Everything you need for your trip, in one place',
    explore: 'Discover more'
  },
  trips: {
    title: 'Choose your next journey',
    tabsLabel: 'Trip categories',
    tabs: {
      domestic: 'Domestic Trips',
      international: 'International Trips',
      umrah: 'Umrah & Hajj'
    },
    common: {
      durationLabel: 'Suggested duration',
      seasonLabel: 'Best time to visit',
      priceLabel: 'Price',
      price: 'From [____ EGP] per person, depending on season, hotel category and group size',
      highlightsTitle: 'Trip highlights',
      addonsLabel: 'Optional add-ons',
      book: 'Book this trip',
      askWhatsapp: 'Ask about this offer on WhatsApp',
      details: 'Details & photos',
      galleryLabel: 'Photo gallery',
      requestQuote: 'Request a quote',
      askOnWhatsapp: 'Ask on WhatsApp'
    },
    domestic: {
      intro: "Discover Egypt's most beautiful beaches, mountains and deserts. Our domestic programs suit families, young travelers and groups alike, with a range of accommodation options, comfortable transfers and a trip supervisor by your side throughout.",
      includesTitle: 'What our domestic trips usually include (varies by program)',
      includes: [
      'Round-trip transfers by air-conditioned tourist coach or private car, as agreed.',
      'Accommodation in a hotel or resort of the category you choose.',
      'Meals according to the program (breakfast / half board / full board).',
      'A trip supervisor or guide, depending on the program.',
      'The activities and excursions listed in each program.'],

      excludesLabel: 'Not included:',
      excludes: 'Personal expenses, drinks (unless stated otherwise) and optional extra excursions.',
      moreTitle: 'More domestic destinations',
      more: [
      'Luxor & Aswan (cultural trips and Nile programs).',
      'Marsa Alam & El Gouna.',
      'Alexandria, Marsa Matrouh & the North Coast.',
      'Siwa Oasis, Bahariya Oasis & Fayoum.',
      'Combined packages (e.g. Dahab + Saint Catherine, or Sharm El Sheikh + Dahab).']

    },
    international: {
      intro: 'We make traveling abroad easy — from Gulf visas to European tours — managing your documents and bookings end to end so you arrive safely.',
      subTabsLabel: 'International destinations',
      subTabs: { gulf: 'Gulf Travel', europe: 'European Trips' },
      gulf: {
        intro: 'We handle every type of Gulf visa, help you choose the right one for your trip, and review your documents before applying.',
        visaTypesTitle: 'Visa types',
        countriesTitle: 'Countries we serve',
        offerTitle: 'What we offer',
        offer: [
        'Consultation to choose the right visa type for your situation.',
        'Document review and correct preparation of your file.',
        'Submitting your application and following up until the decision.',
        'Flight and hotel bookings when needed.',
        'Travel insurance and transfer services.'],

        programsTitle: 'Gulf tour programs',
        disclaimer: 'Visa approval is the final decision of the issuing authority. Processing times, requirements and fees vary by country, visa type and season, and are subject to updates by official bodies. Contact us for the latest information.',
        cta: 'Apply for your visa'
      },
      europe: {
        intro: 'We assist with tourist and visit visas for Europe, and organize complete trips including flights, hotels and sightseeing programs.',
        destinationsTitle: 'Most requested destinations',
        onRequestLabel: 'Also available on request:',
        servicesTitle: 'Our Europe services',
        services: [
        'Schengen tourist visas and visit visas for European countries.',
        'Preparing your visa file and reviewing it carefully before submission.',
        'Booking your appointment at the visa center when needed.',
        'Flight and hotel reservations that meet visa requirements.',
        'The travel insurance required for Schengen.',
        'Ready-made or fully tailored tour programs.'],

        programsTitle: 'Sample European programs',
        disclaimer: 'The decision to grant a visa rests with the relevant embassy or consulate, and the company is not responsible for that decision. Our role is to prepare your file and follow it up correctly.',
        cta: 'Apply for your visa'
      },
      noteLabel: 'Please note'
    },
    umrah: {
      intro: 'Your spiritual journey deserves the finest organization. We offer Umrah packages with a variety of accommodation and date options, with full support from preparing your documents until you return home.',
      packagesTitle: 'Umrah packages',
      suitedFor: 'Ideal for',
      features: 'Highlights',
      pricesNote: '(Prices and trip dates: [to be added here])',
      includesTitle: 'Packages usually include',
      includes: [
      'Umrah visa.',
      'Round-trip flight tickets.',
      'Accommodation in Makkah and Madinah.',
      'Transfers between cities and to the Haram, depending on the package.',
      'Meals according to the package.',
      'A supervisor and religious guide accompanying the group.',
      'Visits to the holy sites in Makkah and Madinah.'],

      docsTitle: 'Required documents (for guidance)',
      docs: [
      'A passport valid for a sufficient period.',
      'Recent personal photos with a white background.',
      'A copy of your national ID card.',
      'Additional documents depending on the pilgrim’s situation (age, marital status, mahram companion) and current regulations.'],

      hajjTitle: 'Hajj',
      hajjText: 'We welcome Hajj inquiries. Bookings are made in accordance with the official regulations and instructions issued by the competent authorities and the official announcements each year. Contact our team for details and registration dates.',
      license: 'Company license and official capacity to organize Umrah and Hajj: [License number]',
      book: 'Book your Umrah',
      quote: 'Request a quote',
      hajjCta: 'Ask about Hajj'
    }
  },
  visas: {
    title: 'Your visa, without the hassle',
    intro: 'We take care of the whole visa journey for you — from choosing the right type to receiving your visa.',
    stepsTitle: 'How we get your visa done',
    docsTitle: 'Common documents',
    docsNote: 'For guidance only — requirements vary by country and visa type',
    docs: [
    'A valid passport (usually with at least 6 months of validity).',
    'Recent personal photos in the required sizes.',
    'A copy of your national ID card.',
    'Proof of employment, commercial registration or student certificate, as applicable.',
    'A recent bank statement showing financial means (required for many visas).',
    'A provisional flight and hotel booking, or an invitation letter, depending on the visa type.',
    'Travel insurance (mandatory for Schengen visas).'],

    cta: 'Start your visa application'
  },
  why: {
    title: 'Why Rahhal?'
  },
  extra: {
    title: 'We complete your journey'
  },
  howToBook: {
    title: 'How to book',
    subtitle: 'Four simple steps'
  },
  testimonials: {
    title: 'Our clients speak',
    placeholderBadge: 'Reserved for a real customer review',
    placeholderName: '[First name – City]',
    placeholderService: '[Service type]',
    placeholderRating: '[Rating out of 5]',
    placeholderText: '[Customer review here]',
    share: 'Share your feedback',
    rateGoogle: 'Rate us on Google',
    rateBarText: 'Traveled with us? Your review helps other travelers choose.',
    carouselLabel: 'Customer reviews'
  },
  gallery: {
    title: 'Photo gallery'
  },
  cta: {
    title: 'Rahhal… your journey starts here',
    text: 'Domestic trips, Umrah, Gulf and Europe visas, and complete tour programs — everything you need to travel, in one place, safely and with clear prices.',
    book: 'Book your trip now'
  },
  map: {
    title: 'Visit our office',
    addressLabel: 'Address',
    address: '[Full office address – District – Governorate]',
    landmarkLabel: 'Landmark',
    landmark: '[Next to / Opposite ...] to help you find us.',
    hoursLabel: 'Opening hours',
    hours: '[Sat – Thu: 10 AM – 8 PM, Friday: closed or by appointment]',
    openInMaps: 'Open location in Google Maps',
    phoneLabel: 'Phone',
    whatsappLabel: 'WhatsApp',
    directions: 'Get directions',
    callNow: 'Call now'
  },
  inquiry: {
    title: 'Have a question? We’re here',
    intro: 'Leave your details and our team will get back to you within [2 hours] during working hours. Your consultation is free and without obligation.',
    fields: {
      name: 'Full name',
      phone: 'Mobile / WhatsApp number',
      email: 'Email address',
      service: 'Service type',
      destination: 'Destination',
      date: 'Expected travel date',
      travelers: 'Number of travelers',
      adults: 'Adults',
      children: 'Children',
      message: 'Your message or notes'
    },
    placeholders: {
      name: 'Enter your full name',
      phone: '01xxxxxxxxx',
      email: 'name@example.com',
      destination: 'e.g. Dahab, Dubai, Paris',
      message: 'Share any details that help us prepare the best offer for you'
    },
    optional: 'optional',
    selectService: 'Choose a service type',
    serviceOptions: {
      domestic: 'Domestic trip',
      international: 'International trip',
      umrah: 'Umrah',
      hajj: 'Hajj',
      visaGulf: 'Gulf visa',
      visaEurope: 'Europe visa',
      other: 'Other'
    },
    submit: 'Send your inquiry',
    submitting: 'Preparing your message…',
    privacy: 'Your details are kept private and never shared with anyone. We use them only to respond to your inquiry.',
    successTitle: 'Thank you!',
    success: 'We’ve received your inquiry and a Rahhal travel consultant will contact you shortly.',
    successHint: 'We opened a WhatsApp chat with a ready-made message containing your details. If it didn’t open automatically, use the button below.',
    openWhatsapp: 'Open WhatsApp',
    newInquiry: 'Send another inquiry',
    altTitle: 'Prefer a quick reply?',
    whatsappAlt: 'Chat with us now on WhatsApp',
    errorSummary: 'Please check the required fields.',
    errors: {
      nameRequired: 'Please enter your full name.',
      nameShort: 'This name looks too short.',
      phoneRequired: 'Please enter your mobile / WhatsApp number.',
      phoneInvalid: 'This number doesn’t look right — use digits only.',
      emailInvalid: 'Please enter a valid email address.',
      serviceRequired: 'Please choose a service type.',
      countInvalid: 'Enter a valid number.',
      datePast: 'Please choose an upcoming date.'
    },
    waHeader: 'New inquiry from the Rahhal website',
    faqTitle: 'Frequently asked questions'
  },
  contact: {
    title: 'We’d love to hear from you',
    call: 'Phone call',
    whatsapp: 'WhatsApp',
    email: 'Email',
    address: 'Address',
    addressValue: '[Full address]',
    mapLink: 'Location on Google Maps',
    hours: 'Opening hours',
    hoursValue: '[Sat – Thu: 10 AM – 8 PM]',
    facebook: 'Facebook',
    facebookValue: 'Rahhal on Facebook',
    instagram: 'Instagram',
    instagramValue: '[Instagram profile link]',
    tiktok: 'TikTok',
    tiktokValue: '[TikTok profile link]'
  },
  footer: {
    about: 'Rahhal Travel & Tourism — your trusted partner for domestic and international trips, Umrah and visas.',
    quickLinks: 'Quick links',
    services: 'Our services',
    contact: 'Get in touch',
    serviceLinks: {
      domestic: 'Domestic trips',
      gulf: 'Gulf travel',
      europe: 'European trips',
      umrah: 'Umrah & Hajj',
      flights: 'Flights & hotels'
    },
    call: 'Call',
    whatsapp: 'WhatsApp',
    email: 'Email',
    address: 'Address',
    language: 'Language',
    rights: 'All rights reserved © 2026 Rahhal Travel & Tourism',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    cancellation: 'Cancellation & Refund Policy',
    license: 'License no.: [Company license / Commercial registration number]'
  }
};