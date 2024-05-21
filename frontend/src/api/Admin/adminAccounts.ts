import axios from "axios";
const baseUrl = process.env.REACT_APP_BACK_END_URL;

export const getAccounts = async (token: string) => {
  try {
    const fetchData = await axios.get<Account[]>(
      `${baseUrl}/api/admin/accounts`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const response = fetchData.data;
    return response;
  } catch (error) {
    console.log("Error: " + error);
  }
};

export const getMemberShips = async (token: string) => {
  try {
    const fetchData = await axios.get<MemberShip[]>(
      `${baseUrl}/api/admin/memberships`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const response = fetchData.data;
    return response;
  } catch (error) {
    console.log("Error: " + error);
  }
};

export const getMemberShipDetail = async (id: number, token: string) => {
  try {
    const fetchData = await axios.get<MemberShipDetail>(
      `${baseUrl}/api/admin/memberships/detail/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const response = fetchData.data;
    return response;
  } catch (error) {
    console.log("Error: " + error);
  }
};