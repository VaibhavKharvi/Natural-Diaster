import React from 'react';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import DisasterCard from '../components/DisasterCard';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const features = [
  { title: "Disaster Library", description: "Learn about earthquakes, floods, hurricanes, tornadoes, wildfires, and volcanoes" },
  { title: "Preparedness Checklists", description: "Step-by-step guides for creating emergency kits and family plans" },
  { title: "Safety Tips", description: "What to do during and after each disaster type" },
  { title: "Interactive Quiz", description: "Test your knowledge on disaster readiness" },
];

const disasters = [
  { id: 'earthquakes', title: "Earthquakes", description: "Ground shaking caused by geological movements", imageUrl: "https://www.bgs.ac.uk/wp-content/uploads/2021/06/P680442.jpg" },
  { id: 'floods', title: "Floods", description: "Overflow of water onto normally dry land", imageUrl: "https://www.ready.gov/sites/default/files/2020-04/Flooded-neighborhood_1.jpg" },
  { id: 'hurricanes', title: "Hurricanes", description: "Powerful tropical storms with strong winds", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/35/Dramatic_Views_of_Hurricane_Florence_from_the_International_Space_Station_From_9_12_%2842828603210%29_%28cropped%29.jpg" },
  { id: 'tornadoes', title: "Tornadoes", description: "Violently rotating columns of air", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/F5_tornado_Elie_Manitoba_2007.jpg/1280px-F5_tornado_Elie_Manitoba_2007.jpg" },
  { id: 'wildfires', title: "Wildfires", description: "Uncontrolled fires spreading rapidly", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/05/Burnout_ops_on_Mangum_Fire_McCall_Smokejumpers.jpg" },
  { id: 'volcanoes', title: "Volcanoes", description: "Eruption of molten rock from Earth's surface", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Augustine_volcano_Jan_24_2006_-_Cyrus_Read.jpg/1280px-Augustine_volcano_Jan_24_2006_-_Cyrus_Read.jpg" },
  { id: 'tsunamis', title: "Tsunamis", description: "Massive ocean waves triggered by undersea earthquakes", imageUrl: "https://i.natgeofe.com/n/0f9e3b7a-d3ca-4418-8e61-f605b4e04bc5/02-rikuzentakata-japan.jpg" },
];

const Home = () => {
  useScrollReveal();
  return (
  <main>
    <Hero />

    <section className="section section-light">
      <div className="container">
        <h2 className="text-center mb-4 reveal">Key Features</h2>
        <div className="grid cols-4">
          {features.map((f, i) => (
            <div key={i} className={`reveal reveal-delay-${i % 4 + 1}`}>
              <FeatureCard title={f.title} description={f.description} />
            </div>
          ))}
        </div>      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2 className="text-center mb-4 reveal">Disaster Types</h2>
        <div className="grid cols-3">
          {disasters.map((d, i) => (
            <Link key={i} to={`/disasters/${d.id}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }} className={`reveal reveal-delay-${i % 3 + 1}`}>
              <DisasterCard title={d.title} description={d.description} imageUrl={d.imageUrl} onClick={() => {}} />
            </Link>
          ))}
        </div>
        <div className="text-center mt-5 reveal">
          <Link to="/disasters" className="btn btn-secondary">View All Disasters</Link>
        </div>
      </div>
    </section>
  </main>
  );
};

export default Home;
