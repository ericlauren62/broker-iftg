import React from "react";
import Button from "../Button";
import img from "../../images/img_commodities_indices1_extra.png";

type Props = {};

export const Exposure = (props: Props) => {
  return (
    <div className="bg-black text-white py-16 xl:py-0">
      <section className=" xl:mb-0 min-h-[80vh] max-w-7xl mx-auto px-6  xl:flex xl:justify-between xl:items-center xl:gap-x-10 ">
        <div className="text-center mb-20 xl:text-left xl:mb-0 flex-1">
          <h1 className="text-3xl xl:text-6xl font-bold mb-5 tracking-wide leading-[120%]">
            Increase your exposure to the commodity market
          </h1>
          <p className="text-lg text-white mb-10">
            Expecting big things in energy? Diversify your portfolio and spread
            risk with our unique commodity indices, which allow you to take a
            view on a commodity sector as a whole with a single position.
          </p>
          <div className="">
            <Button
              btnText="Learn more"
              className="bg-primary py-3 px-8 hover:bg-primary-hover text-white rounded-[50px]"
            />
          </div>
        </div>
        <div className="flex-1">
          <img src={img} alt="hero" className="w-full h-full" />
        </div>
      </section>
    </div>
  );
};
