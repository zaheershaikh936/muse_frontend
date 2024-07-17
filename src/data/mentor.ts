export type skillsT = {
    name: string;
};

export type companyT = {
    image: string;
    company: string;
    position: string;
};

export type mentorT = {
    id: string;
    image: string;
    name: string;
    title: string;
    description: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
    skills: skillsT[];
    company: companyT[];
    experience: string;
    role: string;
    bgGroundImage?: string
};
export const mentor: mentorT[] = [
    {
        id: '1',
        image:
            "https://www.preplaced.in/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252Fshishir%2520chandrarecSEsRhX3LroVGuM%3Falt%3Dmedia%26token%3D26570590-f4d9-45e0-a629-39f08abe2e42&w=384&q=75",
        name: "Shishir chandra",
        title: "Software Engineer",
        description: "About me - An IIT-BHU graduate with over 6 years of work experience in data science and analytics in Top Tech Product Companies. Expert in SQL, Tableau, Python, Excel, Statistics, and Machine Learning. Mentoring experience of 2 years",
        skills: [
            { name: "React" },
            { name: "Javascript" },
            { name: "Next.js" },
            { name: "Typescript" },
        ],
        company: [
            {
                image: "https://www.preplaced.in/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fcomapny-logos%252FAdobe%3Falt%3Dmedia%26token%3D1932835d-20f9-4565-a03d-7d36587e1e18&w=128&q=75",
                company: "Adobe",
                position: "Software Engineer"
            },
            {
                image: "https://www.preplaced.in/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fcomapny-logos%252FAdobe%3Falt%3Dmedia%26token%3D1932835d-20f9-4565-a03d-7d36587e1e18&w=128&q=75",
                company: "Mantiqh",
                position: "Backend Engineer",
            },
        ],
        experience: "5",
        role: "Full stack Developer",
        bgGroundImage: "https://media.licdn.com/dms/image/D4D3DAQFZo0KUgIuFIQ/image-scale_191_1128/0/1662557132713/nathan_digital_cover?e=2147483647&v=beta&t=8GuiDI-iMbF3uPCl5hz94fykGyjITCp1OC4WUQ45jF8"
    },
];
