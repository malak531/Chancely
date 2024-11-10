import React from 'react';
import styles from './OpportunityDescription.module.css';
import SectionTitle from './SectionTitle';
import ActionButton from './ActionButton';
import { useParams } from 'react-router-dom';



const OpportunityDescription = () => {
    const { id } = useParams();
    let oppInfo=[{id:1,description:'Web Summit Qatar 2025 is a major gathering of global tech leaders, entrepreneurs, and investors, creating a platform for discussions on the latest trends in technology and innovation. The event will feature high-profile speakers, including industry titans, and offer startups an invaluable opportunity to engage in competitions, masterclasses, and mentoring sessions.Participants can expect to network with key figures in the tech industry, explore new business opportunities, and gain insights from some of the most influential voices shaping the future of technology. The summit will also include exclusive events like the Night Summit, designed to facilitate connections in a more relaxed environment, making it a vibrant and dynamic experience for all attendees.',
        criteria:"Open for everyone. No Criteria Required.",
        links : [
           { href: "https://qatar.websummit.com/tickets/attendees/", text: "Register" },
           { href: "https://qatar.websummit.com", text: "Official Website" },
         ]},
         {id:2,description:'LEAP is an annual tech event that was founded in 2022 by the Ministry of Communication and Information Technology, the Saudi Federation for Cybersecurity, Programming and Drones and Tahaluf, an Informa company. The event was hosted in Riyadh, Saudi Arabia',
            criteria:"Open for everyone. No Criteria Required.",
            links : [
               { href: "https://onegiantleap.com/form/register-your-interest-to-attend", text: "Register" },
               { href: "https://onegiantleap.com/plan-your-visit", text: "Official Website" },
             ]},
        {id:3,description:'Black Hat Middle East and Africa is a leading cybersecurity conference and exhibition held in Riyadh, KSA. The event brings together cybersecurity professionals, cutting-edge technologies, solution providers, and decision-makers from around the world, condensing several months of networking into just three days.',
                criteria:"Open for everyone. No Criteria Required.",
                links : [
                   { href: "https://register.visitcloud.com/survey/3seiwkrokokli", text: "Register" },
                   { href: "https://blackhatmea.com/", text: "Official Website" },
                 ]},
        {id:4,description:'Capacity Middle East is the leading meeting place for the people shaping the MENA region’s digital infrastructure. In 2025, we will be celebrating 20 years of Capacity Middle East, showcasing three days of high-powered business discussions and building relationships - all in an atmosphere of relaxed, high-level networking through our conference, and world-class trade show.',
                    criteria:"Open for everyone. No Criteria Required.",
                    links : [
                       { href: "https://www.capacitymiddleeast.com/forms/enquire-now", text: "Register" },
                       { href: "https://www.capacitymiddleeast.com/?gad_source=1&gclid=Cj0KCQiA0MG5BhD1ARIsAEcZtwQychyrqBg4YcoPTbeYBFPCHothofduEEwE9P2T8Q6tTYhvCI8OFBoaAtpiEALw_wcB", text: "Official Website" },
                     ]},
        {id:5,description:'The Global Students Research (GSR) Conference is an initiative by KFUPM leaders and students to advance scientific research and its impact on various aspects of life.',
                        criteria:"Open for everyone. No Criteria Required.",
                        links : [
                           { href: "https://gsr.kfupm.org/registration/", text: "Register" },
                           { href: "https://gsr.kfupm.org/", text: "Official Website" },
    ]},
                    {id:6,description:'Welcome to Seamless, where the future of digital commerce is disrupted, debated and developed, at the heart of it all is the customer journey. Seamless takes you through the different touch points on a digital commerce journey, including retail, ecommerce, digital marketing, home delivery, payments, fintech and banking. Join us in Riyadh as we transform the way we transact and shop online',
                        criteria:"Open for everyone. No Criteria Required.",
                        links : [
                           { href: "https://secure.terrapinn.com/V5/step1.aspx?E=10961&p=1&_gl=1*jb8nx0*_ga*ODU5Njk2ODUzLjE3MzEyMzEwMzk.*_ga_8ZVPFLKW76*MTczMTIzMTAzOS4xLjAuMTczMTIzMTA0Ni42MC4wLjA.", text: "Register" },
                           { href: "https://www.terrapinn.com/exhibition/seamless-saudi-arabia/index.stm", text: "Official Website" },
    ]}];
     
      const event = oppInfo.find(event => event.id === parseInt(id));

      let description = event.description;
      let criteria = event.criteria;
      let links = event.links;

    return (
    <main className={styles.container}>
      <div className={styles.content}>
        <section>
          <SectionTitle className={styles.sectionTitle}>Description</SectionTitle>
          <p className={styles.sectionDescription}>{description}</p>
        </section>
        
        <section>
          <SectionTitle className={styles.criteriaTitle}>Joining Criteria</SectionTitle>
          <p className={styles.criteriaDescription}>{criteria}</p>
        </section>
        
        <section>
          <SectionTitle className={styles.applyNowTitle}>Apply now</SectionTitle>
          <div className={styles.buttonContainer}>
            {links && links.map((link, index) => (
              <ActionButton key={index} href={link.href} text={link.text} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default OpportunityDescription;
