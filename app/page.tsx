import EventCard from "@/components/EventCard";
import ExploreBtn from "../components/ExploreBtn";
import Image from "next/image";
import events from "@/lib/constants";
import { IEvent } from "@/database";
const BASE_URL=process.env.NEXT_PUBLIC_BASE_URL;
export default async function Page() {
  const response=await fetch(`${BASE_URL}/api/events`);
  const {events}=await response.json();
  return (
    <section>
    <h1 className="text-center">
    The Hub for every Developer <br/> Event Worldwide that you can't miss!
    </h1>
    <p className="text-center mt-5">Hackathons,Meetups,Conference. All at one Place</p>
    <ExploreBtn />
    <div className="mt-20 space-y-7">
    <h3>Featured events</h3>
    <ul className="events">
      {events && events.length>0 && events.map((event:IEvent)=>(
        <li className="list-none" key={event.title}>
          <EventCard {...event}/>
        </li>
      ))}
    </ul>
    </div>
    </section>
   
  );
}
