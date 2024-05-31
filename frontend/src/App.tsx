import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import RequiredAuth from "./Component/RequireAuth/requiredAuth";
import AdminLayout from "./Page/Admin/adminLayout";
import MemberLayout from "./Page/Member";
import Home from "./Page/Home";
import Dashboard from "./Page/Admin/Dashboard";
import Accounts from "./Page/Admin/Accounts";
import AccountDetail from "./Page/Admin/AccountDetail";
import MemberShips from "./Page/Admin/MemberShips";
import MemberShipDetail from "./Page/Admin/MemberShipDetail";
import Hostels from "./Page/Admin/Hostels";
import HostelDetail from "./Page/Admin/HostelDetail";
import Packages from "./Page/Admin/PackagesAdmin";
import PackageDetail from "./Page/Admin/PackageDetail";
import NewPackage from "./Page/Admin/NewPackage";
import PermissionPage from "./Page/Permission";
import Package from "./Page/Package";
import OwnerLayout from "./Page/Owner";
import Hostel from "./Page/Owner/Hostel";
import Room from "./Page/Owner/Room";

const roles = {
  Admin: 1,
  Owner: 2,
  Member: 3,
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/permission" element={<PermissionPage />} />

          <Route path="/" element={<MemberLayout />}>
            <Route index element={<Home />} />
            <Route path="package" element={<Package />} />
          </Route>

          <Route element={<RequiredAuth allowedRoles={[roles.Admin]} />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="accounts" element={<Accounts />} />
              <Route
                path="accounts/detail/:accountId"
                element={<AccountDetail />}
              />
              <Route path="memberships" element={<MemberShips />} />
              <Route
                path="memberships/detail/:accountID"
                element={<MemberShipDetail />}
              />
              <Route path="hostels" element={<Hostels />} />
              
              <Route path="hostels/detail/:hostelID" element={<HostelDetail />} />
              <Route path="packages" element={<Packages />} />
              <Route path="packages/new" element={<NewPackage />} />
              <Route
                path="packages/detail/:packageID"
                element={<PackageDetail />}
              />
            </Route>
          </Route>

          <Route element={<RequiredAuth allowedRoles={[roles.Owner]} />}>
            <Route path="/owner" element={<OwnerLayout />}>
              <Route path="hostel" element={<Hostel />} />
              <Route path="hostel/:hostelId" element={<Room />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
