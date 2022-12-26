import React from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function () {
  const [Show, setShow] = useState(true);
  const HandleShow = () => {
    if (Show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  var displayPassword = Show ? <AiFillEye /> : <AiFillEyeInvisible />;
  var TypePassword = Show ? "text" : "password";
  return (
    <div>
      <div id="Login">
        <img
          class="Login__logo"
          src="https://www.pngkey.com/png/detail/428-4282931_uber-for-food-delivery-food-delivery.png"
          alt="Uber For Food Delivery - Food Delivery@pngkey.com"
        />
        <div class="Login__account">
          <label for="Login__account-input" class="Login__input-label">
            Account
          </label>
          <input
            type="text"
            class="Login__input"
            id="Login__account-input"
            placeholder="Enter your account"
          />
        </div>
        <div class="Login__password">
          <label htmlFor="Login__password-input" class="Login__input-label">
            Password
          </label>
          <input
            type={TypePassword}
            class="Login__input"
            id="Login__password-input"
            placeholder="Enter your Password"
          />
          <button id="Login__password-show" onClick={HandleShow}>
            {displayPassword}
          </button>
        </div>
        {/* <div class="Login__ID">
          <label for="Login__account-input" class="Login__input-label">
            ID
          </label>
          <input
            type="text"
            class="Login__input"
            id="Login__ID-input"
            placeholder="Enter your ID"
          />
        </div> */}
        <div class="Login__form-check">
          <div class="Login__form-check">
            <input
              class="Login__form-check-input"
              type="radio"
              name="type"
              id="type-admin"
              value="admin"
              checked
            />
            <label class="Login__form-check-label" for="type-admin">
              Admin
            </label>
          </div>
          <div class="Login__form-check">
            <input
              class="Login__form-check-input"
              type="radio"
              name="type"
              value="employee"
              id="type-employee"
            />
            <label class="Login__form-check-label" for="type-employee">
              Employee
            </label>
          </div>
          <div class="Login__form-check">
            <input
              class="Login__form-check-input"
              type="radio"
              name="type"
              value="driver"
              id="type-driver"
            />
            <label class="Login__form-check-label" for="type-driver">
              Driver
            </label>
          </div>
          <div class="Login__form-check">
            <input
              class="Login__form-check-input"
              type="radio"
              name="type"
              value="partner"
              id="type-partner"
            />
            <label class="Login__form-check-label" for="type-partner">
              Partner
            </label>
          </div>
          <div class="Login__form-check">
            <input
              class="Login__form-check-input"
              type="radio"
              name="type"
              value="user"
              id="type-user"
            />
            <label class="Login__form-check-label" for="type-user">
              User
            </label>
          </div>
        </div>
        <div id="Login__button">
          <Link to="/">
            <button class="Login__button-submit">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
