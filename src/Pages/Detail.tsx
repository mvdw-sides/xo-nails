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
                  "url(https://images.unsplash.com/photo-1561158317-757a4631770e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80)",
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
                    "url(https://images.unsplash.com/photo-1548112129-b5cf67e9558d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=550&q=60)",
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
