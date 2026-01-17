
import React from 'react';
import { ValueProp, Testimonial } from './types';

export const VALUE_PROPS: ValueProp[] = [
  {
    title: "Kiirendatud kasv",
    description: "Meie strateegiad on loodud teie äri kiireks ja jätkusuutlikuks skaleerimiseks tänapäeva turul.",
    icon: "trending-up"
  },
  {
    title: "AI-põhine automatiseerimine",
    description: "Säästke sadu töötunde kuus, automatiseerides korduvaid ülesandeid nutika tehisintellektiga.",
    icon: "cpu"
  },
  {
    title: "Andmepõhised otsused",
    description: "Ärge enam arvake. Me kasutame täpset andmeanalüüsi, et teha kindlaks teie parimad kasvukanalid.",
    icon: "bar-chart"
  },
  {
    title: "Kohandatud lahendused",
    description: "Iga äri on unikaalne. Me loome rätsepalahendusi, mis vastavad täpselt teie vajadustele.",
    icon: "settings"
  },
  {
    title: "24/7 Nutikas tugi",
    description: "Tehisintellektil põhinev tugisüsteem, mis tagab teie klientide rahulolu igal kellaajal.",
    icon: "message-square"
  },
  {
    title: "Kuluefektiivsus",
    description: "Maksimeerige investeeringu tasuvust (ROI) optimeeritud protsesside ja nutika tehnoloogia abil.",
    icon: "dollar-sign"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Kristjan Kask",
    role: "Tegevjuht",
    company: "TechEstonia OÜ",
    content: "Aura muutis täielikult meie klienditeeninduse kiirust. AI juurutamine säästis meile 40% tegevuskuludest esimese kolme kuuga.",
    image: "https://picsum.photos/seed/kristjan/400/400"
  },
  {
    id: 2,
    name: "Liisa Tamm",
    role: "Turundusjuht",
    company: "Nordic Flow",
    content: "Nende lähenemine andmetele on fenomenaalne. Meie konversioonimäär tõusis peale koostöö alustamist ligi kaks korda.",
    image: "https://picsum.photos/seed/liisa/400/400"
  },
  {
    id: 3,
    name: "Markus Saare",
    role: "Asutaja",
    company: "Visionary Apps",
    content: "Ma pole kunagi näinud nii kiiret ja professionaalset teostust. Nad said meie visioonist aru poole sõna pealt.",
    image: "https://picsum.photos/seed/markus/400/400"
  }
];
