export type Language = "pl" | "en";

export const brandName = "LUMIÈRE Bistro";

export function getInitialLanguage(value: string | string[] | undefined): Language {
  const language = Array.isArray(value) ? value[0] : value;

  return language === "en" ? "en" : "pl";
}

export const common = {
  pl: {
    reserve: "Zarezerwuj stolik",
    menu: "Zobacz menu",
    backHome: "Powrót na stronę główną",
    language: "Język",
    polish: "PL",
    english: "EN",
    nav: {
      about: "O nas",
      dishes: "Dania",
      menu: "Menu",
      gallery: "Galeria",
      contact: "Kontakt",
    },
  },
  en: {
    reserve: "Book a table",
    menu: "View menu",
    backHome: "Back to home",
    language: "Language",
    polish: "PL",
    english: "EN",
    nav: {
      about: "About",
      dishes: "Dishes",
      menu: "Menu",
      gallery: "Gallery",
      contact: "Contact",
    },
  },
} as const;

export const landingCopy = {
  pl: {
    heroEyebrow: "Nowoczesna kuchnia europejska w sercu miasta",
    heroTitle: "LUMIÈRE Bistro",
    heroSlogan: "Ciepłe światło, sezonowe smaki i wieczory, do których chce się wracać.",
    heroNote: "Kolacje degustacyjne, kameralne rezerwacje i menu oparte na lokalnych produktach.",
    openToday: "Dziś otwarte",
    openHours: "12:00 - 23:00",
    rating: "4.9 / 5 od gości",
    aboutTitle: "Elegancja bez dystansu",
    aboutLead:
      "LUMIÈRE Bistro łączy klimat przytulnej restauracji sąsiedzkiej z dopracowaną, współczesną kuchnią europejską.",
    aboutBody:
      "Gotujemy sezonowo, spokojnie i z uwagą na detal: od maślanych sosów, przez pieczone warzywa, po desery podawane przy stoliku. Wnętrze opiera się na ciemnej zieleni, miękkim świetle i naturalnych fakturach, dzięki czemu dobrze sprawdza się na randkę, rodzinny obiad i biznesową kolację.",
    stats: [
      ["38", "miejsc przy stolikach"],
      ["14", "win na kieliszki"],
      ["7", "dni sezonowego menu"],
    ],
    dishesTitle: "Dania sygnowane",
    dishesLead: "Krótka karta, precyzyjne smaki i produkty, które grają pierwszą rolę.",
    menuTitle: "Podgląd menu",
    menuLead: "Przykładowe pozycje z aktualnej karty. Pełne menu dopasowujemy do sezonu.",
    galleryTitle: "Galeria",
    galleryLead: "Materiały wizualne przygotowane jako eleganckie placeholdery do portfolio.",
    testimonialsTitle: "Opinie gości",
    testimonialsLead: "Krótko, konkretnie i wiarygodnie, tak jak na stronie lokalnego biznesu.",
    ctaTitle: "Zaplanuj wieczór w LUMIÈRE",
    ctaText:
      "Wybierz datę, liczbę gości, pakiet kolacji i metodę płatności. Formularz pokaże podsumowanie rezerwacji przed wysłaniem.",
    contactTitle: "Kontakt",
    addressLabel: "Adres",
    address: "ul. Świetlista 14, 00-128 Warszawa",
    hoursLabel: "Godziny otwarcia",
    hours: ["Pon - Czw: 12:00 - 22:00", "Pt - Sob: 12:00 - 23:30", "Ndz: 12:00 - 21:00"],
    phoneLabel: "Telefon",
    phone: "+48 512 884 019",
    socialsLabel: "Social media",
    footer: "Portfolio concept dla eleganckiej restauracji lokalnej.",
  },
  en: {
    heroEyebrow: "Modern European dining in the heart of the city",
    heroTitle: "LUMIÈRE Bistro",
    heroSlogan: "Warm light, seasonal flavors, and evenings worth returning to.",
    heroNote: "Tasting dinners, intimate reservations, and a menu built around local produce.",
    openToday: "Open today",
    openHours: "12:00 - 23:00",
    rating: "4.9 / 5 guest rating",
    aboutTitle: "Elegance without distance",
    aboutLead:
      "LUMIÈRE Bistro blends the comfort of a neighborhood dining room with polished modern European cuisine.",
    aboutBody:
      "We cook seasonally, calmly, and with close attention to detail: buttery sauces, roasted vegetables, and desserts finished at the table. The interior uses deep green, soft lighting, and natural textures, making it ideal for dates, family lunches, and business dinners.",
    stats: [
      ["38", "seats at tables"],
      ["14", "wines by the glass"],
      ["7", "days of seasonal menu"],
    ],
    dishesTitle: "Signature dishes",
    dishesLead: "A short menu, precise flavors, and ingredients with a leading role.",
    menuTitle: "Menu preview",
    menuLead: "Sample dishes from the current card. The full menu follows the season.",
    galleryTitle: "Gallery",
    galleryLead: "Portfolio-ready elegant placeholder visuals for a local restaurant website.",
    testimonialsTitle: "Guest opinions",
    testimonialsLead: "Short, specific, and credible, just like a real local business page.",
    ctaTitle: "Plan an evening at LUMIÈRE",
    ctaText:
      "Choose date, guest count, dinner package, and payment method. The form shows a clear reservation summary before sending.",
    contactTitle: "Contact",
    addressLabel: "Address",
    address: "14 Swietlista St., 00-128 Warsaw",
    hoursLabel: "Opening hours",
    hours: ["Mon - Thu: 12:00 - 22:00", "Fri - Sat: 12:00 - 23:30", "Sun: 12:00 - 21:00"],
    phoneLabel: "Phone",
    phone: "+48 512 884 019",
    socialsLabel: "Social links",
    footer: "Portfolio concept for an elegant local restaurant.",
  },
} as const;

