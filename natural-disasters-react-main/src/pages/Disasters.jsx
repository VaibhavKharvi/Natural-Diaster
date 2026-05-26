import React from 'react';

const disasterTypes = [
  {
    id: 'earthquake',
    title: 'Earthquakes',
    imageUrl: 'https://www.bgs.ac.uk/wp-content/uploads/2021/06/P680442.jpg',
    about: "Earthquakes are sudden, violent shaking of the ground caused by the movement of tectonic plates beneath Earth's surface. They can strike without warning at any time of day, lasting anywhere from a few seconds to several minutes. The energy released travels as seismic waves, which can topple buildings, trigger landslides, and cause tsunamis when they occur under the ocean. The most earthquake-prone regions lie along the Pacific Ring of Fire, but no area on Earth is completely immune.",
    before: "Secure heavy furniture and appliances to walls. Identify safe spots in each room such as under sturdy tables or against interior walls. Keep an emergency kit with water, food, a flashlight, and a first aid kit. Know how to shut off gas, water, and electricity at the main switches. Practice drop, cover, and hold on drills with your family regularly.",
    during: "The moment shaking begins, drop to your hands and knees immediately. Take cover under a sturdy desk or table, or against an interior wall away from windows. Hold on until the shaking completely stops. If you are outdoors, move away from buildings, streetlights, and utility wires. Never run outside during shaking as most injuries occur from falling debris near exits.",
    after: "Check yourself and others for injuries before moving. Inspect your home for gas leaks, electrical damage, and structural cracks before re-entering. Be prepared for aftershocks, which can be as strong as the original quake. Listen to official emergency broadcasts for instructions. Stay out of damaged buildings and avoid using elevators.",
  },
  {
    id: 'flood',
    title: 'Floods',
    imageUrl: 'https://www.ready.gov/sites/default/files/2020-04/Flooded-neighborhood_1.jpg',
    about: "Floods are one of the most common and destructive natural disasters worldwide. They occur when water overflows onto normally dry land, caused by heavy rainfall, storm surges, rapid snowmelt, or dam failures. Flash floods are especially dangerous because they develop within minutes and carry enormous force. Even six inches of fast-moving water can knock a person down, and two feet can sweep away a vehicle. Coastal and low-lying areas are most at risk, but floods can happen almost anywhere.",
    before: "Know your flood risk and whether you live in a flood zone. Elevate your furnace, water heater, and electrical panel above potential flood levels. Install check valves in plumbing to prevent floodwater from backing up. Prepare an emergency kit and keep important documents in a waterproof container. Have a clear evacuation plan and know multiple routes to higher ground.",
    during: "Never walk, swim, or drive through floodwater — just six inches can knock you off your feet. If told to evacuate, do so immediately and take your emergency kit. Turn off utilities at the main switches if instructed. Move to the highest floor of your building if you cannot evacuate. Avoid contact with floodwater as it may be contaminated with sewage, chemicals, or debris.",
    after: "Return home only when authorities declare it safe. Pump out flooded basements gradually to avoid structural damage from pressure changes. Throw away any food that has come into contact with floodwater. Clean and disinfect everything that got wet using bleach solutions. Document all damage with photographs before cleaning up for insurance purposes.",
  },
  {
    id: 'hurricane',
    title: 'Hurricanes',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Dramatic_Views_of_Hurricane_Florence_from_the_International_Space_Station_From_9_12_%2842828603210%29_%28cropped%29.jpg',
    about: "Hurricanes are powerful tropical cyclones with sustained winds of at least 74 mph that form over warm ocean waters. They bring a deadly combination of high winds, torrential rainfall, storm surge, and inland flooding. A storm surge — the abnormal rise of seawater pushed ashore by the storm — is the leading cause of hurricane-related deaths. Hurricanes are categorized on a scale of 1 to 5 based on wind speed, with Category 5 storms capable of causing catastrophic damage across entire regions.",
    before: "Know your evacuation zone and have a plan ready before hurricane season begins. Board up windows and reinforce garage doors. Trim trees and shrubs around your home to reduce flying debris. Stock at least a week's worth of food, water, medications, and emergency supplies. Fill your vehicle with fuel and withdraw cash as ATMs may not work after the storm.",
    during: "Stay indoors and away from windows, skylights, and glass doors throughout the storm. Go to a small interior room on the lowest floor if winds become extreme. Do not go outside during the eye of the hurricane — the calm is temporary and dangerous winds will return. Monitor official weather updates continuously. If flooding threatens your home, move to higher floors but never go into the attic without an escape tool.",
    after: "Wait for official clearance before venturing outside as downed power lines and debris pose serious hazards. Avoid floodwaters which may be electrically charged from underground lines. Check your home for structural damage before re-entering. Use generators outdoors only to prevent carbon monoxide poisoning. Report damage to local authorities and document everything for insurance claims.",
  },
  {
    id: 'tornado',
    title: 'Tornadoes',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/F5_tornado_Elie_Manitoba_2007.jpg/1280px-F5_tornado_Elie_Manitoba_2007.jpg',
    about: "Tornadoes are violently rotating columns of air that extend from a thunderstorm to the ground, capable of wind speeds exceeding 300 mph. They can be nearly invisible until they pick up dust and debris, and can appear with very little warning. Tornadoes can destroy well-built homes, uproot trees, and hurl vehicles hundreds of yards. The United States experiences more tornadoes than any other country, particularly in the region known as Tornado Alley spanning the central plains states.",
    before: "Identify the safest room in your home — a basement or an interior room on the lowest floor away from windows. Keep a weather radio or emergency alert app active during storm season. Practice tornado drills with your household so everyone knows exactly where to go. Prepare an emergency kit with essentials including water, food, a flashlight, and a first aid kit.",
    during: "Go immediately to your basement or the lowest interior room of your building. Get under a sturdy piece of furniture and cover your head and neck with your arms. Stay away from windows, doors, and exterior walls at all times. If you are in a vehicle, do not try to outrun a tornado — abandon it and seek shelter in a sturdy building or lie flat in a low-lying ditch covering your head.",
    after: "Wait for the all-clear from emergency officials before leaving your shelter. Watch carefully for broken glass, exposed nails, and downed power lines when moving through damaged areas. Check for injuries and provide first aid while waiting for emergency services. Do not enter severely damaged buildings as they may collapse. Take photographs of all damage for insurance documentation.",
  },
  {
    id: 'wildfire',
    title: 'Wildfires',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Burnout_ops_on_Mangum_Fire_McCall_Smokejumpers.jpg',
    about: "Wildfires are uncontrolled fires that spread rapidly across forests, grasslands, and shrublands, driven by wind, dry conditions, and available fuel. They can ignite from lightning strikes, human carelessness, or equipment sparks and spread faster than a person can run. Climate change has made wildfires more frequent, larger, and more destructive in recent decades. Beyond destroying homes and ecosystems, wildfires produce toxic smoke that can affect air quality hundreds of miles away, posing serious health risks to vulnerable populations.",
    before: "Create a defensible space of at least 30 feet around your home by clearing dry vegetation, leaves, and debris. Use fire-resistant materials for roofing and vents. Keep gutters clean and store firewood away from structures. Sign up for local emergency alerts and know multiple evacuation routes. Prepare a go-bag with essentials so you can leave within minutes if ordered.",
    during: "Evacuate immediately when ordered — do not wait to see the fire. Close all windows, doors, and vents to slow smoke infiltration. Shut off gas at the meter and move propane tanks away from structures if time allows. Wear long-sleeved shirts, long pants, and a mask to protect against smoke and embers. If trapped, call 911 and signal your location to emergency responders.",
    after: "Do not return home until officials confirm it is safe — hot spots can reignite for days. Wear an N95 mask when cleaning up ash as it contains toxic particles. Check your roof and attic for embers that may have caused hidden fires. Photograph all damage before beginning any cleanup for insurance purposes. Be aware that burned hillsides are at high risk for mudslides during subsequent rainfall.",
  },
  {
    id: 'volcano',
    title: 'Volcanoes',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Augustine_volcano_Jan_24_2006_-_Cyrus_Read.jpg/1280px-Augustine_volcano_Jan_24_2006_-_Cyrus_Read.jpg',
    about: "Volcanic eruptions occur when magma — molten rock from deep within the Earth — forces its way to the surface through openings called vents. Eruptions can produce lava flows, pyroclastic surges of superheated gas and ash, toxic gases, and volcanic ash that can blanket entire regions. Ash fall can collapse roofs, contaminate water supplies, disrupt aviation, and cause serious respiratory problems. While some eruptions are preceded by warning signs such as earthquakes and ground deformation, others can occur with little notice.",
    before: "If you live near a volcano, develop a detailed evacuation plan and know all possible routes. Build an emergency supply kit including goggles, N95 masks, and enough food and water for several days. Stay informed through local geological monitoring agencies and sign up for volcanic alert notifications. Identify a safe destination away from the volcano and practice the evacuation route with your family.",
    during: "Follow evacuation orders immediately without hesitation — lava flows and pyroclastic surges move extremely fast. If sheltering in place, close all windows, doors, and fireplace dampers to keep ash out. Wear goggles to protect your eyes and an N95 mask to protect your lungs from fine ash particles. Avoid low-lying areas, valleys, and river channels where lava flows and lahars travel. Keep vehicles in garages to protect them from ash damage.",
    after: "Stay away from areas downwind of the volcano as ash and toxic gases may still be present. Avoid driving through heavy ash fall as it can stall engines and reduce visibility to zero. Clean ash from rooftops carefully as wet ash is extremely heavy and can cause structural collapse. Keep children and pets indoors until ash has been cleared. Seek medical attention if you experience breathing difficulties or eye irritation.",
  },
  {
    id: 'tsunami',
    title: 'Tsunamis',
    imageUrl: 'https://i.natgeofe.com/n/0f9e3b7a-d3ca-4418-8e61-f605b4e04bc5/02-rikuzentakata-japan.jpg',
    about: "Tsunamis are series of powerful ocean waves generated by large underwater disturbances such as earthquakes, volcanic eruptions, or submarine landslides. In the open ocean they may be barely noticeable, but as they approach shallow coastal waters they slow down and grow dramatically in height, sometimes reaching over 100 feet. They can travel at speeds up to 500 mph — as fast as a jet aircraft — and strike coastlines with devastating force. The 2004 Indian Ocean tsunami and the 2011 Japan tsunami are among the deadliest natural disasters in recorded history.",
    before: "Learn whether your home, school, or workplace is in a tsunami hazard zone by checking local hazard maps. Understand the natural warning signs: a strong earthquake near the coast, a sudden and unusual withdrawal of the sea, or a loud roaring sound from the ocean. Plan and practice evacuation routes to high ground or inland areas at least 100 feet above sea level. Prepare an emergency kit and keep it accessible at all times.",
    during: "If you feel a strong earthquake while near the coast, do not wait for an official warning — move immediately to high ground or as far inland as possible. A tsunami can arrive within minutes of an earthquake. Stay away from the beach and coastal areas even if the first wave seems small, as subsequent waves are often larger and more destructive. Do not return to low-lying areas until officials give the all-clear as multiple waves can continue arriving for hours.",
    after: "Wait for official confirmation that all waves have passed before returning to coastal areas. Avoid floodwaters which may be contaminated with sewage, chemicals, and debris. Check for injuries and provide first aid while waiting for emergency services. Be aware of secondary hazards including fires from ruptured gas lines, structural collapses, and landslides triggered by saturated ground. Document all property damage thoroughly for insurance and disaster relief applications.",
  },
];

const Disasters = () => (
  <div className="disasters-page">
    <section className="page-header">
      <div className="container">
        <h1>Disaster Library</h1>
        <p>Comprehensive information about natural disasters and how to prepare for them</p>
      </div>
    </section>

    <section className="disaster-details">
      <div className="container">
        {disasterTypes.map((d) => (
          <div key={d.id} className="disaster-section">
            <div className="disaster-image">
              <img src={d.imageUrl} alt={d.title} />
            </div>
            <div className="disaster-info">
              <h2>{d.title}</h2>
              <span className="section-label">About</span>
              <p>{d.about}</p>
              {d.before && <><span className="section-label">Before</span><p>{d.before}</p></>}
              <span className="section-label">During</span>
              <p>{d.during}</p>
              <span className="section-label">After</span>
              <p>{d.after}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Disasters;
