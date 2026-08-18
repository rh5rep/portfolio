import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import MapPanel from "./map-panel";
import { totalTravelPlaces, travelLocations, travelRegions } from "./travel-data";

export const metadata = {
  title: "Travel Atlas | Rami Hanna",
  description: "A map-first record of places Rami Hanna has spent time in.",
};

export default function TravelPage() {
  return (
    <main>
      <SiteHeader />
      <section className="travel-page site-shell">
        <div className="travel-page__intro">
          <p className="eyebrow">Travel atlas</p>
          <h1>A map of places I keep <em>returning to</em> in my head.</h1>
          <p>I like noticing how geography changes routine, pace, and attention. This is a simple record of the places that have stayed with me.</p>
          <div className="travel-page__stats">
            <span><strong>{totalTravelPlaces}</strong> places logged</span>
            <span><strong>{travelRegions.length}</strong> regions</span>
            <span><strong>Boston</strong> current base</span>
          </div>
          <Link className="text-link" href="/life">Back to life <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="travel-page__map"><MapPanel locations={travelLocations} heightClassName="h-[580px]" /></div>
        <div className="travel-page__regions">
          {travelRegions.map((group) => <article key={group.region}><p className="eyebrow">{group.region}</p><p>{group.places.join(" · ")}</p></article>)}
        </div>
      </section>
    </main>
  );
}
