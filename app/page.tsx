import ExploreBtn from "../components/ExploreBtn";
import Image from "next/image";

export default function Home() {
  return (
    <section>
    <h1 className="text-center">
    The Hub for every Developer <br/> Event Worldwide that you can't miss!
    </h1>
    <p className="text-center mt-5">Hackathons,Meetups,Conference. All at one Place</p>
    <ExploreBtn />
    <div className="mt-20 space-y-7">
    <h3>Featured events</h3>
    <ul>
      {[1,2,3,4,5].map((event)=>(
        <li key={event}>
          Event {event} 
        </li>
      ))}
    </ul>
    </div>
    </section>
   
  );
}
