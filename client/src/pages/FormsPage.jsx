import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function FormsPage() {
  return (
    <div className="container mx-auto bg-white p-4 rounded shadow-md">
      <h1 className="text-center text-2xl font-bold mb-4">
        NIA EDUCATIONAL INSTITUTIONS
      </h1>
      <p className="text-center mb-4">Pollachi - 642 003</p>
      <h2 className="text-center text-lg font-bold mb-4">
        Requisition for the allotment of
      </h2>
      <form className="mb-4">
        <label className="block mb-1" htmlFor="department">
          1. Name of the department:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          type="text"
          id="department"
          name="department"
        />
        <br />
        <label className="block mb-1" htmlFor="date">
          2. Date:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          type="date"
          id="date"
          name="date"
        />
        <br />
        <label className="block mb-1" htmlFor="time">
          3. Start time Finished time:
        </label>
        <div className="flex">
          <input
            className="w-1/2 px-3 py-2 border border-gray-300 rounded mb-2 mr-2"
            type="time"
            id="start-time"
            name="start-time"
          />
          <span>to</span>
          <input
            className="w-1/2 px-3 py-2 border border-gray-300 rounded mb-2 ml-2"
            type="time"
            id="end-time"
            name="end-time"
          />
          <br />
        </div>
        <label className="block mb-1" htmlFor="purpose">
          4. Purpose:
        </label>
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          id="purpose"
          name="purpose"
        ></textarea>
        <br />
        <label className="block mb-1" htmlFor="persons">
          5. Approximate no. of persons:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          type="number"
          id="persons"
          name="persons"
        />
        <br />
      </form>
      <h2 className="text-center text-lg font-bold mb-4">
        Details of Allotment
      </h2>
      <p className="text-center mb-4">HOD/PRINCIPAL</p>
      <h1 className="text-center text-2xl font-bold mb-4">
        Dr. Mahalingam College of Engineering and
        <br />
        Technology
      </h1>
      <h1 className="text-center text-2xl font-bold mb-4">
        Maintenance Department - Electrical
      </h1>
      <h2 className="text-center text-lg font-bold mb-4">
        Audio Arrangement Requisition Form
      </h2>
      <form>
        <label className="block mb-1" htmlFor="staff-name">
          Staff Name:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          type="text"
          id="staff-name"
          name="staff-name"
        />
        <br />
        <label className="block mb-1" htmlFor="purpose">
          Purpose:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          type="text"
          id="purpose"
          name="purpose"
        />
        <br />
        <label className="block mb-1" htmlFor="staff-date">
          Date:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          type="date"
          id="staff-date"
          name="staff-date"
        />
        <br />
        <label className="block mb-1" htmlFor="designation">
          Designation:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          type="text"
          id="designation"
          name="designation"
        />
        <br />
        <label className="block mb-1" htmlFor="section-date">
          Date:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          type="date"
          id="section-date"
          name="section-date"
        />
        <br />
        <label className="block mb-1" htmlFor="time-from">
          Time:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          type="time"
          id="time-from"
          name="time-from"
        />
        <br />
        <label className="block mb-1" htmlFor="time-to">
          To:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          type="time"
          id="time-to"
          name="time-to"
        />
        <br />
        <label className="block mb-1" htmlFor="department">
          Department:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          type="text"
          id="department"
          name="department"
        />
        <br />
        <label className="block mb-1" htmlFor="location">
          Location:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          type="text"
          id="location"
          name="location"
        />
        <br />
        <label className="block mb-1" htmlFor="requested-by">
          Requested by Staff:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          type="text"
          id="requested-by"
          name="requested-by"
        />
        <br />
        <label className="block mb-1" htmlFor="forwarded-by">
          Forwarded by Staff:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          type="text"
          id="forwarded-by"
          name="forwarded-by"
        />
        <br />
        <label className="block mb-1" htmlFor="section-head">
          Section Head:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          type="text"
          id="section-head"
          name="section-head"
        />
        <br />
        <label className="block mb-1" htmlFor="electrical-engineer">
          Electrical Engineer:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          type="text"
          id="electrical-engineer"
          name="electrical-engineer"
        />
        <br />
      </form>
    </div>
  );
}
