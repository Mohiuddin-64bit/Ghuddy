import React from 'react';

const CategoryBox = ({ label, icon, isSelected, onClick }) => {
  return (
    <div
      className={`flex flex-col hover:bg-[#04898E] w-32 transition-all rounded items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 border-transparent ${
        isSelected ? 'bg-[#04898E] text-neutral-800' : 'text-neutral-500'
      }`}
      onClick={onClick}
    >
      <img src={icon} className="w-12" alt="" />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
