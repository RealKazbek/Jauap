import React from "react";

function StatisticalCard({
  image = "", 
  title = "Highest Total Rewards", 
  description = "$179.295.60", 
  who = "amirhossein v", 
  group = "IT2-2302"
}) {
  return (
    <div className="flex relative rounded-2xl border p-5 bg-gray-900 w-[350px] gap-15 text-gray-100 items-center truncate">
      <img 
        className="absolute -left-10 h-[120px]" 
        src={"src/assets/target.svg"} 
        alt={title} 
      />
      <div className="flex flex-col gap-2 pl-[75px] my-2">
        <h3 className="text-gray-400 uppercase">{title}</h3>
        <p className="uppercase text-3xl text-white font-bold">{description}</p>
        <div className="flex items-center gap-1">
          <p>{who}</p>
          <span className="block w-1 h-1 rounded-full bg-white"></span>
          <p>{group}</p>
        </div>
      </div>
    </div>
  );
}

export default StatisticalCard;
