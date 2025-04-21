// Pages
import NotFound from "../not-found";

// Next
import { headers } from "next/headers";

// Componentes
import Bio from "@/components/layouts/bio";

export default async function LoginPage() {
    const hostHeader = (await headers()).get('host') || ''
    const hostname = hostHeader.split(':')[0]

    if (hostname.split('.')[0] !== "bio") {
        return <NotFound />
    }

    return (
        <Bio />
    );
}