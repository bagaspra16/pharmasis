import { Metadata } from "next";
import GetStartedContent from "./client";

export const metadata: Metadata = {
    title: "Get Started | Pharmasis App",
    description: "Access the Pharmasis app at pharmasis.biz.id — your trusted medicine information platform.",
};

export default function GetStartedPage() {
    return <GetStartedContent />;
}
