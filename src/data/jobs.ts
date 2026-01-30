export interface JobPosting {
    id: number;
    title: string;
    location: string;
    experience: string;
    type: string;
    description: string;
    salary: string;
}

export const jobs: JobPosting[] = [
    {
        id: 1,
        title: "Dallas, TX - Driver Jobs",
        location: "Dallas, TX",
        experience: "2 Years",
        type: "Full time, part time, gig workers",
        description: "Drive with AYRO in Dallas, TX. Earn guaranteed $30+/hour, no surge pricing, flexible schedule, and real human support. Apply today...",
        salary: "$30+/Hr (guaranteed)"
    },
    {
        id: 2,
        title: "Fort Worth, TX - Driver Jobs",
        location: "Fort Worth, TX",
        experience: "2 Years",
        type: "Full time, part time, gig workers",
        description: "Looking for driver jobs in Fort Worth? AYRO offers guaranteed $30+/hour, flexible driving schedules, and transparent pay...",
        salary: "$30+/Hr (guaranteed)"
    },
    {
        id: 3,
        title: "Arlington, TX - Driver Jobs",
        location: "Arlington, TX",
        experience: "2 Years",
        type: "Full time, part time, gig workers",
        description: "Apply to drive with AYRO in Arlington, TX. Earn $30+/hour, choose your hours, no surge pricing, and driver-first pay...",
        salary: "$30+/Hr (guaranteed)"
    },
    {
        id: 4,
        title: "Plano, TX - Driver Jobs",
        location: "Plano, TX",
        experience: "2 Years",
        type: "Full time, part time, gig workers",
        description: "Drive in Plano with AYRO. Guaranteed $30+/hour, predictable earnings, flexible schedules, and real support when you need it...",
        salary: "$30+/Hr (guaranteed)"
    },
    {
        id: 5,
        title: "Irving, TX - Driver Jobs",
        location: "Irving, TX",
        experience: "2 Years",
        type: "Full time, part time, gig workers",
        description: "Join AYRO as a driver in Irving, TX. Earn $30+/hour, no hidden fees, flexible hours, and a driver-first platform...",
        salary: "$30+/Hr (guaranteed)"
    },
    {
        id: 6,
        title: "Garland, TX - Driver Jobs",
        location: "Garland, TX",
        experience: "2 Years",
        type: "Full time, part time, gig workers",
        description: "Searching for driver jobs in Garland? AYRO guarantees $30+/hour with flexible schedules and transparent pay...",
        salary: "$30+/Hr (guaranteed)"
    }
];
