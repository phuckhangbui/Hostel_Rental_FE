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
import ProtectedRoute from "./Component/ProtectedRoute";
import Register from "./Page/Register";
import MemberHostelDetail from "./Page/Member/HostelDetail";
import OwnerContractCreate from "./Page/Owner/Contract";
import AdminTransaction from "./Page/Admin/AdminTransaction";
import RoomDetail from "./Page/Owner/RoomDetail";
import MemberRoomDetails from "./Page/Member/RoomDetail";
import ForgetPassword from "./Page/ForgetPassword";
import OwnerViewContract from "./Page/Owner/ViewContract";
import OwnerContractDetail from "./Page/Owner/ContractDetail";
import MemberViewContract from "./Page/Member/MemberContract";
import MemberContractDetail from "./Page/Member/MemberContractDetail";
import BillPayment from "./Page/Owner/BillPayment";
import BillList from "./Page/Owner/BillList";
import BillPaymentDetail from "./Page/Owner/BillDetail";
import BillMonthlyForm from "./Page/Owner/BillMonthlyForm";
import PaymentSucess from "./Page/PaymentSuccess";
import OwnerPackage from "./Page/Owner/MembershipPackage";
import OwnerAppointment from "./Page/Owner/Appointment";
import OwnerAppointmentDetail from "./Page/Owner/AppointmentDetail";
import MemberProfile from "./Page/Member/Profile";
import OwnerProfile from "./Page/Owner/OwnerProfile";
import OwnerChangeProfile from "./Page/Owner/ChangeProfile";

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
            <Route
              path="/register"
              element={
                <ProtectedRoute>
                  <Register />
                </ProtectedRoute>
              }
            />
            <Route
              path="/forget-password"
              element={
                <ProtectedRoute>
                  <ForgetPassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="hostel/detail/:hostelID"
              element={<MemberHostelDetail />}
            />
            <Route path="room/detail/:roomID" element={<MemberRoomDetails />} />
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

              <Route
                path="hostels/detail/:hostelID"
                element={<HostelDetail />}
              />
              <Route path="packages" element={<Packages />} />
              <Route path="transactions" element={<AdminTransaction />} />
              <Route path="packages/new" element={<NewPackage />} />
              <Route
                path="packages/detail/:packageID"
                element={<PackageDetail />}
              />
            </Route>
          </Route>

          <Route element={<RequiredAuth allowedRoles={[roles.Owner]} />}>
            <Route path="/owner" element={<OwnerLayout />}>
            <Route path="profile" element={<OwnerProfile/>}/>
            <Route path="profile/change-information" element={<OwnerChangeProfile/>}/>
              <Route path="hostels" element={<Hostel />} />
              <Route path="hostels/:hostelId" element={<Room />} />
              <Route
                path="hostels/:hostelId/rooms/:roomId"
                element={<RoomDetail />}
              />
              <Route path="contract/create" element={<OwnerContractCreate />} />
              <Route path="contracts" element={<OwnerViewContract />} />
              <Route
                path="contracts/detail/:contractID"
                element={<OwnerContractDetail />}
              />
              <Route path="bill-payment" element={<BillPayment />} />
              <Route path="bill-payment/bills" element={<BillList />} />
              <Route
                path="bill-payment/bills/:billPaymentId"
                element={<BillPaymentDetail />}
              />
              <Route path="bill-payment/bills/form" element={<BillMonthlyForm />} />
              <Route path="package" element={<OwnerPackage />} />
              <Route path="appointments" element={<OwnerAppointment />} />
              <Route
                path="appointments/detail/:hostelID"
                element={<OwnerAppointmentDetail />}
              />
            </Route>
          </Route>

          <Route element={<RequiredAuth allowedRoles={[roles.Member]} />}>
            <Route path="/member" element={<OwnerLayout />}>
              <Route path="contracts" element={<MemberViewContract />} />
              <Route
                path="contracts/detail/:contractID"
                element={<MemberContractDetail />}
              />
            </Route>
          </Route>

          <Route element={<RequiredAuth allowedRoles={[roles.Member, roles.Owner]} />}>
            <Route path="/paymentsucess" element={<PaymentSucess />}>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
