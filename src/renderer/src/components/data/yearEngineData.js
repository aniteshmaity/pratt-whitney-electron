import { productEngine } from "./productEngineData";
import { slideData } from "./yearTimelineData";


export const yearEngineData = [
    {
        name: "1920",
        timeline: [
            {
                id: 1,
                year: slideData[0].innerSlidesData[0].year,
                title: slideData[0].innerSlidesData[0].title,
                cloneTitle:slideData[0].innerSlidesData[0].cloneTitle,
                subtitle: slideData[0].innerSlidesData[0].subtitle,
                description: slideData[0].innerSlidesData[0].description,
                gallery: slideData[0].innerSlidesData[0].slideImages,
                isExplore: false
            },
            {
                id: 2,
                year: slideData[0].innerSlidesData[1].year,
                title: slideData[0].innerSlidesData[1].title,
                cloneTitle: slideData[0].innerSlidesData[1].cloneTitle,
                subtitle: slideData[0].innerSlidesData[1].subtitle,
                description: slideData[0].innerSlidesData[1].description,
                gallery: slideData[0].innerSlidesData[1].slideImages,
                 redirectLinkData:productEngine[7]?.engines[4]?.details,
                isExplore: true
            },
            {
                id: 3,
                year: slideData[0].innerSlidesData[2].year,
                title: slideData[0].innerSlidesData[2].title,
                cloneTitle: slideData[0].innerSlidesData[2].cloneTitle,
                subtitle: slideData[0].innerSlidesData[2].subtitle,
                description: slideData[0].innerSlidesData[2].description,
                gallery: slideData[0].innerSlidesData[2].slideImages,
                redirectLinkData:productEngine[7]?.engines[0]?.details,
                isExplore: true
            },
            {
                id: 4,
                year: slideData[0].innerSlidesData[3].year,
                title: slideData[0].innerSlidesData[3].title,
                cloneTitle: slideData[0].innerSlidesData[3].cloneTitle,
                subtitle: slideData[0].innerSlidesData[3].subtitle,
                description: slideData[0].innerSlidesData[3].description,
                gallery: slideData[0].innerSlidesData[3].slideImages,
                isExplore: false
            },
            {
                id: 5,
                year: slideData[0].innerSlidesData[4].year,
                title: slideData[0].innerSlidesData[4].title,
                cloneTitle: slideData[0].innerSlidesData[4].cloneTitle,
                subtitle: slideData[0].innerSlidesData[4].subtitle,
                description: slideData[0].innerSlidesData[4].description,
                gallery: slideData[0].innerSlidesData[4].slideImages,
                isExplore: false
            }
        ]
    },
    {
        name: "1930",
        timeline: [
            {
                id:1,
                year: slideData[1].year,
                title: slideData[1].title,
                cloneTitle: slideData[1].cloneTitle,
                subtitle: slideData[1].subtitle,
                description: slideData[1].description,
                gallery: slideData[1].slideImages,
                // redirectLinkData:productEngine[7]?.engines[4]?.details,
                isExplore: false
            },
          

        ]
    },
    {
        name: "1940",
        timeline: [
            {
                id: 1,
                year: slideData[2].innerSlidesData[0].year,
                title: slideData[2].innerSlidesData[0].title,
                cloneTitle: slideData[2].innerSlidesData[0].cloneTitle,
                subtitle: slideData[2].innerSlidesData[0].subtitle,
                description: slideData[2].innerSlidesData[0].description,

                gallery: slideData[2].innerSlidesData[0].slideImages,
                    //  redirectLinkData:productEngine[7]?.engines[4]?.details,
                isExplore: false
            },
            {
                id: 2,
                year: slideData[2].innerSlidesData[1].year,
                title: slideData[2].innerSlidesData[1].title,
                cloneTitle: slideData[2].innerSlidesData[1].cloneTitle,
                subtitle: slideData[2].innerSlidesData[1].subtitle,
                description: slideData[2].innerSlidesData[1].description,

                gallery: slideData[2].innerSlidesData[1].slideImages,
                isExplore: false
            },


        ]
    },
    {
        name: "1950",
        timeline: [
            {
                id: 1,
                year: slideData[3].innerSlidesData[0].year,
                title: slideData[3].innerSlidesData[0].title,
                cloneTitle: slideData[3].innerSlidesData[0].cloneTitle,
                subtitle: slideData[3].innerSlidesData[0].subtitle,
                description: slideData[3].innerSlidesData[0].description,
                video: slideData[3].innerSlidesData[0].video,
                gallery: slideData[3].innerSlidesData[0].slideImages,
                isExplore: false
            },
            {
                id: 2,
                year: slideData[3].innerSlidesData[1].year,
                title: slideData[3].innerSlidesData[1].title,
                cloneTitle: slideData[3].innerSlidesData[1].cloneTitle,
                subtitle: slideData[3].innerSlidesData[1].subtitle,
                description: slideData[3].innerSlidesData[1].description,
                gallery: slideData[3].innerSlidesData[1].slideImages,
                   redirectLinkData:productEngine[7]?.engines[1]?.details,
                isExplore: true
            },


        ]
    },
    {
        name: "1960",
        timeline: [
            {
                id: 1,
                year: slideData[4].innerSlidesData[0].year,
                title: slideData[4].innerSlidesData[0].title,
                cloneTitle: slideData[4].innerSlidesData[0].cloneTitle,
                subtitle: slideData[4].innerSlidesData[0].subtitle,
                description: slideData[4].innerSlidesData[0].description,
                video: slideData[4].innerSlidesData[0].video,
                gallery: slideData[4].innerSlidesData[0].slideImages,
                    redirectLinkData:productEngine[2]?.engines[3]?.details,
                isExplore: true
            },
            {
                id: 2,
                year: slideData[4].innerSlidesData[1].year,
                title: slideData[4].innerSlidesData[1].title,
                cloneTitle: slideData[4].innerSlidesData[1].cloneTitle,
                subtitle: slideData[4].innerSlidesData[1].subtitle,
                description: slideData[4].innerSlidesData[1].description,

                gallery: slideData[4].innerSlidesData[1].slideImages,
                isExplore: false
            },
            {
                id: 3,
                year: slideData[4].innerSlidesData[2].year,
                title: slideData[4].innerSlidesData[2].title,
                cloneTitle: slideData[4].innerSlidesData[2].cloneTitle,
                subtitle: slideData[4].innerSlidesData[2].subtitle,
                description: slideData[4].innerSlidesData[2].description,

                gallery: slideData[4].innerSlidesData[2].slideImages,
                     redirectLinkData:productEngine[7]?.engines[1]?.details,
                isExplore: true
            },
            {
                id: 4,
                year: slideData[4].innerSlidesData[3].year,
                title: slideData[4].innerSlidesData[3].title,
                cloneTitle: slideData[4].innerSlidesData[3].cloneTitle,
                subtitle: slideData[4].innerSlidesData[3].subtitle,
                description: slideData[4].innerSlidesData[3].description,

                gallery: slideData[4].innerSlidesData[3].slideImages,
                 redirectLinkData:productEngine[7]?.engines[2]?.details,
                isExplore: true
            },
             {
                id: 5,
                year: slideData[4].innerSlidesData[4].year,
                title: slideData[4].innerSlidesData[4].title,
                cloneTitle: slideData[4].innerSlidesData[4].cloneTitle,
                subtitle: slideData[4].innerSlidesData[4].subtitle,
                description: slideData[4].innerSlidesData[4].description,

                gallery: slideData[4].innerSlidesData[4].slideImages,
                isExplore: false
            },
             {
                id: 6,
                year: slideData[4].innerSlidesData[5].year,
                title: slideData[4].innerSlidesData[5].title,
                cloneTitle: slideData[4].innerSlidesData[5].cloneTitle,
                subtitle: slideData[4].innerSlidesData[5].subtitle,
                description: slideData[4].innerSlidesData[5].description,

                gallery: slideData[4].innerSlidesData[5].slideImages,
                isExplore: false
            },

        ]
    },
    {
        name: "1970",
        timeline: [
            {
                id: 1,
                year: slideData[5].innerSlidesData[0].year,
                title: slideData[5].innerSlidesData[0].title,
                cloneTitle: slideData[5].innerSlidesData[0].cloneTitle,
                subtitle: slideData[5].innerSlidesData[0].subtitle,
                description: slideData[5].innerSlidesData[0].description,

                gallery: slideData[5].innerSlidesData[0].slideImages,
                    redirectLinkData:productEngine[7]?.engines[3]?.details,
                isExplore: true
            },
            {
                id: 2,
                year: slideData[5].innerSlidesData[1].year,
                title: slideData[5].innerSlidesData[1].title,
                cloneTitle: slideData[5].innerSlidesData[1].cloneTitle,
                subtitle: slideData[5].innerSlidesData[1].subtitle,
                description: slideData[5].innerSlidesData[1].description,

                gallery: slideData[5].innerSlidesData[1].slideImages,
                isExplore: false
            },
            {
                id: 3,
                year: slideData[5].innerSlidesData[2].year,
                title: slideData[5].innerSlidesData[2].title,
                cloneTitle: slideData[5].innerSlidesData[2].cloneTitle,
                subtitle: slideData[5].innerSlidesData[2].subtitle,
                description: slideData[5].innerSlidesData[2].description,
                video: slideData[5].innerSlidesData[2].video,
                gallery: slideData[5].innerSlidesData[2].slideImages,
                  redirectLinkData:productEngine[1]?.engines[5]?.details,
                isExplore: true
            },

        ]
    },
    {
        name: "1980",
        timeline: [
            {
                id: 1,
                year: slideData[6].innerSlidesData[0].year,
                title: slideData[6].innerSlidesData[0].title,
                cloneTitle: slideData[6].innerSlidesData[0].cloneTitle,
                subtitle: slideData[6].innerSlidesData[0].subtitle,
                description: slideData[6].innerSlidesData[0].description,

                gallery: slideData[6].innerSlidesData[0].slideImages,
                 redirectLinkData:productEngine[0]?.engines[0]?.details,
                isExplore: true
            },
            {
                id: 2,
                year: slideData[6].innerSlidesData[1].year,
                title: slideData[6].innerSlidesData[1].title,
                cloneTitle: slideData[6].innerSlidesData[1].cloneTitle,
                subtitle: slideData[6].innerSlidesData[1].subtitle,
                description: slideData[6].innerSlidesData[1].description,

                gallery: slideData[6].innerSlidesData[1].slideImages,
                redirectLinkData:productEngine[4]?.engines[1]?.details,
                isExplore: true
            },
            {
                id: 3,
                year: slideData[6].innerSlidesData[2].year,
                title: slideData[6].innerSlidesData[2].title,
                cloneTitle: slideData[6].innerSlidesData[2].cloneTitle,
                subtitle: slideData[6].innerSlidesData[2].subtitle,
                description: slideData[6].innerSlidesData[2].description,
                video: slideData[6].innerSlidesData[2].video,
                gallery: slideData[6].innerSlidesData[2].slideImages,
                 redirectLinkData:productEngine[4]?.engines[3]?.details,
                isExplore: true
            },
            {
                id: 4,
                year: slideData[6].innerSlidesData[3].year,
                title: slideData[6].innerSlidesData[3].title,
                cloneTitle: slideData[6].innerSlidesData[3].cloneTitle,
                subtitle: slideData[6].innerSlidesData[3].subtitle,
                description: slideData[6].innerSlidesData[3].description,

                gallery: slideData[6].innerSlidesData[3].slideImages,
                 redirectLinkData:productEngine[5]?.engines[3]?.details,
                isExplore: true
            },

        ]
    },
    {
        name: "1990",
        timeline: [
            {
                id: 1,
                year: slideData[7].innerSlidesData[0].year,
                title: slideData[7].innerSlidesData[0].title,
                cloneTitle: slideData[7].innerSlidesData[0].cloneTitle,
                subtitle: slideData[7].innerSlidesData[0].subtitle,
                description: slideData[7].innerSlidesData[0].description,

                video: slideData[7].innerSlidesData[0].video,
                gallery: slideData[7].innerSlidesData[0].slideImages,
                redirectLinkData:productEngine[4]?.engines[2]?.details,
                isExplore: true
            },
            {
                id: 2,
                year: slideData[7].innerSlidesData[1].year,
                title: slideData[7].innerSlidesData[1].title,
                cloneTitle: slideData[7].innerSlidesData[1].cloneTitle,
                subtitle: slideData[7].innerSlidesData[1].subtitle,
                description: slideData[7].innerSlidesData[1].description,
                gallery: slideData[7].innerSlidesData[1].slideImages,
                video: slideData[7].innerSlidesData[1].video,
                 redirectLinkData:productEngine[1]?.engines[3]?.details,
                isExplore: true
            },
            {
                id: 3,
                year: slideData[7].innerSlidesData[2].year,
                title: slideData[7].innerSlidesData[2].title,
                cloneTitle: slideData[7].innerSlidesData[2].cloneTitle,
                subtitle: slideData[7].innerSlidesData[2].subtitle,
                description: slideData[7].innerSlidesData[2].description,

                gallery: slideData[7].innerSlidesData[2].slideImages,
                    redirectLinkData:productEngine[5]?.engines[2]?.details,
                isExplore: true
            },

        ]
    },
    {
        name: "2000",
        timeline: [
            {
                id: 1,
                year: slideData[8].innerSlidesData[0].year,
                title: slideData[8].innerSlidesData[0].title,
                cloneTitle: slideData[8].innerSlidesData[0].cloneTitle,
                subtitle: slideData[8].innerSlidesData[0].subtitle,
                description: slideData[8].innerSlidesData[0].description,
                gallery: slideData[8].innerSlidesData[0].slideImages,
                 redirectLinkData:productEngine[5]?.engines[1]?.details,
                isExplore: true
            },
            {
                id: 2,
                year: slideData[8].innerSlidesData[1].year,
                title: slideData[8].innerSlidesData[1].title,
                cloneTitle: slideData[8].innerSlidesData[1].cloneTitle,
                subtitle: slideData[8].innerSlidesData[1].subtitle,
                description: slideData[8].innerSlidesData[1].description,

                gallery: slideData[8].innerSlidesData[1].slideImages,
                     redirectLinkData:productEngine[4]?.engines[1]?.details,
                isExplore: true
            },
            {
                id: 3,
                year: slideData[8].innerSlidesData[2].year,
                title: slideData[8].innerSlidesData[2].title,
                cloneTitle: slideData[8].innerSlidesData[2].cloneTitle,
                subtitle: slideData[8].innerSlidesData[2].subtitle,
                description: slideData[8].innerSlidesData[2].description,
                // video: slideData[8].innerSlidesData[2].video,
                gallery: slideData[8].innerSlidesData[2].slideImages,
                     redirectLinkData:productEngine[1]?.engines[2]?.details,
                isExplore: true
            },
            {
                id: 4,
                year: slideData[8].innerSlidesData[3].year,
                title: slideData[8].innerSlidesData[3].title,
                cloneTitle: slideData[8].innerSlidesData[3].cloneTitle,
                subtitle: slideData[8].innerSlidesData[3].subtitle,
                description: slideData[8].innerSlidesData[3].description,
                // video: slideData[8].innerSlidesData[3].video,
                gallery: slideData[8].innerSlidesData[3].slideImages,
                     redirectLinkData:productEngine[4]?.engines[0]?.details,
                isExplore: true
            },

        ]
    },
    {
        name: "2010",
        timeline: [
            {
                id: 1,
                year: slideData[9].innerSlidesData[0].year,
                title: slideData[9].innerSlidesData[0].title,  
                cloneTitle: slideData[9].innerSlidesData[0].cloneTitle,  
                subtitle: slideData[9].innerSlidesData[0].subtitle,
                description: slideData[9].innerSlidesData[0].description,
                gallery: slideData[9].innerSlidesData[0].slideImages,
                  redirectLinkData:productEngine[1]?.engines[4]?.details,
                isExplore: true
            },
            {
                id: 2,
                year: slideData[9].innerSlidesData[1].year,
                title: slideData[9].innerSlidesData[1].title,
                cloneTitle: slideData[9].innerSlidesData[1].cloneTitle,
                subtitle: slideData[9].innerSlidesData[1].subtitle,
                description: slideData[9].innerSlidesData[1].description,
                video: slideData[9].innerSlidesData[1].video,
                gallery: slideData[9].innerSlidesData[1].slideImages,
                isExplore: false
            },
            {
                id: 3,
                year: slideData[9].innerSlidesData[2].year,
                title: slideData[9].innerSlidesData[2].title,
                cloneTitle: slideData[9].innerSlidesData[2].cloneTitle,
                subtitle: slideData[9].innerSlidesData[2].subtitle,
                description: slideData[9].innerSlidesData[2].description,
                video: slideData[9].innerSlidesData[2].video,
                gallery: slideData[9].innerSlidesData[2].slideImages,
                     redirectLinkData:productEngine[4]?.engines[0]?.details,
                isExplore: true
            },
            {
                id: 4,
                year: slideData[9].innerSlidesData[3].year,
                title: slideData[9].innerSlidesData[3].title,
                cloneTitle: slideData[9].innerSlidesData[3].cloneTitle,
                subtitle: slideData[9].innerSlidesData[3].subtitle,
                description: slideData[9].innerSlidesData[3].description,

                gallery: slideData[9].innerSlidesData[3].slideImages,
                     redirectLinkData:productEngine[5]?.engines[0]?.details,
                isExplore: true
            },

        ]
    },
    {
        name: "2020",
        timeline: [
            {
                id: 1,
                year: slideData[10].innerSlidesData[0].year,
                title: slideData[10].innerSlidesData[0].title,
                cloneTitle: slideData[10].innerSlidesData[0].cloneTitle,
                subtitle: slideData[10].innerSlidesData[0].subtitle,
                description: slideData[10].innerSlidesData[0].description,
                video: slideData[10].innerSlidesData[0].video,
                gallery: slideData[10].innerSlidesData[0].slideImages,
                isExplore: false
            },
            {
                id: 2,
                year: slideData[10].innerSlidesData[1].year,
                title: slideData[10].innerSlidesData[1].title,
                cloneTitle: slideData[10].innerSlidesData[1].cloneTitle,
                subtitle: slideData[10].innerSlidesData[1].subtitle,
                description: slideData[10].innerSlidesData[1].description,
                video: slideData[10].innerSlidesData[1].video,

                gallery: slideData[10].innerSlidesData[1].slideImages,
                isExplore: false
            },
            {
                id: 3,
                year: slideData[10].innerSlidesData[2].year,
                title: slideData[10].innerSlidesData[2].title,
                cloneTitle: slideData[10].innerSlidesData[2].cloneTitle,
                subtitle: slideData[10].innerSlidesData[2].subtitle,
                description: slideData[10].innerSlidesData[2].description,
                video: slideData[10].innerSlidesData[2].video,
                gallery: slideData[10].innerSlidesData[2].slideImages,
        
                isExplore: false
            },
            {
                id: 4,
                year: slideData[10].innerSlidesData[3].year,
                title: slideData[10].innerSlidesData[3].title,
                cloneTitle: slideData[10].innerSlidesData[3].cloneTitle,
                subtitle: slideData[10].innerSlidesData[3].subtitle,
                description: slideData[10].innerSlidesData[3].description,

                gallery: slideData[10].innerSlidesData[3].slideImages,
               redirectLinkData:productEngine[4]?.engines[0]?.details,
                isExplore: true
            },
            {
                id: 5,
                year: slideData[10].innerSlidesData[4].year,
                title: slideData[10].innerSlidesData[4].title,
                cloneTitle: slideData[10].innerSlidesData[4].cloneTitle,
                subtitle: slideData[10].innerSlidesData[4].subtitle,
                description: slideData[10].innerSlidesData[4].description,

                gallery: slideData[10].innerSlidesData[4].slideImages,
               redirectLinkData:productEngine[4]?.engines[0]?.details,
                isExplore: true
            },
            {
                id: 6,
                year: slideData[10].innerSlidesData[5].year,
                title: slideData[10].innerSlidesData[5].title,
                cloneTitle: slideData[10].innerSlidesData[5].cloneTitle,
                subtitle: slideData[10].innerSlidesData[5].subtitle,
                description: slideData[10].innerSlidesData[5].description,

                gallery: slideData[10].innerSlidesData[5].slideImages,
               redirectLinkData:productEngine[4]?.engines[0]?.details,
                isExplore: false
            },
            {
                id: 7,
                year: slideData[10].innerSlidesData[6].year,
                title: slideData[10].innerSlidesData[6].title,
                cloneTitle: slideData[10].innerSlidesData[6].cloneTitle,
                subtitle: slideData[10].innerSlidesData[6].subtitle,
                description: slideData[10].innerSlidesData[6].description,

                gallery: slideData[10].innerSlidesData[6].slideImages,
               redirectLinkData:productEngine[4]?.engines[0]?.details,
                isExplore: false
            },

        ]
    }
];