export const signatureDishes = [
  {
    image: "/lumiere-dish-salmon.png",
    price: "74 PLN",
    pl: {
      name: "Łosoś w maśle palonym",
      description: "Krem z selera, koper włoski, cytrusowy beurre blanc i olej ziołowy.",
    },
    en: {
      name: "Brown butter salmon",
      description: "Celeriac cream, fennel, citrus beurre blanc, and herb oil.",
    },
  },
  {
    image: "/lumiere-dish-duck.png",
    price: "89 PLN",
    pl: {
      name: "Pierś z kaczki i wiśnia",
      description: "Pieczone buraki, sos wiśniowy, chrupiąca gryka i tymianek.",
    },
    en: {
      name: "Duck breast with cherry",
      description: "Roasted beets, cherry jus, toasted buckwheat, and thyme.",
    },
  },
  {
    image: "/lumiere-dish-ravioli.png",
    price: "62 PLN",
    pl: {
      name: "Ravioli z ricottą",
      description: "Szałwiowe masło, krem porowy, parmezan i prażone orzechy.",
    },
    en: {
      name: "Ricotta ravioli",
      description: "Sage butter, leek cream, parmesan, and toasted nuts.",
    },
  },
  {
    image: "/lumiere-dish-dessert.png",
    price: "39 PLN",
    pl: {
      name: "Tarta miodowa",
      description: "Gruszka, wanilia, solony karmel i lody z palonego masła.",
    },
    en: {
      name: "Honey tart",
      description: "Pear, vanilla, salted caramel, and brown butter ice cream.",
    },
  },
] as const;

export const menuSections = [
  {
    pl: { title: "Przystawki" },
    en: { title: "Starters" },
    items: [
      {
        price: "36 PLN",
        pl: { name: "Tatar z pieczonego buraka", note: "kozi ser, pestki dyni, zioła" },
        en: { name: "Roasted beet tartare", note: "goat cheese, pumpkin seeds, herbs" },
      },
      {
        price: "42 PLN",
        pl: { name: "Krem z topinamburu", note: "oliwa szczypiorkowa, grzanki brioche" },
        en: { name: "Jerusalem artichoke cream", note: "chive oil, brioche croutons" },
      },
    ],
  },
  {
    pl: { title: "Dania główne" },
    en: { title: "Mains" },
    items: [
      {
        price: "74 PLN",
        pl: { name: "Łosoś w maśle palonym", note: "seler, koper włoski, beurre blanc" },
        en: { name: "Brown butter salmon", note: "celeriac, fennel, beurre blanc" },
      },
      {
        price: "89 PLN",
        pl: { name: "Pierś z kaczki", note: "burak, wiśnia, chrupiąca gryka" },
        en: { name: "Duck breast", note: "beetroot, cherry, toasted buckwheat" },
      },
      {
        price: "62 PLN",
        pl: { name: "Ravioli z ricottą", note: "szałwia, por, parmezan" },
        en: { name: "Ricotta ravioli", note: "sage, leek, parmesan" },
      },
    ],
  },
  {
    pl: { title: "Desery" },
    en: { title: "Desserts" },
    items: [
      {
        price: "39 PLN",
        pl: { name: "Tarta miodowa", note: "gruszka, wanilia, solony karmel" },
        en: { name: "Honey tart", note: "pear, vanilla, salted caramel" },
      },
      {
        price: "34 PLN",
        pl: { name: "Mus czekoladowy 70%", note: "malina, oliwa, sól morska" },
        en: { name: "70% chocolate mousse", note: "raspberry, olive oil, sea salt" },
      },
    ],
  },
] as const;

export const galleryImages = [
  { src: "/lumiere-gallery-interior.png", altPl: "Eleganckie wnętrze restauracji", altEn: "Elegant restaurant interior" },
  { src: "/lumiere-gallery-table.png", altPl: "Nakryty stolik przy świecach", altEn: "Candlelit table setting" },
  { src: "/lumiere-gallery-wine.png", altPl: "Kieliszki i karta win", altEn: "Wine glasses and wine list" },
] as const;

