import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-20 py-12 "
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 ">
        Coustomer Testimonials
      </h1>
      <p className=" text-gray-500 mb-12">What Our Users Are Saying</p>
      <div className="flex flex-wrap gap-6 ">
        {testimonialsData.map((Testimonial, index) => (
          <div
            key={index}
            className="bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all"
          >
            <div>
              <img
                src={Testimonial.image}
                alt=""
                className="rounded-full w-14"
              />
              <h2 className="text-xl font-semibold mt-3">{Testimonial.name}</h2>
              <p className="text-gray-500 mb-4">{Testimonial.role}</p>
              <div className="flex mb-4">
                {Array(Testimonial.stars)
                  .fill()
                  .map((item, index) => (
                    <img key={index} src={assets.rating_star} alt="" />
                  ))}
              </div>
              <p className="text-center text-sm text-gray-600">
                {Testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
