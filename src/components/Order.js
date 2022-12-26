import React from "react";
import "./../css/customer.css";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { useEffect, useState } from "react";
import { getOrdersByCustomerId } from "./../api";
function Order() {
  const [orders, setOrder] = useState([]);
  useEffect(() => {
    getOrdersByCustomerId(1).then((res) => {
      setOrder(res.data);
    });
  }, []);
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
      <div className="main-order">
        <h2>Đơn hàng của bạn</h2>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên khách hàng</th>
              <th>Tên cửa hàng</th>
              <th>Địa chỉ giao hàng</th>
              <th>SĐT</th>
              <th>Ngày đặt</th>
              <th>Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              return (
                <tr>
                  <td>{index}</td>
                  <td>{order.HoTen}</td>
                  <td>{order.TenCuaHang}</td>
                  <td>{order.TenCuaHang}</td>
                  <td>{order.SDT}</td>
                  <td> {order.NgayDat}</td>
                  <td>{order.TongTien}đ</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Order;
