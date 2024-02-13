import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  UserInput,
  ErrorPages,
  MessageInput,
  ModalNext,
  EndPage,
} from "./pages";
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
    {
      path: "/nextInput",
      name: "nextInput",
      element: <ModalNext />,
      errorElement: <ErrorPages />,
    },
    {
      path: "/endPage",
      name: "endPage",
      element: <EndPage />,
      errorElement: <ErrorPages />,
    },
  ]);
  return (
    <>
      <div className="bg-gradient-to-r from-pink-400 to-pink-700">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
};

export default App;
