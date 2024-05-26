import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import UserContextProvider from "./Context/userContext.tsx"; // Import UserContextProvider using named import syntax
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UserContextProvider>
    <Toaster
      position="top-right"
      reverseOrder={true}
      containerStyle={{ marginTop: "80px" }}
    />
    <App />
  </UserContextProvider>
);
