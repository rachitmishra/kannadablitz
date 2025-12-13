export const LEARNING_DATA_HINDI = [
  // --- WEEK 1: SURVIVAL ---
  {
    day: 1,
    week: 1,
    level: 1,
    title: "Survival: The Auto",
    badgeReward: "Rickshaw Rebel",
    strategy: {
      title: "The 'Ge' Rule",
      tips: [
        "स्थानों के साथ '-गे' जोड़ें (उदा. इंदिरानगर-गे)।", // Add '-ge' to places (Indiranagar-ge).
        "दृढ़ता से 'बेड़ा' (नहीं) कहें।", // Say 'Beda' (No) firmly.
        "'क्या आप आएंगे?' न पूछें, 'बन्नी' (आओ) कहें।", // Don't ask 'Will you come?', say 'Banni' (Come).
      ],
    },
    vocab: [
      {
        id: 1,
        kannada: "Naanu / Neevu",
        english: "I / You",
        hindi: "मैं / आप",
        phonetic: "Naa-nu / Nee-vu",
      },
      {
        id: 2,
        kannada: "Hogi / Banni",
        english: "Go / Come",
        hindi: "जाओ / आओ",
        phonetic: "Ho-gi / Bun-ni",
      },
      {
        id: 3,
        kannada: "Nillisi",
        english: "Stop",
        hindi: "रोकें",
        phonetic: "Nil-li-si",
      },
      {
        id: 4,
        kannada: "Beda / Beku",
        english: "Don't Want / Want",
        hindi: "नहीं चाहिए / चाहिए",
        phonetic: "Bay-da / Bay-ku",
      },
      {
        id: 5,
        kannada: "Illi / Alli",
        english: "Here / There",
        hindi: "यहां / वहां",
        phonetic: "Il-li / Al-li",
      },
    ],
    scenarios: [
      {
        context: "Driver: 'एल्ली होगबेकू?' (कहां जाना है?)", // Where to go?
        options: [
          {
            text: "इंदिरानगर-गे होगी।",
            correct: true,
            explanation: "स्थान + 'गे' अनिवार्य है।",
          },
          { text: "इंदिरानगर बन्नी।", correct: false },
        ],
      },
      {
        context: "ड्राइवर छोटी सवारी के लिए ₹500 मांगता है।", // Driver asks ₹500 for a short ride.
        options: [
          { text: "500 बेड़ा!", correct: true, explanation: "दृढ़ इनकार।" },
          { text: "500 बेकू।", correct: false },
        ],
      },
      {
        context: "आप उसे कोने पर रोकना चाहते हैं।", // You want him to stop at the corner.
        options: [
          {
            text: "अल्ली निल्लिसि।",
            correct: true,
            explanation: "वहां रुकें।",
          },
          { text: "अल्ली होगी।", correct: false },
        ],
      },
      {
        context: "ड्राइवर पूछता है कि क्या आप कोरमंगला जाना चाहते हैं।", // Driver asks if you want to go to Koramangala.
        options: [
          {
            text: "कोरमंगला बेड़ा।",
            correct: true,
            explanation: "मुझे कोरमंगला नहीं चाहिए।",
          },
          { text: "कोरमंगला बन्नी।", correct: false },
        ],
      },
      {
        context: "आप उसे यहां रोकना चाहते हैं।", // You want him to stop here.
        options: [
          { text: "इल्ली निल्लिसि।", correct: true, explanation: "यहाँ रुकें।" },
          { text: "इल्ली होगी।", correct: false },
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
    strategy: {
      title: "The Art of 'Jaasti'",
      tips: [
        "'जास्ती आयतू' = बहुत महंगा।", // 'Jaasti Aytu' = Too expensive.
        "'स्वल्पा कमी माड़ी' = थोड़ा कम करें।", // 'Swalpa Kammi Maadi' = Lower it a little.
        "संख्याएँ 1-5: ओन्दु, एरडु, मूरु, नालकु, ऐदु।", // Numbers 1-5: Ondu, Eradu, Mooru, Naalku, Aidu.
      ],
    },
    vocab: [
      {
        id: 1,
        kannada: "Estu?",
        english: "How much?",
        hindi: "कितना?",
        phonetic: "Esh-tu",
      },
      {
        id: 2,
        kannada: "Kodi / Togolli",
        english: "Give / Take",
        hindi: "दो / लो",
        phonetic: "Ko-di / Tho-gol-li",
      },
      {
        id: 3,
        kannada: "Jaasti Aytu",
        english: "Too Expensive",
        hindi: "बहुत महंगा",
        phonetic: "Jaas-ti Aay-tu",
      },
      {
        id: 4,
        kannada: "Kammi Maadi",
        english: "Lower price",
        hindi: "कीमत कम करें",
        phonetic: "Kam-mi Maa-di",
      },
      {
        id: 5,
        kannada: "Swalpa",
        english: "A little",
        hindi: "थोड़ा",
        phonetic: "Swal-pa",
      },
    ],
    scenarios: [
      {
        context: "विक्रेता 'नूरु रुपयी' (100 रुपये) कहता है।", // Vendor says 'Nooru rupayi' (100 rupees).
        options: [
          {
            text: "जास्ती आयतू। कमी माड़ी।",
            correct: true,
            explanation: "क्लासिक सौदेबाजी।",
          },
          { text: "स्वल्पा कोड़ी।", correct: false },
        ],
      },
      {
        context: "आपको किसी चीज़ के 2 किलो चाहिए।", // You want 2 kilos of something.
        options: [
          {
            text: "एरदु किलो कोड़ी।",
            correct: true,
            explanation: "2 किलो दो।",
          },
          { text: "एरदु किलो तोगोलि।", correct: false },
        ],
      },
      {
        context: "विक्रेता पैसे मांगता है।", // Vendor asks for money.
        options: [
          {
            text: "दुड्डु तोगोलि।",
            correct: true,
            explanation: "पैसे लो।",
          },
          { text: "दुड्डु कोड़ी।", correct: false },
        ],
      },
      {
        context: "आपको केवल थोड़ा सा चाहिए।", // You only want a little bit.
        options: [
          {
            text: "स्वल्पा कोड़ी।",
            correct: true,
            explanation: "थोड़ा दो।",
          },
          { text: "जास्ती कोड़ी।", correct: false },
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
    strategy: {
      title: "Guiding Dunzo",
      tips: [
        "बाएं=एडाक्के, दाएं=बलाक्के।", // Left=Edakke, Right=Balakke.
        "पास=हत्तिरा।", // Near=Hattira.
        "सीधा=नेरा।", // Straight=Nera.
      ],
    },
    vocab: [
      {
        id: 1,
        kannada: "Munde / Hinde",
        english: "Front / Back",
        hindi: "आगे / पीछे",
        phonetic: "Mun-day / Hin-day",
      },
      {
        id: 2,
        kannada: "Edakke / Balakke",
        english: "Left / Right",
        hindi: "बाएं / दाएं",
        phonetic: "Eda-kkay / Bala-kkay",
      },
      {
        id: 3,
        kannada: "Hattira",
        english: "Near",
        hindi: "पास",
        phonetic: "Hat-ti-ra",
      },
      {
        id: 4,
        kannada: "Nera",
        english: "Straight",
        hindi: "सीधा",
        phonetic: "Nay-ra",
      },
      {
        id: 5,
        kannada: "Barutte",
        english: "It comes",
        hindi: "आता है",
        phonetic: "Ba-rut-tay",
      },
    ],
    scenarios: [
      {
        context: "डिलीवरी वाला रास्ता भटक गया है। उसे सीधा आने को कहें।", // Delivery guy is lost. Tell him to come straight.
        options: [
          {
            text: "नेरा बन्नी।",
            correct: true,
            explanation: "सीधा आओ।",
          },
          { text: "नेरा होगी।", correct: false },
        ],
      },
      {
        context: "वह गेट पर है। उसे अंदर आने को कहें।", // He is at the gate. Tell him to come inside.
        options: [
          {
            text: "ओलागे बन्नी।",
            correct: true,
            explanation: "अंदर आओ।",
          },
          { text: "होरागे बन्नी।", correct: false },
        ],
      },
      {
        context: "वह पूछता है 'दाएं मुड़ना?'", // He asks 'Right turn?'
        options: [
          {
            text: "हौदु, बलाक्के।",
            correct: true,
            explanation: "हां, दाएं।",
          },
          { text: "इल्ला, एडाक्के।", correct: false },
        ],
      },
      {
        context: "उसे बताएं कि आप पार्क के पास हैं।", // Tell him you are near the park.
        options: [
          {
            text: "नानु पार्क हत्तिरा इद्दिनी।",
            correct: true,
            explanation: "मैं पार्क के पास हूं।",
          },
          { text: "पार्क मुंडे।", correct: false },
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
    strategy: {
      title: "Quick Eats",
      tips: [
        "'ओन्दु कॉफी' (एक कॉफी)।", // 'Ondu coffee' (One coffee).
        "'साकू' का अर्थ है पर्याप्त/बंद करें।", // 'Saaku' means Enough/Stop.
      ],
    },
    vocab: [
      {
        id: 1,
        kannada: "Neeru",
        english: "Water",
        hindi: "पानी",
        phonetic: "Nee-ru",
      },
      {
        id: 2,
        kannada: "Bisi",
        english: "Hot",
        hindi: "गर्म",
        phonetic: "Bi-si",
      },
      {
        id: 3,
        kannada: "Oota",
        english: "Meal",
        hindi: "भोजन",
        phonetic: "Oo-ta",
      },
      {
        id: 4,
        kannada: "Saaku",
        english: "Enough",
        hindi: "बस / पर्याप्त",
        phonetic: "Saa-ku",
      },
      {
        id: 5,
        kannada: "Chennagide",
        english: "It's good",
        hindi: "यह अच्छा है",
        phonetic: "Chen-na-gi-day",
      },
    ],
    scenarios: [
      {
        context: "वेटर पानी डाल रहा है। यह बह रहा है।", // Waiter pours water. It's overflowing.
        options: [
          {
            text: "साकू!",
            correct: true,
            explanation: "बंद करो / पर्याप्त।",
          },
          { text: "बेड़ा।", correct: false },
        ],
      },
      {
        context: "आपको एक कॉफी चाहिए।", // You want a coffee.
        options: [
          {
            text: "ओन्दु कॉफी कोड़ी।",
            correct: true,
            explanation: "एक कॉफी दो।",
          },
          { text: "कॉफी तोगोलि।", correct: false },
        ],
      },
      {
        context: "डोसा स्वादिष्ट था।", // The dosa was tasty.
        options: [
          {
            text: "डोसा चेन्नागिदे।",
            correct: true,
            explanation: "डोसा अच्छा है।",
          },
          { text: "डोसा साकू।", correct: false },
        ],
      },
      {
        context: "आपको गर्म पानी चाहिए।", // You want hot water.
        options: [
          {
            text: "बिसि नीरु कोड़ी।",
            correct: true,
            explanation: "गर्म पानी दो।",
          },
          { text: "तम्पु नीरु कोड़ी।", correct: false },
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
    strategy: {
      title: "Small Talk",
      tips: [
        "'ओता आयता?' सार्वभौमिक अभिवादन है।", // 'Oota aayta?' is the universal greeting.
        "सम्मान के लिए 'रि' जोड़ें।", // Add 'ri' for respect.
      ],
    },
    vocab: [
      {
        id: 1,
        kannada: "Namaskara",
        english: "Hello",
        hindi: "नमस्ते",
        phonetic: "Na-mas-kaa-ra",
      },
      {
        id: 2,
        kannada: "Hegiddira?",
        english: "How are you?",
        hindi: "आप कैसे हैं?",
        phonetic: "Hay-gid-di-ra",
      },
      {
        id: 3,
        kannada: "Oota Aayta?",
        english: "Had food?",
        hindi: "खाना खाया?",
        phonetic: "Oo-ta Aay-ta",
      },
      {
        id: 4,
        kannada: "Gottilla",
        english: "Don't know",
        hindi: "नहीं पता",
        phonetic: "Got-til-la",
      },
      {
        id: 5,
        kannada: "Naale",
        english: "Tomorrow",
        hindi: "कल",
        phonetic: "Naa-lay",
      },
    ],
    scenarios: [
      {
        context: "पड़ोसी सुबह आपको देखकर मुस्कुराता है।", // Neighbor smiles at you in the morning.
        options: [
          {
            text: "नमस्ते, हेगिद्दिरा?",
            correct: true,
            explanation: "नमस्ते, आप कैसे हैं?",
          },
          { text: "ओता आयता?", correct: false },
        ],
      },
      {
        context: "दोपहर 2 बजे हैं। पड़ोसी पूछता है 'ओता आयता?'", // It's 2 PM. Neighbor asks 'Oota aayta?'
        options: [
          { text: "आयतु, निमदु?", correct: true, explanation: "हो गया, आपका?" },
          { text: "गोट्टिल्ला।", correct: false },
        ],
      },
      {
        context: "वे कुछ भ्रमित करने वाले बारे में पूछते हैं।", // They ask about something confusing.
        options: [
          {
            text: "नंगे गोट्टिल्ला।",
            correct: true,
            explanation: "मुझे नहीं पता।",
          },
          { text: "नंगे बेकू।", correct: false },
        ],
      },
      {
        context: "उन्हें बताएं कि आप कल आएंगे।", // Tell them you will come tomorrow.
        options: [
          {
            text: "नाले बार्तिनी।",
            correct: true,
            explanation: "मैं कल आऊंगा।",
          },
          { text: "इवत्तु बार्तिनी।", correct: false },
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
    strategy: {
      title: "Urgency",
      tips: [
        "'बेगाने' = जल्दी।", // 'Begane' = Fast.
        "'इवत्तु' = आज।", // 'Ivattu' = Today.
      ],
    },
    vocab: [
      {
        id: 1,
        kannada: "Sahaya",
        english: "Help",
        hindi: "मदद",
        phonetic: "Sa-haa-ya",
      },
      {
        id: 2,
        kannada: "Begane",
        english: "Fast",
        hindi: "जल्दी",
        phonetic: "Bay-ga-nay",
      },
      {
        id: 3,
        kannada: "Nidhana",
        english: "Slow",
        hindi: "धीरे",
        phonetic: "Ni-dhaa-na",
      },
      {
        id: 4,
        kannada: "Ivattu",
        english: "Today",
        hindi: "आज",
        phonetic: "E-vat-tu",
      },
      {
        id: 5,
        kannada: "Eega",
        english: "Now",
        hindi: "अभी",
        phonetic: "Ee-ga",
      },
    ],
    scenarios: [
      {
        context: "प्लंबर बहुत धीरे काम कर रहा है।", // Plumber is working very slowly.
        options: [
          {
            text: "स्वल्पा बेगाने माड़ी।",
            correct: true,
            explanation: "जल्दी करो।",
          },
          { text: "निधना माड़ी।", correct: false },
        ],
      },
      {
        context: "आपको तुरंत मदद चाहिए।", // You need help immediately.
        options: [
          {
            text: "ईगा सहायता बेकू।",
            correct: true,
            explanation: "अभी मदद चाहिए।",
          },
          { text: "नाले सहायता बेकू।", correct: false },
        ],
      },
      {
        context: "ड्राइवर को धीरे चलने को कहें।", // Tell the driver to go slow.
        options: [
          { text: "निधना होगी।", correct: true, explanation: "धीरे जाओ।" },
          { text: "बेगाने होगी।", correct: false },
        ],
      },
      {
        context: "उसे आज आने को कहें।", // Ask him to come today.
        options: [
          { text: "इवत्तु बन्नी।", correct: true, explanation: "आज आओ।" },
          { text: "नाले बन्नी।", correct: false },
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
    strategy: {
      title: "Mix & Match",
      tips: ["स्थानों, संख्याओं और अनुरोधों को मिलाएं।"], // Combine locations, numbers, and requests.
    },
    vocab: [
      {
        id: 1,
        kannada: "Yelli?",
        english: "Where?",
        hindi: "कहां?",
        phonetic: "Yel-li",
      },
      {
        id: 2,
        kannada: "Yaaru?",
        english: "Who?",
        hindi: "कौन?",
        phonetic: "Yaa-ru",
      },
      {
        id: 3,
        kannada: "Yaavaga?",
        english: "When?",
        hindi: "कब?",
        phonetic: "Yaa-va-ga",
      },
      {
        id: 4,
        kannada: "Hege?",
        english: "How?",
        hindi: "कैसे?",
        phonetic: "Hay-gay",
      },
      {
        id: 5,
        kannada: "Yenu?",
        english: "What?",
        hindi: "क्या?",
        phonetic: "Yay-nu",
      },
    ],
    scenarios: [
      {
        context: "पूछें कि घर कहां है।", // Ask where the house is.
        options: [
          {
            text: "माने एल्ली?",
            correct: true,
            explanation: "घर कहां?",
          },
          { text: "माने एनु?", correct: false },
        ],
      },
      {
        context: "पूछें कि कौन आ रहा है।", // Ask who is coming.
        options: [
          {
            text: "यारू बार्तारे?",
            correct: true,
            explanation: "कौन आ रहा है?",
          },
          { text: "यारू होगतारे?", correct: false },
        ],
      },
      {
        context: "पूछें कि कब जाना है।", // Ask when to go.
        options: [
          {
            text: "यावागा होगबेकू?",
            correct: true,
            explanation: "कब जाना है?",
          },
          { text: "एल्ली होगबेकू?", correct: false },
        ],
      },
      {
        context: "पूछें कि आपको क्या चाहिए।", // Ask what you want.
        options: [
          {
            text: "एनु बेकू?",
            correct: true,
            explanation: "आपको क्या चाहिए?",
          },
          { text: "हेगे बेकू?", correct: false },
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
    strategy: {
      title: "House Hunting",
      tips: [
        "'बाडिगे' किराया है।", // 'Baadige' is Rent.
        "'माने' घर है।", // 'Mane' is House.
      ],
    },
    vocab: [
      {
        id: 1,
        kannada: "Mane",
        english: "House",
        hindi: "घर",
        phonetic: "Ma-nay",
      },
      {
        id: 2,
        kannada: "Baadige",
        english: "Rent",
        hindi: "किराया",
        phonetic: "Baa-di-gay",
      },
      {
        id: 3,
        kannada: "Kone",
        english: "Room",
        hindi: "कमरा",
        phonetic: "Ko-nay",
      },
      {
        id: 4,
        kannada: "Neeru",
        english: "Water",
        hindi: "पानी",
        phonetic: "Nee-ru",
      },
      {
        id: 5,
        kannada: "Current",
        english: "Power/Electricity",
        hindi: "बिजली",
        phonetic: "Current",
      },
    ],
    scenarios: [
      {
        context: "किराए के बारे में पूछें।", // Ask about the rent.
        options: [
          {
            text: "बाडिगे एश्टु?",
            correct: true,
            explanation: "कितना किराया?",
          },
          { text: "बाडिगे एल्ली?", correct: false },
        ],
      },
      {
        context: "पूछें कि पानी उपलब्ध है या नहीं।", // Ask if water is available.
        options: [
          {
            text: "नीरु इद्या?",
            correct: true,
            explanation: "क्या पानी है?",
          },
          { text: "नीरु बेकू।", correct: false },
        ],
      },
      {
        context: "पूछें कि कितने कमरे हैं।", // Ask how many rooms.
        options: [
          {
            text: "एश्टु कोने इदे?",
            correct: true,
            explanation: "कितने कमरे हैं?",
          },
          { text: "कोने एल्ली?", correct: false },
        ],
      },
      {
        context: "कहें कि घर अच्छा है।", // Say the house is good.
        options: [
          {
            text: "माने चेन्नागिदे।",
            correct: true,
            explanation: "घर अच्छा है।",
          },
          { text: "माने बेड़ा।", correct: false },
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
    strategy: {
      title: "Clock Watching",
      tips: [
        "'गंटे' = घंटा/घंटी।", // 'Gante' = Hour/Bell.
        "'अर्दा' = आधा।", // 'Arda' = Half.
      ],
    },
    vocab: [
      {
        id: 1,
        kannada: "Gante",
        english: "Hour/Time",
        hindi: "घंटा/समय",
        phonetic: "Gan-tay",
      },
      {
        id: 2,
        kannada: "Nimisha",
        english: "Minute",
        hindi: "मिनट",
        phonetic: "Ni-mi-sha",
      },
      {
        id: 3,
        kannada: "Beligge",
        english: "Morning",
        hindi: "सुबह",
        phonetic: "Be-lig-gay",
      },
      {
        id: 4,
        kannada: "Ratri",
        english: "Night",
        hindi: "रात",
        phonetic: "Raat-ri",
      },
      {
        id: 5,
        kannada: "Madhyana",
        english: "Afternoon",
        hindi: "दोपहर",
        phonetic: "Madh-yaa-na",
      },
    ],
    scenarios: [
      {
        context: "मीटिंग सुबह है।", // The meeting is in the morning.
        options: [
          {
            text: "बेलिग्गे मीटिंग इदे।",
            correct: true,
            explanation: "सुबह मीटिंग है।",
          },
          { text: "रात्रि मीटिंग इदे।", correct: false },
        ],
      },
      {
        context: "पूछें 'समय क्या हुआ है?'", // Ask 'What is the time?'
        options: [
          {
            text: "टाइम एश्टु?",
            correct: true,
            explanation: "कितना समय?",
          },
          { text: "टाइम यावागा?", correct: false },
        ],
      },
      {
        context: "मैं रात को आऊंगा।", // I will come at night.
        options: [
          {
            text: "रात्रि बार्तिनी।",
            correct: true,
            explanation: "रात मैं आऊंगा।",
          },
          { text: "मध्याना बार्तिनी।", correct: false },
        ],
      },
      {
        context: "5 मिनट प्रतीक्षा करें।", // Wait 5 minutes.
        options: [
          {
            text: "ऐदु निमिष इरि।",
            correct: true,
            explanation: "5 मिनट प्रतीक्षा करें।",
          },
          { text: "ऐदु गंटे इरि।", correct: false },
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
    strategy: {
      title: "Relations",
      tips: ["'अवरु' सम्मानजनक 'वह' है।"], // 'Avru' is respectful 'He/She'.
    },
    vocab: [
      {
        id: 1,
        kannada: "Thande",
        english: "Father",
        hindi: "पिता",
        phonetic: "Than-day",
      },
      {
        id: 2,
        kannada: "Thaayi",
        english: "Mother",
        hindi: "माँ",
        phonetic: "Thaa-yi",
      },
      {
        id: 3,
        kannada: "Anna/Thamma",
        english: "Older/Younger Bro",
        hindi: "बड़ा/छोटा भाई",
        phonetic: "An-na",
      },
      {
        id: 4,
        kannada: "Akka/Thangi",
        english: "Older/Younger Sis",
        hindi: "बड़ी/छोटी बहन",
        phonetic: "Ak-ka",
      },
      {
        id: 5,
        kannada: "Maga/Magalu",
        english: "Son/Daughter",
        hindi: "बेटा/बेटी",
        phonetic: "Ma-ga",
      },
    ],
    scenarios: [
      {
        context: "अपनी माँ का परिचय दें।", // Introduce your mother.
        options: [
          {
            text: "इवरु नन्ना ताई।",
            correct: true,
            explanation: "यह मेरी माँ है।",
          },
          { text: "इवरु नन्ना तांडे।", correct: false },
        ],
      },
      {
        context: "पूछें 'क्या वह आपका भाई है?'", // Ask 'Is he your brother?'
        options: [
          {
            text: "इवरु निम्मा अन्ना ना?",
            correct: true,
            explanation: "क्या वह आपका भाई है?",
          },
          { text: "इवरु निम्मा अक्का ना?", correct: false },
        ],
      },
      {
        context: "यह मेरी बेटी है।", // This is my daughter.
        options: [
          {
            text: "इवालु नन्ना मागालु।",
            correct: true,
            explanation: "यह मेरी बेटी है।",
          },
          { text: "इवानु नन्ना मागा।", correct: false },
        ],
      },
      {
        context: "आपके पिता कहाँ हैं?", // Where is your father?
        options: [
          {
            text: "निम्मा तांडे एल्ली?",
            correct: true,
            explanation: "आपके पिता कहाँ?",
          },
          { text: "निम्मा तांडे यारू?", correct: false },
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
    strategy: {
      title: "Colleagues",
      tips: [
        "'केलासा' = काम।", // 'Kelasa' = Work.
        "'राजे' = छुट्टी/अवकाश।", // 'Raje' = Leave/Holiday.
      ],
    },
    vocab: [
      {
        id: 1,
        kannada: "Kelasa",
        english: "Work",
        hindi: "काम",
        phonetic: "Ke-la-sa",
      },
      {
        id: 2,
        kannada: "Raje",
        english: "Leave",
        hindi: "छुट्टी",
        phonetic: "Ra-jay",
      },
      {
        id: 3,
        kannada: "Banni",
        english: "Come (Formal)",
        hindi: "आओ (औपचारिक)",
        phonetic: "Ban-ni",
      },
      {
        id: 4,
        kannada: "Kootkoli",
        english: "Sit (Formal)",
        hindi: "बैठो (औपचारिक)",
        phonetic: "Koot-ko-li",
      },
      {
        id: 5,
        kannada: "Mugitu",
        english: "Finished",
        hindi: "समाप्त",
        phonetic: "Mu-gi-tu",
      },
    ],
    scenarios: [
      {
        context: "पूछें कि काम हो गया है या नहीं।", // Ask if work is done.
        options: [
          {
            text: "केलासा मुगित्ता?",
            correct: true,
            explanation: "काम खत्म?",
          },
          { text: "केलासा शुरू?", correct: false },
        ],
      },
      {
        context: "एक ग्राहक को बैठने को कहें।", // Tell a client to sit.
        options: [
          {
            text: "दया माड़ी कूट्कोलि।",
            correct: true,
            explanation: "कृपया बैठें।",
          },
          { text: "निल्लिसि।", correct: false },
        ],
      },
      {
        context: "मुझे कल छुट्टी चाहिए।", // I need leave tomorrow.
        options: [
          {
            text: "नाले राजे बेकू।",
            correct: true,
            explanation: "कल छुट्टी चाहिए।",
          },
          { text: "नाले केलासा बेकू।", correct: false },
        ],
      },
      {
        context: "अपने बॉस को अंदर बुलाएं।", // Call your boss inside.
        options: [
          {
            text: "सर, ओलागे बन्नी।",
            correct: true,
            explanation: "सर, अंदर आओ।",
          },
          { text: "सर, होरागे होगी।", correct: false },
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
    strategy: {
      title: "Instructions",
      tips: [
        "'क्लीन माड़ी' = कृपया साफ करें।", // 'Clean maadi' = Please clean.
        "'बारे' = केवल।", // 'Bary' = Only.
      ],
    },
    vocab: [
      {
        id: 1,
        kannada: "Kasa",
        english: "Trash",
        hindi: "कचरा",
        phonetic: "Ka-sa",
      },
      {
        id: 2,
        kannada: "Paathre",
        english: "Vessels/Dishes",
        hindi: "बर्तन",
        phonetic: "Paat-ray",
      },
      {
        id: 3,
        kannada: "Batte",
        english: "Clothes",
        hindi: "कपड़े",
        phonetic: "Bat-tay",
      },
      {
        id: 4,
        kannada: "Nela",
        english: "Floor",
        hindi: "फर्श",
        phonetic: "Ne-la",
      },
      {
        id: 5,
        kannada: "Ores",
        english: "Wipe",
        hindi: "पोंछना",
        phonetic: "O-res",
      },
    ],
    scenarios: [
      {
        context: "उसे बर्तन धोने को कहें।", // Tell her to wash the vessels.
        options: [
          {
            text: "पात्रे टोलियि।",
            correct: true,
            explanation: "बर्तन धोओ।",
          },
          { text: "कसा टोलियि।", correct: false },
        ],
      },
      {
        context: "फर्श साफ करने को कहें।", // Ask to sweep the floor.
        options: [
          {
            text: "नेला गुडीसि।",
            correct: true,
            explanation: "फर्श साफ करो।",
          },
          { text: "नेला ओरेसि।", correct: false },
        ],
      },
      {
        context: "कचरा बाहर निकालो।", // Take out the trash.
        options: [
          {
            text: "कसा होरागेहाकि।",
            correct: true,
            explanation: "कचरा बाहर रखो।",
          },
          { text: "कसा ओलागेहाकि।", correct: false },
        ],
      },
      {
        context: "टेबल पोंछें।", // Wipe the table.
        options: [
          {
            text: "टेबल ओरेसि।",
            correct: true,
            explanation: "टेबल पोंछें।",
          },
          { text: "टेबल टोलियि।", correct: false },
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
    strategy: {
      title: "Freshness",
      tips: [
        "'ताजा' = ताजा।", // 'Thaja' = Fresh.
        "'हन्नु' = फल।", // 'Hunn' = Fruit.
      ],
    },
    vocab: [
      {
        id: 1,
        kannada: "Tharakari",
        english: "Vegetables",
        hindi: "सब्जियां",
        phonetic: "Tha-ra-ka-ri",
      },
      {
        id: 2,
        kannada: "Hannu",
        english: "Fruit",
        hindi: "फल",
        phonetic: "Han-nu",
      },
      {
        id: 3,
        kannada: "Haalu",
        english: "Milk",
        hindi: "दूध",
        phonetic: "Haa-lu",
      },
      {
        id: 4,
        kannada: "Motte",
        english: "Egg",
        hindi: "अंडा",
        phonetic: "Mot-tay",
      },
      {
        id: 5,
        kannada: "Chilla",
        english: "Change (Money)",
        hindi: "खुल्ले पैसे",
        phonetic: "Chil-la",
      },
    ],
    scenarios: [
      {
        context: "खुल्ले पैसे मांगें।", // Ask for change (money).
        options: [
          {
            text: "चिल्ला इद्या?",
            correct: true,
            explanation: "खुल्ले पैसे हैं?",
          },
          { text: "दुड्डु इद्या?", correct: false },
        ],
      },
      {
        context: "क्या सब्जियां ताज़ी हैं?", // Are the vegetables fresh?
        options: [
          {
            text: "ताराकारी फ्रेश इद्या?",
            correct: true,
            explanation: "सब्जियां ताज़ी हैं?",
          },
          { text: "ताराकारी बेकू।", correct: false },
        ],
      },
      {
        context: "मुझे 6 अंडे चाहिए।", // I want 6 eggs.
        options: [
          {
            text: "आरु मोट्टे कोड़ी।",
            correct: true,
            explanation: "6 अंडे दो।",
          },
          { text: "आरु हालु कोड़ी।", correct: false },
        ],
      },
      {
        context: "फलों की दुकान कहाँ है?", // Where is the fruit shop?
        options: [
          {
            text: "हन्नु अंगादी एल्ली?",
            correct: true,
            explanation: "फलों की दुकान कहाँ?",
          },
          { text: "हन्नु एनु?", correct: false },
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
    strategy: {
      title: "Settling Down",
      tips: ["सप्ताह 2 का सारांश।"], // Week 2 Recap.
    },
    vocab: [
      {
        id: 1,
        kannada: "Mane",
        english: "House",
        hindi: "घर",
        phonetic: "Ma-nay",
      },
      {
        id: 2,
        kannada: "Kelasa",
        english: "Work",
        hindi: "काम",
        phonetic: "Ke-la-sa",
      },
      {
        id: 3,
        kannada: "Beligge",
        english: "Morning",
        hindi: "सुबह",
        phonetic: "Be-lig-gay",
      },
      {
        id: 4,
        kannada: "Raje",
        english: "Holiday",
        hindi: "छुट्टी",
        phonetic: "Ra-jay",
      },
      {
        id: 5,
        kannada: "Oota",
        english: "Meal",
        hindi: "भोजन",
        phonetic: "Oo-ta",
      },
    ],
    scenarios: [
      {
        context: "काम खत्म हो गया है।", // Work is finished.
        options: [
          {
            text: "केलासा मुगितु।",
            correct: true,
            explanation: "काम खत्म।",
          },
          { text: "केलासा शुरू।", correct: false },
        ],
      },
      {
        context: "मैं घर पर हूँ।", // I am at home.
        options: [
          {
            text: "नानु मानेयल्ली इद्दिनी।",
            correct: true,
            explanation: "मैं घर पर हूँ।",
          },
          { text: "नानु ऑफिस इद्दिनी।", correct: false },
        ],
      },
      {
        context: "कल छुट्टी है।", // It is a holiday tomorrow.
        options: [
          {
            text: "नाले राजे।",
            correct: true,
            explanation: "कल छुट्टी।",
          },
          { text: "नाले केलासा।", correct: false },
        ],
      },
      {
        context: "सुबह आओ।", // Come in the morning.
        options: [
          {
            text: "बेलिग्गे बन्नी।",
            correct: true,
            explanation: "सुबह आओ।",
          },
          { text: "रात्रि बन्नी।", correct: false },
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
    strategy: {
      title: "Pain & Health",
      tips: [
        "'नोवु' = दर्द।", // 'Novu' = Pain.
        "'ज्वारा' = बुखार।", // 'Jwara' = Fever.
      ],
    },
    vocab: [
      {
        id: 1,
        kannada: "Novu",
        english: "Pain",
        hindi: "दर्द",
        phonetic: "No-vu",
      },
      {
        id: 2,
        kannada: "Jwara",
        english: "Fever",
        hindi: "बुखार",
        phonetic: "Jwa-ra",
      },
      {
        id: 3,
        kannada: "Maathre",
        english: "Tablet",
        hindi: "गोली",
        phonetic: "Maat-ray",
      },
      {
        id: 4,
        kannada: "Thale",
        english: "Head",
        hindi: "सिर",
        phonetic: "Tha-lay",
      },
      {
        id: 5,
        kannada: "Hotte",
        english: "Stomach",
        hindi: "पेट",
        phonetic: "Hot-tay",
      },
    ],
    scenarios: [
      {
        context: "मुझे सिरदर्द है।", // I have a headache.
        options: [
          {
            text: "तले नोवु इदे।",
            correct: true,
            explanation: "सिर दर्द है।",
          },
          { text: "होट्टे नोवु इदे।", correct: false },
        ],
      },
      {
        context: "मुझे बुखार है।", // I have a fever.
        options: [
          {
            text: "नंगे ज्वारा इदे।",
            correct: true,
            explanation: "मुझे बुखार है।",
          },
          { text: "नंगे खुशी इदे।", correct: false },
        ],
      },
      {
        context: "क्या आपने गोली ले ली?", // Did you take the tablet?
        options: [
          {
            text: "मातरे तोगोलि।",
            correct: true,
            explanation: "गोली लो।",
          },
          { text: "मातरे बेड़ा।", correct: false },
        ],
      },
      {
        context: "मेरे पेट में दर्द है।", // My stomach hurts.
        options: [
          {
            text: "होट्टे नोवु इदे।",
            correct: true,
            explanation: "पेट में दर्द।",
          },
          { text: "कालु नोवु इदे।", correct: false },
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
    strategy: {
      title: "Public Transport",
      tips: [
        "'हत्तु' = चढ़ना/अंदर आना।", // 'Hathhu' = Climb/Get in.
        "'इलि' = उतरना।", // 'Ili' = Get down.
      ],
    },
    vocab: [
      {
        id: 1,
        kannada: "Bus Nildana",
        english: "Bus Stop",
        hindi: "बस स्टॉप",
        phonetic: "Nil-daa-na",
      },
      {
        id: 2,
        kannada: "Ticket",
        english: "Ticket",
        hindi: "टिकट",
        phonetic: "Ticket",
      },
      {
        id: 3,
        kannada: "Hathi",
        english: "Get in",
        hindi: "अंदर आओ",
        phonetic: "Hath-thi",
      },
      {
        id: 4,
        kannada: "Iliyi",
        english: "Get down",
        hindi: "उतर जाओ",
        phonetic: "I-li-yi",
      },
      {
        id: 5,
        kannada: "Pass",
        english: "Pass",
        hindi: "पास",
        phonetic: "Pass",
      },
    ],
    scenarios: [
      {
        context: "ड्राइवर को रुकने को कहें।", // Tell driver to stop.
        options: [
          {
            text: "इल्ली निल्लिसि, इलिथिनि।",
            correct: true,
            explanation: "यहां रुकें, मैं उतर जाऊंगा।",
          },
          { text: "होगी।", correct: false },
        ],
      },
      {
        context: "मैजेस्टिक के लिए टिकट मांगें।", // Ask for a ticket to Majestic.
        options: [
          {
            text: "मैजेस्टिक-गे ओन्दु टिकट।",
            correct: true,
            explanation: "मैजेस्टिक के लिए एक टिकट।",
          },
          { text: "मैजेस्टिक बेड़ा।", correct: false },
        ],
      },
      {
        context: "क्या यह बस सिल्क बोर्ड जाती है?", // Does this bus go to Silk Board?
        options: [
          {
            text: "सिल्क बोर्ड-गे होगुत्ता?",
            correct: true,
            explanation: "क्या यह सिल्क बोर्ड जाती है?",
          },
          { text: "सिल्क बोर्ड-गे बारुत्ता?", correct: false },
        ],
      },
      {
        context: "जल्दी अंदर आओ।", // Get in quickly.
        options: [
          {
            text: "बेगाने हत्थि।",
            correct: true,
            explanation: "जल्दी चढ़ो।",
          },
          { text: "बेगाने इलियि।", correct: false },
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
    strategy: {
      title: "Expressing Self",
      tips: [
        "'खुशी' = खुश।", // 'Kushi' = Happy.
        "'बेजारा' = दुखी।", // 'Bejara' = Sad.
      ],
    },
    vocab: [
      {
        id: 1,
        kannada: "Kushi",
        english: "Happy",
        hindi: "खुश",
        phonetic: "Ku-shi",
      },
      {
        id: 2,
        kannada: "Bejara",
        english: "Sad/Bored",
        hindi: "दुखी/ऊबा हुआ",
        phonetic: "Bay-jaa-ra",
      },
      {
        id: 3,
        kannada: "Kopa",
        english: "Angry",
        hindi: "गुस्सा",
        phonetic: "Ko-pa",
      },
      {
        id: 4,
        kannada: "Bhaya",
        english: "Fear",
        hindi: "डर",
        phonetic: "Bha-ya",
      },
      {
        id: 5,
        kannada: "Istha",
        english: "Like",
        hindi: "पसंद",
        phonetic: "Is-tha",
      },
    ],
    scenarios: [
      {
        context: "मैं खुश हूँ।", // I am happy.
        options: [
          {
            text: "नंगे खुशी आयतु।",
            correct: true,
            explanation: "मैं खुश हो गया।",
          },
          { text: "नंगे बेजारा आयतु।", correct: false },
        ],
      },
      {
        context: "गुस्सा मत करो।", // Don't be angry.
        options: [
          {
            text: "कोपा माडकोबेदी।",
            correct: true,
            explanation: "गुस्सा मत करो।",
          },
          { text: "कोपा माड़ी।", correct: false },
        ],
      },
      {
        context: "मुझे बैंगलोर पसंद है।", // I like Bangalore.
        options: [
          {
            text: "नंगे बैंगलोर इस्था।",
            correct: true,
            explanation: "मुझे बैंगलोर पसंद है।",
          },
          { text: "नंगे बैंगलोर कोपा।", correct: false },
        ],
      },
      {
        context: "क्या आप ऊब गए हैं?", // Are you bored?
        options: [
          {
            text: "बेजारा आगिद्या?",
            correct: true,
            explanation: "क्या आप ऊब गए हैं?",
          },
          { text: "खुशी आगिद्या?", correct: false },
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
    strategy: {
      title: "Formal Requests",
      tips: ["'बेकागिट्टु' (चाहिए था) का प्रयोग करें।"], // Use 'Bekagittu' (Wanted).
    },
    vocab: [
      {
        id: 1,
        kannada: "Khate",
        english: "Account",
        hindi: "खाता",
        phonetic: "Kha-tay",
      },
      {
        id: 2,
        kannada: "Duddu",
        english: "Money",
        hindi: "पैसा",
        phonetic: "Dud-du",
      },
      {
        id: 3,
        kannada: "Sahi",
        english: "Signature",
        hindi: "हस्ताक्षर",
        phonetic: "Sa-hi",
      },
      {
        id: 4,
        kannada: "Manager",
        english: "Manager",
        hindi: "प्रबंधक",
        phonetic: "Manager",
      },
      {
        id: 5,
        kannada: "Open maadi",
        english: "Please open",
        hindi: "कृपया खोलें",
        phonetic: "Open Maa-di",
      },
    ],
    scenarios: [
      {
        context: "मैं एक खाता खोलना चाहता हूँ।", // I want to open an account.
        options: [
          {
            text: "अकाउंट ओपन माडबेकू।",
            correct: true,
            explanation: "खाता खोलना है।",
          },
          { text: "अकाउंट क्लोज माड़ी।", correct: false },
        ],
      },
      {
        context: "यहां हस्ताक्षर करें।", // Sign here.
        options: [
          {
            text: "इल्ली सही माड़ी।",
            correct: true,
            explanation: "यहां हस्ताक्षर करें।",
          },
          { text: "इल्ली दुड्डु माड़ी।", correct: false },
        ],
      },
      {
        context: "मैं पैसे निकालना चाहता हूँ।", // I want to withdraw money.
        options: [
          {
            text: "दुड्डु तेगेयाबेकू।",
            correct: true,
            explanation: "पैसे निकालने हैं।",
          },
          { text: "दुड्डु हाकबेकू।", correct: false },
        ],
      },
      {
        context: "मैनेजर कहाँ है?", // Where is the manager?
        options: [
          {
            text: "मैनेजर एल्ली?",
            correct: true,
            explanation: "मैनेजर कहाँ?",
          },
          { text: "मैनेजर यारू?", correct: false },
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
    strategy: {
      title: "Colors & Fit",
      tips: ["'बन्ना' = रंग।"], // 'Banna' = Color.
    },
    vocab: [
      {
        id: 1,
        kannada: "Banna",
        english: "Color",
        hindi: "रंग",
        phonetic: "Ban-na",
      },
      {
        id: 2,
        kannada: "Kempu",
        english: "Red",
        hindi: "लाल",
        phonetic: "Kem-pu",
      },
      {
        id: 3,
        kannada: "Kappu",
        english: "Black",
        hindi: "काला",
        phonetic: "Kap-pu",
      },
      {
        id: 4,
        kannada: "Doddadu",
        english: "Big one",
        hindi: "बड़ा वाला",
        phonetic: "Dod-da-du",
      },
      {
        id: 5,
        kannada: "Chikkadu",
        english: "Small one",
        hindi: "छोटा वाला",
        phonetic: "Chik-ka-du",
      },
    ],
    scenarios: [
      {
        context: "क्या आपके पास बड़ा वाला है?", // Do you have a big one?
        options: [
          {
            text: "दोद्दादु इद्या?",
            correct: true,
            explanation: "क्या बड़ा वाला है?",
          },
          { text: "चिक्कदु इद्या?", correct: false },
        ],
      },
      {
        context: "मुझे लाल वाला चाहिए।", // I want the red one.
        options: [
          { text: "केम्पु बेकू।", correct: true, explanation: "लाल चाहिए।" },
          { text: "कप्पु बेकू।", correct: false },
        ],
      },
      {
        context: "यह रंग अच्छा है।", // This color is nice.
        options: [
          {
            text: "ई बन्ना चेन्नागिदे।",
            correct: true,
            explanation: "यह रंग अच्छा है।",
          },
          { text: "ई बन्ना सारी इल्ला।", correct: false },
        ],
      },
      {
        context: "क्या आपके पास काला रंग है?", // Do you have black?
        options: [
          {
            text: "कप्पु बन्ना इद्या?",
            correct: true,
            explanation: "क्या काला रंग है?",
          },
          { text: "केम्पु बन्ना इद्या?", correct: false },
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
    strategy: {
      title: "It's Raining",
      tips: [
        "'माले' = बारिश।", // 'Male' = Rain.
        "'बिसिलु' = धूप/गर्मी।", // 'Bisilu' = Sun/Heat.
      ],
    },
    vocab: [
      {
        id: 1,
        kannada: "Male",
        english: "Rain",
        hindi: "बारिश",
        phonetic: "Ma-lay",
      },
      {
        id: 2,
        kannada: "Bisilu",
        english: "Sunny/Heat",
        hindi: "धूप/गर्मी",
        phonetic: "Bi-si-lu",
      },
      {
        id: 3,
        kannada: "Gali",
        english: "Wind",
        hindi: "हवा",
        phonetic: "Gaa-li",
      },
      {
        id: 4,
        kannada: "Chali",
        english: "Cold (Weather)",
        hindi: "ठंड (मौसम)",
        phonetic: "Cha-li",
      },
      {
        id: 5,
        kannada: "Moda",
        english: "Cloud",
        hindi: "बादल",
        phonetic: "Mo-da",
      },
    ],
    scenarios: [
      {
        context: "बारिश हो रही है।", // It is raining.
        options: [
          {
            text: "माले बारुथिदे।",
            correct: true,
            explanation: "बारिश आ रही है।",
          },
          { text: "बिसिलु इदे।", correct: false },
        ],
      },
      {
        context: "आज बहुत गर्मी है।", // It is very hot today.
        options: [
          {
            text: "इवत्तु बिसिलु जास्ती।",
            correct: true,
            explanation: "आज गर्मी ज्यादा है।",
          },
          { text: "इवत्तु चली जास्ती।", correct: false },
        ],
      },
      {
        context: "मुझे ठंड लग रही है।", // I feel cold.
        options: [
          {
            text: "नंगे चली आगथिदे।",
            correct: true,
            explanation: "मुझे ठंड लग रही है।",
          },
          { text: "नंगे बिसि आगथिदे।", correct: false },
        ],
      },
      {
        context: "बादलों को देखो।", // Look at the clouds.
        options: [
          {
            text: "मोडा नोडि।",
            correct: true,
            explanation: "बादल देखो।",
          },
          { text: "माले नोडि।", correct: false },
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
    strategy: {
      title: "Essentials Recap",
      tips: ["स्वास्थ्य और यात्रा की समीक्षा करें।"], // Review Health & Travel.
    },
    vocab: [
      {
        id: 1,
        kannada: "Novu",
        english: "Pain",
        hindi: "दर्द",
        phonetic: "No-vu",
      },
      {
        id: 2,
        kannada: "Ticket",
        english: "Ticket",
        hindi: "टिकट",
        phonetic: "Ticket",
      },
      {
        id: 3,
        kannada: "Kushi",
        english: "Happy",
        hindi: "खुश",
        phonetic: "Ku-shi",
      },
      {
        id: 4,
        kannada: "Doddadu",
        english: "Big",
        hindi: "बड़ा",
        phonetic: "Dod-da-du",
      },
      {
        id: 5,
        kannada: "Male",
        english: "Rain",
        hindi: "बारिश",
        phonetic: "Ma-lay",
      },
    ],
    scenarios: [
      {
        context: "मुझे बुखार है।", // I have a fever.
        options: [
          {
            text: "नंगे ज्वारा इदे।",
            correct: true,
            explanation: "मुझे बुखार है।",
          },
          { text: "नंगे खुशी इदे।", correct: false },
        ],
      },
      {
        context: "मुझे एक टिकट दो।", // Give me a ticket.
        options: [
          {
            text: "टिकट कोड़ी।",
            correct: true,
            explanation: "टिकट दो।",
          },
          { text: "टिकट तोगोलि।", correct: false },
        ],
      },
      {
        context: "तेज बारिश हो रही है।", // It is raining heavily.
        options: [
          {
            text: "माले जास्ती इदे।",
            correct: true,
            explanation: "बारिश ज्यादा है।",
          },
          { text: "बिसिलु जास्ती इदे।", correct: false },
        ],
      },
      {
        context: "मुझे एक बड़ा बैग चाहिए।", // I want a big bag.
        options: [
          {
            text: "दोद्दा बैग बेकू।",
            correct: true,
            explanation: "बड़ा बैग चाहिए।",
          },
          { text: "चिक्का बैग बेकू।", correct: false },
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
    strategy: {
      title: "On the Line",
      tips: [
        "'हेलु' = बताओ।", // 'Helu' = Tell.
        "'केलि' = सुनो/पूछो।", // 'Keli' = Listen/Ask.
      ],
    },
    vocab: [
      {
        id: 1,
        kannada: "Hello",
        english: "Hello",
        hindi: "नमस्ते",
        phonetic: "Hello",
      },
      {
        id: 2,
        kannada: "Yaaru?",
        english: "Who is it?",
        hindi: "कौन है?",
        phonetic: "Yaa-ru",
      },
      {
        id: 3,
        kannada: "Kelistidya?",
        english: "Can you hear?",
        hindi: "क्या आप सुन सकते हैं?",
        phonetic: "Ke-lis-tid-ya",
      },
      {
        id: 4,
        kannada: "Cut maadi",
        english: "Hang up",
        hindi: "फोन काट दो",
        phonetic: "Cut Maa-di",
      },
      {
        id: 5,
        kannada: "Number",
        english: "Number",
        hindi: "नंबर",
        phonetic: "Number",
      },
    ],
    scenarios: [
      {
        context: "क्या आप मुझे सुन सकते हैं?", // Can you hear me?
        options: [
          {
            text: "केलिस्टिद्या?",
            correct: true,
            explanation: "क्या यह सुनाई दे रहा है?",
          },
          { text: "कानिस्टिद्या?", correct: false },
        ],
      },
      {
        context: "कौन बात कर रहा है?", // Who is speaking?
        options: [
          {
            text: "यारू मातदतिरोडू?",
            correct: true,
            explanation: "कौन बात कर रहा है?",
          },
          { text: "यारू होगथिरोडू?", correct: false },
        ],
      },
      {
        context: "मैं बाद में फोन करूंगा।", // I will call later.
        options: [
          {
            text: "अमेले कॉल माडतिनी।",
            correct: true,
            explanation: "मैं बाद में फोन करूंगा।",
          },
          { text: "ईगा कॉल माडतिनी।", correct: false },
        ],
      },
      {
        context: "आपकी आवाज कट रही है।", // Your voice is breaking.
        options: [
          {
            text: "वॉइस कट आगतिदे।",
            correct: true,
            explanation: "आवाज कट रही है।",
          },
          { text: "वॉइस चेन्नागिदे।", correct: false },
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
    strategy: {
      title: "Bangalore Slang",
      tips: [
        "'मचा/मागा' = भाई।", // 'Macha/Maga' = Bro.
        "'बॉम्बैट' = सुपर।", // 'Bombat' = Super.
      ],
    },
    vocab: [
      {
        id: 1,
        kannada: "Macha / Maga",
        english: "Bro / Dude",
        hindi: "भाई / दोस्त",
        phonetic: "Ma-cha",
      },
      {
        id: 2,
        kannada: "Bombat",
        english: "Super/Great",
        hindi: "बहुत अच्छा/महान",
        phonetic: "Bom-baat",
      },
      {
        id: 3,
        kannada: "Sakkath",
        english: "Awesome",
        hindi: "शानदार",
        phonetic: "Sak-kath",
      },
      {
        id: 4,
        kannada: "Guru",
        english: "Master/Bro",
        hindi: "मास्टर/भाई",
        phonetic: "Gu-ru",
      },
      {
        id: 5,
        kannada: "Adjust maadi",
        english: "Please adjust",
        hindi: "कृपया समायोजित करें",
        phonetic: "Adjust maa-di",
      },
    ],
    scenarios: [
      {
        context: "वह फिल्म शानदार थी।", // That movie was awesome.
        options: [
          {
            text: "मूवी सक्कथ आगित्तु।",
            correct: true,
            explanation: "फिल्म शानदार थी।",
          },
          { text: "मूवी सुमने आगित्तु।", correct: false },
        ],
      },
      {
        context: "अरे भाई, यहां आओ।", // Hey bro, come here.
        options: [
          {
            text: "लो मचा, इल्ली बा।",
            correct: true,
            explanation: "अरे भाई, यहां आओ।",
          },
          { text: "लो मचा, अल्ली होगु।", correct: false },
        ],
      },
      {
        context: "खाना बहुत अच्छा है!", // The food is super!
        options: [
          {
            text: "ओता बॉम्बैट।",
            correct: true,
            explanation: "खाना बहुत अच्छा।",
          },
          { text: "ओता वेस्ट।", correct: false },
        ],
      },
      {
        context: "कृपया थोड़ा समायोजित करें।", // Please adjust a little.
        options: [
          {
            text: "स्वल्पा एडजस्ट माड़ी।",
            correct: true,
            explanation: "थोड़ा समायोजित करें।",
          },
          { text: "स्वल्पा बन्नी।", correct: false },
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
    strategy: {
      title: "Polite Complaints",
      tips: ["'सारी इल्ला' = अच्छा नहीं/सही नहीं।"], // 'Sari illa' = Not good/right.
    },
    vocab: [
      {
        id: 1,
        kannada: "Sari Illa",
        english: "Not good",
        hindi: "अच्छा नहीं",
        phonetic: "Sa-ri Il-la",
      },
      {
        id: 2,
        kannada: "Thappu",
        english: "Wrong",
        hindi: "गलत",
        phonetic: "Thap-pu",
      },
      {
        id: 3,
        kannada: "Mosha",
        english: "Cheat/Bad",
        hindi: "धोखा/बुरा",
        phonetic: "Mo-sha",
      },
      {
        id: 4,
        kannada: "Clean illa",
        english: "Not clean",
        hindi: "साफ नहीं",
        phonetic: "Clean Il-la",
      },
      {
        id: 5,
        kannada: "Change maadi",
        english: "Change it",
        hindi: "इसे बदलो",
        phonetic: "Change maa-di",
      },
    ],
    scenarios: [
      {
        context: "यह खाना अच्छा नहीं है।", // This food is not good.
        options: [
          {
            text: "ओता सारी इल्ला।",
            correct: true,
            explanation: "खाना ठीक नहीं।",
          },
          { text: "ओता बॉम्बैट।", correct: false },
        ],
      },
      {
        context: "कमरा साफ नहीं है।", // The room is not clean.
        options: [
          {
            text: "रूम क्लीन इल्ला।",
            correct: true,
            explanation: "कमरा साफ नहीं।",
          },
          { text: "रूम क्लीन इदे।", correct: false },
        ],
      },
      {
        context: "यह गलत है।", // This is wrong.
        options: [
          {
            text: "इदु थप्पू।",
            correct: true,
            explanation: "यह गलत है।",
          },
          { text: "इदु सारी।", correct: false },
        ],
      },
      {
        context: "कृपया चादर बदल दें।", // Please change the sheet.
        options: [
          {
            text: "शीट चेंज माड़ी।",
            correct: true,
            explanation: "चादर बदलो।",
          },
          { text: "शीट तेगेयी।", correct: false },
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
    strategy: {
      title: "Making Plans",
      tips: ["'होगोना?' = क्या हम चलें?"], // 'Hogona?' = Shall we go?
    },
    vocab: [
      {
        id: 1,
        kannada: "Hogona",
        english: "Let's go",
        hindi: "चलो चलें",
        phonetic: "Ho-go-na",
      },
      {
        id: 2,
        kannada: "Sigona",
        english: "Let's meet",
        hindi: "चलो मिलते हैं",
        phonetic: "Si-go-na",
      },
      {
        id: 3,
        kannada: "Cinema",
        english: "Movie",
        hindi: "फिल्म",
        phonetic: "Ci-ne-ma",
      },
      {
        id: 4,
        kannada: "Free idira?",
        english: "Are you free?",
        hindi: "क्या आप खाली हैं?",
        phonetic: "Free i-di-ra",
      },
      {
        id: 5,
        kannada: "Party",
        english: "Party",
        hindi: "पार्टी",
        phonetic: "Par-ty",
      },
    ],
    scenarios: [
      {
        context: "क्या हम कल मिलें?", // Shall we meet tomorrow?
        options: [
          {
            text: "नाले सिगोना?",
            correct: true,
            explanation: "कल मिलें?",
          },
          { text: "नाले होगोना?", correct: false },
        ],
      },
      {
        context: "चलो फिल्म देखने चलते हैं।", // Let's go to a movie.
        options: [
          {
            text: "सिनेमा-गे होगोना।",
            correct: true,
            explanation: "चलो फिल्म देखने चलते हैं।",
          },
          { text: "सिनेमा-गे बारोना।", correct: false },
        ],
      },
      {
        context: "क्या आप अभी खाली हैं?", // Are you free now?
        options: [
          { text: "ईगा फ्री इदिरा?", correct: true, explanation: "अभी खाली?" },
          { text: "ईगा बिजी इदिरा?", correct: false },
        ],
      },
      {
        context: "चलो पार्टी करते हैं!", // Let's party!
        options: [
          {
            text: "पार्टी माडोना!",
            correct: true,
            explanation: "चलो पार्टी करते हैं।",
          },
          { text: "पार्टी बेड़ा।", correct: false },
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
    strategy: {
      title: "Celebrations",
      tips: [
        "'हब्बा' = त्योहार।", // 'Habba' = Festival.
        "'शुभाशया' = शुभकामनाएं।", // 'Shubhashaya' = Wishes.
      ],
    },
    vocab: [
      {
        id: 1,
        kannada: "Habba",
        english: "Festival",
        hindi: "त्योहार",
        phonetic: "Hab-ba",
      },
      {
        id: 2,
        kannada: "Shubhashaya",
        english: "Greetings",
        hindi: "शुभकामनाएं",
        phonetic: "Shu-bhaa-sha-ya",
      },
      {
        id: 3,
        kannada: "Pooje",
        english: "Worship",
        hindi: "पूजा",
        phonetic: "Poo-jay",
      },
      {
        id: 4,
        kannada: "Raja",
        english: "King",
        hindi: "राजा",
        phonetic: "Ra-ja",
      },
      {
        id: 5,
        kannada: "Rajyotsava",
        english: "State Festival",
        hindi: "राज्योत्सव",
        phonetic: "Raj-yot-sa-va",
      },
    ],
    scenarios: [
      {
        context: "शुभ त्योहार!", // Happy Festival!
        options: [
          {
            text: "हब्बा-दा शुभाशया।",
            correct: true,
            explanation: "त्योहार की शुभकामनाएं।",
          },
          { text: "हब्बा बेड़ा।", correct: false },
        ],
      },
      {
        context: "क्या आपने पूजा की?", // Did you do the puja?
        options: [
          {
            text: "पूजा माडीड्रा?",
            correct: true,
            explanation: "पूजा की?",
          },
          { text: "पूजा बेका?", correct: false },
        ],
      },
      {
        context: "आज एक त्योहार है।", // Today is a festival.
        options: [
          {
            text: "इवत्तु हब्बा।",
            correct: true,
            explanation: "आज त्योहार।",
          },
          { text: "इवत्तु राजे।", correct: false },
        ],
      },
      {
        context: "राज्योत्सव की शुभकामनाएं।", // Rajyotsava greetings.
        options: [
          {
            text: "राज्योत्सव शुभाशया।",
            correct: true,
            explanation: "राज्योत्सव की शुभकामनाएं।",
          },
          { text: "राज्योत्सव बेकू।", correct: false },
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
    strategy: {
      title: "Past/Present/Future",
      tips: ["होगतिनी (जाऊंगा), होडे (गया), होगथिदिनी (जा रहा हूं)"], // Hogthini (Will go), Hode (Went), Hogthidini (Going).
    },
    vocab: [
      {
        id: 1,
        kannada: "Bartini",
        english: "I will come",
        hindi: "मैं आऊंगा",
        phonetic: "Bar-ti-ni",
      },
      {
        id: 2,
        kannada: "Bande",
        english: "I came",
        hindi: "मैं आया",
        phonetic: "Ban-day",
      },
      {
        id: 3,
        kannada: "Bartidini",
        english: "I am coming",
        hindi: "मैं आ रहा हूँ",
        phonetic: "Bar-thi-di-ni",
      },
      {
        id: 4,
        kannada: "Maadide",
        english: "I did",
        hindi: "मैंने किया",
        phonetic: "Maa-di-day",
      },
      {
        id: 5,
        kannada: "Maadtini",
        english: "I will do",
        hindi: "मैं करूंगा",
        phonetic: "Maad-ti-ni",
      },
    ],
    scenarios: [
      {
        context: "मैं कल आऊंगा।", // I will come tomorrow.
        options: [
          {
            text: "नाले बार्तिनी।",
            correct: true,
            explanation: "कल मैं आऊंगा।",
          },
          { text: "नाले बन्दे।", correct: false },
        ],
      },
      {
        context: "मैं कल आया था।", // I came yesterday.
        options: [
          {
            text: "नेन्ने बन्दे।",
            correct: true,
            explanation: "कल मैं आया था।",
          },
          { text: "नेन्ने बार्तिनी।", correct: false },
        ],
      },
      {
        context: "मैं अभी आ रहा हूँ।", // I am coming now.
        options: [
          {
            text: "ईगा बार्तिदिनी।",
            correct: true,
            explanation: "अभी मैं आ रहा हूँ।",
          },
          { text: "ईगा बन्दे।", correct: false },
        ],
      },
      {
        context: "मैंने काम किया।", // I did the work.
        options: [
          {
            text: "केलासा माडिदे।",
            correct: true,
            explanation: "काम मैंने किया।",
          },
          { text: "केलासा माडतिनी।", correct: false },
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
    strategy: {
      title: "Slang & Speed",
      tips: ["स्लैंग को सम्मान के साथ मिलाएं।"], // Mix slang with respect.
    },
    vocab: [
      {
        id: 1,
        kannada: "Macha",
        english: "Bro",
        hindi: "भाई",
        phonetic: "Ma-cha",
      },
      {
        id: 2,
        kannada: "Kelistidya?",
        english: "Audible?",
        hindi: "सुनाई दे रहा है?",
        phonetic: "Ke-lis-tid-ya",
      },
      {
        id: 3,
        kannada: "Sari Illa",
        english: "Not good",
        hindi: "अच्छा नहीं",
        phonetic: "Sa-ri Il-la",
      },
      {
        id: 4,
        kannada: "Sigona",
        english: "Let's meet",
        hindi: "चलो मिलते हैं",
        phonetic: "Si-go-na",
      },
      {
        id: 5,
        kannada: "Bartini",
        english: "Will come",
        hindi: "आऊंगा",
        phonetic: "Bar-ti-ni",
      },
    ],
    scenarios: [
      {
        context: "फिल्म शानदार थी, भाई।", // Movie was super, bro.
        options: [
          {
            text: "मूवी सक्कथ आगित्तु मचा।",
            correct: true,
            explanation: "फिल्म शानदार भाई।",
          },
          { text: "मूवी सारी इल्ला।", correct: false },
        ],
      },
      {
        context: "क्या आप सुन सकते हैं? यह अच्छा नहीं है।", // Can you hear? It's not good.
        options: [
          {
            text: "केलिस्टिद्या? सारी इल्ला।",
            correct: true,
            explanation: "सुन सकते हैं? अच्छा नहीं।",
          },
          { text: "कानिस्टिद्या? सारी इदे।", correct: false },
        ],
      },
      {
        context: "चलो कल मिलते हैं।", // Let's meet tomorrow.
        options: [
          {
            text: "नाले सिगोना।",
            correct: true,
            explanation: "कल मिलते हैं।",
          },
          { text: "नाले होगोना।", correct: false },
        ],
      },
      {
        context: "मैं बाद में आऊंगा।", // I will come later.
        options: [
          {
            text: "अमेले बार्तिनी।",
            correct: true,
            explanation: "बाद में मैं आऊंगा।",
          },
          { text: "अमेले बन्दे।", correct: false },
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
    strategy: {
      title: "Full Sentences",
      tips: ["शब्दों को जोड़ें।"], // Connect words.
    },
    vocab: [
      {
        id: 1,
        kannada: "Adare",
        english: "But",
        hindi: "लेकिन",
        phonetic: "Aa-da-ray",
      },
      {
        id: 2,
        kannada: "Agalla",
        english: "Cannot",
        hindi: "नहीं कर सकता",
        phonetic: "Aa-gal-la",
      },
      {
        id: 3,
        kannada: "Yake",
        english: "Why",
        hindi: "क्यों",
        phonetic: "Yaa-kay",
      },
      {
        id: 4,
        kannada: "Yenu",
        english: "What",
        hindi: "क्या",
        phonetic: "Yay-nu",
      },
      {
        id: 5,
        kannada: "Howda?",
        english: "Is it?",
        hindi: "क्या यह है?",
        phonetic: "How-da",
      },
    ],
    scenarios: [
      {
        context: "मैं आना चाहता हूँ, लेकिन नहीं आ सकता।", // I want to come, but I cannot.
        options: [
          {
            text: "बारबेकू, अदारे आगल्ला।",
            correct: true,
            explanation: "आना चाहता हूँ, लेकिन नहीं आ सकता।",
          },
          { text: "बन्नी, अदारे होगी।", correct: false },
        ],
      },
      {
        context: "तुम क्यों नहीं आए?", // Why didn't you come?
        options: [
          {
            text: "याके बारिल्ला?",
            correct: true,
            explanation: "क्यों नहीं आए?",
          },
          { text: "एनु बारिल्ला?", correct: false },
        ],
      },
      {
        context: "क्या यह है? मुझे नहीं पता था।", // Is it? I didn't know.
        options: [
          {
            text: "हौदा? नंगे गोट्टिल्ला।",
            correct: true,
            explanation: "क्या यह है? नहीं पता।",
          },
          { text: "हौदु, नंगे गोट्टु।", correct: false },
        ],
      },
      {
        context: "क्या हुआ?", // What happened?
        options: [
          {
            text: "एनु आयतू?",
            correct: true,
            explanation: "क्या हुआ?",
          },
          { text: "याके आयतू?", correct: false },
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
    strategy: {
      title: "The End",
      tips: ["आप तैयार हैं।"], // You are ready.
    },
    vocab: [
      {
        id: 1,
        kannada: "Dhanyavada",
        english: "Thank You",
        hindi: "धन्यवाद",
        phonetic: "Dhan-ya-vaa-da",
      },
      {
        id: 2,
        kannada: "Shubhashayagalu",
        english: "Best Wishes",
        hindi: "शुभकामनाएं",
        phonetic: "Shu-bhaa-sha-ga-lu",
      },
      {
        id: 3,
        kannada: "Meluvagi",
        english: "Slowly",
        hindi: "धीरे-धीरे",
        phonetic: "May-lu-vaa-gi",
      },
      {
        id: 4,
        kannada: "Muttu",
        english: "Kiss",
        hindi: "चुंबन",
        phonetic: "Mut-tu",
      },
      {
        id: 5,
        kannada: "Preeti",
        english: "Love",
        hindi: "प्यार",
        phonetic: "Pree-ti",
      },
    ],
    scenarios: [
      {
        context: "किसी को धन्यवाद दें।", // Thank someone.
        options: [
          {
            text: "धन्यवाद।",
            correct: true,
            explanation: "धन्यवाद।",
          },
          { text: "नमस्ते।", correct: false },
        ],
      },
      {
        context: "किसी को शुभकामनाएं दें।", // Give someone best wishes.
        options: [
          {
            text: "शुभाशयगालु।",
            correct: true,
            explanation: "शुभकामनाएं।",
          },
          { text: "धन्यवाद।", correct: false },
        ],
      },
      {
        context: "धीरे चलो।", // Go slowly.
        options: [
          {
            text: "मेलुवागी होगी।",
            correct: true,
            explanation: "धीरे चलो।",
          },
          { text: "बेगाने होगी।", correct: false },
        ],
      },
      {
        context: "मुझे तुमसे प्यार है।", // I love you.
        options: [
          {
            text: "नंगे नीनु प्रीति।",
            correct: true,
            explanation: "मुझे तुमसे प्यार है।",
          },
          { text: "नंगे नीनु नल्ल।", correct: false },
        ],
      },
    ],
  },
];
