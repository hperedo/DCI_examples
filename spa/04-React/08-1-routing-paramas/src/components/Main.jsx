import Contact from "./mainGuide/Contact";
import About from "./mainGuide/About";
import Products from "./mainGuide/Products";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./mainGuide/SingleProduct";
import NotFound from "./NotFound";
const Main = () => {
  return (
    <div>
      <Routes>

        <Route   path="/"   element={<h1>Welcome to my website </h1>} />
        <Route path="about" element={<About />} />
          
        <Route path="products"  >
          
          <Route  index element={<Products />}  />

          <Route    path="offers"   element={<h3> dear user here is the list of offers</h3>} />

          <Route    path=":productId" element={<SingleProduct />} />
        </Route>
        <Route path="contact" element={<Contact />} />

        <Route   path="*" element={<NotFound />}/>
      </Routes>


    </div>
  );
};

export default Main;
