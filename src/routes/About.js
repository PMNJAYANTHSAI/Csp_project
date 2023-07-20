// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./About.css";
// import Navbar from "../components/Navbar";

// const aboutData = [
//   {
//     id: 1,
//     imageSrc:
//       "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
//     title: "Organic Farming",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     moreInfo: "Additional information about organic farming.",
//     websiteLink:
//       "https://agritech.tnau.ac.in/org_farm/orgfarm_introduction.html"
//   },
//   {
//     id: 2,
//     imageSrc:
//       "https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
//     title: "Sustainable Agriculture",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     moreInfo: "Additional information about sustainable agriculture.",
//     websiteLink: "https://sarep.ucdavis.edu/sustainable-ag"
//   },
//   {
//     id: 3,
//     imageSrc:
//       "https://plus.unsplash.com/premium_photo-1664811569273-861bd7f3fe9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     title: "Permaculture",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     moreInfo: "Additional information about permaculture.",
//     websiteLink: "https://example.com/permaculture"
//   },
//   {
//     id: 4,
//     imageSrc:
//       "https://images.unsplash.com/photo-1543335206-807929859ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
//     title: "Crop Rotation",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     moreInfo: "Additional information about crop rotation.",
//     websiteLink: "https://example.com/crop-rotation"
//   },
//   {
//     id: 5,
//     imageSrc:
//       "https://plus.unsplash.com/premium_photo-1680322463073-7125c168136a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
//     title: "Composting",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     moreInfo: "Additional information about composting.",
//     websiteLink: "https://example.com/composting"
//   }
// ];

// const About = () => {
//   const [expandedId, setExpandedId] = useState(null);

//   const handleImageClick = (id) => {
//     setExpandedId(id === expandedId ? null : id);
//   };

//   return (
//     <>
//       <div className="jai">
//         <Navbar />
//         <div className="about-container">
//           <h2>
//             <b>Farming Ways</b>
//           </h2>

//           <p>
//             <b>
//               Organic farming is a method of crop and livestock production that
//               involves avoiding the use of synthetic fertilizers, pesticides,
//               genetically modified organisms, and growth hormones. It focuses on
//               utilizing natural farming practices to promote ecological balance
//               and conserve biodiversity. Organic farming emphasizes the
//               importance of soil health, crop rotation, and natural pest control
//               methods.
//             </b>{" "}
//           </p>
//         </div>

//         <div className="about-container">
//           <h2>SELECT ONE WAY TO FARM</h2>
//           <div className="image-grid">
//             {aboutData.map((item) => (
//               <div
//                 key={item.id}
//                 className={`image-item ${
//                   expandedId === item.id ? "expanded" : ""
//                 }`}
//                 onClick={() => handleImageClick(item.id)}
//               >
//                 <img src={item.imageSrc} alt={item.title} />
//                 <div className="image-overlay">
//                   <h3>{item.title}</h3>
//                   <p>{item.description}</p>
//                   {expandedId === item.id && <p>{item.moreInfo}</p>}
//                   <a
//                     href={item.websiteLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Read More
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;
