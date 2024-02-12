import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UserInput, ErrorPages, MessageInput } from "./pages";
import Footer from "./components/Footer";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      name: "userInput",
      element: <UserInput />,
      errorElement: <ErrorPages />,
    },
    {
      path: "/messageInput",
      name: "messageInput",
      element: <MessageInput />,
      errorElement: <ErrorPages />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
