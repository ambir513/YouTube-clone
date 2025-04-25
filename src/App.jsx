import { Provider } from "react-redux";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import store from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/Body/MainContainer";
import WatchPage from "./components/Body/WatchPage/WatchPage";
import SearchVideo from "./components/Body/SearchVideo";

/**
 * Header
 * Body
 * - SideBar
 *   - MenuItem
 * - MainContainer
 *   - ButtonList
 *   - VideoContainer
 *    - VideoCart
 */

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "/watch/:id", element: <WatchPage /> },
      { path: "/:search", element: <SearchVideo /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
