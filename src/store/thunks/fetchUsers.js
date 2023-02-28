import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//base type
const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get("http://localhost:3004/users");
    return response.data;
});
export { fetchUsers };


