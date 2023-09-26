import NavBar from "./Template/Navbar";
import Footer from "./Template/Footer";
import { deleteData, getData, getDataById,inputData } from "./database/model";
import { useEffect, useState } from "react";


const DataPinjam = () => {

    const [datas, setDatas] = useState([])
    useEffect(() =>{
        fetchData()
    }, [])

    const fetchData =async () => {
        try {
            const result = await getData("pinjam")
            setDatas(result?.data)
        } catch (error) {
            console.error(error);
        }
    }

    const selesaikan = async (id: string) => {
        const {data} = await getDataById('pinjam', id)
        const sekarang = new Date
        const payload = {
            id: id,
            admin: data.admin,
            nama: data.nama,
            kelas: data.kelas,
            no_tlp: data.no_tlp,
            id_barang: data.id_barang,
            jenis: data.jenis,
            durasi: data.durasi,

            kembali: `${sekarang.toLocaleTimeString()}`}
            
        await deleteData('pinjam', id)
            await inputData('riwayat',payload )
    }

    return (
        <>

        <NavBar />
        <div className="container">
            <h1>Data Peminjaman</h1>

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
                        <th>Selesai</th>
                    </tr>
                </thead>
                <tbody>
        {
                datas.map((data:any , index) => (
                    <tr key={index}>
                        <th>{data.id}</th>
                        <th>{data.admin}</th>
                        <th>{data.nama}</th>
                        <th>{data.kelas}</th>
                        <th>{data.no_tlp}</th>
                        <th>{data.id_barang}</th>
                        <th>{data.jenis}</th>
                        <th>{data.durasi}</th>
                        <th><button className="btn btn-info" onClick={() => selesaikan(data.id)} >Selesaikan</button></th>
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

export default DataPinjam;