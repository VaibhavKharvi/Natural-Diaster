import React, { useState } from 'react';
import PrepCard from '../components/PrepCard';
import useScrollReveal from '../hooks/useScrollReveal';

const initialKit = [
  { id: 1, text: 'Water (1 gallon per person per day for at least 3 days)' },
  { id: 2, text: 'Non-perishable food for at least 3 days' },
  { id: 3, text: 'Manual can opener' },
  { id: 4, text: 'Bottled water' },
  { id: 5, text: 'Flashlights' },
  { id: 6, text: 'Extra batteries' },
  { id: 7, text: 'First aid kit' },
  { id: 8, text: 'Whistle for signaling help' },
  { id: 9, text: 'Multi-purpose tool' },
  { id: 10, text: 'Wrench to turn off utilities' },
  { id: 11, text: 'Sturdy shoes and clothing' },
  { id: 12, text: 'Blankets or sleeping bags' },
  { id: 13, text: 'Rain gear' },
  { id: 14, text: 'Change of clothing' },
  { id: 15, text: 'Copies of important documents' },
  { id: 16, text: 'Cash in small bills' },
  { id: 17, text: 'Credit cards' },
  { id: 18, text: 'Emergency contact list' },
].map(i => ({ ...i, checked: false }));

const planSteps = [
  { title: "Step 1: Create a communication plan", items: ["Designate an out-of-state contact person", "Exchange contact information with all family members", "Teach children how and when to call 911", "Share your emergency plan with neighbors"] },
  { title: "Step 2: Identify evacuation routes", items: ["Map multiple evacuation routes from your home", "Practice evacuation routes with family members", "Identify meeting places inside and outside your neighborhood", "Know the evacuation plans for schools and workplaces"] },
  { title: "Step 3: Prepare for specific disasters", items: ["Learn about the most likely disasters in your area", "Understand warning systems and evacuation notices", "Know where you could shelter in place if needed", "Ensure everyone knows how to shut off utilities"] },
  { title: "Step 4: Practice and review", items: ["Conduct practice drills regularly", "Review and update your plan every six months", "Update contact information and meeting locations", "Replace expired items in your emergency kit"] },
];

const safetyTips = [
  { title: "Earthquakes", items: ["Drop, Cover, and Hold On", "Stay away from windows and heavy objects", "Don't run outside during shaking"] },
  { title: "Floods", items: ["Turn Around, Don't Drown", "Avoid walking or driving through flood waters", "Move to higher ground immediately"] },
  { title: "Hurricanes", items: ["Board up windows before the storm", "Stay indoors during the storm", "Don't go outside during the eye of the storm"] },
  { title: "Tornadoes", items: ["Go to the lowest floor", "Get to an interior room away from windows", "Get under a sturdy piece of furniture"] },
  { title: "Wildfires", items: ["Evacuate immediately when ordered", "Close all windows and doors", "Put wet towels under door gaps"] },
  { title: "Volcanoes", items: ["Follow evacuation orders immediately", "Stay indoors during ashfall", "Wear masks to protect lungs"] },
];

const Preparedness = () => {
  const [kitItems, setKitItems] = useState(initialKit);
  const toggle = (id) => setKitItems(items => items.map(i => i.id === id ? { ...i, checked: !i.checked } : i));
  useScrollReveal();

  return (
    <div className="preparedness-page">
      <section className="page-header">
        <div className="container">
          <h1>Emergency Preparedness</h1>
          <p>Essential steps to prepare for natural disasters</p>
        </div>
      </section>

      <section className="preparedness-content">
        <div className="container">

          <div className="mb-5">
            <h2 className="text-center mb-2">Emergency Kit Checklist</h2>
            <p className="text-center mb-4">Assemble these essential items in case of an emergency:</p>
            <div className="grid cols-3">
              {kitItems.map((item, idx) => (
                <div key={item.id} className={`reveal reveal-delay-${(idx % 3) + 1}`}>
                  <div className="kit-item card">
                    <div className="card-content">
                      <label>
                        <input type="checkbox" checked={item.checked} onChange={() => toggle(item.id)} />
                        <span className={item.checked ? 'checked' : ''}>{item.text}</span>
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <h2 className="text-center mb-2">Family Emergency Plan</h2>
            <p className="text-center mb-4">Create a comprehensive plan to keep your family safe during emergencies:</p>
            <div className="grid cols-2">
              {planSteps.map((s, i) => (
                <div key={i} className={`reveal reveal-delay-${(i % 2) + 1}`}>
                  <PrepCard title={s.title} checklistItems={s.items} />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <h2 className="text-center mb-2">Safety Tips by Disaster Type</h2>
            <div className="grid cols-3">
              {safetyTips.map((t, i) => (
                <div key={i} className={`reveal reveal-delay-${(i % 3) + 1}`}>
                  <PrepCard title={t.title} checklistItems={t.items} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Preparedness;
