import { Gauge, Layers, Scale, LifeBuoy, LucideIcon } from "lucide-react";

export interface PerkItem {
    title: string;
    description: string;
    icon: LucideIcon;
}


export const PERKS: PerkItem[] = [
    {
        title: "Predictive Simulation",
        description: "Anticipate edge cases 6-12 months ahead.",
        icon: Gauge
    },
    {
        title: "Scenario Multiplication",
        description: "One edge case becomes thousands of training scenarios.",
        icon: Layers
    },
    {
        title: "Regulatory Precognition",
        description: "Simulate traffic laws before they're implemented.",
        icon: Scale
    },
    {
    title: "Safety Loop",
    description: "Predict, test, and eliminate failures before they occur.",
    icon: LifeBuoy
    }

]; 