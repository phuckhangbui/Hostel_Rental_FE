import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import RequiredAuth from "./Component/RequireAuth/requiredAuth";
import AdminLayout from "./Page/Admin/adminLayout";
import MemberLayout from "./Page/Member";
import Home from "./Page/Home";
import Dashboard from "./Page/Admin/Dashboard";
import Accounts from "./Page/Admin/Accounts";
import MemberShips from "./Page/Admin/MemberShips";
import MemberShipDetail from "./Page/Admin/MemberShipDetail";
import Hostels from "./Page/Admin/Hostels";
import HostelDetail from "./Page/Admin/HostelDetail";



const roles = {
  Admin: 1,
  Owner: 2,
  Member: 3
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MemberLayout />}>
            <Route index element={<Home />} />
          </Route>

          <Route element={<RequiredAuth allowedRoles={[roles.Admin]} />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="accounts" element={<Accounts />} />
              <Route path="memberships" element={<MemberShips />} />
              <Route path="memberships/detail/:memberShipTransactionID" element={<MemberShipDetail />} />
              <Route path="hostels" element={<Hostels />} />
              <Route path="hostels/detail/:hostelID" element={<HostelDetail />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
