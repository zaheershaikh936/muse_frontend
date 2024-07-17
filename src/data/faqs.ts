
export type faqsT = {
    question: string;
    answer: string;
    item: string;
};
export const faqs: faqsT[] = [
    {
        question: "Is it accessible?",
        answer: "Yes. It adheres to the WAI-ARIA design pattern.",
        item: "item-1",
    },
    {
        question: "What is the return policy?",
        answer:
            "You can return any item within 30 days of purchase for a full refund.",
        item: "item-2",
    },
    {
        question: "Do you offer customer support?",
        answer:
            "Yes, our customer support team is available 24/7 via phone, email, and live chat.",
        item: "item-3",
    },
    {
        question: "How long does shipping take?",
        answer: "Standard shipping usually takes 5-7 business days.",
        item: "item-4",
    },
    {
        question: "Are there any discounts available?",
        answer:
            "We offer seasonal discounts and promotions. Please check our website for current offers.",
        item: "5",
    },
];
