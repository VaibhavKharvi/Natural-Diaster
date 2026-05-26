import React from 'react';
import ResourceItem from '../components/ResourceItem';
import useScrollReveal from '../hooks/useScrollReveal';

const govResources = [
  { title: "Federal Emergency Management Agency (FEMA)", description: "FEMA coordinates the federal government's role in preparing for, preventing, mitigating the effects of, responding to, and recovering from all domestic disasters.", links: [{ label: "Website", url: "https://www.fema.gov" }, { label: "Ready.gov", url: "https://www.ready.gov" }] },
  { title: "American Red Cross", description: "The American Red Cross prevents and alleviates human suffering in the face of emergencies by mobilizing the power of volunteers and the generosity of donors.", links: [{ label: "Website", url: "https://www.redcross.org" }, { label: "Prepare for Emergencies", url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies.html" }] },
  { title: "National Oceanic and Atmospheric Administration (NOAA)", description: "NOAA provides daily weather, water, and climate data, forecasts, and warnings to protect life and property and enhance the national economy.", links: [{ label: "Website", url: "https://www.noaa.gov" }, { label: "National Weather Service", url: "https://www.weather.gov" }] },
  { title: "Centers for Disease Control and Prevention (CDC)", description: "The CDC provides information about health threats and safety measures during and after disasters.", links: [{ label: "Disaster Information", url: "https://www.cdc.gov/disasters/index.html" }, { label: "Public Health Emergency", url: "https://emergency.cdc.gov" }] },
];

const intlResources = [
  { title: "United Nations Office for Disaster Risk Reduction (UNDRR)", description: "UNDRR supports countries in their efforts to reduce disaster risk and build resilience.", links: [{ label: "Website", url: "https://www.undrr.org" }, { label: "PreventionWeb", url: "https://www.preventionweb.net" }] },
  { title: "International Federation of Red Cross and Red Crescent Societies (IFRC)", description: "The IFRC coordinates relief assistance and promotes disaster preparedness worldwide.", links: [{ label: "Website", url: "https://www.ifrc.org" }, { label: "Disaster Preparedness", url: "https://www.ifrc.org/disaster-preparedness" }] },
];

const contacts = [
  { country: "United States", contacts: ["911 - Emergency Services", "211 - Local Community Information", "FEMA Helpline: 1-800-621-3362", "Red Cross: 1-800-733-2767", "Disaster Distress Helpline: 1-800-985-5990"] },
  { country: "Canada", contacts: ["911 - Emergency Services", "Canadian Red Cross: 1-800-467-6367", "Emergencies Act Hotline: 1-800-665-3355"] },
  { country: "United Kingdom", contacts: ["999 or 112 - Emergency Services", "Environment Agency Floodline: 0345 988 1188", "British Red Cross: 0344 871 1111"] },
  { country: "Australia", contacts: ["000 - Emergency Services", "SES (State Emergency Service): 132 500", "Australian Red Cross: 1800 733 276"] },
  { country: "Global Emergency Numbers", contacts: ["112 - GSM Standard Emergency Number", "911 - North America", "999 - United Kingdom", "110 - China, Japan", "113 - France"] },
];

const eduMaterials = [
  { title: "Ready.gov Publications", description: "Free publications on disaster preparedness for individuals and families.", links: [{ label: "View Publications", url: "https://www.ready.gov/publications" }] },
  { title: "Red Cross Emergency App", description: "Mobile app providing real-time alerts and safety tips for various emergencies.", links: [{ label: "Download Apps", url: "https://www.redcross.org/get-help/mobile-apps.html" }] },
  { title: "FEMA Training Courses", description: "Online training courses on emergency management and disaster preparedness.", links: [{ label: "FEMA IS Courses", url: "https://training.fema.gov/is/" }] },
  { title: "NOAA Weather Radio", description: "24/7 broadcast of weather information directly from National Weather Service offices.", links: [{ label: "Weather Radio Info", url: "https://www.weather.gov/nwr/" }] },
];

const Resources = () => {
  useScrollReveal();
  return (
  <div className="resources-page">
    <section className="page-header">
      <div className="container">
        <h1>Emergency Resources</h1>
        <p>Official organizations and emergency contacts for disaster preparedness and response</p>
      </div>
    </section>

    <section className="resources-content">
      <div className="container">

        <div className="resource-section">
          <h2 className="text-center mb-4">Government Agencies</h2>
          <div className="grid cols-2">
            {govResources.map((r, i) => (
              <div key={i} className={`reveal reveal-delay-${(i % 2) + 1}`}>
                <ResourceItem title={r.title} description={r.description} links={r.links} />
              </div>
            ))}
          </div>
        </div>

        <div className="resource-section">
          <h2 className="text-center mb-4">International Resources</h2>
          <div className="grid cols-2">
            {intlResources.map((r, i) => <ResourceItem key={i} title={r.title} description={r.description} links={r.links} />)}
          </div>
        </div>

        <div className="resource-section">
          <h2 className="text-center mb-4">Emergency Contacts</h2>
          <div className="grid cols-3">
            {contacts.map((c, i) => (
              <div key={i} className="contact-card card">
                <div className="card-content">
                  <h3 className="card-title">{c.country}</h3>
                  <ul className="contact-list">
                    {c.contacts.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="resource-section">
          <h2 className="text-center mb-4">Educational Materials</h2>
          <div className="grid cols-2">
            {eduMaterials.map((m, i) => <ResourceItem key={i} title={m.title} description={m.description} links={m.links} />)}
          </div>
        </div>

      </div>
    </section>
  </div>
  );
};

export default Resources;
