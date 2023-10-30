import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Root from "./Layouts/Root/Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />}></Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
