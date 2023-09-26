import NavBar from "./Template/Navbar";
import Footer from "./Template/Footer";
import { getData, deleteData } from "./database/model";
import { useState, useEffect } from "react";


const Riwayat = () => {


    const [datas, setDatas] = useState([])
    useEffect(() =>{
        fetchData()
    }, [])

    const fetchData =async () => {
        try {
            const result = await getData("riwayat")
            setDatas(result?.data)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>

        <NavBar />
        <div className="container">
            <h1 className="py-3">Riwayat Peminjaman</h1>

            <table className="table">
                <thead>
                    <tr className="table-primary">
                        <th >ID Peminjaman</th>
                        <th>Admin</th>
                        <th>Nama Peminjam</th>
                        <th>Kelas</th>
                        <th>No. Tlp</th>
                        <th>ID Barang</th>
                        <th>Jenis Barang</th>
                        <th>Batas waktu Pinjam</th>
                        <th>waktu Kembali</th>
                        <th>Hapus Data</th>
                    </tr>
                </thead>
                <tbody>
        {
                datas.map((data:any, index) => (
                    <tr key={index}>
                        <th>{data.id}</th>
                        <th>{data.admin}</th>
                        <th>{data.nama}</th>
                        <th>{data.kelas}</th>
                        <th>{data.no_tlp}</th>
                        <th>{data.id_barang}</th>
                        <th>{data.jenis}</th>
                        <th>{data.durasi}</th>
                        <th>{data.kembali}</th>
                        <th><button type="button" onClick={() => deleteData("riwayat", data.id)} className="btn btn-danger">Hapus</button></th>
                    </tr>
        ))
        }
                </tbody>
            </table>
        </div>
        <Footer />
        </>
    )


}

export default Riwayat;