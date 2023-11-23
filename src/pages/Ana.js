import React from "react";
import img19 from "../Images/AB2.png";
import "../Css/Ana.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPiggyBank,
  faNotesMedical,
  faShield,
  faChartBar,
  faCar,
  faInfoCircle,
  faTty,
  faPeopleArrows,
  faHandHoldingWater,
  faCarCrash,
  faIndustry,
  faBatteryHalf,
  faTree,
  faCaretRight,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

const cardData = [
  {
    name: "Team Member 1",
    icon: faPiggyBank,
    title: "Banking",
    description:
      "Banking as we ken it is evanescent, and the entire financial ecosystem is undergoing radical change. Digitalization, fintech, regtech, open banking, data privacy and regulatory compliance technologies are all playing a component.",
    link: "/Bankint",
  },
  {
    name: "Team Member 2",
    icon: faShield,
    title: "Financial Services",
    description:
      "Financial services play a pivotal role in the business world, serving as the backbone of economic activities and providing a wide range of critical functions.",
    link: "/Psint",
  },
  {
    name: "Team Member 3",
    icon: faShield,
    title: "Cloud Services",
    description:
      "Cloud Services provide a wide range of resources and capabilities over the internet, allowing businesses, organizations, and individuals to access and utilize computing power, storage, and applications on-demand.",
    link: "/Cloudint",
  },
  {
    name: "Team Member 4",
    icon: faChartBar,
    title: "Data & Analytics",
    description:
      "We empowers organizations to adapt to changing market conditions and make informed choices that drive growth and innovation.",
    link: "/Busint",
  },
  {
    name: "Team Member 5",
    icon: faCar,
    title: "Automative",
    description:
      "The Automotive sector is one such segment where the impact is considerably consequential.In these current evolving dynamics, if an OEM is not integrating any value to their products, then, they would perish in no time.",
    link: "/Autoint",
  },
  {
    name: "Team Member 6",
    icon: faInfoCircle,
    title: "Retail",
    description:
      "Analytics enables to know the customer expectations and accordingly use technology to cater to customer needs and delight the customer. Continuously delighted customers would be bound to become loyal customers.",
    link: "/Retals",
  },
  {
    name: "Team Member 7",
    icon: faTty,
    title: "Telecommunications",
    description:
      "Mobile technology is fast evolving, and this has created an abundant choice for consumers. The Technology advancement has induced a paradigm shift in consumer lifestyle and attitude towards technology. ",
    link: "/Teleint",
  },
  {
    name: "Team Member 8",
    icon: faPeopleArrows,
    title: "Social Media",
    description:
      "We have a competent team to manage social media data of organizations and glean actionable analytical insights from analysing data by applying powerful Statistical tools",
    link: "/Socialint",
  },

  {
    name: "Team Member 10",
    icon: faHandHoldingWater,
    title: "Life Science",
    description:
      "We avail companies to accumulate mission-critical data, enhance transparency across supply chain and amend collaboration between suppliers, partners and customers.",
    link: "/Life",
  },
  {
    name: "Team Member 11",
    icon: faNotesMedical,
    title: "Healthcare",
    description:
      "Healthcare sector is bound to comply with strict regulatory policies and highly liberalized policies have led to many manufacturers paving the way for stiff competition & have squeezed the profit margins.",
    link: "/Health",
  },
  {
    name: "Team Member 12",
    icon: faCarCrash,
    title: "Insurance",
    description:
      "We help insurance companies to organize the scattered, structured & unstructured data into invaluable information that can help in making informed decisions",
    link: "/Insuint",
  },
  {
    name: "Team Member 13",
    icon: faIndustry,
    title: "Manufacturing",
    description:
      " In view of globalization & to remain competitive, the distribution replication times are scheduled to be unauthentic, making it a tough job for everyone, from management to workers in the firm.",
    link: "/Manufacint",
  },
  {
    name: "Team Member 14",
    icon: faBatteryHalf,
    title: "Energy",
    description:
      "According to the International Energy Agency (IEA), the global energy demand will increase by 65% by 2035.",
    link: "/Energy",
  },
  {
    name: "Team Member 15",
    icon: faTree,
    title: "Forestry",
    description:
      "Forestry Analytics enables to see the forests/plantation and trees on desktop computer as numbers.",
    link: "/Forest",
  },
  {
    name: "Team Member 16",
    icon: faCaretRight,
    title: "Consulting & Outsourcing",
    description:
      "Our consulting engagements have spanned a wide range of opportunities to assist organizations obtain meaningful and actionable analytical insights from their data.",
    link: "/Out",
  },
  {
    name: "Team Member 17",
    icon: faUniversity,
    title: "Government",
    description:
      "Analytical solutions for Governments help them to apprise policy development, enforce the law, mitigate insider threats and bulwark denizen data.",
    link: "/Gover",
  },

  // Add more data for other cards
];

function Ana() {
  return (
    <>
      <section id="Learn">
        <div className="carousel-item active">
          <div className="carousel-caption d-none d-md-block">
            {/* <h2>Turning Data into Strategy, Accelerating Success!</h2> */}
            {/* <h5>Best Fullstack Training institute in India</h5> */}
            {/* <button type="button" class="btn btn-primary">
              Get Started
            </button>{" "} */}
          </div>

          <img src={img19} className="d-block w-100" alt="..." />
        </div>
      </section>

      <section id="team" className="pb-5">
        <div className="container">
          <div className="row">
            {cardData.map((card, index) => (
              <div className="col-xs-12 col-sm-6 col-md-4" key={index}>
                <div className="image-flip">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="car">
                        <div className="car-body text-center">
                          <p className="center-icon">
                            <FontAwesomeIcon
                              icon={card.icon}
                              size="3x"
                              className="icon"
                            />
                          </p>
                          <h4 className="car-title">{card.title}</h4>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="car">
                        <div className="car-body text-center mt-4">
                          <p className="car-text">{card.description}</p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a
                                className="btn btn-primary"
                                href={card.link}
                                target="rel_blank"
                              >
                                More
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Ana;
