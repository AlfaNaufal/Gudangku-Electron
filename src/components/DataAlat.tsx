import NavBar from "./Template/Navbar";
import Footer from "./Template/Footer";
import { getData, deleteData } from "./database/model";
import { useState, useEffect } from "react";

const DataAlat = () =>{

    const [datas, setDatas] = useState([])
    useEffect(() =>{
        fetchData()
    }, [])

    const fetchData =async () => {
        try {
            const result = await getData("datas")
            setDatas(result?.data)
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <>
        <NavBar />
        <div className="container">
            <h1 className="mt-3">Data Alat &Barang</h1>


            <div className="mb-2 mt-2 d-md-flex justify-content-md-end">
                <a href="/tambahData"><button type="button" className="btn btn-success">Tambah Data</button></a>
            </div>
            <table className="table">
                <thead>
                    <tr className="table-primary">
                        <th>No</th>
                        <th>ID Jenis</th>
                        <th >ID Barang</th>
                        <th>Nama</th>
                        <th>Edit</th>
                        <th>Hapus</th>
                    </tr>
                </thead>
                <tbody>
        {
                datas.map((data:any, index) => (
                    <tr key={index}>
                        <th>{index + 1}</th>
                        <th>{data.id_jenis}</th>
                        <th>{data.id}</th>
                        <th>{data.nama}</th>
                        <th><a href={`/editData/${data.id}`}><button type="button" className="btn btn-primary">Edit</button></a></th>
                        <th><button type="button" onClick={() => deleteData("datas", data.id)} className="btn btn-danger">Hapus</button></th>
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

export default DataAlat;