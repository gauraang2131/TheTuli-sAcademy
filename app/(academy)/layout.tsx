import type { Metadata } from "next";
import AcademyLayout from "../components/AcademyLayout";

export const metadata: Metadata = {
    title: {
        template: "%s | Rouble Tuli | Wonders of Academy",
        default: "Rouble Tuli | Wonders of Academy - Educators Designing Futures",
    },
    description: "Dr. Rouble Tuli - Education Activist. Discover the Wonders of Academy. From first words to global classrooms. Holistic, educator-designed services for students, parents, and schools.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AcademyLayout>
            {children}
        </AcademyLayout>
    );
}
