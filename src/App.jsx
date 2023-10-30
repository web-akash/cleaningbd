import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Root from "./Layouts/Root/Root";
import Services from "./Pages/Services";
import Prices from "./Pages/Prices";
import Contact from "./Pages/Contact";
import ServiceDetails from "./Pages/ServiceDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/service/:id" element={<ServiceDetails />}></Route>
      <Route path="/pricing" element={<Prices />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
