import {Suspense} from "react";

const EventDetailsPage = async ({ params }: { params: Promise<{ slug: string }>}) => {
    const slug =await params.then((p) => p.slug);

    return (
        <main>
           <h1>
            Event Details Page - { slug}
           </h1>
        </main>
    )
}
export default EventDetailsPage