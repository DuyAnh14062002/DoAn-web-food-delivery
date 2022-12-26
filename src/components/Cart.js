import React from "react";
import { FiLogOut } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./../css/customer.css";

function Cart() {
  return (
    <div>
      <header>
        <div className="Header__Logo">
          <img
            class="Header__logoIcon"
            src="https://www.pngkey.com/png/detail/428-4282931_uber-for-food-delivery-food-delivery.png"
            alt="Uber For Food Delivery - Food Delivery@pngkey.com"
          />
          <span>Food Dilivery</span>
        </div>
        <div className="Header__menu">
          <nav>
            <ul>
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/">Cửa hàng</Link>
              </li>
              <li>
                <Link>Về chúng tôi</Link>
              </li>
              <li>
                <Link to="/Order">Đơn hàng của bạn</Link>
              </li>
              <li>
                <Link>Liên hệ</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="Header__logout">
          <Link to="/Cart">
            <BsCart className="cart" />
          </Link>
          <span>Đăng xuất</span>
          <Link to="/Login">
            <FiLogOut className="logout" />
          </Link>
        </div>
      </header>
      <section class="cart">
        <a href="./index.html" class="back-home">
          <i class="fas fa-angle-left"></i>
        </a>
        <h2>giỏ hàng</h2>
        <form action="">
          <table>
            <thead>
              <tr>
                <th>sản phẩm</th>
                <th>giá</th>
                <th>số lượng</th>
                <th>chọn</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>bún mộc</td>
                <td>15000</td>
                <td>5</td>
                <td>xóa</td>
              </tr>
            </tbody>
          </table>
        </form>
        <div class="container-price">
          <div class="price-total"></div>
          <a href="./ThanhToan.html">thanh toán</a>
        </div>
      </section>
    </div>
  );
}

export default Cart;
