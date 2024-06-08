import axios from "axios";
import React, { useEffect, useState } from "react";
import CalendarView from "./CalendarView";
import { BASE_URL } from "../states/url";

const Navbar = () => {
  const [selectRoomId, setSelectRoomId] = useState(
  );

  const handlesSelectRoomId = (e) => {
    const newRoomId = e.target.value;
    setSelectRoomId(newRoomId);
  };
  const [roomList, setRoomList] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/getRoom`
        ); // Replace with your API endpoint
        setRoomList(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRooms();
  }, []);
  return (
    <div>
      <div className="flex place-content-around mt-4">
        <select
          name="selectRoomId"
          value={selectRoomId}
          onChange={handlesSelectRoomId}
          className=" bg-red-900 p-3 rounded-md text-white font-bold"
        >
          {roomList.map((room) => (
            <option key={room.meetingRoomId}>{room.meetingRoomId}</option>
          ))}
        </select>
      </div>
      <div className="mt-3">
        <CalendarView selectRoomId={selectRoomId} />
      </div>
    </div>
  );
};

export default Navbar;
