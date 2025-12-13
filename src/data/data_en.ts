import type { LearningData } from "./types";

export const LEARNING_DATA: LearningData[] = [
  // --- WEEK 1: SURVIVAL ---
  {
    day: 1,
    week: 1,
    level: 1,
    title: "Survival: The Auto",
    badgeReward: "Rickshaw Rebel",
    lang: "english", // Explicitly set language
    strategy: {
      title: "The 'Ge' Rule",
      tips: [
        "Add '-ge' to places (Indiranagar-ge).",
        "Say 'Beda' (No) firmly.",
        "Don't ask 'Will you come?', say 'Banni' (Come).",
      ],
    },
    vocab: [
      {
        id: 1,
        kannada: "Naanu / Neevu",
        english: "I / You",
        phonetic: "Naa-nu / Nee-vu",
      },
      {
        id: 2,
        kannada: "Hogi / Banni",
        english: "Go / Come",
        phonetic: "Ko-di / Tho-gol-li",
      },
      { id: 3, kannada: "Nillisi", english: "Stop", phonetic: "Nil-li-si" },
      {
        id: 4,
        kannada: "Beda / Beku",
        english: "Don't Want / Want",
        phonetic: "Bay-da / Bay-ku",
      },
      {
        id: 5,
        kannada: "Illi / Alli",
        english: "Here / There",
        phonetic: "Il-li / Al-li",
      },
    ],
    scenarios: [
      {
        context: "Driver: 'Elli hogbeku?' (Where to go?)",
        options: [
          {
            text: "Indiranagar-ge hogi.",
            correct: true,
            explanation: "Location + 'ge' is mandatory.",
            newWords: [
                { word: "Elli", meaning: "Where" },
                { word: "Hogbeku", meaning: "Should go" }
            ]
          },
          { text: "Indiranagar banni.", correct: false },
        ],
      },
      {
        context: "Driver asks ₹500 for a short ride.",
        options: [
          { text: "500 beda!", correct: true, explanation: "Firm refusal." },
          { text: "500 beku.", correct: false },
        ],
      },
      {
        context: "You want him to stop at the corner.",
        options: [
          { text: "Alli nillisi.", correct: true, explanation: "Stop there." },
          { text: "Alli hogi.", correct: false },
        ],
      },
      {
        context: "Driver asks if you want to go to Koramangala.",
        options: [
          {
            text: "Koramangala beda.",
            correct: true,
            explanation: "I don't want Koramangala.",
          },
          { text: "Koramangala banni.", correct: false },
        ],
      },
      {
        context: "You want him to stop here.",
        options: [
          { text: "Illi nillisi.", correct: true, explanation: "Stop here." },
          { text: "Illi hogi.", correct: false },
        ],
      },
    ],
  },
  {
    day: 2,
    week: 1,
    level: 1,
    title: "Commerce: The Market",
    badgeReward: "Bargain King",
    lang: "english", // Explicitly set language
    strategy: {
      title: "The Art of 'Jaasti'",
      tips: [
        "'Jaasti Aytu' = Too expensive.",
        "'Swalpa Kammi Maadi' = Lower it a little.",
        "Numbers 1-5: Ondu, Eradu, Mooru, Naalku, Aidu.",
      ],
    },
    vocab: [
      { id: 1, kannada: "Estu?", english: "How much?", phonetic: "Esh-tu" },
      {
        id: 2,
        kannada: "Kodi / Togolli",
        english: "Give / Take",
        phonetic: "Ko-di / Tho-gol-li",
      },
      {
        id: 3,
        kannada: "Jaasti Aytu",
        english: "Too Expensive",
        phonetic: "Jaas-ti Aay-tu",
      },
      {
        id: 4,
        kannada: "Kammi Maadi",
        english: "Lower price",
        phonetic: "Kam-mi Maa-di",
      },
      { id: 5, kannada: "Swalpa", english: "A little", phonetic: "Swal-pa" },
    ],
    scenarios: [
      {
        context: "Vendor says 'Nooru rupayi' (100 rupees).",
        options: [
          {
            text: "Jaasti aytu. Kammi maadi.",
            correct: true,
            explanation: "Classic bargaining.",
          },
          { text: "Swalpa kodi.", correct: false },
        ],
      },
      {
        context: "You want 2 kilos of something.",
        options: [
          {
            text: "Eradu kilo kodi.",
            correct: true,
            explanation: "Give 2 kilos.",
          },
          { text: "Eradu kilo togolli.", correct: false },
        ],
      },
      {
        context: "Vendor asks for money.",
        options: [
          {
            text: "Duddu togolli.",
            correct: true,
            explanation: "Take the money.",
          },
          { text: "Duddu kodi.", correct: false },
        ],
      },
      {
        context: "You only want a little bit.",
        options: [
          {
            text: "Swalpa kodi.",
            correct: true,
            explanation: "Give a little.",
          },
          { text: "Jaasti kodi.", correct: false },
        ],
      },
      {
        context: "Ask the price.",
        options: [
          { text: "Estu?", correct: true, explanation: "How much?" },
          { text: "Estu beku?", correct: false },
        ],
      },
    ],
  },
  {
    day: 3,
    week: 1,
    level: 1,
    title: "Navigation: Delivery",
    badgeReward: null,
    lang: "english", // Explicitly set language
    strategy: {
      title: "Guiding Dunzo",
      tips: ["Left=Edakke, Right=Balakke.", "Near=Hattira.", "Straight=Nera."],
    },
    vocab: [
      {
        id: 1,
        kannada: "Munde / Hinde",
        english: "Front / Back",
        phonetic: "Mun-day / Hin-day",
      },
      {
        id: 2,
        kannada: "Edakke / Balakke",
        english: "Left / Right",
        phonetic: "Eda-kkay / Bala-kkay",
      },
      { id: 3, kannada: "Hattira", english: "Near", phonetic: "Hat-ti-ra" },
      { id: 4, kannada: "Nera", english: "Straight", phonetic: "Nay-ra" },
      {
        id: 5,
        kannada: "Barutte",
        english: "It comes",
        phonetic: "Ba-rut-tay",
      },
    ],
    scenarios: [
      {
        context: "Delivery guy is lost. Tell him to come straight.",
        options: [
          { text: "Nera banni.", correct: true, explanation: "Come straight." },
          { text: "Nera hogi.", correct: false },
        ],
      },
      {
        context: "He is at the gate. Tell him to come inside.",
        options: [
          { text: "Olage banni.", correct: true, explanation: "Come inside." },
          { text: "Horage banni.", correct: false },
        ],
      },
      {
        context: "He asks 'Right turn?'",
        options: [
          {
            text: "Howdu, balakke.",
            correct: true,
            explanation: "Yes, right.",
          },
          { text: "Illa, edakke.", correct: false },
        ],
      },
      {
        context: "Tell him you are near the park.",
        options: [
          {
            text: "Naanu Park hattira iddini.",
            correct: true,
            explanation: "I am near park.",
          },
          { text: "Park munde.", correct: false },
        ],
      },
      {
        context: "Tell him to go back.",
        options: [
          { text: "Hinde hogi.", correct: true, explanation: "Go back." },
          { text: "Munde hogi.", correct: false },
        ],
      },
    ],
  },
  {
    day: 4,
    week: 1,
    level: 1,
    title: "Hunger: The Darshini",
    badgeReward: "Dosa Destroyer",
    lang: "english", // Explicitly set language
    strategy: {
      title: "Quick Eats",
      tips: ["'Ondu coffee' (One coffee).", "'Saaku' means Enough/Stop."],
    },
    vocab: [
      { id: 1, kannada: "Neeru", english: "Water", phonetic: "Nee-ru" },
      { id: 2, kannada: "Bisi", english: "Hot", phonetic: "Bi-si" },
      { id: 3, kannada: "Oota", english: "Meal", phonetic: "Oo-ta" },
      { id: 4, kannada: "Saaku", english: "Enough", phonetic: "Saa-ku" },
      {
        id: 5,
        kannada: "Chennagide",
        english: "It's good",
        phonetic: "Chen-na-gi-day",
      },
    ],
    scenarios: [
      {
        context: "Waiter pours water. It's overflowing.",
        options: [
          { text: "Saaku!", correct: true, explanation: "Stop/Enough." },
          { text: "Beda.", correct: false },
        ],
      },
      {
        context: "You want a coffee.",
        options: [
          {
            text: "Ondu coffee kodi.",
            correct: true,
            explanation: "Give one coffee.",
          },
          { text: "Coffee togolli.", correct: false },
        ],
      },
      {
        context: "The dosa was tasty.",
        options: [
          {
            text: "Dosa chennagide.",
            correct: true,
            explanation: "Dosa is good.",
          },
          { text: "Dosa saaku.", correct: false },
        ],
      },
      {
        context: "You want hot water.",
        options: [
          {
            text: "Bisi neeru kodi.",
            correct: true,
            explanation: "Give hot water.",
          },
          { text: "Tampu neeru kodi.", correct: false },
        ],
      },
    ],
  },
  {
    day: 5,
    week: 1,
    level: 1,
    title: "Social: The Neighbor",
    badgeReward: null,
    lang: "english", // Explicitly set language
    strategy: {
      title: "Small Talk",
      tips: [
        "'Oota aayta?' is the universal greeting.",
        "Add 'ri' for respect.",
      ],
    },
    vocab: [
      {
        id: 1,
        kannada: "Namaskara",
        english: "Hello",
        phonetic: "Na-mas-kaa-ra",
      },
      {
        id: 2,
        kannada: "Hegiddira?",
        english: "How are you?",
        phonetic: "Hay-gid-di-ra",
      },
      {
        id: 3,
        kannada: "Oota Aayta?",
        english: "Had food?",
        phonetic: "Oo-ta Aay-ta",
      },
      {
        id: 4,
        kannada: "Gottilla",
        english: "Don't know",
        phonetic: "Got-til-la",
      },
      { id: 5, kannada: "Naale", english: "Tomorrow", phonetic: "Naa-lay" },
    ],
    scenarios: [
      {
        context: "Neighbor smiles at you in the morning.",
        options: [
          {
            text: "Namaskara, hegiddira?",
            correct: true,
            explanation: "Hello, how are you?",
          },
          { text: "Oota aayta?", correct: false },
        ],
      },
      {
        context: "It's 2 PM. Neighbor asks 'Oota aayta?'",
        options: [
          { text: "Aaytu, nimdu?", correct: true, explanation: "Done, yours?" },
          { text: "Gottilla.", correct: false },
        ],
      },
      {
        context: "They ask about something confusing.",
        options: [
          {
            text: "Nange gottilla.",
            correct: true,
            explanation: "I don't know.",
          },
          { text: "Nange beku.", correct: false },
        ],
      },
      {
        context: "Tell them you will come tomorrow.",
        options: [
          {
            text: "Naale bartini.",
            correct: true,
            explanation: "I'll come tomorrow.",
          },
          { text: "Ivattu bartini.", correct: false },
        ],
      },
    ],
  },
  {
    day: 6,
    week: 1,
    level: 1,
    title: "Emergency: The Help",
    badgeReward: "Crisis Manager",
    lang: "english", // Explicitly set language
    strategy: {
      title: "Urgency",
      tips: ["'Begane' = Fast.", "'Ivattu' = Today."],
    },
    vocab: [
      { id: 1, kannada: "Sahaya", english: "Help", phonetic: "Sa-haa-ya" },
      { id: 2, kannada: "Begane", english: "Fast", phonetic: "Bay-ga-nay" },
      { id: 3, kannada: "Nidhana", english: "Slow", phonetic: "Ni-dhaa-na" },
      { id: 4, kannada: "Ivattu", english: "Today", phonetic: "E-vat-tu" },
      { id: 5, kannada: "Eega", english: "Now", phonetic: "Ee-ga" },
    ],
    scenarios: [
      {
        context: "Plumber is working very slowly.",
        options: [
          {
            text: "Swalpa begane maadi.",
            correct: true,
            explanation: "Do it faster.",
          },
          { text: "Nidhana maadi.", correct: false },
        ],
      },
      {
        context: "You need help immediately.",
        options: [
          {
            text: "Eega sahaya beku.",
            correct: true,
            explanation: "Help needed now.",
          },
          { text: "Naale sahaya beku.", correct: false },
        ],
      },
      {
        context: "Tell the driver to go slow.",
        options: [
          { text: "Nidhana hogi.", correct: true, explanation: "Go slow." },
          { text: "Begane hogi.", correct: false },
        ],
      },
      {
        context: "Ask him to come today.",
        options: [
          { text: "Ivattu banni.", correct: true, explanation: "Come today." },
          { text: "Naale banni.", correct: false },
        ],
      },
    ],
  },
  {
    day: 7,
    week: 1,
    level: 1,
    title: "Review: Week 1 Boss",
    badgeReward: "Kannada Gothu",
    lang: "english", // Explicitly set language
    strategy: {
      title: "Mix & Match",
      tips: ["Combine locations, numbers, and requests."],
    },
    vocab: [
      { id: 1, kannada: "Yelli?", english: "Where?", phonetic: "Yel-li" },
      { id: 2, kannada: "Yaaru?", english: "Who?", phonetic: "Yaa-ru" },
      { id: 3, kannada: "Yaavaga?", english: "When?", phonetic: "Yaa-va-ga" },
      { id: 4, kannada: "Hege?", english: "How?", phonetic: "Hay-gay" },
      { id: 5, kannada: "Yenu?", english: "What?", phonetic: "Yay-nu" },
    ],
    scenarios: [
      {
        context: "Ask where the house is.",
        options: [
          { text: "Mane yelli?", correct: true, explanation: "House where?" },
          { text: "Mane yenu?", correct: false },
        ],
      },
      {
        context: "Ask who is coming.",
        options: [
          {
            text: "Yaaru barthare?",
            correct: true,
            explanation: "Who is coming?",
          },
          { text: "Yaaru hogthare?", correct: false },
        ],
      },
      {
        context: "Ask when to go.",
        options: [
          {
            text: "Yaavaga hogbeku?",
            correct: true,
            explanation: "When to go?",
          },
          { text: "Yelli hogbeku?", correct: false },
        ],
      },
      {
        context: "Ask what you want.",
        options: [
          {
            text: "Yenu beku?",
            correct: true,
            explanation: "What do you want?",
          },
          { text: "Hege beku?", correct: false },
        ],
      },
    ],
  },

  // --- WEEK 2: SETTLING IN ---
  {
    day: 8,
    week: 2,
    level: 2,
    title: "Housing: The Broker",
    badgeReward: null,
    lang: "english", // Explicitly set language
    strategy: {
      title: "House Hunting",
      tips: ["'Baadige' is Rent.", "'Mane' is House."],
    },
    vocab: [
      { id: 1, kannada: "Mane", english: "House", phonetic: "Ma-nay" },
      { id: 2, kannada: "Baadige", english: "Rent", phonetic: "Baa-di-gay" },
      { id: 3, kannada: "Kone", english: "Room", phonetic: "Ko-nay" },
      { id: 4, kannada: "Neeru", english: "Water", phonetic: "Nee-ru" },
      {
        id: 5,
        kannada: "Current",
        english: "Power/Electricity",
        phonetic: "Current",
      },
    ],
    scenarios: [
      {
        context: "Ask about the rent.",
        options: [
          {
            text: "Baadige eshtu?",
            correct: true,
            explanation: "How much rent?",
          },
          { text: "Baadige yelli?", correct: false },
        ],
      },
      {
        context: "Ask if water is available.",
        options: [
          {
            text: "Neeru idya?",
            correct: true,
            explanation: "Is water there?",
          },
          { text: "Neeru beku.", correct: false },
        ],
      },
      {
        context: "Ask how many rooms.",
        options: [
          {
            text: "Eshtu kone ide?",
            correct: true,
            explanation: "How many rooms?",
          },
          { text: "Kone yelli?", correct: false },
        ],
      },
      {
        context: "Say the house is good.",
        options: [
          {
            text: "Mane chennagide.",
            correct: true,
            explanation: "House is good.",
          },
          { text: "Mane beda.", correct: false },
        ],
      },
    ],
  },
  {
    day: 9,
    week: 2,
    level: 2,
    title: "Time: The Schedule",
    badgeReward: "Time Keeper",
    lang: "english", // Explicitly set language
    strategy: {
      title: "Clock Watching",
      tips: ["'Gante' = Hour/Bell.", "'Arda' = Half."],
    },
    vocab: [
      { id: 1, kannada: "Gante", english: "Hour/Time", phonetic: "Gan-tay" },
      { id: 2, kannada: "Nimisha", english: "Minute", phonetic: "Ni-mi-sha" },
      { id: 3, kannada: "Beligge", english: "Morning", phonetic: "Be-lig-gay" },
      { id: 4, kannada: "Ratri", english: "Night", phonetic: "Raat-ri" },
      {
        id: 5,
        kannada: "Madhyana",
        english: "Afternoon",
        phonetic: "Madh-yaa-na",
      },
    ],
    scenarios: [
      {
        context: "The meeting is in the morning.",
        options: [
          {
            text: "Beligge meeting ide.",
            correct: true,
            explanation: "Morning meeting exists.",
          },
          { text: "Ratri meeting ide.", correct: false },
        ],
      },
      {
        context: "Ask 'What is the time?'",
        options: [
          { text: "Time eshtu?", correct: true, explanation: "How much time?" },
          { text: "Time yaavaga?", correct: false },
        ],
      },
      {
        context: "I will come at night.",
        options: [
          {
            text: "Ratri bartini.",
            correct: true,
            explanation: "Night I come.",
          },
          { text: "Madhyana bartini.", correct: false },
        ],
      },
      {
        context: "Wait 5 minutes.",
        options: [
          {
            text: "Aidu nimisha iri.",
            correct: true,
            explanation: "Wait 5 mins.",
          },
          { text: "Aidu gante iri.", correct: false },
        ],
      },
    ],
  },
  {
    day: 10,
    week: 2,
    level: 2,
    title: "Family: Introductions",
    badgeReward: null,
    lang: "english", // Explicitly set language
    strategy: { title: "Relations", tips: ["'Avru' is respectful 'He/She'."] },
    vocab: [
      { id: 1, kannada: "Thande", english: "Father", phonetic: "Than-day" },
      { id: 2, kannada: "Thaayi", english: "Mother", phonetic: "Thaa-yi" },
      {
        id: 3,
        kannada: "Anna/Thamma",
        english: "Older/Younger Bro",
        phonetic: "An-na",
      },
      {
        id: 4,
        kannada: "Akka/Thangi",
        english: "Older/Younger Sis",
        phonetic: "Ak-ka",
      },
      {
        id: 5,
        kannada: "Maga/Magalu",
        english: "Son/Daughter",
        phonetic: "Ma-ga",
      },
    ],
    scenarios: [
      {
        context: "Introduce your mother.",
        options: [
          {
            text: "Ivaru nanna thaayi.",
            correct: true,
            explanation: "This is my mother.",
          },
          { text: "Ivaru nanna thande.", correct: false },
        ],
      },
      {
        context: "Ask 'Is he your brother?'",
        options: [
          {
            text: "Ivaru nimma anna na?",
            correct: true,
            explanation: "Is he your brother?",
          },
          { text: "Ivaru nimma akka na?", correct: false },
        ],
      },
      {
        context: "This is my daughter.",
        options: [
          {
            text: "Ivalu nanna magalu.",
            correct: true,
            explanation: "She is my daughter.",
          },
          { text: "Ivanu nanna maga.", correct: false },
        ],
      },
      {
        context: "Where is your father?",
        options: [
          {
            text: "Nimma thande yelli?",
            correct: true,
            explanation: "Your father where?",
          },
          { text: "Nimma thande yaaru?", correct: false },
        ],
      },
    ],
  },
  {
    day: 11,
    week: 2,
    level: 2,
    title: "Work: The Office",
    badgeReward: "Office Hero",
    lang: "english", // Explicitly set language
    strategy: {
      title: "Colleagues",
      tips: ["'Kelasa' = Work.", "'Raje' = Leave/Holiday."],
    },
    vocab: [
      { id: 1, kannada: "Kelasa", english: "Work", phonetic: "Ke-la-sa" },
      { id: 2, kannada: "Raje", english: "Leave", phonetic: "Ra-jay" },
      { id: 3, kannada: "Banni", english: "Come (Formal)", phonetic: "Ban-ni" },
      {
        id: 4,
        kannada: "Kootkoli",
        english: "Sit (Formal)",
        phonetic: "Koot-ko-li",
      },
      { id: 5, kannada: "Mugitu", english: "Finished", phonetic: "Mu-gi-tu" },
    ],
    scenarios: [
      {
        context: "Ask if work is done.",
        options: [
          {
            text: "Kelasa mugita?",
            correct: true,
            explanation: "Work finished?",
          },
          { text: "Kelasa shuru?", correct: false },
        ],
      },
      {
        context: "Tell a client to sit.",
        options: [
          {
            text: "Daya madi kootkoli.",
            correct: true,
            explanation: "Please sit.",
          },
          { text: "Nillisi.", correct: false },
        ],
      },
      {
        context: "I need leave tomorrow.",
        options: [
          {
            text: "Naale raje beku.",
            correct: true,
            explanation: "Tomorrow leave want.",
          },
          { text: "Naale kelasa beku.", correct: false },
        ],
      },
      {
        context: "Call your boss inside.",
        options: [
          {
            text: "Sir, olage banni.",
            correct: true,
            explanation: "Sir, come inside.",
          },
          { text: "Sir, horage hogi.", correct: false },
        ],
      },
    ],
  },
  {
    day: 12,
    week: 2,
    level: 2,
    title: "Household: The Maid",
    badgeReward: null,
    lang: "english", // Explicitly set language
    strategy: {
      title: "Instructions",
      tips: ["'Clean maadi' = Please clean.", "'Bary' = Only."],
    },
    vocab: [
      { id: 1, kannada: "Kasa", english: "Trash", phonetic: "Ka-sa" },
      {
        id: 2,
        kannada: "Paathre",
        english: "Vessels/Dishes",
        phonetic: "Paat-ray",
      },
      { id: 3, kannada: "Batte", english: "Clothes", phonetic: "Bat-tay" },
      { id: 4, kannada: "Nela", english: "Floor", phonetic: "Ne-la" },
      { id: 5, kannada: "Ores", english: "Wipe", phonetic: "O-res" },
    ],
    scenarios: [
      {
        context: "Tell her to wash the vessels.",
        options: [
          {
            text: "Paathre tholyi.",
            correct: true,
            explanation: "Wash vessels.",
          },
          { text: "Kasa tholyi.", correct: false },
        ],
      },
      {
        context: "Ask to sweep the floor.",
        options: [
          { text: "Nela gudisi.", correct: true, explanation: "Sweep floor." },
          { text: "Nela oresi.", correct: false },
        ],
      },
      {
        context: "Take out the trash.",
        options: [
          {
            text: "Kasa horagehaaki.",
            correct: true,
            explanation: "Put trash outside.",
          },
          { text: "Kasa olagehaaki.", correct: false },
        ],
      },
      {
        context: "Wipe the table.",
        options: [
          { text: "Table oresi.", correct: true, explanation: "Wipe table." },
          { text: "Table tholyi.", correct: false },
        ],
      },
    ],
  },
  {
    day: 13,
    week: 2,
    level: 2,
    title: "Shopping: Groceries",
    badgeReward: "Market Pro",
    lang: "english", // Explicitly set language
    strategy: {
      title: "Freshness",
      tips: ["'Thaja' = Fresh.", "'Hunn' = Fruit."],
    },
    vocab: [
      {
        id: 1,
        kannada: "Tharakari",
        english: "Vegetables",
        phonetic: "Tha-ra-ka-ri",
      },
      { id: 2, kannada: "Hannu", english: "Fruit", phonetic: "Han-nu" },
      { id: 3, kannada: "Haalu", english: "Milk", phonetic: "Haa-lu" },
      { id: 4, kannada: "Motte", english: "Egg", phonetic: "Mot-tay" },
      {
        id: 5,
        kannada: "Chilla",
        english: "Change (Money)",
        phonetic: "Chil-la",
      },
    ],
    scenarios: [
      {
        context: "Ask for change (money).",
        options: [
          {
            text: "Chilla idya?",
            correct: true,
            explanation: "Is there change?",
          },
          { text: "Duddu idya?", correct: false },
        ],
      },
      {
        context: "Are the vegetables fresh?",
        options: [
          {
            text: "Tharakari fresh idya?",
            correct: true,
            explanation: "Veg fresh is there?",
          },
          { text: "Tharakari beku.", correct: false },
        ],
      },
      {
        context: "I want 6 eggs.",
        options: [
          {
            text: "Aaru motte kodi.",
            correct: true,
            explanation: "Give 6 eggs.",
          },
          { text: "Aaru haalu kodi.", correct: false },
        ],
      },
      {
        context: "Where is the fruit shop?",
        options: [
          {
            text: "Hannu angadi yelli?",
            correct: true,
            explanation: "Fruit shop where?",
          },
          { text: "Hannu yenu?", correct: false },
        ],
      },
    ],
  },
  {
    day: 14,
    week: 2,
    level: 2,
    title: "Review: Week 2 Boss",
    badgeReward: "Localite",
    lang: "english", // Explicitly set language
    strategy: { title: "Settling Down", tips: ["Week 2 Recap."] },
    vocab: [
      { id: 1, kannada: "Mane", english: "House", phonetic: "Ma-nay" },
      { id: 2, kannada: "Kelasa", english: "Work", phonetic: "Ke-la-sa" },
      { id: 3, kannada: "Beligge", english: "Morning", phonetic: "Be-lig-gay" },
      { id: 4, kannada: "Raje", english: "Holiday", phonetic: "Ra-jay" },
      { id: 5, kannada: "Oota", english: "Meal", phonetic: "Oo-ta" },
    ],
    scenarios: [
      {
        context: "Work is finished.",
        options: [
          { text: "Kelasa mugitu.", correct: true, explanation: "Work over." },
          { text: "Kelasa shuru.", correct: false },
        ],
      },
      {
        context: "I am at home.",
        options: [
          {
            text: "Naanu maneyalli iddini.",
            correct: true,
            explanation: "I am in house.",
          },
          { text: "Naanu office iddini.", correct: false },
        ],
      },
      {
        context: "It is a holiday tomorrow.",
        options: [
          {
            text: "Naale raje.",
            correct: true,
            explanation: "Tomorrow leave.",
          },
          { text: "Naale kelasa.", correct: false },
        ],
      },
      {
        context: "Come in the morning.",
        options: [
          {
            text: "Beligge banni.",
            correct: true,
            explanation: "Morning come.",
          },
          { text: "Ratri banni.", correct: false },
        ],
      },
    ],
  },

  // --- WEEK 3: ESSENTIALS ---
  {
    day: 15,
    week: 3,
    level: 3,
    title: "Health: The Doctor",
    badgeReward: null,
    lang: "english", // Explicitly set language
    strategy: {
      title: "Pain & Health",
      tips: ["'Novu' = Pain.", "'Jwara' = Fever."],
    },
    vocab: [
      { id: 1, kannada: "Novu", english: "Pain", phonetic: "No-vu" },
      { id: 2, kannada: "Jwara", english: "Fever", phonetic: "Jwa-ra" },
      { id: 3, kannada: "Maathre", english: "Tablet", phonetic: "Maat-ray" },
      { id: 4, kannada: "Thale", english: "Head", phonetic: "Tha-lay" },
      { id: 5, kannada: "Hotte", english: "Stomach", phonetic: "Hot-tay" },
    ],
    scenarios: [
      {
        context: "I have a headache.",
        options: [
          {
            text: "Thale novu ide.",
            correct: true,
            explanation: "Head pain exists.",
          },
          { text: "Hotte novu ide.", correct: false },
        ],
      },
      {
        context: "I have a fever.",
        options: [
          {
            text: "Nange jwara ide.",
            correct: true,
            explanation: "I have fever.",
          },
          { text: "Nange kushi ide.", correct: false },
        ],
      },
      {
        context: "Did you take the tablet?",
        options: [
          {
            text: "Maathre togolli.",
            correct: true,
            explanation: "Take tablet.",
          },
          { text: "Maathre beda.", correct: false },
        ],
      },
      {
        context: "My stomach hurts.",
        options: [
          {
            text: "Hotte novu ide.",
            correct: true,
            explanation: "Stomach pain.",
          },
          { text: "Kaalu novu ide.", correct: false },
        ],
      },
    ],
  },
  {
    day: 16,
    week: 3,
    level: 3,
    title: "Travel: The Bus",
    badgeReward: "BMTC Boss",
    lang: "english", // Explicitly set language
    strategy: {
      title: "Public Transport",
      tips: ["'Hathhu' = Climb/Get in.", "'Ili' = Get down."],
    },
    vocab: [
      {
        id: 1,
        kannada: "Bus Nildana",
        english: "Bus Stop",
        phonetic: "Nil-daa-na",
      },
      { id: 2, kannada: "Ticket", english: "Ticket", phonetic: "Ticket" },
      { id: 3, kannada: "Hathi", english: "Get in", phonetic: "Hath-thi" },
      { id: 4, kannada: "Iliyi", english: "Get down", phonetic: "I-li-yi" },
      { id: 5, kannada: "Pass", english: "Pass", phonetic: "Pass" },
    ],
    scenarios: [
      {
        context: "Tell driver to stop.",
        options: [
          {
            text: "Illi nillisi, ilithini.",
            correct: true,
            explanation: "Stop here, I'll get down.",
          },
          { text: "Hogi.", correct: false },
        ],
      },
      {
        context: "Ask for a ticket to Majestic.",
        options: [
          {
            text: "Majestic-ge ondu ticket.",
            correct: true,
            explanation: "One ticket to Majestic.",
          },
          { text: "Majestic beda.", correct: false },
        ],
      },
      {
        context: "Does this bus go to Silk Board?",
        options: [
          {
            text: "Silk Board-ge hogutta?",
            correct: true,
            explanation: "Does it go to Silk Board?",
          },
          { text: "Silk Board-ge barutta?", correct: false },
        ],
      },
      {
        context: "Get in quickly.",
        options: [
          { text: "Begane hathi.", correct: true, explanation: "Climb fast." },
          { text: "Begane iliyi.", correct: false },
        ],
      },
    ],
  },
  {
    day: 17,
    week: 3,
    level: 3,
    title: "Feelings: Emotions",
    badgeReward: null,
    lang: "english", // Explicitly set language
    strategy: {
      title: "Expressing Self",
      tips: ["'Kushi' = Happy.", "'Bejara' = Sad."],
    },
    vocab: [
      { id: 1, kannada: "Kushi", english: "Happy", phonetic: "Ku-shi" },
      {
        id: 2,
        kannada: "Bejara",
        english: "Sad/Bored",
        phonetic: "Bay-jaa-ra",
      },
      { id: 3, kannada: "Kopa", english: "Angry", phonetic: "Ko-pa" },
      { id: 4, kannada: "Bhaya", english: "Fear", phonetic: "Bha-ya" },
      { id: 5, kannada: "Istha", english: "Like", phonetic: "Is-tha" },
    ],
    scenarios: [
      {
        context: "I am happy.",
        options: [
          {
            text: "Nange kushi aytu.",
            correct: true,
            explanation: "I became happy.",
          },
          { text: "Nange bejara aytu.", correct: false },
        ],
      },
      {
        context: "Don't be angry.",
        options: [
          {
            text: "Kopa madkobedi.",
            correct: true,
            explanation: "Don't do anger.",
          },
          { text: "Kopa maadi.", correct: false },
        ],
      },
      {
        context: "I like Bangalore.",
        options: [
          {
            text: "Nange Bangalore istha.",
            correct: true,
            explanation: "I like Bangalore.",
          },
          { text: "Nange Bangalore kopa.", correct: false },
        ],
      },
      {
        context: "Are you bored?",
        options: [
          {
            text: "Bejara aagidya?",
            correct: true,
            explanation: "Are you bored?",
          },
          { text: "Kushi aagidya?", correct: false },
        ],
      },
    ],
  },
  {
    day: 18,
    week: 3,
    level: 3,
    title: "Services: The Bank",
    badgeReward: null,
    lang: "english", // Explicitly set language
    strategy: { title: "Formal Requests", tips: ["Use 'Bekagittu' (Wanted)."] },
    vocab: [
      { id: 1, kannada: "Khate", english: "Account", phonetic: "Kha-tay" },
      { id: 2, kannada: "Duddu", english: "Money", phonetic: "Dud-du" },
      { id: 3, kannada: "Sahi", english: "Signature", phonetic: "Sa-hi" },
      { id: 4, kannada: "Manager", english: "Manager", phonetic: "Manager" },
      {
        id: 5,
        kannada: "Open maadi",
        english: "Please open",
        phonetic: "Open Maa-di",
      },
    ],
    scenarios: [
      {
        context: "I want to open an account.",
        options: [
          {
            text: "Account open maadbeku.",
            correct: true,
            explanation: "Want to open account.",
          },
          { text: "Account close maadi.", correct: false },
        ],
      },
      {
        context: "Sign here.",
        options: [
          {
            text: "Illi sahi maadi.",
            correct: true,
            explanation: "Sign here.",
          },
          { text: "Illi duddu maadi.", correct: false },
        ],
      },
      {
        context: "I want to withdraw money.",
        options: [
          {
            text: "Duddu tegeyabeku.",
            correct: true,
            explanation: "Want to take money.",
          },
          { text: "Duddu haakbeku.", correct: false },
        ],
      },
      {
        context: "Where is the manager?",
        options: [
          {
            text: "Manager yelli?",
            correct: true,
            explanation: "Manager where?",
          },
          { text: "Manager yaaru?", correct: false },
        ],
      },
    ],
  },
  {
    day: 19,
    week: 3,
    level: 3,
    title: "Shopping: Clothes",
    badgeReward: "Fashionista",
    lang: "english", // Explicitly set language
    strategy: { title: "Colors & Fit", tips: ["'Banna' = Color."] },
    vocab: [
      { id: 1, kannada: "Banna", english: "Color", phonetic: "Ban-na" },
      { id: 2, kannada: "Kempu", english: "Red", phonetic: "Kem-pu" },
      { id: 3, kannada: "Kappu", english: "Black", phonetic: "Kap-pu" },
      { id: 4, kannada: "Doddadu", english: "Big one", phonetic: "Dod-da-du" },
      {
        id: 5,
        kannada: "Chikkadu",
        english: "Small one",
        phonetic: "Chik-ka-du",
      },
    ],
    scenarios: [
      {
        context: "Do you have a big one?",
        options: [
          {
            text: "Doddadu idya?",
            correct: true,
            explanation: "Is there a big one?",
          },
          { text: "Chikkadu idya?", correct: false },
        ],
      },
      {
        context: "I want the red one.",
        options: [
          { text: "Kempu beku.", correct: true, explanation: "Want red." },
          { text: "Kappu beku.", correct: false },
        ],
      },
      {
        context: "This color is nice.",
        options: [
          {
            text: "Ee banna chennagide.",
            correct: true,
            explanation: "This color is good.",
          },
          { text: "Ee banna sari illa.", correct: false },
        ],
      },
      {
        context: "Do you have black?",
        options: [
          {
            text: "Kappu banna idya?",
            correct: true,
            explanation: "Is there black color?",
          },
          { text: "Kempu banna idya?", correct: false },
        ],
      },
    ],
  },
  {
    day: 20,
    week: 3,
    level: 3,
    title: "Nature: Weather",
    badgeReward: null,
    lang: "english", // Explicitly set language
    strategy: {
      title: "It's Raining",
      tips: ["'Male' = Rain.", "'Bisilu' = Sun/Heat."],
    },
    vocab: [
      { id: 1, kannada: "Male", english: "Rain", phonetic: "Ma-lay" },
      { id: 2, kannada: "Bisilu", english: "Sunny/Heat", phonetic: "Bi-si-lu" },
      { id: 3, kannada: "Gali", english: "Wind", phonetic: "Gaa-li" },
      {
        id: 4,
        kannada: "Chali",
        english: "Cold (Weather)",
        phonetic: "Cha-li",
      },
      { id: 5, kannada: "Moda", english: "Cloud", phonetic: "Mo-da" },
    ],
    scenarios: [
      {
        context: "It is raining.",
        options: [
          {
            text: "Male baruthide.",
            correct: true,
            explanation: "Rain is coming.",
          },
          { text: "Bisilu ide.", correct: false },
        ],
      },
      {
        context: "It is very hot today.",
        options: [
          {
            text: "Ivattu bisilu jaasti.",
            correct: true,
            explanation: "Today heat is more.",
          },
          { text: "Ivattu chali jaasti.", correct: false },
        ],
      },
      {
        context: "I feel cold.",
        options: [
          {
            text: "Nange chali aagthide.",
            correct: true,
            explanation: "I am feeling cold.",
          },
          { text: "Nange bisi aagthide.", correct: false },
        ],
      },
      {
        context: "Look at the clouds.",
        options: [
          { text: "Moda nodi.", correct: true, explanation: "Look at cloud." },
          { text: "Male nodi.", correct: false },
        ],
      },
    ],
  },
  {
    day: 21,
    week: 3,
    level: 3,
    title: "Review: Week 3 Boss",
    badgeReward: "Survivor",
    lang: "english", // Explicitly set language
    strategy: { title: "Essentials Recap", tips: ["Review Health & Travel."] },
    vocab: [
      { id: 1, kannada: "Novu", english: "Pain", phonetic: "No-vu" },
      { id: 2, kannada: "Ticket", english: "Ticket", phonetic: "Ticket" },
      { id: 3, kannada: "Kushi", english: "Happy", phonetic: "Ku-shi" },
      { id: 4, kannada: "Doddadu", english: "Big", phonetic: "Dod-da-du" },
      { id: 5, kannada: "Male", english: "Rain", phonetic: "Ma-lay" },
    ],
    scenarios: [
      {
        context: "I have a fever.",
        options: [
          {
            text: "Nange jwara ide.",
            correct: true,
            explanation: "I have fever.",
          },
          { text: "Nange kushi ide.", correct: false },
        ],
      },
      {
        context: "Give me a ticket.",
        options: [
          { text: "Ticket kodi.", correct: true, explanation: "Give ticket." },
          { text: "Ticket togolli.", correct: false },
        ],
      },
      {
        context: "It is raining heavily.",
        options: [
          {
            text: "Male jaasti ide.",
            correct: true,
            explanation: "Rain is more.",
          },
          { text: "Bisilu jaasti ide.", correct: false },
        ],
      },
      {
        context: "I want a big bag.",
        options: [
          {
            text: "Dodda bag beku.",
            correct: true,
            explanation: "Want big bag.",
          },
          { text: "Chikka bag beku.", correct: false },
        ],
      },
    ],
  },

  // --- WEEK 4: ADVANCED ---
  {
    day: 22,
    week: 4,
    level: 4,
    title: "Phone: The Call",
    badgeReward: "Telecaller",
    lang: "english", // Explicitly set language
    strategy: {
      title: "On the Line",
      tips: ["'Helu' = Tell.", "'Keli' = Listen/Ask."],
    },
    vocab: [
      { id: 1, kannada: "Hello", english: "Hello", phonetic: "Hello" },
      { id: 2, kannada: "Yaaru?", english: "Who is it?", phonetic: "Yaa-ru" },
      {
        id: 3,
        kannada: "Kelistidya?",
        english: "Can you hear?",
        phonetic: "Ke-lis-tid-ya",
      },
      {
        id: 4,
        kannada: "Cut maadi",
        english: "Hang up",
        phonetic: "Cut Maa-di",
      },
      { id: 5, kannada: "Number", english: "Number", phonetic: "Number" },
    ],
    scenarios: [
      {
        context: "Can you hear me?",
        options: [
          { text: "Kelistidya?", correct: true, explanation: "Is it audible?" },
          { text: "Kaanistidya?", correct: false },
        ],
      },
      {
        context: "Who is speaking?",
        options: [
          {
            text: "Yaaru maathadthirodu?",
            correct: true,
            explanation: "Who is speaking?",
          },
          { text: "Yaaru hogthirodu?", correct: false },
        ],
      },
      {
        context: "I will call later.",
        options: [
          {
            text: "Amele call maadtini.",
            correct: true,
            explanation: "Later I call.",
          },
          { text: "Eega call maadtini.", correct: false },
        ],
      },
      {
        context: "Your voice is breaking.",
        options: [
          {
            text: "Voice cut aagtide.",
            correct: true,
            explanation: "Voice is cutting.",
          },
          { text: "Voice chennagide.", correct: false },
        ],
      },
    ],
  },
  {
    day: 23,
    week: 4,
    level: 4,
    title: "Culture: Slang",
    badgeReward: "Macha",
    lang: "english", // Explicitly set language
    strategy: {
      title: "Bangalore Slang",
      tips: ["'Macha/Maga' = Bro.", "'Bombat' = Super."],
    },
    vocab: [
      {
        id: 1,
        kannada: "Macha / Maga",
        english: "Bro / Dude",
        phonetic: "Ma-cha",
      },
      {
        id: 2,
        kannada: "Bombat",
        english: "Super/Great",
        phonetic: "Bom-baat",
      },
      { id: 3, kannada: "Sakkath", english: "Awesome", phonetic: "Sak-kath" },
      { id: 4, kannada: "Guru", english: "Master/Bro", phonetic: "Gu-ru" },
      {
        id: 5,
        kannada: "Adjust maadi",
        english: "Please adjust",
        phonetic: "Adjust maa-di",
      },
    ],
    scenarios: [
      {
        context: "That movie was awesome.",
        options: [
          {
            text: "Movie sakkath aagittu.",
            correct: true,
            explanation: "Movie was awesome.",
          },
          { text: "Movie sumne aagittu.", correct: false },
        ],
      },
      {
        context: "Hey bro, come here.",
        options: [
          {
            text: "Lo macha, illi baa.",
            correct: true,
            explanation: "Hey bro, come here.",
          },
          { text: "Lo macha, alli hogu.", correct: false },
        ],
      },
      {
        context: "The food is super!",
        options: [
          { text: "Oota bombat.", correct: true, explanation: "Food super." },
          { text: "Oota waste.", correct: false },
        ],
      },
      {
        context: "Please adjust a little.",
        options: [
          {
            text: "Swalpa adjust maadi.",
            correct: true,
            explanation: "Adjust a little.",
          },
          { text: "Swalpa banni.", correct: false },
        ],
      },
    ],
  },
  {
    day: 24,
    week: 4,
    level: 4,
    title: "Social: Complaining",
    badgeReward: "Karen (Good Kind)",
    lang: "english", // Explicitly set language
    strategy: {
      title: "Polite Complaints",
      tips: ["'Sari illa' = Not good/right."],
    },
    vocab: [
      {
        id: 1,
        kannada: "Sari Illa",
        english: "Not good",
        phonetic: "Sa-ri Il-la",
      },
      { id: 2, kannada: "Thappu", english: "Wrong", phonetic: "Thap-pu" },
      { id: 3, kannada: "Mosha", english: "Cheat/Bad", phonetic: "Mo-sha" },
      {
        id: 4,
        kannada: "Clean illa",
        english: "Not clean",
        phonetic: "Clean Il-la",
      },
      {
        id: 5,
        kannada: "Change maadi",
        english: "Change it",
        phonetic: "Change maa-di",
      },
    ],
    scenarios: [
      {
        context: "This food is not good.",
        options: [
          {
            text: "Oota sari illa.",
            correct: true,
            explanation: "Meal not okay.",
          },
          { text: "Oota bombat.", correct: false },
        ],
      },
      {
        context: "The room is not clean.",
        options: [
          {
            text: "Room clean illa.",
            correct: true,
            explanation: "Room not clean.",
          },
          { text: "Room clean ide.", correct: false },
        ],
      },
      {
        context: "This is wrong.",
        options: [
          { text: "Idu thappu.", correct: true, explanation: "This is wrong." },
          { text: "Idu sari.", correct: false },
        ],
      },
      {
        context: "Please change the sheet.",
        options: [
          {
            text: "Sheet change maadi.",
            correct: true,
            explanation: "Change sheet.",
          },
          { text: "Sheet tegeyi.", correct: false },
        ],
      },
    ],
  },
  {
    day: 25,
    week: 4,
    level: 4,
    title: "Social: Friends",
    badgeReward: null,
    lang: "english", // Explicitly set language
    strategy: { title: "Making Plans", tips: ["'Hogona?' = Shall we go?"] },
    vocab: [
      { id: 1, kannada: "Hogona", english: "Let's go", phonetic: "Ho-go-na" },
      { id: 2, kannada: "Sigona", english: "Let's meet", phonetic: "Si-go-na" },
      { id: 3, kannada: "Cinema", english: "Movie", phonetic: "Ci-ne-ma" },
      {
        id: 4,
        kannada: "Free idira?",
        english: "Are you free?",
        phonetic: "Free i-di-ra",
      },
      { id: 5, kannada: "Party", english: "Party", phonetic: "Par-ty" },
    ],
    scenarios: [
      {
        context: "Shall we meet tomorrow?",
        options: [
          {
            text: "Naale sigona?",
            correct: true,
            explanation: "Meet tomorrow?",
          },
          { text: "Naale hogona?", correct: false },
        ],
      },
      {
        context: "Let's go to a movie.",
        options: [
          {
            text: "Cinema-ge hogona.",
            correct: true,
            explanation: "Let's go to movie.",
          },
          { text: "Cinema-ge barona.", correct: false },
        ],
      },
      {
        context: "Are you free now?",
        options: [
          { text: "Eega free idira?", correct: true, explanation: "Now free?" },
          { text: "Eega busy idira?", correct: false },
        ],
      },
      {
        context: "Let's party!",
        options: [
          {
            text: "Party madona!",
            correct: true,
            explanation: "Let's do party.",
          },
          { text: "Party beda.", correct: false },
        ],
      },
    ],
  },
  {
    day: 26,
    week: 4,
    level: 4,
    title: "Culture: Festivals",
    badgeReward: "Habba Hero",
    lang: "english", // Explicitly set language
    strategy: {
      title: "Celebrations",
      tips: ["'Habba' = Festival.", "'Shubhashaya' = Wishes."],
    },
    vocab: [
      { id: 1, kannada: "Habba", english: "Festival", phonetic: "Hab-ba" },
      {
        id: 2,
        kannada: "Shubhashaya",
        english: "Greetings",
        phonetic: "Shu-bhaa-sha-ya",
      },
      { id: 3, kannada: "Pooje", english: "Worship", phonetic: "Poo-jay" },
      { id: 4, kannada: "Raja", english: "King", phonetic: "Ra-ja" },
      {
        id: 5,
        kannada: "Rajyotsava",
        english: "State Festival",
        phonetic: "Raj-yot-sa-va",
      },
    ],
    scenarios: [
      {
        context: "Happy Festival!",
        options: [
          {
            text: "Habba-da shubhashaya.",
            correct: true,
            explanation: "Festival wishes.",
          },
          { text: "Habba beda.", correct: false },
        ],
      },
      {
        context: "Did you do the puja?",
        options: [
          { text: "Pooje maadidra?", correct: true, explanation: "Did puja?" },
          { text: "Pooje beka?", correct: false },
        ],
      },
      {
        context: "Today is a festival.",
        options: [
          {
            text: "Ivattu habba.",
            correct: true,
            explanation: "Today festival.",
          },
          { text: "Ivattu raje.", correct: false },
        ],
      },
      {
        context: "Rajyotsava greetings.",
        options: [
          {
            text: "Rajyotsava shubhashaya.",
            correct: true,
            explanation: "Rajyotsava wishes.",
          },
          { text: "Rajyotsava beku.", correct: false },
        ],
      },
    ],
  },
  {
    day: 27,
    week: 4,
    level: 4,
    title: "Grammar: Tenses",
    badgeReward: "Grammar Nazi",
    lang: "english", // Explicitly set language
    strategy: {
      title: "Past/Present/Future",
      tips: ["Hogthini (Will go), Hode (Went), Hogthidini (Going)."],
    },
    vocab: [
      {
        id: 1,
        kannada: "Bartini",
        english: "I will come",
        phonetic: "Bar-ti-ni",
      },
      { id: 2, kannada: "Bande", english: "I came", phonetic: "Ban-day" },
      {
        id: 3,
        kannada: "Bartidini",
        english: "I am coming",
        phonetic: "Bar-thi-di-ni",
      },
      { id: 4, kannada: "Maadide", english: "I did", phonetic: "Maa-di-day" },
      {
        id: 5,
        kannada: "Maadtini",
        english: "I will do",
        phonetic: "Maad-ti-ni",
      },
    ],
    scenarios: [
      {
        context: "I will come tomorrow.",
        options: [
          {
            text: "Naale bartini.",
            correct: true,
            explanation: "Tomorrow I come.",
          },
          { text: "Naale bande.", correct: false },
        ],
      },
      {
        context: "I came yesterday.",
        options: [
          {
            text: "Nenne bande.",
            correct: true,
            explanation: "Yesterday I came.",
          },
          { text: "Nenne bartini.", correct: false },
        ],
      },
      {
        context: "I am coming now.",
        options: [
          {
            text: "Eega bartidini.",
            correct: true,
            explanation: "Now I am coming.",
          },
          { text: "Eega bande.", correct: false },
        ],
      },
      {
        context: "I did the work.",
        options: [
          {
            text: "Kelasa maadide.",
            correct: true,
            explanation: "Work I did.",
          },
          { text: "Kelasa maadtini.", correct: false },
        ],
      },
    ],
  },
  {
    day: 28,
    week: 4,
    level: 4,
    title: "Review: Week 4 Boss",
    badgeReward: "Kannadiga",
    lang: "english", // Explicitly set language
    strategy: { title: "Slang & Speed", tips: ["Mix slang with respect."] },
    vocab: [
      { id: 1, kannada: "Macha", english: "Bro", phonetic: "Ma-cha" },
      {
        id: 2,
        kannada: "Kelistidya?",
        english: "Audible?",
        phonetic: "Ke-lis-tid-ya",
      },
      {
        id: 3,
        kannada: "Sari Illa",
        english: "Not good",
        phonetic: "Sa-ri Il-la",
      },
      { id: 4, kannada: "Sigona", english: "Let's meet", phonetic: "Si-go-na" },
      {
        id: 5,
        kannada: "Bartini",
        english: "Will come",
        phonetic: "Bar-ti-ni",
      },
    ],
    scenarios: [
      {
        context: "Movie was super, bro.",
        options: [
          {
            text: "Movie sakkath aagittu macha.",
            correct: true,
            explanation: "Movie awesome bro.",
          },
          { text: "Movie sari illa.", correct: false },
        ],
      },
      {
        context: "Can you hear? It's not good.",
        options: [
          {
            text: "Kelistidya? Sari illa.",
            correct: true,
            explanation: "Can hear? Not good.",
          },
          { text: "Kaanistidya? Sari ide.", correct: false },
        ],
      },
      {
        context: "Let's meet tomorrow.",
        options: [
          {
            text: "Naale sigona.",
            correct: true,
            explanation: "Tomrorow meet.",
          },
          { text: "Naale hogona.", correct: false },
        ],
      },
      {
        context: "I will come later.",
        options: [
          {
            text: "Amele bartini.",
            correct: true,
            explanation: "Later I come.",
          },
          { text: "Amele bande.", correct: false },
        ],
      },
    ],
  },

  // --- FINAL STRETCH ---
  {
    day: 29,
    week: 5,
    level: 5,
    title: "Mastery: Complex",
    badgeReward: "Scholar",
    lang: "english", // Explicitly set language
    strategy: { title: "Full Sentences", tips: ["Connect words."] },
    vocab: [
      { id: 1, kannada: "Adare", english: "But", phonetic: "Aa-da-ray" },
      { id: 2, kannada: "Agalla", english: "Cannot", phonetic: "Aa-gal-la" },
      { id: 3, kannada: "Yake", english: "Why", phonetic: "Yaa-kay" },
      { id: 4, kannada: "Yenu", english: "What", phonetic: "Yay-nu" },
      { id: 5, kannada: "Howda?", english: "Is it?", phonetic: "How-da" },
    ],
    scenarios: [
      {
        context: "I want to come, but I cannot.",
        options: [
          {
            text: "Barbeku, adare agalla.",
            correct: true,
            explanation: "Want to come, but cannot.",
          },
          { text: "Banni, adare hogi.", correct: false },
        ],
      },
      {
        context: "Why didn't you come?",
        options: [
          {
            text: "Yake barilla?",
            correct: true,
            explanation: "Why didn't come?",
          },
          { text: "Yenu barilla?", correct: false },
        ],
      },
      {
        context: "Is it? I didn't know.",
        options: [
          {
            text: "Howda? Nange gottilla.",
            correct: true,
            explanation: "Is it? Don't know.",
          },
          { text: "Howdu, nange gottu.", correct: false },
        ],
      },
      {
        context: "What happened?",
        options: [
          { text: "Yenu aaytu?", correct: true, explanation: "What happened?" },
          { text: "Yake aaytu?", correct: false },
        ],
      },
    ],
  },
  {
    day: 30,
    week: 5,
    level: 5,
    title: "Final: The Exam",
    badgeReward: "Kannada Kali",
    lang: "english", // Explicitly set language
    strategy: { title: "The End", tips: ["You are ready."] },
    vocab: [
      {
        id: 1,
        kannada: "Dhanyavada",
        english: "Thank you",
        phonetic: "Dhan-ya-vaa-da",
      },
      {
        id: 2,
        kannada: "Ellarigu",
        english: "Everyone",
        phonetic: "El-la-ri-gu",
      },
      { id: 3, kannada: "Preethi", english: "Love", phonetic: "Pree-thi" },
      {
        id: 4,
        kannada: "Karnataka",
        english: "Karnataka",
        phonetic: "Kar-na-ta-ka",
      },
      { id: 5, kannada: "Geluvu", english: "Victory", phonetic: "Ge-lu-vu" },
    ],
    scenarios: [
      {
        context: "Thank you everyone.",
        options: [
          {
            text: "Ellarigu dhanyavada.",
            correct: true,
            explanation: "To everyone thank you.",
          },
          { text: "Ellarigu namaskara.", correct: false },
        ],
      },
      {
        context: "I love Karnataka.",
        options: [
          {
            text: "Nange Karnataka preethi.",
            correct: true,
            explanation: "I love Karnataka.",
          },
          { text: "Nange Karnataka kopa.", correct: false },
        ],
      },
      {
        context: "This is a victory.",
        options: [
          {
            text: "Idu geluvu.",
            correct: true,
            explanation: "This is victory.",
          },
          { text: "Idu solu.", correct: false },
        ],
      },
      {
        context: "Thank you for teaching.",
        options: [
          {
            text: "Kalisiddakke dhanyavada.",
            correct: true,
            explanation: "Thanks for teaching.",
          },
          { text: "Kalisiddakke kopa.", correct: false },
        ],
      },
    ],
  },
];
