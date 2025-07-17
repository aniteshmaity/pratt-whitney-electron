import gtf from '../../assets/100years/gtf-engine.png';
import machine1 from "../../assets/100years/machine-1.png";
import v2500_1 from '../../assets/100years/v2500-1.png';
import v2500_2 from '../../assets/100years/v2500-2.png';
import v2500_3 from '../../assets/100years/machine-1.png';
import engineDetails from './engineDetailsData';
import PW300_1 from "../../assets/product/bussiness/1989_PW300_1.webp"
import PW800_1 from "../../assets/product/bussiness/2018_PW800_1.webp"
import PW600_1 from "../../assets/product/bussiness/2000_PW600_1.webp"
import PW500_1 from "../../assets/product/bussiness/1990_PW500_1.webp"
import V25_1 from "../../assets/product/commercial/1984_V2500_1.webp"
import PW4_1 from "../../assets/product/commercial/1990_4000_1.webp"
import PW2_1 from "../../assets/product/commercial/1984_PW2000_1.webp"
import P7200_4 from "../../assets/product/commercial/Great Heritage-crop.png"
import PW980 from "../../assets/product/APU/PW980.webp"
import APS5000 from "../../assets/product/APU/APS5000.webp"
import APS3200 from "../../assets/product/APU/APS3200 hero.webp"
import APS1000 from "../../assets/product/APU/APS1000 hero.webp"
import APS500 from "../../assets/product/APU/APS500 Hero.webp"
import Hel_PW210 from "../../assets/product/helicopter/PW210 1.webp"
import Hel_PW200 from "../../assets/product/helicopter/pw200-hero-1600x900.webp"
import PT6T from "../../assets/product/helicopter/PT6T Large.webp"
import PW127XT from "../../assets/product/regional/PWC-PW127XT-engine-_-interior-white-800px.webp"
import PW100_150 from "../../assets/product/regional/PW100-150 (1).webp"
import F139 from "../../assets/product/millitary/PW4062-Hero-1600x900.webp"
import PT6C from "../../assets/product/helicopter/PT6C-Hero-1600x900.webp"
import F135 from "../../assets/product/millitary/F135 Hero.webp"
import F119 from "../../assets/product/millitary/F119-Hero-1600x900.webp"
import F117 from "../../assets/product/millitary/F117-Hero-1600x900.webp"
import F100 from "../../assets/product/millitary/F100.webp"
import APUVideo from "../../assets/product/video/APUs.mp4"
import BussinessVideo from "../../assets/product/video/Business Engines.mp4"
import CommercialVideo from "../../assets/product/video/Commercial Engines.mp4"
import GeneralVideo from "../../assets/product/video/General Aviation.mp4"
import HelicopterVideo from "../../assets/product/video/Helicopter Engines.mp4"
import LegacyVideo from "../../assets/product/video/Legacy Engines.mp4"
import MilitaryVideo from "../../assets/product/video/Military Engines.mp4"
import RegionalVideo from "../../assets/product/video/Regional Engines.mp4"
import PT6E_66XP from "../../assets/product/general/PT6E-66XP.webp"
import PT6A from "../../assets/product/general/PT6A-Hero.webp"
import Jt8d from"../../assets/100years/gallery/1964 JT8D_1.jpg";
import Jt9d from "../../assets/100years/gallery/1970_JT9D_1.webp";
import wasp from "../../assets/product/legacy/wasp/Wasp.webp";
import hornet from "../../assets/product/legacy/hornet/HOrnet.webp";
import jt3d from "../../assets/100years/gallery/1958_1.webp";
import GP7200 from "../../assets/product/commercial/GP7200-front-to-back-lores-1.webp";
export const productEngine = [

  {
    engine: "Regional Aviation",
    description: "Inventing Regional Aviation market",
    video:RegionalVideo,
    engines: [
     
      { id: 'PW100', img: PW100_150, title: 'PW100-150', description: "Powering regional aircraft around the world.", details: engineDetails.regional["PW100/150"] },
       { id: 'PW127XT', img: PW127XT, title: 'PW127XT', description: "Regional aviation's new standard for economics & efficiency", details: engineDetails.regional.PW127XT },

    ],
  },
  {
    engine: "Military Engines",
    description: "7,500 engines, 34 armed forces",
    video:MilitaryVideo,
    engines: [
      { id: 'TF33', img: machine1, title: 'TF33', description: "A legendary engine for a legendary bomber", details: engineDetails.military.TF33 },
      { id: 'PW4062', img: F139, title: 'F139', description: "Time-tested reliability for the KC-46 Pegasus", details: engineDetails.military["PW4062/F139"] },
      { id: 'F135', img: F135, title: 'F135', description: "The world’s most powerful fighter jet engine", details: engineDetails.military.F135 },
      { id: 'F119', img: F119, title: 'F119', description: "The first operational 5th Gen fighter engine on F-22", details: engineDetails.military.F119 },
       { id: 'F117', img: F117, title: 'F117', description: "Exclusive power forthe C-17 Globemaster III", details: engineDetails.military.F117 },
      { id: 'F100', img: F100, title: 'F100', description: "Engine of choice for the F-15 and F-16", details: engineDetails.military.F100 },
     

    ],
   
  },
  {
    engine: "Helicopter Engines",
    description: "The right power, speed and efficiency",
    video:HelicopterVideo,
    engines: [
      { id: 'PW210', img: Hel_PW210, title: 'PW210', description: "Shaping a new generation of helicopters with 1,100 SHP", details: engineDetails.helicopter.PW210 },
      { id: 'PW200', img: Hel_PW200, title: 'PW200', description: "Powering the majority of the world’s light-twin helicopters", details: engineDetails.helicopter.PW200 },
      { id: 'PT6T', img: PT6T, title: 'PT6T', description: "Workhorse of 1,800 to 2,000 SHP, medium-class helicopters", details: engineDetails.helicopter.PT6T },
      { id: 'PT6C', img: PT6C, title: 'PT6C', description: "High powered performance for new-gen medium helicopters & tiltrotors", details: engineDetails.helicopter.PT6C },
    ],
  },
  {
    engine: "General Aviation",
    description: "Proven, prolific, PT6",
    video:GeneralVideo,
    engines: [
      { id: 'PT6 ', img: PT6E_66XP, title: 'PT6E', description: "First engine family with a dual channel integrated electronic propeller", details: engineDetails.general.PT6E },
      { id: 'PT6A', img: PT6A, title: 'PT6A', description: "PT6A engine family is the world's most popular engine in its class", details: engineDetails.general.PT6A },

    ],
  },
  {
    engine: "Commercial Engines",
    description: "Dependable, efficient power",
    video:CommercialVideo,
    engines: [
      { id: 'gtf', img: gtf, title: 'GTF ', description: "The most fuel-efficient engine for single-aisle aircraft", details: engineDetails.commercial.GTF_Family },
      { id: 'v2500_1', img: V25_1, title: 'V2500', description: "Versatile engine that supports ever-evolving needs", details: engineDetails.commercial.v2500 },
      { id: 'v2500_2', img: PW4_1, title: 'PW4000 ', description: "Extended-range Twin-engine Operations leader for the 777", details: engineDetails.commercial.PW4000 },
      { id: 'v2500_3', img: PW2_1, title: 'PW2000', description: "Covers mid-thrust range from 37K to 43K pounds", details: engineDetails.commercial.PW2000 },
      { id: 'v2500_4', img: GP7200, title: 'GP7200', description: "Derived from 2 most successful wide-body engines in history", details: engineDetails.commercial.GP7200 },
    ],
   
  },


  {
    engine: "Business Aviation Engines",
    description: "Portfolio that spans business aviation",
    video:BussinessVideo,
    engines: [
      { id: 'PW800', img: PW800_1, title: 'PW800', description: "Powering the future of business aviation", details: engineDetails.business_aviation.PW800 },
      { id: 'PW600', img: PW600_1, title: 'PW600', description: "The right choice for light jets", details: engineDetails.business_aviation.PW600 },
      { id: 'PW500', img: PW500_1, title: 'PW500', description: "The leader in fractional business aviation", details: engineDetails.business_aviation.PW500 },
      { id: 'PW300', img: PW300_1, title: 'PW300', description: "The heart of mid-size business jets", details: engineDetails.business_aviation.PW300 },
    ],
     
  },
  {
    engine: "Auxiliary Power  Units",
    description: "Industry leading APUs",
    video:APUVideo,
    engines: [
        { id: 'PW980', img: PW980, title: 'PW980', description: "The largest APU in commercial airline service for A380", details: engineDetails.APUs.PW980 },
          { id: 'APS5000', img: APS5000, title: 'APS5000', description: "Industry's first all-electric APU for 787", details: engineDetails.APUs.APS5000 },
      { id: 'APS3200', img: APS3200, title: 'APS3200', description: "Airbus baseline APU of choice for the A320 family", details: engineDetails.APUs.APS3200 },
      { id: 'APS1000', img: APS1000, title: 'APS1000', description: "Next step up in performance for military aircraft", details: engineDetails.APUs.APS1000 },
      { id: 'APS500', img: APS500, title: 'APS500', description: "Established and proven turbine technology for military aircraft", details: engineDetails.APUs.APS500 },

    ],
  },
   {
    engine: "Legacy Engines",
    description: "A century of innovation",
    video:LegacyVideo,
    engines: [
          { id: 'wasp', img: wasp, title: 'Wasp', description: "Pratt & Whitney’s first engine – and one of the most influential in history", details: engineDetails.legacy_engines.wasp },
        { id: 'Hornet', img: hornet, title: 'Hornet', description: "9-cylinder, air-cooled radial engine powering many iconic aircraft", details: engineDetails.legacy_engines.Hornet },
          { id: 'JT3D', img: jt3d, title: 'JT3D', description: "One of the first successful low-bypass turbofan engines, powered the dawn of the Jet Age", details: engineDetails.legacy_engines.JT3D },
      { id: 'JT8D', img: Jt8d, title: 'JT8D', description: "Powered some of the most successful commercial jets in history, including 727 and 737", details: engineDetails.legacy_engines.JT8D },
      { id: 'JT9D', img: Jt9d, title: 'JT9D', description: "Opened a new era in commercial aviation with the high-bypass-ratio engine", details: engineDetails.legacy_engines.JT9D },
  

    ],
  },
  {
    engine: "",
    description: "",
    engines: [
    ],
    isDummy: true,
  },
  {
    engine: "",
    description: "",
    engines: [
    ],
    isDummy: true,
  },
];