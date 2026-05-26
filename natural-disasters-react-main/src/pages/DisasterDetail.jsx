import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const disasterData = {
  earthquakes: {
    title: 'Earthquakes',
    imageUrl: 'https://www.bgs.ac.uk/wp-content/uploads/2021/06/P680442.jpg',
    color: '#8B4513',
    icon: '🏚️',
    about: "Earthquakes are sudden, violent shaking of the ground caused by the movement of tectonic plates beneath Earth's surface. They can strike without warning at any time of day, lasting anywhere from a few seconds to several minutes. The energy released travels as seismic waves, which can topple buildings, trigger landslides, and cause tsunamis when they occur under the ocean. The most earthquake-prone regions lie along the Pacific Ring of Fire, but no area on Earth is completely immune.",
    facts: [
      "Around 500,000 earthquakes occur worldwide each year",
      "The largest ever recorded was a magnitude 9.5 in Chile in 1960",
      "90% of earthquakes happen along the Pacific Ring of Fire",
      "Earthquakes can trigger tsunamis, landslides, and fires",
    ],
    before: "Secure heavy furniture and appliances to walls. Identify safe spots in each room such as under sturdy tables or against interior walls. Keep an emergency kit with water, food, a flashlight, and a first aid kit. Know how to shut off gas, water, and electricity at the main switches. Practice drop, cover, and hold on drills with your family regularly.",
    during: "The moment shaking begins, drop to your hands and knees immediately. Take cover under a sturdy desk or table, or against an interior wall away from windows. Hold on until the shaking completely stops. If you are outdoors, move away from buildings, streetlights, and utility wires. Never run outside during shaking as most injuries occur from falling debris near exits.",
    after: "Check yourself and others for injuries before moving. Inspect your home for gas leaks, electrical damage, and structural cracks before re-entering. Be prepared for aftershocks, which can be as strong as the original quake. Listen to official emergency broadcasts for instructions. Stay out of damaged buildings and avoid using elevators.",
  },
  floods: {
    title: 'Floods',
    imageUrl: 'https://www.ready.gov/sites/default/files/2020-04/Flooded-neighborhood_1.jpg',
    color: '#1a6b9a',
    icon: '🌊',
    about: "Floods are one of the most common and destructive natural disasters worldwide. They occur when water overflows onto normally dry land, caused by heavy rainfall, storm surges, rapid snowmelt, or dam failures. Flash floods are especially dangerous because they develop within minutes and carry enormous force. Even six inches of fast-moving water can knock a person down, and two feet can sweep away a vehicle. Coastal and low-lying areas are most at risk, but floods can happen almost anywhere.",
    facts: [
      "Floods are the most common natural disaster globally",
      "Flash floods can develop in less than 6 hours",
      "Just 6 inches of moving water can knock a person down",
      "2 feet of water can carry away most vehicles",
    ],
    before: "Know your flood risk and whether you live in a flood zone. Elevate your furnace, water heater, and electrical panel above potential flood levels. Install check valves in plumbing to prevent floodwater from backing up. Prepare an emergency kit and keep important documents in a waterproof container. Have a clear evacuation plan and know multiple routes to higher ground.",
    during: "Never walk, swim, or drive through floodwater — just six inches can knock you off your feet. If told to evacuate, do so immediately and take your emergency kit. Turn off utilities at the main switches if instructed. Move to the highest floor of your building if you cannot evacuate. Avoid contact with floodwater as it may be contaminated with sewage, chemicals, or debris.",
    after: "Return home only when authorities declare it safe. Pump out flooded basements gradually to avoid structural damage from pressure changes. Throw away any food that has come into contact with floodwater. Clean and disinfect everything that got wet using bleach solutions. Document all damage with photographs before cleaning up for insurance purposes.",
  },
  hurricanes: {
    title: 'Hurricanes',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Dramatic_Views_of_Hurricane_Florence_from_the_International_Space_Station_From_9_12_%2842828603210%29_%28cropped%29.jpg',
    color: '#2c5f8a',
    icon: '🌀',
    about: "Hurricanes are powerful tropical cyclones with sustained winds of at least 74 mph that form over warm ocean waters. They bring a deadly combination of high winds, torrential rainfall, storm surge, and inland flooding. A storm surge — the abnormal rise of seawater pushed ashore by the storm — is the leading cause of hurricane-related deaths. Hurricanes are categorized on a scale of 1 to 5 based on wind speed, with Category 5 storms capable of causing catastrophic damage across entire regions.",
    facts: [
      "Hurricane season runs from June 1 to November 30 in the Atlantic",
      "Category 5 hurricanes have winds exceeding 157 mph",
      "Storm surge is the deadliest hurricane hazard",
      "Hurricanes can produce tornadoes as they make landfall",
    ],
    before: "Know your evacuation zone and have a plan ready before hurricane season begins. Board up windows and reinforce garage doors. Trim trees and shrubs around your home to reduce flying debris. Stock at least a week's worth of food, water, medications, and emergency supplies. Fill your vehicle with fuel and withdraw cash as ATMs may not work after the storm.",
    during: "Stay indoors and away from windows, skylights, and glass doors throughout the storm. Go to a small interior room on the lowest floor if winds become extreme. Do not go outside during the eye of the hurricane — the calm is temporary and dangerous winds will return. Monitor official weather updates continuously. If flooding threatens your home, move to higher floors but never go into the attic without an escape tool.",
    after: "Wait for official clearance before venturing outside as downed power lines and debris pose serious hazards. Avoid floodwaters which may be electrically charged from underground lines. Check your home for structural damage before re-entering. Use generators outdoors only to prevent carbon monoxide poisoning. Report damage to local authorities and document everything for insurance claims.",
  },
  tornadoes: {
    title: 'Tornadoes',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/F5_tornado_Elie_Manitoba_2007.jpg/1280px-F5_tornado_Elie_Manitoba_2007.jpg',
    color: '#5a4a2a',
    icon: '🌪️',
    about: "Tornadoes are violently rotating columns of air that extend from a thunderstorm to the ground, capable of wind speeds exceeding 300 mph. They can be nearly invisible until they pick up dust and debris, and can appear with very little warning. Tornadoes can destroy well-built homes, uproot trees, and hurl vehicles hundreds of yards. The United States experiences more tornadoes than any other country, particularly in the region known as Tornado Alley spanning the central plains states.",
    facts: [
      "The US averages about 1,000 tornadoes per year",
      "Tornado winds can exceed 300 mph in the most violent storms",
      "Most tornadoes last less than 10 minutes",
      "Tornado Alley spans Texas, Oklahoma, Kansas, and Nebraska",
    ],
    before: "Identify the safest room in your home — a basement or an interior room on the lowest floor away from windows. Keep a weather radio or emergency alert app active during storm season. Practice tornado drills with your household so everyone knows exactly where to go. Prepare an emergency kit with essentials including water, food, a flashlight, and a first aid kit.",
    during: "Go immediately to your basement or the lowest interior room of your building. Get under a sturdy piece of furniture and cover your head and neck with your arms. Stay away from windows, doors, and exterior walls at all times. If you are in a vehicle, do not try to outrun a tornado — abandon it and seek shelter in a sturdy building or lie flat in a low-lying ditch covering your head.",
    after: "Wait for the all-clear from emergency officials before leaving your shelter. Watch carefully for broken glass, exposed nails, and downed power lines when moving through damaged areas. Check for injuries and provide first aid while waiting for emergency services. Do not enter severely damaged buildings as they may collapse. Take photographs of all damage for insurance documentation.",
  },
  wildfires: {
    title: 'Wildfires',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Burnout_ops_on_Mangum_Fire_McCall_Smokejumpers.jpg',
    color: '#c0392b',
    icon: '🔥',
    about: "Wildfires are uncontrolled fires that spread rapidly across forests, grasslands, and shrublands, driven by wind, dry conditions, and available fuel. They can ignite from lightning strikes, human carelessness, or equipment sparks and spread faster than a person can run. Climate change has made wildfires more frequent, larger, and more destructive in recent decades. Beyond destroying homes and ecosystems, wildfires produce toxic smoke that can affect air quality hundreds of miles away.",
    facts: [
      "Wildfires can spread at speeds of up to 14 mph in forests",
      "The US sees an average of 70,000 wildfires per year",
      "90% of wildfires in the US are caused by humans",
      "Wildfire smoke can travel thousands of miles from the source",
    ],
    before: "Create a defensible space of at least 30 feet around your home by clearing dry vegetation, leaves, and debris. Use fire-resistant materials for roofing and vents. Keep gutters clean and store firewood away from structures. Sign up for local emergency alerts and know multiple evacuation routes. Prepare a go-bag with essentials so you can leave within minutes if ordered.",
    during: "Evacuate immediately when ordered — do not wait to see the fire. Close all windows, doors, and vents to slow smoke infiltration. Shut off gas at the meter and move propane tanks away from structures if time allows. Wear long-sleeved shirts, long pants, and a mask to protect against smoke and embers. If trapped, call 911 and signal your location to emergency responders.",
    after: "Do not return home until officials confirm it is safe — hot spots can reignite for days. Wear an N95 mask when cleaning up ash as it contains toxic particles. Check your roof and attic for embers that may have caused hidden fires. Photograph all damage before beginning any cleanup for insurance purposes. Be aware that burned hillsides are at high risk for mudslides during subsequent rainfall.",
  },
  volcanoes: {
    title: 'Volcanoes',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Augustine_volcano_Jan_24_2006_-_Cyrus_Read.jpg/1280px-Augustine_volcano_Jan_24_2006_-_Cyrus_Read.jpg',
    color: '#7d3c00',
    icon: '🌋',
    about: "Volcanic eruptions occur when magma — molten rock from deep within the Earth — forces its way to the surface through openings called vents. Eruptions can produce lava flows, pyroclastic surges of superheated gas and ash, toxic gases, and volcanic ash that can blanket entire regions. Ash fall can collapse roofs, contaminate water supplies, disrupt aviation, and cause serious respiratory problems. While some eruptions are preceded by warning signs, others can occur with little notice.",
    facts: [
      "There are about 1,500 potentially active volcanoes worldwide",
      "Pyroclastic flows can travel at speeds over 450 mph",
      "Volcanic ash can disrupt air travel thousands of miles away",
      "The 1815 Tambora eruption caused a 'Year Without a Summer'",
    ],
    before: "If you live near a volcano, develop a detailed evacuation plan and know all possible routes. Build an emergency supply kit including goggles, N95 masks, and enough food and water for several days. Stay informed through local geological monitoring agencies and sign up for volcanic alert notifications. Identify a safe destination away from the volcano and practice the evacuation route with your family.",
    during: "Follow evacuation orders immediately without hesitation — lava flows and pyroclastic surges move extremely fast. If sheltering in place, close all windows, doors, and fireplace dampers to keep ash out. Wear goggles to protect your eyes and an N95 mask to protect your lungs from fine ash particles. Avoid low-lying areas, valleys, and river channels where lava flows and lahars travel.",
    after: "Stay away from areas downwind of the volcano as ash and toxic gases may still be present. Avoid driving through heavy ash fall as it can stall engines and reduce visibility to zero. Clean ash from rooftops carefully as wet ash is extremely heavy and can cause structural collapse. Keep children and pets indoors until ash has been cleared. Seek medical attention if you experience breathing difficulties.",
  },
  tsunamis: {
    title: 'Tsunamis',
    imageUrl: 'https://i.natgeofe.com/n/0f9e3b7a-d3ca-4418-8e61-f605b4e04bc5/02-rikuzentakata-japan.jpg',
    color: '#1a5276',
    icon: '🌊',
    about: "Tsunamis are series of powerful ocean waves generated by large underwater disturbances such as earthquakes, volcanic eruptions, or submarine landslides. In the open ocean they may be barely noticeable, but as they approach shallow coastal waters they slow down and grow dramatically in height, sometimes reaching over 100 feet. They can travel at speeds up to 500 mph and strike coastlines with devastating force. The 2004 Indian Ocean tsunami and the 2011 Japan tsunami are among the deadliest natural disasters in recorded history.",
    facts: [
      "Tsunamis can travel at speeds up to 500 mph in deep ocean",
      "Wave heights can exceed 100 feet at the coast",
      "The 2004 Indian Ocean tsunami killed over 230,000 people",
      "A tsunami is not a single wave but a series of waves",
    ],
    before: "Learn whether your home, school, or workplace is in a tsunami hazard zone by checking local hazard maps. Understand the natural warning signs: a strong earthquake near the coast, a sudden and unusual withdrawal of the sea, or a loud roaring sound from the ocean. Plan and practice evacuation routes to high ground or inland areas at least 100 feet above sea level. Prepare an emergency kit and keep it accessible at all times.",
    during: "If you feel a strong earthquake while near the coast, do not wait for an official warning — move immediately to high ground or as far inland as possible. A tsunami can arrive within minutes of an earthquake. Stay away from the beach and coastal areas even if the first wave seems small, as subsequent waves are often larger and more destructive. Do not return to low-lying areas until officials give the all-clear.",
    after: "Wait for official confirmation that all waves have passed before returning to coastal areas. Avoid floodwaters which may be contaminated with sewage, chemicals, and debris. Check for injuries and provide first aid while waiting for emergency services. Be aware of secondary hazards including fires from ruptured gas lines and structural collapses. Document all property damage thoroughly for insurance and disaster relief applications.",
  },
};

const DisasterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const d = disasterData[id];
  useScrollReveal();

  if (!d) {
    return (
      <div style={{ textAlign: 'center', padding: '6rem 2rem' }}>
        <h2>Disaster not found</h2>
        <Link to="/disasters" className="btn btn-secondary" style={{ marginTop: '1.5rem' }}>Back to Disasters</Link>
      </div>
    );
  }

  return (
    <div className="detail-page">
      {/* Hero Banner */}
      <div className="detail-hero" style={{ backgroundImage: `linear-gradient(160deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 100%), url(${d.imageUrl})` }}>
        <div className="container">
          <button className="detail-back" onClick={() => navigate(-1)}>← Back</button>
          <div className="detail-hero-content">
            <span className="detail-icon">{d.icon}</span>
            <h1>{d.title}</h1>
            <p>{d.about.slice(0, 120)}...</p>
          </div>
        </div>
      </div>

      <div className="container detail-body">

        {/* Quick Facts */}
        <div className="detail-facts">
          <h2>Quick Facts</h2>
          <div className="facts-grid">
            {d.facts.map((f, i) => (
              <div key={i} className={`fact-card reveal reveal-delay-${i + 1}`}>
                <span className="fact-num">{String(i + 1).padStart(2, '0')}</span>
                <p>{f}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About */}
        <div className="detail-section">
          <h2>About {d.title}</h2>
          <p>{d.about}</p>
        </div>

        {/* Before / During / After */}
        <div className="detail-phases">
          {d.before && (
            <div className="phase-card phase-before reveal reveal-delay-1">
              <div className="phase-header"><span className="phase-icon">📋</span><h3>Before</h3></div>
              <p>{d.before}</p>
            </div>
          )}
          <div className="phase-card phase-during reveal reveal-delay-2">
            <div className="phase-header"><span className="phase-icon">⚠️</span><h3>During</h3></div>
            <p>{d.during}</p>
          </div>
          <div className="phase-card phase-after reveal reveal-delay-3">
            <div className="phase-header"><span className="phase-icon">✅</span><h3>After</h3></div>
            <p>{d.after}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="detail-nav">
          <Link to="/disasters" className="btn btn-secondary">← All Disasters</Link>
          <Link to="/preparedness" className="btn btn-accent">Preparedness Guide →</Link>
        </div>

      </div>
    </div>
  );
};

export default DisasterDetail;
