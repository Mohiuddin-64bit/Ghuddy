import Container from "../Shared/container";
import categories from "../../Data/propertyType.json";
import CategoryBox from "./CategoryBox";
import { useState } from "react";
import Hotels from "../Hotels/Hotels";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [active, setActive] = useState(false)
  const handleCategoryClick = (categoryValue) => {
    if (active && selectedCategory === categoryValue) {
      setActive(false);
      setSelectedCategory(null);
    } else {
      setActive(true);
      setSelectedCategory(categoryValue);
    }
  };

  return (
    <div>
      <Container>
        <h1 className="text-[42px] pt-32 pb-12">Hotels</h1>
        <div className="flex flex-row items-center justify-between overflow-x-auto">
          {categories.map((item) => (
            <CategoryBox
            key={item.label}
            icon={item.iconUrl}
            label={item.label}
            isSelected={selectedCategory === item.value }
            onClick={() => handleCategoryClick(item.value)}
          />
          ))}
        </div>
      </Container>
        <Hotels selectedCategory={selectedCategory} />
    </div>
  );
};

export default Categories;
