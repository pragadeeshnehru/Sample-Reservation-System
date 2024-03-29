import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <div className="card">
        <div id="sem1" className="card border-primary mb-3">
          <div className="card-header">
            <h1>EEE Seminar Hall-1</h1>
          </div>
          <div className="card-body text-primary">
            <h5 className="card-title">Description</h5>
            <p className="card-text">
              EEE Seminar Hall can accomodate upto 120 Students.
            </p>
            <div>
              <div
                id="carouselExampleInterval"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <img
                      src="https://mcet.in/wp-content/uploads/Slider/23_MCET_Slider_08.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img
                      src="https://mcet.in/wp-content/uploads/Slider/23_MCET_Slider_02.jpg"
                      className="d-block w-90"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://mcet.in/wp-content/uploads/Slider/23_MCET_Slider_03.jpg"
                      className="d-block w-90"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <Link className="btn bg-main text-white mt-3" to={"/forms"}>
              BOOK NOW
            </Link>
          </div>
        </div>
        <div id="sem2" className="card border-success mb-3">
          <div className="card-header">
            <h1>EEE Seminar Hall-2</h1>
          </div>
          <div className="card-body text-success">
            <h5 className="card-title">Description</h5>
            <p className="card-text">
              EEE Seminar Hall can accomodate upto 150 Students.
            </p>
            <img
              className="card-body "
              src="https://mcet.in/wp-content/uploads/Slider/23_MCET_Slider_02.jpg"
            />
            <Link className="btn bg-main text-white " to={"/forms"}>
              BOOK NOW
            </Link>
          </div>
        </div>

        <div id="sem3" className="card border-warning mb-3">
          <div className="card-header">
            <h1>MECH Seminar Hall</h1>
          </div>
          <div className="card-body text-warning">
            <h5 className="card-title">Description</h5>
            <p className="card-text">
              MECH Seminar Hall can accomodate upto 200 Students.
            </p>
            <img
              className="card-body "
              src="https://mcet.in/wp-content/uploads/Slider/23_MCET_Slider_02.jpg"
            />
            <Link className="btn bg-main text-white " to={"/forms"}>
              BOOK NOW
            </Link>
          </div>
        </div>
        <div id="sem4" className="card border-info mb-3">
          <div className="card-header">
            <b>CS HALL</b>
          </div>
          <div className="card-body text-info">
            <h5 className="card-title">DESCRIPTION</h5>
            <p className="card-text">Accomodate upto 250 Students.</p>
            <img
              className="card-body "
              src="https://mcet.in/wp-content/uploads/Slider/23_MCET_Slider_02.jpg"
            />
            <Link className="btn bg-main text-white " to={"/forms"}>
              BOOK NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
