export type FAQItem = {
    question: string;
    answer: string;
};

export const FAQS: FAQItem[] = [
    {
        question: "How does DeepUbuntu collect its real-world driving data?",
        answer: "We gather data from diverse and challenging driving environments using sensor fusion (LiDAR, radar, cameras, GPS). This ensures high-quality datasets for perception, localization, and planning models."
    },
    {
        question: "Can I use your synthetic simulations with my own training pipelines?",
        answer: "Yes. Our Unity-powered simulation datasets are designed to integrate seamlessly into existing ML pipelines, allowing clients to generate edge cases and scale training data flexibly."
    },
    {
        question: "What makes your datasets different from publicly available autonomous driving datasets (like KITTI or Waymo Open)?",
        answer: "Unlike static open datasets, DeepUbuntu provides continuous updates, broader diversity of conditions (weather, lighting, traffic), and regulatory-aligned scenarios to prepare models for deployment in real-world contexts."
    },
    {
        question: "Do you only provide datasets, or do you also support model training and deployment?",
        answer: "We offer more than raw data. Our pipeline covers perception, localization, path planning, and control, along with simulation integration and deployment guidance."
    },
    {
        question: "How do you ensure data privacy and regulatory compliance?",
        answer: "All datasets are anonymized, processed under strict compliance guidelines, and curated with regional regulatory frameworks in mind, ensuring smoother certification and deployment."
    },
    
];
