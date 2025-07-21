
import { PwInIndiaImage } from "./pwInIndiaImage";
import gtf from "../../assets/100years/gtf-engine.png";
import roter from "../../assets/product/bussiness/PW300  Innovative and Efficient Design.png"
import Operators from "../../assets/product/general/Operators.png"
import certfic from "../../assets/product/APU/Certification.webp"
import redCraft from "../../assets/product/commercial/V2500 3000 Aircraft.webp"
import FADEC from "../../assets/product/commercial/FADEC.webp"
import managementTool from "../../assets/product/general/•_40_ reduction in scheduled maintenance_.webp"
import flyingHours from "../../assets/product/general/•_100+ parameters monitored for optimum performance.webp"
import cloudAero from "../../assets/product/commercial/V2500 Flight Hours.webp";
import aeroRedHandle from "../../assets/product/general/•_100+ parameters monitored for optimum performance.webp";
import headphone from "../../assets/product/commercial/Quiet.webp"
import settingAero from "../../assets/product/millitary/World records (1).webp"
import settingBig from "../../assets/images/maps/extra/rtx-icon_money-gear_rgb2.png"
import develop from "../../assets/images/maps/extra/Layer-2.png"
import jetvertical from "../../assets/product/millitary/5th generation stealth technologies (1).webp";
import jetFire from "../../assets/product/millitary/40K+ pounds of thrust_ (1).webp";
import capabilityMaintance from "../../assets/product/millitary/Performance and Capability (1).webp"
import thrust from "../../assets/product/commercial/V2500 thrust.webp"
import APS3200 from "../../assets/product/APU/APS3200 hero.webp"
import V2500 from "../../assets/product/commercial/1984_V2500_1.webp"
import PW127XT from "../../assets/product/regional/PWC-PW127XT-engine-_-interior-white-800px.webp"
import APS5000 from "../../assets/product/APU/APS5000.webp"
import F117 from "../../assets/product/millitary/F117-Hero-1600x900.webp"
import PT6A from "../../assets/product/general/PT6A-Hero.webp"
import Jt8d from "../../assets/100years/gallery/1964 JT8D_1.jpg";
import Jt3d from "../../assets/100years/gallery/1958_1.webp";
import PT6C from "../../assets/product/helicopter/PT6C-Hero-1600x900.webp"
import PT6T from "../../assets/product/helicopter/PT6T Large.webp"
import PW200 from "../../assets/product/helicopter/pw200-hero-1600x900.webp"
import A3200ceo from "../../assets/images/maps/extra/A320 Ceo (1).webp"
import A3200neo from "../../assets/images/maps/extra/A320 neo (1).webp"
import c17 from "../../assets/images/maps/extra/C 17_ (1).webp"
import atr42 from "../../assets/images/maps/extra/ATR 72 (1).webp"
import dash8 from "../../assets/images/maps/extra/DeHavilland DASH 8-400 (1).webp"
import boeing787 from "../../assets/images/maps/extra/Boeing 787 Dreamliner (1).webp"
import pc2 from "../../assets/images/maps/extra/PC 7 Pilatus 2 (1).webp"
import c295 from "../../assets/images/maps/extra/Airbus C295 (1).webp"
import Bell412 from "../../assets/images/maps/extra/Bell 412 (1).webp"
import B707 from "../../assets/images/maps/extra/F15 (1).webp"
import kingfamily from "../../assets/images/maps/extra/Beechcraft Kingair (1).webp"
import aw109 from "../../assets/images/maps/extra/Bell 429 (1).webp"
import aw139 from "../../assets/images/maps/extra/AgustaWestland AW139_ (1).webp"
import boeing737 from "../../assets/images/maps/extra/Boeing 737 100 (1).webp"
import carvanfamily from "../../assets/images/maps/extra/Cessna Caravan 208 (1).webp"
import pc12 from "../../assets/images/maps/extra/Pliatus Pc 12 (1).webp"
import twinotter from "../../assets/images/maps/extra/TwinOtter_PerpA-BG_Standard-scaled (1).jpg";
import No2 from "../../assets/images/maps/extra/No2 (1).webp";
import PW100_150 from "../../assets/product/regional/PW100-150 (1).webp"
import PW500_H_2 from "../../assets/product/bussiness/PW500 Global.webp";
const mapData = [
  {
    id: 1,
    name: "Our Presence",
    type: "animate",
    cities: [
      {
        id: 1,
        name: "New Delhi",
        x: "0%",
        y: "0%",
        position: "top-[10%] left-[40%]",
        cityPosition: "top-[27%] left-[27%]",
        svgPosition: "top-[10%] left-[22%]",
        linePath: [
          { x: 240, y: 380 }, { x: 350, y: 250 }, { x: 500, y: 250 }
        ],

        data: [
          {
            id: 1,
            img: PwInIndiaImage.image.Delhi,
            header1: "Pratt & Whitney",
            header2: "Corporate Headquarters",
            subHeader: "At the heart of PW’s India presence",
            desc: "Our 70 year legacy in India begins with our corporate headquarters in Delhi - From fleet management and customer relations to finance, communications & more.",
            exploreData: {
              header1: "India",
              header2: "Corporate Headquarters",
              subTitle: "For PW India Experience Center",
              bgvideo: PwInIndiaImage.video.ICHQvideoLoop_Thumbnail,
              description:
                "Our 70 year legacy in India begins with our corporate headquarters in Delhi - from fleet management and customer relations to finance, communications & more.",
              variants: [
                {
                  title: "30+  ",
                  subtitle: "Employees ",
                },
                {
                  title: "   10+ ",
                  subtitle: " Fleet Service Reps",
                },
                {
                  title: " 7",
                  subtitle: "  Divisions",
                },
              ],
              logo: PwInIndiaImage.image.IMG_6716,
              defaultTabsData: [
                {
                  title: "Capabilities ",
                  content: [
                    {
                      image: roter, // Add image if available
                      enginetext: "Aftermarket Support",
                      description:
                        "Corporate headquarters houses majority of the commercial engines fleet service team – providing 24x7 support to key customers like IndiGo and Indian Air Force.",
                    },
                    {
                      image: settingBig, // Add image if available
                      enginetext: "Finance, Taxation and Audit",
                      description:
                        "Accurate reporting, regulatory compliance, and strong internal controls, while enabling growth through financial planning, savings optimization, and strategic business partnering.",
                    },
                    {
                      image: Operators, // Add image if available
                      enginetext:
                        "Communications, Customer Relations, Business Development, Government Relations",
                      description: "",
                    },
                  ],
                },
              ],
              gallery: [
                // { img: PwInIndiaImage.image.DSC00213D },
                // { img: PwInIndiaImage.image.DSC00211D },
                // { img: PwInIndiaImage.image.DSC00214D },
                // { img: PwInIndiaImage.image.DSC00272D },
                { img: PwInIndiaImage.image.IMG_6716 },
                { img: PwInIndiaImage.image.IMG_6750 },
                { img: PwInIndiaImage.image.IMG_7034 },
                { img: PwInIndiaImage.image.IMG_7197 },
                { img: PwInIndiaImage.image.IMG_7247 },
                { img: PwInIndiaImage.image.PAND6667 },
                { img: PwInIndiaImage.image.IMG_7229 },
                { img: PwInIndiaImage.image.IMG_7196 },
                // { img: PwInIndiaImage.image.IMG_6910 },
                { img: PwInIndiaImage.image.IMG_7250 },
                // { img: PwInIndiaImage.image.PAND6670 },
                { video: PwInIndiaImage.video.ICHQ_MAIN_IN_VIDEO },
              ],
            },
          },
        ],
      },
      {
        id: 2,

        name: "Hyderabad",
        x: "-10%",
        y: "-15%",
        position: "top-[42%] left-[45%]",
        cityPosition: "top-[60%] left-[27%]",
        svgPosition: "top-[40%] left-[27%]",
        linePath: [
          { x: 100, y: 460 }, { x: 250, y: 250 }, { x: 500, y: 250 }
        ],
        data: [
          {
            id: 1,
            img: PwInIndiaImage.image.hydrabad,
            header1: "Pratt & Whitney India",
            header2: "Customer Training Center",
            subHeader: "State-of-the-art facility. First Investment.",
            desc: "The customer Training Center in Hyderabad provides Specialized training to airline engineers & technicians on our most advanced engines.",
            exploreData: {
              header1: "India",
              header2: "Customer Training Center",
              subTitle: "",
              bgvideo: PwInIndiaImage.video.ICTCVideoloop_Thumbnail,
              description:
                "Pratt & Whitney's state-of-the-art Customer Training Center in Hyderabad provides specialized training to airline engineers & technicians on its most advanced engines. Imparted training to more than 60 operators representing over 40 nationalities.",
              variants: [
                {
                  title: "18K+ ",
                  subtitle: "Student days ",
                },
                {
                  title: "   60+  ",
                  subtitle: " Customers ",
                },
                {
                  title: "    40+",
                  subtitle: " Nationalities",
                },
                {
                  title: " 20+",
                  subtitle: "Training courses",
                },
              ],
              logo: PwInIndiaImage.image.AVT02151,
              defaultTabsData: [
                {
                  title: "Capabilities ",
                  content: [
                    {
                      image: settingBig, // Replace with appropriate image if needed
                      enginetext: "$1.03 M",
                      description: "Revenue",
                    },
                    {
                      image: certfic, // Replace or change image if needed
                      enginetext: "2 certifications",
                      description: "EASA and DGCA",
                    },
                    {
                      image: roter, // Replace or change image if needed
                      enginetext: "Innovation Collaborations - Percept",
                      description: "Percept / AWIROS-Percept tool",
                    },
                  ],
                },

                {
                  title: "Achievements",
                  content: [
                    {
                      image: roter, // Add image if available
                      enginetext: "Advanced Engine Programs",
                      description:
                        "Training programs on PW1100, PW1500, PW1900 and IAE V2500 engines.",
                    },
                    {
                      image: settingAero, // Add image if available
                      enginetext: "Engineering Trainings",
                      description:
                        "Engine fleet management, Engine design & repair, Engine health monitoring, and Engine failure analysis.",
                    },
                    {
                      image: Operators, // Add image if available
                      enginetext: "Technical and Engine Business Academy",
                      description:
                        "Trainings include Gen Familiarization, LBM Borescope Troubleshooting, Commercial engines business overview, and commercial Aircraft Performance & economics.",
                    },
                    {
                      image: redCraft, // Add image path
                      enginetext: "Skill development",
                      description:
                        "University programs and supplier development programs.",
                    },
                  ],
                },
                {
                  title: "Future Scope",
                  content: [
                    { image: FADEC, enginetext: "IDCC collaboration " },
                    {
                      image: roter,
                      enginetext: "Capability enhancement- GP 7200",
                    },
                    { image: Operators, enginetext: "Pilot Training modules " },
                  ],
                },
              ],
              gallery: [
                { img: PwInIndiaImage.image.AV8230T01 },
                { img: PwInIndiaImage.image.AV8232T01 },
                { img: PwInIndiaImage.image.AV8233T01 },
                { img: PwInIndiaImage.image.AV8236T01 },
                { img: PwInIndiaImage.image.AVT02151 },
                { img: PwInIndiaImage.image.AVT02158 },
                { img: PwInIndiaImage.image.AVT02167 },
                { img: PwInIndiaImage.image.AV8234T01 },
                { video: PwInIndiaImage.video.FINAL_INDIA_CTC },
                // { video: PwInIndiaImage.video.ICTC_MAIN_VIDEO_IN_DISPLAY },
                {
                  video:
                    PwInIndiaImage.video.PrattaAndWhitneyPerceptVideo_Final,
                },
                { video: PwInIndiaImage.video.PWanRTX_Business_End_Slate },
              ],
            },
          },
        ],
      },
      {
        id: 3,
        name: "Bengaluru",
        x: "-20%",
        y: "-25%",
        position: "top-[35%] left-[45%]",
        cityPosition: "top-[70%] left-[25%]",
        svgPosition: "top-[55%] left-[28%]",
        linePath: [
          { x: -500, y: 700 }, { x: 150, y: 250 }, { x: 500, y: 250 }
        ],
        data: [
          {
            id: 1,
            img: PwInIndiaImage.image.Bangalore_1,
            header1: "Pratt & Whitney India",
            header2: "Capability Center",
            subHeader: "First GCC for PW in India. Est. 2021",
            desc: "Pratt & Whitney's world-class global supply chain operations and aftermarket support center in Bengaluru.",
            exploreData: {
              header1: " India",
              header2: "Capability Center",
              subTitle: "For PW India Experience Center",
              bgVideo: PwInIndiaImage.video.ICCLoopICTCVideoloop_Thumbnail,
              description:
                "400+ experts, transforming global supply chain, customer support and aftermarket Driving customer service and operations support for Pratt & Whitney Canada’s 68K engines - enhancing worldwide service transformation and operational excellence.",
              variants: [
                {
                  title: "400+",
                  subtitle: "Employees ",
                },
                {
                  title: "   500+ ",
                  subtitle: " Projected employees",
                },
                {
                  title: " 68K+",
                  subtitle: "Engines handled",
                },
                {
                  title: " 50+",
                  subtitle: "Suppliers",
                },
              ],
              logo: PwInIndiaImage.image.ICCConfRoom2,
              defaultTabsData: [
                {
                  title: "Capabilities ",
                  content: [
                    {
                      image: settingBig,
                      enginetext: "$6M",
                      description: "Annual Cost Savings",
                    },
                    {
                      image: managementTool,
                      enginetext: "35K",
                      description: "Active parts managed",
                    },
                    {
                      image: flyingHours,
                      enginetext: "100%",
                      description: "Reliability Events Management ",
                    },
                    {
                      image: Operators,
                      enginetext: "90%",
                      description: "Warranty Claims Processed",
                    },
                  ],
                },

                {
                  title: "Achievements",
                  content: [
                    {
                      image: Operators,
                      enginetext: "Operations",
                      description:
                        "150+ supply chain analysts who augment our global Supply chain operations.",
                    },
                    {
                      image: headphone,
                      enginetext: "Customer Service",
                      description:
                        "deliver a wide range of services such as MRO support, spare part management, engine leasing, engine reliability analysis and contract administration.",
                    },
                    {
                      image: flyingHours,
                      enginetext: "Digital Engine Services",
                      description:
                        "Working on ground-based software applications; engine dato analysis and visualization, support Oil-Al analysis.",
                    },
                    {
                      image: settingAero,
                      enginetext: "Omnichannel & Business Support",
                      description:
                        "Tech Publication purchase and quotes, portal registration and account management, non-technical RSVP, IT assistance, etc.",
                    },
                  ],
                },
                {
                  title: "Future Scope",
                  content: [
                    {
                      image: settingBig,
                      enginetext:
                        "Establish road map to expand SM competency across PW",
                    },
                    {
                      image: managementTool,
                      enginetext:
                        "Execute transitions to support $150M sourcing plan",
                    },
                    {
                      image: flyingHours,
                      enginetext:
                        "Execute after market transformation project to enhance customer experience",
                    },
                  ],
                },
              ],
              gallery: [
                { img: PwInIndiaImage.image.AVT0 },
                { img: PwInIndiaImage.image.DeeptiSitting },
                { img: PwInIndiaImage.image.ICC_inaconferenceRoom },
                { img: PwInIndiaImage.image.ICCCollaborationinMeetingRoom },
                { img: PwInIndiaImage.image.ICCConfRoom2 },
                { img: PwInIndiaImage.image.ICCExperienceCenter },
                { img: PwInIndiaImage.image.ICCExperienceCenter2 },
                { img: PwInIndiaImage.image.ICCExperienceCenter3 },
                { img: PwInIndiaImage.image.ICCExperienceCenter4 },
                { img: PwInIndiaImage.image.ICCPushpinderCollab },
                { img: PwInIndiaImage.image.ICCteaminboardroom },
                {
                  video:
                    PwInIndiaImage.video.ICC_MAIN_Video,
                },
                { video: PwInIndiaImage.video.PrattAndWhitneyICCSecondVideo },
              ],
            },
          },
          {
            id: 2,
            img: PwInIndiaImage.image.Bangalore_2,
            header1: "Pratt & Whitney India",
            header2: "Engineering Center",
            subHeader: "Working on PW's commercial engines portfolio",
            bgVideo: PwInIndiaImage.video.IECVideoloop_Thumbnail,
            desc: "India's best and brightest aerospace engineers work with our centers across the world on advanced commercial engines.",
            exploreData: {
              header1: "India",
              header2: "Engineering Center",
              subTitle: "",
              description:
                "IEC's mission is to establish a fully integrated team with US and Canada Engineering organizations for Commercial and Small Engine core engineering activities.End state is to fully integrate with global engineering, digital tools, systems & policies.",
              variants: [
                {
                  title: "300+  ",
                  subtitle: "Employees ",
                },
                {
                  title: "       500+ ",
                  subtitle: " Projected employees",
                },
                {
                  title: " 36M+",
                  subtitle: "Investment",
                },
              ],
              logo: PwInIndiaImage.image.PAND6670,
              defaultTabsData: [
                {
                  title: "Capabilities ",
                  content: [
                    {
                      image: settingBig,
                      enginetext: "$10M",
                      description: "Savings",
                    },
                    {
                      image: redCraft,
                      enginetext: "AS9100",
                      description: "Multi-site certified",
                    },
                    {
                      image: flyingHours,
                      enginetext: "6",
                      description: "IDs Rated to File",
                    },
                  ],
                },

                {
                  title: "Achievements",
                  content: [
                    {
                      image: settingAero, // Add the path to the image if available
                      enginetext: "Design Engineering",
                      description:
                        "Conceptualization and detailed design of engine components such as turbines, compressors, and combustors to meet thrust, efficiency, and reliability goals.",
                    },
                    {
                      image: roter, // Add image path
                      enginetext: "Structural Engineering",
                      description:
                        "Analyzing and ensuring the mechanical integrity of engine components under extreme temperatures, pressures, and dynamic loads throughout flight.",
                    },
                    {
                      image: No2, // Add image path
                      enginetext: "Project Engineering",
                      description:
                        "Technical execution of engine development programs by integrating inputs from design, manufacturing, and testing teams to deliver propulsion systems.",
                    },
                    {
                      image: flyingHours, // Add image path
                      enginetext: "Software Engineering",
                      description:
                        "Development of control algorithms, embedded systems, and diagnostic tools for engine monitoring, FADEC and predictive maintenance.",
                    },
                  ],
                },
                {
                  title: "Future Scope",
                  content: [
                    {
                      image: develop,
                      enginetext: "Capability development ",
                    },
                  ],
                },
              ],
              gallery: [
                { img: PwInIndiaImage.image.DSC00211 },
                { img: PwInIndiaImage.image.DSC00213 },
                { img: PwInIndiaImage.image.DSC00214 },
                { img: PwInIndiaImage.image.DSC00272 },
                { img: PwInIndiaImage.image.IDCCpeopleatdesk },
                { img: PwInIndiaImage.image.IECmembersworkinginsameroom },
                { img: PwInIndiaImage.image.PAND6667 },
                { img: PwInIndiaImage.image.PAND6670 },
                { img: PwInIndiaImage.image.IDCCAreamembersatdesk },
                {
                  video:
                    PwInIndiaImage.video.PW_IEC_Video_2025_Social_Team_Edits_Final,
                },
              ],
            },
          },
          {
            id: 3,
             img: PwInIndiaImage.image.Bangalore_3,
            header1: "Pratt & Whitney India",
            header2: "Digital Capability Center",
            subHeader: "Accelerating Enterprise-wide digital transformation",
            desc: "The center wall focus on delivering various digital technology capabilities across priority areas of Prott & Whitney's digital transformation strategy.",
            exploreData: {
              header1: "India",
              header2: "Digital Capability Center",
              subTitle: "",
              bgVideo: PwInIndiaImage.video.IDCCVideoloop_Thumbnail,
              description:
                "Driving Digital Transformation - In collaboration with our global business stakeholders. Identify, incubate, develop, and deliver world-class, secure digital solutions to solve challenges faster and cost-effectively.",
              variants: [
                {
                  title: "~100  ",
                  subtitle: "Employees  ",
                },
                {
                  title: " 300+ ",
                  subtitle: " Projected employees ",
                },
              ],
              logo: PwInIndiaImage.image.DSC00069,
              defaultTabsData: [
                {
                  title: "Capabilities ",
                  content: [
                    {
                      image: settingBig, // Add appropriate image if available
                      enginetext: "12",
                      description:
                        "Key Value projects ownership in Engineering, Factory Automation & Data Science and Analytics",
                    },
                    {
                      image: redCraft, // Add appropriate image if available
                      enginetext: "81%+",
                      description: "Utilization",
                    },
                    {
                      image: FADEC, // Add appropriate image if available
                      enginetext: "28",
                      description:
                        "Highest no of innovation projects in internal hackathon",
                    },
                  ],
                },

                {
                  title: "Achievements",
                  content: [
                    {
                      image: settingAero, // Add image path if available
                      enginetext: "Factory Automation & App Dev Services",
                      description:
                        "Deliver automation solutions and custom applications to streamline manufacturing, assembly, and customer service.",
                    },
                    {
                      image: roter, // Add image path if available
                      enginetext: "Data Science & Analytics",
                      description:
                        "Leverage engine test data, sensor feeds, and operational metrics to drive insights, optimize performance, and enable predictive maintenance.",
                    },
                    {
                      image: No2, // Add image path if available
                      enginetext: "Enterprise Architecture",
                      description:
                        "Define and govern the IT system blueprint to align digital tools, data flows, and business processes supporting engine design, production, and support.",
                    },
                    {
                      image: flyingHours, // Add image path if available
                      enginetext: "ERP and CRM",
                      description:
                        "Integrate enterprise resource planning and customer relationship management systems.",
                    },
                  ],
                },
                {
                  title: "Future Scope",
                  content: [
                    { image: PW500_H_2, enginetext: "Innovation Hub Setup" },
                    {
                      image: thrust,
                      enginetext: "Hyderabad Center Expansion plan",
                    },
                  ],
                },
              ],
              gallery: [
                { img: PwInIndiaImage.image.CM407832 },
                { img: PwInIndiaImage.image.CM407841 },
                { img: PwInIndiaImage.image.CM407884 },
                { img: PwInIndiaImage.image.CM407934 },
                { img: PwInIndiaImage.image.DSC00069 },
                { img: PwInIndiaImage.image.DSC00126 },
                { img: PwInIndiaImage.image.DSC00158 },
                { img: PwInIndiaImage.image.DSC00161 },
                { img: PwInIndiaImage.image.DSC00166 },
                { img: PwInIndiaImage.image.DSC00179 },
                { img: PwInIndiaImage.image.DSC00193 },
                { img: PwInIndiaImage.image.DSC00194 },
                { img: PwInIndiaImage.image.DSC00197 },
                { img: PwInIndiaImage.image.DSC00270 },
                { img: PwInIndiaImage.image.IDCC },
                { video: PwInIndiaImage.video.digitalCapabilityVideo },// Optional: for video inclusion
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Our Fleet",
    cities: [],
    type: "navigate",
    exploreData: {
      header1: "Pratt & Whitney",
      header2: " India Fleet",
      subTitle: "For PW India Experience Center",
      bgvideo: PwInIndiaImage.video.ICHQvideoLoop_Thumbnail,
      description:
        "We have powered India's aviation growth for more than seven decades, starting in the 1960s with Air India's JT3D powered Boeing 707 fleet, to the Airbus A320neo family aircraft flying with GTF™ engines today.",
      variants: [
        {
          title: "70+   ",
          subtitle: "Years in India",
        },
        {
          title: "   600+ ",
          subtitle: " Aircraft powered ",
        },
        {
          title: " 1500  ",
          subtitle: "Engines & APUs",
        },
        {
          title: " 1300  ",
          subtitle: "Operators",
        },
      ],
      logo: PwInIndiaImage.image.EmbraerC390RTXOffering,
      defaultTabsData: [
        {
          title: "All",
          content: [
            {
              image: A3200neo, // Add image if available
              content1: {
                enginetext: "Airbus A320neo   ",
                engineNumber: "116",
                engineCraft: "Aircraft",
              },
              content2: {
                image: "",
                engineCraft: "PW1100 ",
              },
              content3: {
                image: APS3200,
                engineCraft: "APS3200 ",
              },
            },
            {
              image: A3200ceo, // Add image if available
              content1: {
                enginetext: "Airbus A320ceo  ",
                engineNumber: "20",
                engineCraft: "Aircraft",
              },
              content2: {
                image: V2500,
                engineCraft: "V2500  ",
              },
              content3: {
                image: APS3200,
                engineCraft: "APS3200 ",
              },
            },
            {
              image: atr42, // Add image if available
              content1: {
                enginetext: "ATR 42/72 ",
                engineNumber: "70",
                engineCraft: "Aircraft",
              },
              content2: {
                image: PW127XT,
                engineCraft: "PW127XT ",
              },
            },
            {
              image: dash8, // Add image if available
              content1: {
                enginetext: "Dash-8/Q400",
                engineNumber: "21",
                engineCraft: "Aircraft",
              },
              content2: {
                image: PW100_150,
                engineCraft: "PW 150 ",
              },
            },
            {
              image: boeing787, // Add image if available
              content1: {
                enginetext: "Boeing 787-8/9",
                engineNumber: "34",
                engineCraft: "Aircraft",
              },
              content2: {
                image: APS5000,
                engineCraft: "APS5000 ",
              },
            },
            {
              image: c17, // Add image if available

              content1: {
                enginetext: "C-17 Globemaster III",
                engineNumber: "11",
                engineCraft: "Aircraft",
              },
              content2: {
                image: F117,
                engineCraft: "F117",
              },
            },
            {
              image: pc2, // Add image if available
              content1: {
                enginetext: "PC-7 Mk II",
                engineNumber: "75",
                engineCraft: "Aircraft",
              },
              content2: {
                image: PT6A,
                engineCraft: "PT6A",
              },
            },
            {
              image: c295, // Add image if available
              content1: {
                enginetext: "C-295 ",
                engineNumber: "56",
                engineCraft: "Aircraft",
              },
              content2: {
                image: PW127XT,
                engineCraft: "PW127G",
              },
            },
            {
              image: boeing737, // Add image if available
              content1: {
                enginetext: "737-200 (adv)",
                engineNumber: "2",
                engineCraft: "Aircraft",
              },
              content2: {
                image: Jt8d,
                engineCraft: "JT8D",
              },
            },
            {
              image: B707, // Add image if available
              content1: {
                enginetext: "707-320C ",
                engineNumber: "1",
                engineCraft: "Aircraft",
              },
              content2: {
                image: Jt3d,
                engineCraft: "JT3D",
              },
            },
            {
              image: kingfamily, // Add image if available
              content1: {
                enginetext: "King Air Family  ",
                engineNumber: "61",
                engineCraft: "Aircraft",
              },
              content2: {
                image: PT6A,
                engineCraft: "PT6A",
              },
            },
            {
              image: Bell412, // Add image if available
              content1: {
                enginetext: "Bell 412 ",
                engineNumber: "28",
                engineCraft: "Aircraft",
              },
              content2: {
                image: PT6T,
                engineCraft: "PT6T",
              },
            },
            {
              image: aw139, // Add image if available
              content1: {
                enginetext: "AW139  ",
                engineNumber: "12",
                engineCraft: "Aircraft",
              },
              content2: {
                image: PT6C,
                engineCraft: "PT6C",
              },
            },
            {
              image: aw109, // Add image if available
              content1: {
                enginetext: "AW109  ",
                engineNumber: "23",
                engineCraft: "Aircraft",
              },
              content2: {
                image: PW200,
                engineCraft: "PW200",
              },
            },
            {
              image: twinotter, // Add image if available
              content1: {
                enginetext: "Twin Otter   ",
                engineNumber: "3",
                engineCraft: "Aircraft",
              },
              content2: {
                image: PT6A,
                engineCraft: "PT6A",
              },
            },
            {
              image: carvanfamily, // Add image if available
              content1: {
                enginetext: "Caravan Family       ",
                engineNumber: "10",
                engineCraft: "Aircraft",
              },
              content2: {
                image: PT6A,
                engineCraft: "PT6A",
              },
            },
            {
              image: pc12, // Add image if available
              content1: {
                enginetext: "PC-12  ",
                engineNumber: "7",
                engineCraft: "Aircraft",
              },
              content2: {
                image: PT6A,
                engineCraft: "PT6A",
              },
            },
          ],
        },
        {
          title: "Commercial & Regional",
          content: [
            {
              image: A3200neo, // Add image if available
              content1: {
                enginetext: "Airbus A320neo   ",
                engineNumber: "116",
                engineCraft: "Aircraft",
              },
              content2: {
                image: "",
                engineCraft: "PW1100 ",
              },
              content3: {
                image: APS3200,
                engineCraft: "APS3200 ",
              },
            },
            {
              image: A3200ceo, // Add image if available
              content1: {
                enginetext: "Airbus A320ceo  ",
                engineNumber: "20",
                engineCraft: "Aircraft",
              },
              content2: {
                image: V2500,
                engineCraft: "V2500  ",
              },
              content3: {
                image: APS3200,
                engineCraft: "APS3200 ",
              },
            },
            {
              image: atr42, // Add image if available
              content1: {
                enginetext: "ATR 42/72 ",
                engineNumber: "70",
                engineCraft: "Aircraft",
              },
              content2: {
                image: PW127XT,
                engineCraft: "PW127XT ",
              },
            },
            {
              image: dash8, // Add image if available
              content1: {
                enginetext: "Dash-8/Q400",
                engineNumber: "21",
                engineCraft: "Aircraft",
              },
              content2: {
                image: PW100_150,
                engineCraft: "PW 150 ",
              },
            },
            {
              image: boeing787, // Add image if available
              content1: {
                enginetext: "Boeing 787-8/9",
                engineNumber: "34",
                engineCraft: "Aircraft",
              },
              content2: {
                image: APS5000,
                engineCraft: "APS5000 ",
              },
            },
          ],
        },
        {
          title: "Defense",
          content: [
            {
              image: c17, // Add image if available

              content1: {
                enginetext: "C-17 Globemaster III",
                engineNumber: "11",
                engineCraft: "Aircraft",
              },
              content2: {
                image: F117,
                engineCraft: "F117",
              },
            },
            {
              image: pc2, // Add image if available
              content1: {
                enginetext: "PC-7 Mk II",
                engineNumber: "75",
                engineCraft: "Aircraft",
              },
              content2: {
                image: PT6A,
                engineCraft: "PT6A",
              },
            },
            {
              image: c295, // Add image if available
              content1: {
                enginetext: "C-295 ",
                engineNumber: "56",
                engineCraft: "Aircraft",
              },
              content2: {
                image: PW127XT,
                engineCraft: "PW127G",
              },
            },
            {
              image: boeing737, // Add image if available
              content1: {
                enginetext: "737-200 (adv)",
                engineNumber: "2",
                engineCraft: "Aircraft",
              },
              content2: {
                image: Jt8d,
                engineCraft: "JT8D",
              },
            },
            {
              image: B707, // Add image if available
              content1: {
                enginetext: "707-320C ",
                engineNumber: "1",
                engineCraft: "Aircraft",
              },
              content2: {
                image: Jt3d,
                engineCraft: "JT3D",
              },
            },
          ],
        },
        {
          title: "Heli., Biz. & General",
          content: [
            {
              image: kingfamily, // Add image if available
              content1: {
                enginetext: "King Air Family  ",
                engineNumber: "61",
                engineCraft: "Aircraft",
              },
              content2: {
                image: PT6A,
                engineCraft: "PT6A",
              },
            },
            {
              image: Bell412, // Add image if available
              content1: {
                enginetext: "Bell 412 ",
                engineNumber: "28",
                engineCraft: "Aircraft",
              },
              content2: {
                image: PT6T,
                engineCraft: "PT6T",
              },
            },
            {
              image: aw139, // Add image if available
              content1: {
                enginetext: "AW139  ",
                engineNumber: "12",
                engineCraft: "Aircraft",
              },
              content2: {
                image: PT6C,
                engineCraft: "PT6C",
              },
            },
            {
              image: aw109, // Add image if available
              content1: {
                enginetext: "AW109  ",
                engineNumber: "23",
                engineCraft: "Aircraft",
              },
              content2: {
                image: PW200,
                engineCraft: "PW200",
              },
            },
            {
              image: twinotter, // Add image if available
              content1: {
                enginetext: "Twin Otter   ",
                engineNumber: "3",
                engineCraft: "Aircraft",
              },
              content2: {
                image: PT6A,
                engineCraft: "PT6A",
              },
            },
            {
              image: carvanfamily, // Add image if available
              content1: {
                enginetext: "Caravan Family       ",
                engineNumber: "10",
                engineCraft: "Aircraft",
              },
              content2: {
                image: PT6A,
                engineCraft: "PT6A",
              },
            },
            {
              image: pc12, // Add image if available
              content1: {
                enginetext: "PC-12  ",
                engineNumber: "7",
                engineCraft: "Aircraft",
              },
              content2: {
                image: PT6A,
                engineCraft: "PT6A",
              },
            },
          ],
        },
      ],
      gallery: [
        { img: PwInIndiaImage.image.EmbraerC390RTXOffering },
        { img: PwInIndiaImage.image.C2953 },
        { img: PwInIndiaImage.image.C17IndianAirForce },
        { img: PwInIndiaImage.image.C2951 },
        { img: PwInIndiaImage.image.EmbraerC390 },
        { img: PwInIndiaImage.image.PC7Pilatus },
        { video: PwInIndiaImage.video.MainvideoforDefenseDisplay },
        { video: PwInIndiaImage.video.C390forIndiavideo },
        { img: PwInIndiaImage.image.Sikorsky_S76B },
        { img: PwInIndiaImage.image.S76 },
        { img: PwInIndiaImage.image.Augusta_Westland_AW },
        { img: PwInIndiaImage.image.AgustaWestland_AW_139 },
        { video: PwInIndiaImage.video.MainVideoOnDisplayWindow_Celebrating_60_years },
        { video: PwInIndiaImage.video.MainVideoforDisplayWindowOurFleetMainvideo },
        { img: PwInIndiaImage.image.IndiGoA320neoUNCONFIRMED2 },
        { img: PwInIndiaImage.image.pwlogo6 },
        { img: PwInIndiaImage.image.IndiGoA320neoUNCONFIRMED },
        { img: PwInIndiaImage.image.ATR726002 },
        { img: PwInIndiaImage.image.ATR726001 },
        { img: PwInIndiaImage.image.INN1984_V2500_6 },
        { img: PwInIndiaImage.image.INN1984_V2500_4 },
        { img: PwInIndiaImage.image.IndiGoA320neo },
        { img: PwInIndiaImage.image.FLY91aircraft },
        { img: PwInIndiaImage.image.FLY92aircraft },
        { img: PwInIndiaImage.image.PWGTFIGOOO }
      ],
    },
  },
  {
    id: 3,
    name: "RTX in India",
    type: "RTX",
    leftCardData: {
      name: "",
      engineData: [
        {
          logo: PwInIndiaImage.image.Employees,
          text: "7500+",
          desc: "Employees",
        },
        {
          logo: PwInIndiaImage.image.Investment,
          text: "240M+",
          desc: "Combined investment in India 5 years",
        },
        {
          logo: PwInIndiaImage.image.Manufacturing,
          text: "3",
          desc: "Manufacturing sites",
        },
        { logo: PwInIndiaImage.image.RANDD, text: "3", desc: "R&D sites" },
        {
          logo: settingAero,
          text: "$500M+",
          desc: "Sourcing of parts & services annually",
        },
      ],
    },
    rightCardData: {
      name: "RTX Fleet",
      engineData: [
        { logo: A3200neo, engine: "A320neo" },
        { logo: A3200ceo, engine: "A320ceo" },
        { logo: boeing787, engine: "787" },
        { logo: PwInIndiaImage.image.A737, engine: "737 family" },
        { logo: atr42, engine: "ATR42/72" },
        { logo: PwInIndiaImage.image.LCAMK1, engine: "LCA MK I Tejas" },
        { logo: PwInIndiaImage.image.C_130J, engine: "C-130J" },
        { logo: c17, engine: "C-17 Globemaster" },
        { logo: PwInIndiaImage.image.MH60R, engine: "MH-60R" },
        { logo: PwInIndiaImage.image.AH64Apache, engine: "AH-64E" },
      ],
    },
    cities: [
      {
        id: 1,
        name: "New Delhi",
        x: "0%",
        y: "0%",
        position: "top-[10%] left-[37%]",
        cityPosition: "top-[27%] left-[27%]",
        svgPosition: "top-[6%] left-[22%]",
        linePath:

          [{ x: 220, y: 490 }, { x: 350, y: 250 }, { x: 500, y: 250 }], // angled + horizontal

        data: {
          img: PwInIndiaImage.image.Delhi,
          items: [
            {
              title: "Pratt & Whitney",
              desc: "Corporate Headquarters",
            },
            {
              title: "Collins Aerospace",
              desc: "Avionics and Business Development",
            },
            {
              title: "Raytheon",
              desc: "Corporate Headquarters",
            },
          ],
        },
      },
      {
        id: 2,

        name: "Hyderabad",
        x: "-10%",
        y: "-20%",
        position: "top-[45%] left-[39%]",
        cityPosition: "top-[60%] left-[27%]",
        svgPosition: "top-[40%] left-[24%]",
        linePath: [
          { x: 185, y: 460 }, { x: 350, y: 250 }, { x: 500, y: 250 }
        ],
        data: {
          img: PwInIndiaImage.image.hydrabad,
          items: [
            {
              id: 1,
              title: "Pratt & Whitney",
              desc: "India Customer Training Center",
            },
            {
              id: 2,
              title: "Collins Aerospace",
              desc: "Global Engineering & Technology Center",
            },
            {
              id: 3,
              title: "RTX",
              desc: "Enterprise Services",
            },
          ],
        },
      },
      {
        id: 3,
        name: "Bengaluru",
        x: "-20%",
        y: "-30%",
        position: "top-[60%] left-[43%]",
        cityPosition: "top-[70%] left-[25%]",
        svgPosition: "top-[55%] left-[27%]",
        linePath: [
          { x: 40, y: 350 }, { x: 300, y: 250 }, { x: 500, y: 250 }
        ],
        // linePath: [
        //  { x: 500, y: 400 }, { x: 550, y: 350 } // horizontal
        // ],
        data: {
           img: PwInIndiaImage.image.Bangalore,
          items: [
            {
              id: 1,
              title: "Pratt & Whitney",
              descList: [
                "India Capability Center",
                "India Engineering Center",
                "India Digital Capability Center",
              ],
            },
            {
              id: 2,
              title: "Collins Aerospace",
              descList: [
                "Collins India Operations Center (manf.)",
                "Global Engineering & Technology Center",
                "Engineering Development and Test Center",
                "India Digital Technology Center",
              ],
            },
            {
              id: 3,
              title: "RTX",
              desc: "Enterprise Services",
            },
          ],
        },
      },
    ],
  },
  {
    id: 4,
    name: "About India",
    type: "India",
    leftCardData: {
      name: "",
      engineData: [
        {
          logo: PwInIndiaImage.image.Employees,
          text: "1.46B",
          desc: "Population",
        },
        {
          logo: PwInIndiaImage.image.Investment,
          text: "$4.19T",
          desc: "GDP in 2024",
        },
        {
          logo: redCraft,
          text: "#3",
          desc: "Largest air transport market",
        },
        {
          logo: Operators,
          text: "600M",
          desc: "Passengers per annum by 2044",
        },
        {
          logo: cloudAero,
          text: "860+",
          desc: "Fleet of aircraft in service",
        },
      ],
    },
    rightCardData: {
      name: "",
      engineData: [
        {
          logo: aeroRedHandle,
          text: "2,800+",
          desc: "Aircraft by 2044",
        },
        {
          logo: settingAero,
          text: "1620",
          desc: "Current aircraft on order (2025)",
        },
        {
          logo: roter,
          text: "78%",
          desc: "Narrowbody aircraft",
        },
        {
          logo: jetFire,
          text: "1700+",
          desc: "IAF aircraft",
        },
        {
          logo: jetvertical,
          text: "15%",
          desc: "IAF aircraft of US origin",
        },
      ],
    },
    cities: [
      {
        id: 1,
        name: "New Delhi",
        x: "0%",
        y: "0%",
        position: "top-[10%] left-[40%]",
        cityPosition: "top-[27%] left-[27%]",

        data: {},
      },
      {
        id: 2,

        name: "Hyderabad",
        x: "-10%",
        y: "-20%",
        position: "top-[45%] left-[42%]",
        cityPosition: "top-[60%] left-[27%]",
        data: {},
      },
      {
        id: 3,
        name: "Bengaluru",
        x: "-20%",
        y: "-30%",
        position: "top-[65%] left-[50%]",
        cityPosition: "top-[70%] left-[25%]",
        data: {},
      },
    ],
  },
];

export default mapData;

