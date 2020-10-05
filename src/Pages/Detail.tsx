import React from "react";
import { Slider } from "../Components/Slider";
import { Blocks, Block } from "../Components/Blocks";
export const Detail = () => {
  return (
    <div>
      <Slider />
      <div style={{ padding: "2rem" }}>
        <h1>Hello World!</h1>
        Liquorice topping marzipan pastry jujubes. Lollipop cupcake cake.
        Topping soufflé caramels macaroon cake. Lemon drops tootsie roll toffee
        biscuit icing chupa chups croissant topping. Jelly beans cotton candy
        gingerbread apple pie apple pie lemon drops. Oat cake gummies pie lemon
        drops. Caramels ice cream liquorice sesame snaps candy canes pie
        pudding. Pudding gingerbread brownie sweet roll pastry pudding sugar
        plum cheesecake. Macaroon gummi bears toffee cake tiramisu danish pastry
        tootsie roll fruitcake. Sweet liquorice tiramisu jelly-o fruitcake jelly
        bonbon. Gummi bears oat cake bear claw danish liquorice jelly beans
        pudding gummies. Halvah dragée icing oat cake bonbon chocolate bar. Cake
        gummies jelly chocolate cake bonbon. Dessert sesame snaps ice cream
        donut. Lemon drops dessert donut jelly beans carrot cake carrot cake
        bonbon tootsie roll. Cotton candy donut pudding biscuit jelly beans
        tart. Dragée carrot cake chupa chups halvah tiramisu. Candy canes jelly
        beans wafer. Cheesecake chupa chups marshmallow lollipop pie. Lollipop
        tootsie roll soufflé. Lemon drops tart sesame snaps chocolate cake
        pudding gummi bears. Sugar plum bear claw candy canes candy gingerbread
        donut fruitcake pudding. Sugar plum halvah caramels jelly icing pie.
        Caramels chocolate bar liquorice gummies biscuit macaroon cupcake. Tart
        bonbon bonbon chupa chups croissant. Sweet chocolate bar pie carrot cake
        powder topping powder.
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
                  "url(https://imgur.com/YmnSuKE)",
              }}
            />
          }
          title="Nagel stijlen"
          content="Voor dé look."
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
                  "url(https://imgur.com/DmO6piw)",
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
                  "url(https://imgur.com/RjwhqAo)",
              }}
            />
          }
          title="Gel coat"
          content="Voor sterke en strakke nagels."
          />
      </Blocks>
      <div>
        <Blocks style={{ zIndex: 1 }}>
          <Block
            image=""
            title="Gel coat"
            content="Liquorice topping marzipan pastry jujubes. Lollipop cupcake cake.
        Topping soufflé caramels macaroon cake. Lemon drops tootsie roll toffee
        biscuit icing chupa chups croissant topping. Jelly beans cotton candy
        gingerbread apple pie apple pie lemon drops. Oat cake gummies pie lemon
        drops. Caramels ice cream liquorice sesame snaps candy canes pie
        pudding. Pudding gingerbread brownie sweet roll pastry pudding sugar
        plum cheesecake. Macaroon gummi bears toffee cake tiramisu danish pastry
        tootsie roll fruitcake. Sweet liquorice tiramisu jelly-o fruitcake jelly
        bonbon. Gummi bears oat cake bear claw danish liquorice jelly beans
        pudding gummies. Halvah dragée icing oat cake bonbon chocolate bar. Cake
        gummies jelly chocolate cake bonbon. Dessert sesame snaps ice cream
        donut. Lemon drops dessert donut jelly beans carrot cake carrot cake
        bonbon tootsie roll. Cotton candy donut pudding biscuit jelly beans
        tart. Dragée carrot cake chupa chups halvah tiramisu. Candy canes jelly
        beans wafer. Cheesecake chupa chups marshmallow lollipop pie. Lollipop
        tootsie roll soufflé. Lemon drops tart sesame snaps chocolate cake
        pudding gummi bears. Sugar plum bear claw candy canes candy gingerbread
        donut fruitcake pudding. Sugar plum halvah caramels jelly icing pie.
        Caramels chocolate bar liquorice gummies biscuit macaroon cupcake. Tart
        bonbon bonbon chupa chups croissant. Sweet chocolate bar pie carrot cake
        powder topping powder."
          />
          <Block
            image={
              <div
                style={{
                  height: "375px",
                  width: "550px",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundImage:
                    "url(https://imgur.com/fdDIWgi)",
                }}
              />
            }
            title="skincare"
            content="test"
          />
        </Blocks>
      </div>
    </div>
  );
};

export default Detail;
