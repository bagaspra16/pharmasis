import {
    AlertTriangle,
    Shield,
    BookOpen,
    Stethoscope,
    Search,
    FileText,
    LucideIcon
} from "lucide-react";

export const servicesData: Record<string, {
    title: string;
    icon: LucideIcon;
    tagline: string;
    description: string;
    features: string[];
    howItWorks: { step: number; title: string; description: string }[];
    benefits: string[];
    iconBg: string;
    iconColor: string;
}> = {
    "drug-interaction-checker": {
        title: "Drug Interaction Checker",
        icon: AlertTriangle,
        tagline: "Check medication interactions before you take them",
        description: "Our Drug Interaction Checker helps you identify potential interactions between multiple medications. Simply enter the drugs you're taking, and we'll provide clear, actionable information about possible interactions and their severity levels.",
        features: [
            "Check interactions between 2 or more medications",
            "Severity level indicators (mild, moderate, severe)",
            "Detailed explanation of each interaction",
            "Alternative medication suggestions",
            "Printable interaction reports",
            "Save your medication list for future checks"
        ],
        howItWorks: [
            { step: 1, title: "Enter Medications", description: "Type in the names of all medications you're currently taking or plan to take." },
            { step: 2, title: "Analyze Interactions", description: "Our system cross-references our extensive database to identify potential interactions." },
            { step: 3, title: "Review Results", description: "Get a clear report showing any interactions, their severity, and recommended actions." }
        ],
        benefits: [
            "Prevent dangerous drug combinations",
            "Make informed decisions about your medications",
            "Share reports with your healthcare provider",
            "Peace of mind when taking multiple medications"
        ],
        iconBg: "bg-orange-50",
        iconColor: "text-orange-500"
    },
    "medication-safety-guide": {
        title: "Medication Safety Guide",
        icon: Shield,
        tagline: "Comprehensive safety information for every medication",
        description: "Access detailed safety profiles for thousands of medications. Our guides include dosage information, side effects, contraindications, and special precautions to help you use your medications safely.",
        features: [
            "Dosage recommendations and adjustments",
            "Common and rare side effects",
            "Contraindications and warnings",
            "Food and alcohol interactions",
            "Pregnancy and breastfeeding safety",
            "Storage and handling guidelines"
        ],
        howItWorks: [
            { step: 1, title: "Search Medication", description: "Find your medication by name, brand, or active ingredient." },
            { step: 2, title: "View Safety Profile", description: "Access comprehensive safety information organized in easy-to-read sections." },
            { step: 3, title: "Take Action", description: "Follow recommended precautions and consult your healthcare provider if needed." }
        ],
        benefits: [
            "Understand your medications better",
            "Recognize potential side effects early",
            "Know when to seek medical attention",
            "Use medications more safely"
        ],
        iconBg: "bg-[var(--accent)]/30",
        iconColor: "text-[var(--primary-dark)]"
    },
    "educational-resources": {
        title: "Educational Resources",
        icon: BookOpen,
        tagline: "Learn about medications and health topics",
        description: "Our educational library offers easy-to-understand articles, guides, and videos about various health topics and medications. Empower yourself with knowledge to make better health decisions.",
        features: [
            "Articles written by healthcare professionals",
            "Video tutorials and explanations",
            "Condition-specific medication guides",
            "Drug class overviews",
            "Health tips and wellness advice",
            "Quarterly newsletter with updates"
        ],
        howItWorks: [
            { step: 1, title: "Browse Topics", description: "Explore our library organized by health conditions, drug types, or topics." },
            { step: 2, title: "Read and Learn", description: "Access content written in plain language, easy to understand for everyone." },
            { step: 3, title: "Apply Knowledge", description: "Use what you learn to have better conversations with your healthcare providers." }
        ],
        benefits: [
            "Better health literacy",
            "Informed discussions with doctors",
            "Understanding of treatment options",
            "Ongoing learning and updates"
        ],
        iconBg: "bg-purple-50",
        iconColor: "text-purple-500"
    },
    "healthcare-pro-tools": {
        title: "Healthcare Pro Tools",
        icon: Stethoscope,
        tagline: "Professional-grade tools for healthcare providers",
        description: "Designed specifically for healthcare professionals, our Pro Tools provide advanced features for checking drug interactions, accessing clinical guidelines, and managing patient medication lists efficiently.",
        features: [
            "Advanced multi-drug interaction analysis",
            "Clinical decision support tools",
            "Patient medication management",
            "Integration with EHR systems",
            "Dosing calculators and converters",
            "Professional reference materials"
        ],
        howItWorks: [
            { step: 1, title: "Create Pro Account", description: "Verify your healthcare credentials to access professional features." },
            { step: 2, title: "Access Pro Dashboard", description: "Use advanced tools designed for clinical workflows." },
            { step: 3, title: "Enhance Patient Care", description: "Leverage comprehensive drug information for better patient outcomes." }
        ],
        benefits: [
            "Save time on medication research",
            "Reduce medication errors",
            "Access evidence-based information",
            "Improve patient safety"
        ],
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-500"
    },
    "medicine-search": {
        title: "Medicine Search",
        icon: Search,
        tagline: "Find detailed information on any medication",
        description: "Search our comprehensive database of medications from around the world. Find detailed profiles including uses, dosing, side effects, and more for both brand name and generic medications.",
        features: [
            "Global medication database",
            "Brand and generic name search",
            "Active ingredient lookup",
            "Manufacturer information",
            "Similar medication alternatives",
            "International availability"
        ],
        howItWorks: [
            { step: 1, title: "Search by Name", description: "Enter the medication name, active ingredient, or condition it treats." },
            { step: 2, title: "Review Results", description: "Browse matching medications with quick summary cards." },
            { step: 3, title: "View Full Profile", description: "Access complete medication information including all relevant details." }
        ],
        benefits: [
            "Find any medication quickly",
            "Compare similar medications",
            "Access international drug info",
            "Identify generic alternatives"
        ],
        iconBg: "bg-blue-50",
        iconColor: "text-blue-500"
    },
    "drug-information-sheets": {
        title: "Drug Information Sheets",
        icon: FileText,
        tagline: "Printable medication guides for reference",
        description: "Download and print clear, concise information sheets for your medications. Perfect for keeping track of your medications and sharing information with caregivers or family members.",
        features: [
            "One-page medication summaries",
            "Large, readable text options",
            "Multiple language support",
            "QR codes for digital access",
            "Customizable with your info",
            "Caregiver-friendly format"
        ],
        howItWorks: [
            { step: 1, title: "Select Medication", description: "Choose the medication you need an information sheet for." },
            { step: 2, title: "Customize Sheet", description: "Add personal notes or select language preferences." },
            { step: 3, title: "Download & Print", description: "Get your PDF ready to print or save digitally." }
        ],
        benefits: [
            "Quick reference at home",
            "Easy sharing with caregivers",
            "Portable medication info",
            "Reduce confusion about medications"
        ],
        iconBg: "bg-pink-50",
        iconColor: "text-pink-500"
    }
};
