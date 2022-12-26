import React from "react";
import "./../css/customer.css";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { useEffect, useState } from "react";
import { getListFoodByStore } from "./../api";
import { useParams } from "react-router-dom";
function ListFood() {
  var { id } = useParams();
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    getListFoodByStore(id).then((res) => {
      setFoods(res.data);
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
      <div className="listfood">
        {foods.map((food) => {
          return (
            <div className="foodItem">
              <h2 className="nameFood">Món ăn: {food.TenMon}</h2>
              <p className="price">Giá: {food.Gia / 1000}đ</p>
              <p>
                Tình trạng món: <span>{food.TinhTrangMon}</span>
              </p>
              <button>Thêm vào giỏ hàng</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListFood;
