import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

export default function FormsPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hall, setHall] = useState("");
  const [department, setDepartment] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [finishTime, setFinishTime] = useState("");
  const [purpose, setPurpose] = useState("");
  const [count, setCount] = useState(null);
  const [audio, setAudio] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    try {
      await axios.post("/submitForm", {
        hall,
        department,
        date,
        startTime,
        finishTime,
        purpose,
        count,
        audio,
        status:"pending",
      });
      alert("Form submitted Sucessfully");
    } catch (e) {
      alert("Form submission Failed");
    }
  }

  const tokenCookie = document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith("token="));
  const token = tokenCookie.split("=")[1];

  if (token) {
    axios
      .post("/auth", { token })
      .then((response) => {
        if (response.status === 200) {
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.error("Error validating token:", error);
        return <Navigate to="/login" />;
      });
  } else {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mx-auto bg-white p-4 rounded shadow-md">
      <form className="mb-4" onSubmit={handleFormSubmit}>
        <label className="block mb-1" htmlFor="hall">
          Choose a Hall:
        </label>
        <input
          type="radio"
          id="EEE-1"
          name="hall"
          value="EEE-1"
          checked={hall === "EEE-1"}
          onChange={(ev) => setHall(ev.target.value)}
        />
        <label className="ml-2" htmlFor="EEE-1">
          EEE Seminar Hall 1
        </label>
        <br />
        <input
          type="radio"
          id="EEE-2"
          name="hall"
          value="EEE-2"
          checked={hall === "EEE-2"}
          onChange={(ev) => setHall(ev.target.value)}
        />
        <label className="ml-2" htmlFor="EEE-2">
          EEE Seminar Hall 2
        </label>
        <br />
        <input
          type="radio"
          id="MECH"
          name="hall"
          value="MECH"
          checked={hall === "MECH"}
          onChange={(ev) => setHall(ev.target.value)}
        />
        <label className="ml-2" htmlFor="MECH">
          Mechanical Seminar Hall
        </label>
        <br />
        <input
          type="radio"
          id="CS"
          name="hall"
          value="CS"
          checked={hall === "CS"}
          onChange={(ev) => setHall(ev.target.value)}
        />
        <label className="ml-2" htmlFor="CS">
          CS Hall
        </label>
        <label className="block mb-1 mt-2" htmlFor="department">
          Name of the department:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          id="department"
          type="text"
          value={department}
          onChange={(ev) => setDepartment(ev.target.value)}
        />
        <br />
        <label className="block mb-1" htmlFor="date">
          Date:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          id="date"
          type="date"
          value={date}
          onChange={(ev) => setDate(ev.target.value)}
        />
        <br />
        <label className="block mb-1" htmlFor="time">
          Start time Finished time:
        </label>
        <div className="flex">
          <input
            className="w-1/2 px-3 py-2 border border-gray-300 rounded mb-2 mr-2"
            id="time"
            type="time"
            value={startTime}
            onChange={(ev) => setStartTime(ev.target.value)}
          />
          <span>to</span>
          <input
            className="w-1/2 px-3 py-2 border border-gray-300 rounded mb-2 ml-2"
            id="time"
            type="time"
            value={finishTime}
            onChange={(ev) => setFinishTime(ev.target.value)}
          />
          <br />
        </div>
        <label className="block mb-1" htmlFor="purpose">
          Purpose:
        </label>
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          id="purpose"
          name="purpose"
          value={purpose}
          onChange={(ev) => setPurpose(ev.target.value)}
        ></textarea>
        <br />
        <label className="block mb-1" htmlFor="count">
          Approximate no. of persons:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          type="number"
          id="count"
          name="count"
          value={count}
          onChange={(ev) => setCount(ev.target.value)}
        />
        <br />
        <div className="flex">
          <label className="block mb-1 mr-3" htmlFor="audio">
            Audio Arrangement
          </label>
          <input
            type="checkbox"
            id="audio"
            checked={audio}
            onChange={(ev) => setAudio(ev.target.checked)}
          />
        </div>
        <button className="btn bg-main text-white hover:bg-main hover:text-white" type="submit">Submit</button>
      </form>
    </div>
  );
}
