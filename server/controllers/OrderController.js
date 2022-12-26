const db = require("../config/db");
class OrderController {
  async getOrderDetail(req, res) {
    try {
      // make sure that any items are correctly URL encoded in the connection string
      let pool = await db.db;
      let orderID = req.params.id;
      let stores = await pool.request().query(`
            select m.TenMon, ctdh.SoLuong, m.Gia      
            from CHITIETDONDATHANG ctdh join MONAN m on ctdh.MaMonID = m.MaMonID join DONDATHANG dh on dh.MaDonHangID = ctdh.MaDonHangID 
            where dh.MaDonHangID = '${orderID}'
            `);
      res.json(stores.recordsets[0]);
    } catch (err) {
      console.log(err);
    }
  }

  async getOrdersByCustomerId(req, res) {
    try {
      // make sure that any items are correctly URL encoded in the connection string
      let pool = await db.db;
      let customerID = req.params.id;
      let store = await pool.request().query(`
            select kh.HoTen, ch.TenCuaHang, dh.DiaChiGiaoHang, kh.SDT, dh.NgayDat, dh.TongTien
            from DONDATHANG dh join KHACHHANG kh on dh.MaKhachHangID = kh.MaKhachHangID join CUAHANG ch on dh.MaCuaHangID = ch.MaCuaHangID
            where kh.MaKhachHangID = '${customerID}'`);
      res.json(store.recordsets[0]);
    } catch (err) {
      console.log(err);
    }
  }

  // async addOrder(req, res){
  //     try {
  //         // make sure that any items are correctly URL encoded in the connection string
  //         let pool = await db.db
  //         let store = {...req.body}[0]
  //         let insertStore = await pool.request().query(`
  //         insert into CUA_HANG (ID_CuaHang, ID_HopDong, TenCuaHang, TgDoiTen, TgHoatDong, TinhTrangCuaHang)
  //         values ('${store.ID_CuaHang}', '${store.ID_HopDong}', N'${store.TenCuaHang}', '${store.TgDoiTen}', N'${store.TgHoatDong}', N'${store.TinhTrangCuaHang}')
  //         `)
  //         res.json('Success')
  //     } catch (err) {
  //         console.log(err)
  //         res.json(err)
  //     }
  // }
}

module.exports = new OrderController();
