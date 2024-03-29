import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

export default function FormsPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      <form className="mb-4">
        <label className="block mb-1" htmlFor="hall">
          Choose a Hall:
        </label>
        <input class></input>
        <label className="block mb-1" htmlFor="department">
          Name of the department:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          id="department"
          type="text"
        />
        <br />
        <label className="block mb-1" htmlFor="date">
          Date:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          id="date"
          type="date"
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
          />
          <span>to</span>
          <input
            className="w-1/2 px-3 py-2 border border-gray-300 rounded mb-2 ml-2"
            id="time"
            type="time"
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
        ></textarea>
        <br />
        <label className="block mb-1" htmlFor="persons">
          Approximate no. of persons:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          type="number"
          id="persons"
          name="persons"
        />
        <br />
        <div className="flex">
          <label className="block mb-1 mr-3" htmlFor="audio" >Audio Arrangement</label>
          <span></span>
          <input type="checkbox" id="audio" />
        </div>

        

      </form>
    </div>
  );
}
