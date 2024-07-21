import React from "react";

const industries = [
  { name: "Social media", icon: "./assets/narrative_active_outline_24.png" },
  { name: "Fitness and sport", icon: "./assets/ball_outline_24.png" },
  { name: "Bank", icon: "./assets/bank_outline_24.png" },
  { name: "Construction", icon: "./assets/employee_outline_24.png" },
  { name: "Game projects", icon: "./assets/game_outline_24.png" },
  { name: "Education", icon: "./assets/education_outline_24.png" },
  { name: "Auto, transport", icon: "./assets/car_outline_24 (1).png" },
  { name: "Medicine, health", icon: "./assets/health_outline_24.png" },
  {
    name: "Restaurants, food delivery",
    icon: "./assets/bowl_sticks_outline_24.png",
  },
  { name: "Marketplaces", icon: "./assets/market_outline_24 (1).png" },
  { name: "AR technology", icon: "./assets/live_outline_24.png" },
  { name: "TV series", icon: "./assets/video_outline_24 (1).png" },
  { name: "Startups", icon: "./assets/work_outline_24.png" },
  {
    name: "Religion",
    icon: "./assets/magic_wand_outline_24 (1).png",
  },
  { name: "Online courses", icon: "./assets/video_circle_outline_24.png" },
];

const Industries = () => (
  <div className="py-16 bg-gray-100" id="media">
    <div className="container mx-auto text-center">
      {" "}
      <h2 className="text-2xl font-bold mb-8">
        Developed more than <span className="text-green-500">100</span> projects
        in <span className="text-green-500">15</span> industries
      </h2>
      <div className="grid pl-5 grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4">
        {industries.map((industry, index) => (
          <div key={index} className="items-center lg:pl-24  flex flex-row">
            <div className="text-4xl">
              <img src={industry.icon} alt={industry.name} className="pr-5" />
            </div>
            <p className="mt-2">{industry.name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Industries;
