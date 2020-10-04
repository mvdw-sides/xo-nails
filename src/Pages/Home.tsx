import React from "react";
import { Slider } from "../Components/Slider";
import { Blocks, Block } from "../Components/Blocks";

import beaty from "../Assets/beauty-treatment.png";
import manicure from "../Assets/manicure.png";
import makeup from "../Assets/Makeup-1.png";

//@ts-ignore
import Email from "react-ionicons/lib/MdMail";
//@ts-ignore
import Phone from "react-ionicons/lib/IosPhonePortrait";
//@ts-ignore
import Map from "react-ionicons/lib/IosMap";
//@ts-ignore
import Facebook from "react-ionicons/lib/LogoFacebook";
//@ts-ignore
import Instagram from "react-ionicons/lib/LogoInstagram";

import p1 from "../Assets/p1.png";
import p2 from "../Assets/p3.png";
import p3 from "../Assets/p4.png";
import p4 from "../Assets/p4.png";
import p5 from "../Assets/p5.png";
import p6 from "../Assets/p6.png";

export const Home = () => {
  return (
    <div>
      <Slider />
      <div style={{ width: "100%" }}>
        <Blocks style={{ zIndex: 1 }}>
          <Block
            style={{ width: "250px" }}
            image={
              <img src={beaty} alt="" title="" style={{ maxHeight: "120px" }} />
            }
            title="Top producten"
            content="Wij gebruiken alleen het beste voor jouw handen."
          />
          <Block
            style={{ width: "250px" }}
            image={
              <img
                src={manicure}
                alt=""
                title=""
                style={{ maxHeight: "120px" }}
              />
            }
            title="Kwaliteit"
            content="Breed opgeleide stylistes, hoge eisen en sterke resultaten."
          />
          <Block
            style={{ width: "250px" }}
            image={
              <img
                src={makeup}
                alt=""
                title=""
                style={{ maxHeight: "120px" }}
              />
            }
            title="Aandacht"
            content="Hier maken we tijd voor jouw nagels."
          />
        </Blocks>
      </div>
      <div
        id="services"
        style={{ background: "#f7f2f7", position: "relative", width: "100%" }}
      >
        <div className="SectionHeading" style={{ zIndex: 1 }}>
          <h2>Onze expertise</h2>
          <p>Kom je voor een nieuwe lak of tijd voor jezelf? Bij ons kun je terecht.</p>
        </div>
        <div className="Backdrop">
          <img src={p1} alt="" title="" />
          <img src={p2} alt="" title="" />
          <img src={p3} alt="" title="" />
          <img src={p4} alt="" title="" />
          <img src={p5} alt="" title="" />
          <img src={p6} alt="" title="" />
        </div>
        <Blocks style={{ zIndex: 1 }}>
          <Block
            image={
              <div
                style={{
                  height: "375px",
                  width: "220px",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1561158317-757a4631770e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80)",
                }}
              />
            }
            title="Nagel stijlen"
            content="Voor dé look"
          />
          <Block
            image={
              <div
                style={{
                  height: "375px",
                  width: "220px",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1498843707350-22f05fb6c933?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80)",
                }}
              />
            }
            title="Nagel verzorging"
            content="Genieten!"
          />
          <Block
            image={
              <div
                style={{
                  height: "375px",
                  width: "220px",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1561041131-e4b3e063b969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=60)",
                }}
              />
            }
            title="Gel coat"
            content="Voor sterke en strakke nagels"
          />
        </Blocks>
      </div>
      <div className="Contact" id="contact" style={{ zIndex: 1 }}>
        <div className="Info">
          <h4>Stuur een berichtje</h4>
          <p>
            Heb je specifieke vragen of wensen?  Let us know!
          </p>
          <h4>Contact informatie</h4>
          <ul>
            <li>
              <Email />
              hanne.kleinjan@hotmail.com
            </li>
            <li>
              <Phone />
              +316 - 25 38 64 81
            </li>
            <li>
              <Map />
              Voorstraat 12, Den Ham (OV)
            </li>
          </ul>

          <h4>Socials</h4>
          <Facebook />
          <Instagram />
        </div>
        <div
          className="Form
        "
        >
          <form>
            <div style={{ width: "45%" }}>
              <label>Email</label>
              <input type="email" />
            </div>
            <div style={{ width: "45%" }}>
              <label>Naam</label>
              <input type="text" />
            </div>
            <div style={{ width: "100%" }}>
              <label>Bericht</label>
              <textarea></textarea>
            </div>
            <div style={{ width: "100%" }}>
              <button>Versturen</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
