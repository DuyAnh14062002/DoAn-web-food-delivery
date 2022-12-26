import React from "react";
import { FiLogOut } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getStore } from "./../api";
import { useEffect, useState } from "react";
import ListFood from "./ListFood";
import "./../css/customer.css";
function Customer() {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    getStore().then((res) => {
      setStores(res.data);
    });
  }, []);
  const ShowFoodInStore = (id) => {
    return <ListFood id={id} />;
  };
  var count = 0;
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
      <section className="home" id="home">
        <h2>Cửa hàng gần bạn</h2>
        <div className="home__Container">
          {stores.map((store, index) => {
            // if(index === 10)
            // {
            //   break;
            // }
            return (
              <Link
                key={store.MaCuaHangID}
                to={`/ListFood/${store.MaCuaHangID}`}
                className=" box box-1"
                onClick={() => ShowFoodInStore(store.MaCuaHangID)}
              >
                <p className="store_name">Tên cửa hàng: {store.TenCuaHang}</p>
                <p className="store_address">Tình trạng: Còn hàng</p>
                <img src="https://6f3ebe2ff971707.cmccloud.com.vn/tour/wp-content/uploads/2022/01/bun-cha-ha-noi.jpg"></img>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Customer;
