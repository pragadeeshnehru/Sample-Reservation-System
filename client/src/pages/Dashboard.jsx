import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("/users")
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
      });
  }, []);

  const handleApprove = (bookingId) => {
    axios
      .put(`/approve/${bookingId}`)
      .then((response) => {
        setBookings(
          bookings.map((bookings) => {
            if (bookings._id === bookingId) {
              return { ...bookings, status: "approved" };
            }
            return bookings;
          })
        );
      })
      .catch((error) => {
        console.error("Error approving booking:", error);
      });
  };

  return (
    <div className="mt-3">
      <table className="table">
        <thead>
          <tr>
            <th>Staff</th>
            <th>Hall</th>
            <th>Department</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>Finish Time</th>
            <th>Purpose</th>
            <th>Count</th>
            <th>Audio</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((bookings) => (
            <tr key={bookings._id}>
              <td>{bookings.userName}</td>
              <td>{bookings.hall}</td>
              <td>{bookings.department}</td>
              <td>{bookings.date}</td>
              <td>{bookings.startTime}</td>
              <td>{bookings.finishTime}</td>
              <td>{bookings.purpose}</td>
              <td>{bookings.count}</td>
              <td>{bookings.audio ? "Yes" : "No"}</td>
              <td>{bookings.status}</td>
              <td>
                {bookings.status === "pending" && (
                  <button
                    className="btn border-gray-500 hover:bg-main hover:text-white"
                    onClick={() => handleApprove(bookings._id)}
                  >
                    Approve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