export const testimonials = [
  {
    pl: {
      quote: "Piękne wnętrze, spokojna obsługa i karta, która nie próbuje być wszystkim naraz.",
      author: "Marta K.",
    },
    en: {
      quote: "A beautiful room, calm service, and a menu that does not try to be everything at once.",
      author: "Marta K.",
    },
  },
  {
    pl: {
      quote: "Idealne miejsce na kolację we dwoje. Kaczka i tarta miodowa zostały w pamięci.",
      author: "Adam P.",
    },
    en: {
      quote: "The perfect place for dinner for two. The duck and honey tart stayed with us.",
      author: "Adam P.",
    },
  },
  {
    pl: {
      quote: "Strona wygląda tak, jak restauracja smakuje: elegancko, ciepło i bez przesady.",
      author: "Joanna R.",
    },
    en: {
      quote: "The website feels like the restaurant tastes: elegant, warm, and never overdone.",
      author: "Joanna R.",
    },
  },
] as const;

export const reservationCopy = {
  pl: {
    eyebrow: "Rezerwacja online",
    title: "Zarezerwuj stolik",
    lead: "Wypełnij formularz, wybierz metodę płatności i sprawdź podsumowanie kosztów przed wysłaniem.",
    fullName: "Imię i nazwisko",
    phone: "Numer telefonu",
    guests: "Liczba gości",
    date: "Data rezerwacji",
    time: "Godzina",
    package: "Pakiet",
    payment: "Metoda płatności",
    coupon: "Kod rabatowy",
    couponPlaceholder: "np. LUMIERE10",
    summary: "Podsumowanie",
    subtotal: "Suma częściowa",
    discount: "Rabat",
    total: "Razem",
    depositInfo: "Kwota pokazuje opłatę rezerwacyjną lub wybrany pakiet kolacji.",
    submit: "Wyślij rezerwację",
    success: "Dziękujemy. Rezerwacja została przygotowana do potwierdzenia telefonicznego.",
    included: "W cenie",
    couponApplied: "Kod rabatowy aktywny.",
    couponInvalid: "Ten kod nie jest aktywny.",
    paymentMethods: {
      card: "Karta płatnicza",
      blik: "BLIK",
      transfer: "Przelew",
      onsite: "Płatność na miejscu",
    },
  },
  en: {
    eyebrow: "Online reservation",
    title: "Book a table",
    lead: "Fill in the form, choose a payment method, and review the cost summary before sending.",
    fullName: "Full name",
    phone: "Phone number",
    guests: "Guests",
    date: "Reservation date",
    time: "Time",
    package: "Package",
    payment: "Payment method",
    coupon: "Discount coupon",
    couponPlaceholder: "e.g. LUMIERE10",
    summary: "Summary",
    subtotal: "Subtotal",
    discount: "Discount",
    total: "Total",
    depositInfo: "The amount shows either a reservation deposit or the selected dinner package.",
    submit: "Send reservation",
    success: "Thank you. Your reservation is ready for phone confirmation.",
    included: "Included",
    couponApplied: "Discount code active.",
    couponInvalid: "This code is not active.",
    paymentMethods: {
      card: "Payment card",
      blik: "BLIK",
      transfer: "Bank transfer",
      onsite: "Pay on site",
    },
  },
} as const;

export const reservationPackages = [
  {
    id: "standard",
    price: 80,
    perGuest: false,
    pl: {
      name: "Stolik à la carte",
      description: "Opłata rezerwacyjna odliczana od rachunku.",
      included: "Rezerwacja stolika, woda filtrowana, obsługa gości.",
    },
    en: {
      name: "A la carte table",
      description: "Reservation deposit deducted from the bill.",
      included: "Table reservation, filtered water, guest service.",
    },
  },
  {
    id: "tasting",
    price: 260,
    perGuest: true,
    pl: {
      name: "Menu degustacyjne",
      description: "Pięć sezonowych dań w rytmie LUMIÈRE.",
      included: "5 dań, amuse-bouche, pieczywo i masło ziołowe.",
    },
    en: {
      name: "Tasting menu",
      description: "Five seasonal courses in the LUMIÈRE rhythm.",
      included: "5 courses, amuse-bouche, bread, and herb butter.",
    },
  },
  {
    id: "celebration",
    price: 340,
    perGuest: true,
    pl: {
      name: "Kolacja celebracyjna",
      description: "Menu degustacyjne z selekcją win i deserem przy stoliku.",
      included: "5 dań, pairing 3 win, deser i personalizowana kartka.",
    },
    en: {
      name: "Celebration dinner",
      description: "Tasting menu with wine selection and a tableside dessert.",
      included: "5 courses, 3-wine pairing, dessert, and a personalized card.",
    },
  },
] as const;

export const coupons: Record<string, number> = {
  LUMIERE10: 0.1,
  WEEKDAY15: 0.15,
};
