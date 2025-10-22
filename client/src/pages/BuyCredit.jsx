import React, { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";

const BuyCredit = () => {
  const { user, setShowLogin } = useContext(AppContext);

  const handleOnClick = (plan)=>{
    if (!user) {
      setShowLogin(true)
    } else {
      // For free plan, add credits directly
      if (plan.id === 'Free') {
        // Add 10 credits to user
        // This would require an API call to update credits
        alert('Free credits added! You now have 10 credits.');
      } else {
        // Handle paid plans with Razorpay
        alert('Payment integration coming soon!');
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-[80vh] text-center pt-14 mb-10"
    >
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6">
        Our Plans
      </button>
      <h1 className="text-center text-4xl font-medium mb-6 sm:mb-10">
        Choose the plan
      </h1>
      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => (
          <div
            key={index}
            className="bg-primary drop-shadow-sm border rounded-lg py-12 px-8 text-secondary hover:scale-105 transition-all duration-500"
          >
            <img width={40} src={assets.logo_icon} />
            <p className="mt-3 mb-1 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium">Rs. {item.price}</span> /{" "}
              {item.credits} credits
            </p>
            <button
              onClick={() => handleOnClick(item)}
              className="w-full bg-dark text-white mt-8 text-sm rounded-md py-2.5 min-w-52"
            >
              {user ? "Purchase" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
