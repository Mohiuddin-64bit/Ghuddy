
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Hotels from './components/Hotels/Hotels';

const App = () => {
  return (
    <div className='bg-[#EFF6FF]'>
      {/* <Navbar></Navbar> */}
      <Categories></Categories>
      <Hotels></Hotels>
    </div>
  );
};

export default App;