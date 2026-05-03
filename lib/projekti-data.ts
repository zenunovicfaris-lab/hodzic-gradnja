export type ProjectCategory =
  | "Dogradnja"
  | "Fasada"
  | "Rekonstrukcija"
  | "Krov"
  | "Grubi radovi";

export interface ProjectImage {
  src: string;
  category: ProjectCategory;
  alt: string;
}

const DO = "/projekti/Dogradnja%20objekta";
const DT = "/projekti/Dogradnja%20tersae";
const GR = "/projekti/grubi%20radovi";
const KR = "/projekti/Krov";
const NF = "/projekti/Nova%20fasada";
const NF2 = "/projekti/Nova%20fasada%202";
const RO = "/projekti/Rekonstrukcija%20objekta";

export const projekti: ProjectImage[] = [
  // Dogradnja objekta (3)
  { src: `${DO}/546939788_789538740499611_2194202558971689107_n.jpg`, category: "Dogradnja", alt: "Dogradnja objekta 1" },
  { src: `${DO}/548196488_789538507166301_1017351644603695690_n.jpg`, category: "Dogradnja", alt: "Dogradnja objekta 2" },
  { src: `${DO}/548210208_789538403832978_5216573827042692464_n.jpg`, category: "Dogradnja", alt: "Dogradnja objekta 3" },

  // Dogradnja terase (6)
  { src: `${DT}/485840329_652751724178314_501573077399341779_n.jpg`, category: "Dogradnja", alt: "Dogradnja terase 1" },
  { src: `${DT}/486089281_652751750844978_8634126281295302486_n.jpg`, category: "Dogradnja", alt: "Dogradnja terase 2" },
  { src: `${DT}/486178225_652751827511637_6093641677935289695_n.jpg`, category: "Dogradnja", alt: "Dogradnja terase 3" },
  { src: `${DT}/486251147_652751754178311_5581151115884334868_n.jpg`, category: "Dogradnja", alt: "Dogradnja terase 4" },
  { src: `${DT}/486319363_652751740844979_5815394315940085388_n.jpg`, category: "Dogradnja", alt: "Dogradnja terase 5" },
  { src: `${DT}/486343457_652752130844940_5015915136255583133_n.jpg`, category: "Dogradnja", alt: "Dogradnja terase 6" },

  // Grubi radovi (4)
  { src: `${GR}/485651275_653291897457630_3708666429984390887_n.jpg`, category: "Grubi radovi", alt: "Grubi radovi 1" },
  { src: `${GR}/485803165_653291840790969_2610485890599541327_n.jpg`, category: "Grubi radovi", alt: "Grubi radovi 2" },
  { src: `${GR}/485891235_653292094124277_6605270588099614121_n.jpg`, category: "Grubi radovi", alt: "Grubi radovi 3" },
  { src: `${GR}/485954965_653292134124273_8234027880622176428_n.jpg`, category: "Grubi radovi", alt: "Grubi radovi 4" },

  // Krov (6)
  { src: `${KR}/485148124_653098557476964_3488364463291684342_n.jpg`, category: "Krov", alt: "Krov 1" },
  { src: `${KR}/485150992_653098570810296_1307092239268585632_n.jpg`, category: "Krov", alt: "Krov 2" },
  { src: `${KR}/485397662_653098534143633_8339599786996554158_n.jpg`, category: "Krov", alt: "Krov 3" },
  { src: `${KR}/485679121_653098567476963_1276077813069863455_n.jpg`, category: "Krov", alt: "Krov 4" },
  { src: `${KR}/486014021_653098717476948_6640137408245864094_n.jpg`, category: "Krov", alt: "Krov 5" },
  { src: `${KR}/486141398_653098584143628_6917737359106612190_n.jpg`, category: "Krov", alt: "Krov 6" },

  // Nova fasada (6)
  { src: `${NF}/558064858_811251964994955_2347665287782038689_n.jpg`, category: "Fasada", alt: "Nova fasada 1" },
  { src: `${NF}/558177158_811251741661644_8219671266574666626_n.jpg`, category: "Fasada", alt: "Nova fasada 2" },
  { src: `${NF}/558318750_811251628328322_5584181744829035051_n.jpg`, category: "Fasada", alt: "Nova fasada 3" },
  { src: `${NF}/558858659_811251664994985_4093971452860440348_n.jpg`, category: "Fasada", alt: "Nova fasada 4" },
  { src: `${NF}/558861352_811252204994931_1300036385840666272_n.jpg`, category: "Fasada", alt: "Nova fasada 5" },
  { src: `${NF}/558892376_811251884994963_3378716963974702969_n.jpg`, category: "Fasada", alt: "Nova fasada 6" },

  // Nova fasada 2 (6)
  { src: `${NF2}/547278535_789562363830582_2688775078551373128_n.jpg`, category: "Fasada", alt: "Nova fasada II – 1" },
  { src: `${NF2}/547730431_789561873830631_8419131722029480069_n.jpg`, category: "Fasada", alt: "Nova fasada II – 2" },
  { src: `${NF2}/548193586_789562500497235_8328630117053119536_n.jpg`, category: "Fasada", alt: "Nova fasada II – 3" },
  { src: `${NF2}/548195040_789562267163925_2991744623142859725_n.jpg`, category: "Fasada", alt: "Nova fasada II – 4" },
  { src: `${NF2}/548211912_789562153830603_5378373634771878250_n.jpg`, category: "Fasada", alt: "Nova fasada II – 5" },
  { src: `${NF2}/548255367_789561950497290_3577057754017747706_n.jpg`, category: "Fasada", alt: "Nova fasada II – 6" },

  // Rekonstrukcija objekta (5)
  { src: `${RO}/557991308_811250804995071_7317918402991373686_n.jpg`, category: "Rekonstrukcija", alt: "Rekonstrukcija objekta 1" },
  { src: `${RO}/558356410_811250514995100_1020624835015790798_n.jpg`, category: "Rekonstrukcija", alt: "Rekonstrukcija objekta 2" },
  { src: `${RO}/558545960_811250641661754_160557223431424016_n.jpg`, category: "Rekonstrukcija", alt: "Rekonstrukcija objekta 3" },
  { src: `${RO}/558621080_811250314995120_1374394880020353716_n.jpg`, category: "Rekonstrukcija", alt: "Rekonstrukcija objekta 4" },
  { src: `${RO}/560164455_811250418328443_5670183704001076354_n.jpg`, category: "Rekonstrukcija", alt: "Rekonstrukcija objekta 5" },
];

export const categories = ["Sve", "Dogradnja", "Fasada", "Rekonstrukcija", "Krov", "Grubi radovi"] as const;
export type FilterCategory = (typeof categories)[number];

export const brendovi = [
  "Austrotherm", "baumit", "Bekament", "bosch", "ceresit",
  "Hilti", "JCB", "makita", "Nexe", "sika", "Ytong",
];
