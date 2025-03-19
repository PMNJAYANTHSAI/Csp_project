import newone from "../image/des1.jpg";
import Des2 from "../image/des2.jpg";
import Des3 from "../image/des3.jpg";
import Des4 from "../image/des4.jpg";
import Des5 from "../image/des05.jpg";
import Des6 from "../image/des6.jpg";
import Des7 from "../image/newone7.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>
        <b>Activites</b>
      </h1>
      <p>
        <b>Feed the soil, not your plants.</b>
      </p>

      <DestinationData
        className="first-des"
        heading="YALAMANDA Session:1"
        text="Over the past few years, an increasing number of farmers in 
        Yellamanda have made a conscious decision to transition from conventional
         farming methods to organic practices. Motivated by the desire to reduce
          chemical usage and promote soil health, they have adopted organic farming
           as a viable alternative.n Yellamanda, farmers are implementing a variety 
           of organic farming practices to ensure the fertility and productivity of 
           their lands. These practices include crop rotation, green manure and compost
            usage, intercropping, and natural pest control methods. By maintaining a diverse
             ecosystem and enhancing soil fertility, these practices contribute to 
             sustainable agricultural practices."
        img1={newone}
        img2={Des2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="YALAMANDA Session:2"
        text="Organic farming practices prioritize the health of the soil, and 
          Yellamanda's farmers have witnessed a remarkable improvement in soil
         quality over time. By employing organic fertilizers and compost, the soil 
         structure has become more resilient, retaining water better, and reducing erosion.
         The organic produce from Yellamanda's farms is gaining popularity not only among the local
          community but also in nearby markets. The absence of harmful chemical residues in organic 
          crops ensures that consumers enjoy healthier and safer food options."
        img1={Des3}
        img2={Des4}
      />
      <DestinationData
        className="first-des-reverse1"
        heading="YALAMANDA Session:3"
        text="organic farming have an great feild experinece for have to an farmers and 
        they are isnt have an full clarity about the organic farming and present farmers 
        don't know about the organic farming by these webpage you may know about the organic 
        farming The organic produce from Yellamanda's farms is gaining popularity not only among the local
        community but also in nearby markets. The absence of harmful chemical residues in organic 
        crops ensures that consumers enjoy healthier and safer food options. "
        img1={Des5}
        img2={Des6}
      />
    </div>
  );
};
export default Destination;
