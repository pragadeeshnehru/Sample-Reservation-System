import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <div class="card">
        <div id="sem1" class="card border-primary mb-3">
          <div class="card-header">
            <h1>EEE Seminar Hall-1</h1>
          </div>
          <div class="card-body text-primary">
            <h5 class="card-title">Description</h5>
            <p class="card-text">
              EEE Seminar Hall can accomodate upto 120 Students.
            </p>
            <div>
              <div
                id="carouselExampleInterval"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <img
                      src="https://mcet.in/wp-content/uploads/Slider/23_MCET_Slider_08.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img
                      src="https://mcet.in/wp-content/uploads/Slider/23_MCET_Slider_02.jpg"
                      class="d-block w-90"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://mcet.in/wp-content/uploads/Slider/23_MCET_Slider_03.jpg"
                      class="d-block w-90"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <Link className="btn bg-main text-white mt-3" to={"/forms"}>
              BOOK NOW
            </Link>
          </div>
        </div>
        <div id="sem2" class="card border-success mb-3">
          <div class="card-header">
            <h1>EEE Seminar Hall-2</h1>
          </div>
          <div class="card-body text-success">
            <h5 class="card-title">Description</h5>
            <p class="card-text">
              EEE Seminar Hall can accomodate upto 150 Students.
            </p>
            <img
              class="card-body "
              src="https://mcet.in/wp-content/uploads/Slider/23_MCET_Slider_02.jpg"
            />
            <Link className="btn bg-main text-white " to={"/forms"}>
              BOOK NOW
            </Link>
          </div>
        </div>

        <div id="sem3" class="card border-warning mb-3">
          <div class="card-header">
            <h1>MECH Seminar Hall</h1>
          </div>
          <div class="card-body text-warning">
            <h5 class="card-title">Description</h5>
            <p class="card-text">
              MECH Seminar Hall can accomodate upto 200 Students.
            </p>
            <img
              class="card-body "
              src="https://mcet.in/wp-content/uploads/Slider/23_MCET_Slider_02.jpg"
            />
            <Link className="btn bg-main text-white " to={"/forms"}>
              BOOK NOW
            </Link>
          </div>
        </div>
        <div id="sem4" class="card border-info mb-3">
          <div class="card-header">
            <b>CS HALL</b>
          </div>
          <div class="card-body text-info">
            <h5 class="card-title">DESCRIPTION</h5>
            <p class="card-text">Accomodate upto 250 Students.</p>
            <img
              class="card-body "
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
