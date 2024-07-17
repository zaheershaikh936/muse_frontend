type cardProp = {
    id: string;
    title: string;
    content: string;
};

const card: cardProp[] = [
    {
        id: "1",
        title: "Guidance and Advice",
        content:
            "A mentor provides valuable insights and advice based on their own experiences. They can guide you in making informed decisions about your career path, helping you avoid common pitfalls and identify opportunities",
    }, {
        id: '2',
        title: "Skill Development",
        content: "Mentors can help you develop both technical and soft skills. They can offer feedback on your performance, suggest areas for improvement, and recommend resources or training programs to enhance your abilities"
    }, {
        id: '3',
        title: 'Networking Opportunities',
        content: "A mentor often has a broad network of contacts in your industry. They can introduce you to influential people, opening doors to new job opportunities, collaborations, and professional relationships"
    }, {
        id: '4',
        title: "Goal Setting and Accountability",
        content: "Mentors can assist you in setting realistic and achievable career goals. They can also help you stay accountable, regularly checking in on your progress and encouraging you to stay focused and motivated"
    }, {
        id: '5',
        title: "Confidence Building",
        content: "Having a mentor's support can boost your confidence. They can provide reassurance and encouragement, helping you overcome self-doubt and take on new challenges with greater self-assurance"
    }, {
        id: '6',
        title: "Perspective and Inspiration",
        content: "Mentors can offer a different perspective on work-related issues and career choices. They can inspire you with their own success stories and help you envision a long-term career trajectory that you might not have considered on your own"
    }
];

export { card };
export type { cardProp };
