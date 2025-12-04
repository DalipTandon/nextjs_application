import { notFound } from "next/navigation";
import Image from "next/image";
import { BookEvent } from "@/components/BookEvent";

const EventDetailItem = ({
  icon,
  alt,
  label,
}: {
  icon: string;
  alt: string;
  label: string;
}) => (
  <div className="flex items-center gap-2">
    <Image src={icon} alt={alt} width={17} height={17} />
    <p>{label}</p>
  </div>
);

const EventAgenda=({agenda}:{agenda:string[]})=>(
    <div className="agenda">
        <h2>Event Agenda</h2>
        <ul>
            {agenda.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
)

const EventTags=({tags}:{tags:string[]})=>(
    <div className="flex gap-1.5 flex-wrap">
        {tags.map((tag,index)=>(
            <div key={index} className="pill">#{tag}</div>
        ))}
    </div>
)
const EventDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events/${slug}`);
    const { event: { description, image, overview, date, time, location, mode, agenda, audience, tags,organizer } } = await response.json();
    if (!description) {
        return notFound();
    }
    const booking=10;
    return (
        <section id="event">
            <div className="header">
                <h1>Event Description</h1>
                <p>{description}</p>
            </div>

            <div className="details">
                <div className="content">
                    <Image src={image} alt="event banner" width={800} height={800} className="banner" />
                    <section className="flex-col-gap-3">
                        <h2>Overview</h2>
                        <p>{overview}</p>
                    </section>
                    <section className="flex-col-gap-3">
                        <h2>Event details</h2>
                        <EventDetailItem icon="/icons/calendar.svg" alt="calender" label={date} />
                        <EventDetailItem icon="/icons/clock.svg" alt="calender" label={time} />
                        <EventDetailItem icon="/icons/pin.svg" alt="calender" label={location} />
                        <EventDetailItem icon="/icons/mode.svg" alt="calender" label={mode} />
                        <EventDetailItem icon="/icons/audience.svg" alt="calender" label={audience} />
                    </section>
                    <EventAgenda agenda={agenda}/>
                    <section className="flex-col-gap-2">
                    <h2>About Organizer</h2>
                    <p>{organizer}</p>
                    </section>
                    <EventTags tags={tags}/>
                </div>
                <aside className="booking">
                <div className="signup-card">
                    <h2>Register for this event</h2>
                {booking>0?(
                    <>
                    <p className="text-sm">Join {booking} people who have already booked their spot!</p>

                    </>
                ):(
                    <p className="text-sm">Be the first to book your spot!</p>
                )}
                <BookEvent/>
                </div>
                </aside>
            </div>
        </section>
    )
}
export default EventDetailsPage