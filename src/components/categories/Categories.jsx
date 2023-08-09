import Container from "../shared/container";
import categories from '../Data/categories.json'
import CategoryBox from "./CategoryBox";

// const CategoryBox = ({label, icon: Icon}) => {
//   <div className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500">
//     <Icon></Icon>
//     <div className="text-sm font-medium">{label}</div>
//   </div>
// }



const Categories = () => {
  return (
    <div>
      <Container>
        <h1 className="text-[42px] pt-32 pb-12">Hotels</h1>
        <div className="flex flex-row items-center justify-between overflow-x-auto">
          {
            categories.map(item => (
              <CategoryBox key={item.label} icon={item.iconUrl} label={item.label}></CategoryBox>
            ))
          }
        </div>  
      </Container>
    </div>
  );
};

export default Categories;