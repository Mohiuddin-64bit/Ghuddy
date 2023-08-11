
import Navbar from './components/Navbar';
import Categories from './components/Categories/Categories';
import Hotels from './components/Hotels/Hotels';
import Taste from './components/Taste';

const App = () => {
  return (
    <div className='bg-[#EFF6FF]'>
      {/* <Navbar></Navbar> */}
      <Categories></Categories>
      <Hotels></Hotels>
      {/* <Taste></Taste> */}
    </div>
  );
};

export default App;