import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Project.css";
import Navbar from "../components/Navbar";

const aboutData = [
  {
    id: 1,
    imageSrc:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    title: "Organic Farming",
    description:
      "Organic farming is a practice of the cultivation of crops and rearing of animals without the use",
    moreInfo: "Additional information about organic farming.",
    websiteLink:
      "https://agritech.tnau.ac.in/org_farm/orgfarm_introduction.html"
  },
  {
    id: 2,
    imageSrc:
      "https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    title: "Sustainable Agriculture",
    description:
      "Sustainable agriculture”The concept of embraces a wide range of techniques, including organic, free-range, low-input",
    moreInfo: "Additional information about sustainable agriculture.",
    websiteLink: "https://sarep.ucdavis.edu/sustainable-ag"
  },
  {
    id: 3,
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1664811569273-861bd7f3fe9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Permaculture",
    description:
      "Permaculture is an approach to land management and settlement design that adopts arrangements.",
    moreInfo: "Additional information about permaculture.",
    websiteLink: "https://www.permaculturenews.org/what-is-permaculture/"
  },
  {
    id: 4,
    imageSrc:
      "https://images.unsplash.com/photo-1543335206-807929859ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
    title: "Crop Rotation",
    description:
      "Crop rotation is the practice of growing a series of different types of crops in the same area across a sequence of growing seasons.",
    moreInfo: "Additional information about crop rotation.",
    websiteLink: "https://example.com/crop-rotation"
  },
  {
    id: 5,
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1680322463073-7125c168136a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    title: "Composting",
    description:
      "Crop rotation is the practice of growing a series of different types of crops in the same area across a sequence of growing seasons. .",
    moreInfo: "Additional information about composting.",
    websiteLink: "https://example.com/composting"
  }
];

const Project = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleImageClick = (id) => {
    setExpandedId(id === expandedId ? null : id);
  };

  return (
    <>
      <div className="jai">
        <Navbar />
        <div className="about-container">
          <h2>
            <b>Farming Ways</b>
          </h2>

          <p>
            <b>
              Organic farming is a method of crop and livestock production that
              involves avoiding the use of synthetic fertilizers, pesticides,
              genetically modified organisms, and growth hormones. It focuses on
              utilizing natural farming practices to promote ecological balance
              and conserve biodiversity. Organic farming emphasizes the
              importance of soil health, crop rotation, and natural pest control
              methods.
            </b>{" "}
          </p>
          <h3>
            <b>Crop Rotation:</b>
          </h3>
          <b>
            <p>
              Crop rotation is an essential agricultural technique that involves
              systematically changing the types of crops grown in a particular
              area over a defined period. This practice helps break pest and
              disease cycles, as different crops have different vulnerabilities
              and nutritional needs. Additionally, certain crops contribute
              specific nutrients to the soil, fostering overall soil health and
              fertility. For example, legumes in the rotation can fix nitrogen,
              benefiting subsequent crops that require this essential nutrient.
            </p>
          </b>

          <h3>
            <b>Polyculture:</b>
          </h3>
          <p>
            <b>
              Polyculture goes beyond monoculture by cultivating a variety of
              crops in close proximity. This method mimics natural ecosystems,
              enhancing biodiversity and providing a more resilient and stable
              agricultural system. In polyculture, the interactions between
              different plant species can have synergistic effects, such as pest
              control, improved nutrient uptake, and efficient use of available
              resources.
            </b>
          </p>

          <h3>
            <b>Biodynamic Farming:</b>
          </h3>
          <p>
            <b>
              Biodynamic farming is a holistic approach that combines organic
              farming principles with a spiritual and cosmic perspective. In
              addition to avoiding synthetic inputs, biodynamic farmers use
              specific preparations, such as compost teas and herbal mixtures,
              which are applied following a lunar calendar. This method aims to
              align agricultural practices with cosmic rhythms.
            </b>
          </p>

          <h3>
            <b>Permaculture:</b>
          </h3>
          <p>
            <b>
              Permaculture, short for "permanent agriculture" or "permanent
              culture," is a design system that applies ecological principles to
              create sustainable and self-sufficient human habitats.
              Permaculture designs emphasize the careful placement of elements
              within a system to maximize beneficial relationships and minimize
              waste. Techniques include swales for water harvesting, food
              forests for diverse crop production, and the integration of
              animals for natural pest control and nutrient cycling.
            </b>
          </p>
        </div>

        <div className="about-container">
          <h2>
            <b>SELECT ONE WAY TO FARM</b>
          </h2>
          <div className="image-grid">
            {aboutData.map((item) => (
              <div
                key={item.id}
                className={`image-item ${
                  expandedId === item.id ? "expanded" : ""
                }`}
                onClick={() => handleImageClick(item.id)}
              >
                <img src={item.imageSrc} alt={item.title} />
                <div className="image-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {expandedId === item.id && <p>{item.moreInfo}</p>}
                  <a
                    href={item.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
