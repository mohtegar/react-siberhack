// PembayaranPage.js
import React, { useState } from "react";

const PembayaranPage = () => {
  const [formData, setFormData] = useState({
    nama: "",
    nomorKartu: "",
    tanggalKadaluarsa: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika untuk menangani proses pembayaran, misalnya mengirim data ke backend
    console.log("Data Pembayaran:", formData);
    // Lakukan logika pembayaran atau pengiriman data pembayaran ke server di sini
  };

  return (
    <div>
      <h1 className="text-center fw-bold">Payment Kelas<span className="text-danger">SiberHack</span></h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama:</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Nomor Kartu Kredit:</label>
          <input
            type="text"
            name="nomorKartu"
            value={formData.nomorKartu}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Tanggal Kadaluarsa:</label>
          <input
            type="text"
            name="tanggalKadaluarsa"
            value={formData.tanggalKadaluarsa}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Bayar</button>
      </form>
    </div>
  );
};

export default PembayaranPage;
