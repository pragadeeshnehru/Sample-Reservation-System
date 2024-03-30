import axios from "axios";
import { useEffect, useState } from "react";

export default function BookingPage() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios
      .get("/bookings")
      .then(({ data }) => {
        setBookings(data);
      })
      .catch((error) => {
        console.error("Error fetching bookings: ", error);
      });
  }, []);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bookings</h1>
      <ul className="space-y-4">
        {bookings.map((booking) => (
          <li
            key={booking._id}
            className="border border-gray-200 p-4 rounded shadow-md"
          >
            <p>
              <span className="font-semibold">Hall:</span> {booking.hall}
            </p>
            <p>
              <span className="font-semibold">Department:</span>{" "}
              {booking.department}
            </p>
            <p>
              <span className="font-semibold">Date:</span> {booking.date}
            </p>
            <p>
              <span className="font-semibold">Start Time:</span>{" "}
              {booking.startTime}
            </p>
            <p>
              <span className="font-semibold">Finish Time:</span>{" "}
              {booking.finishTime}
            </p>
            <p>
              <span className="font-semibold">Purpose:</span> {booking.purpose}
            </p>
            <p>
              <span className="font-semibold">Count:</span> {booking.count}
            </p>
            <p>
              <span className="font-semibold">Audio:</span>{" "}
              {booking.audio ? "Yes" : "No"}
            </p>
            <p>
              <span className="font-bold">Status: </span>{booking.status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
