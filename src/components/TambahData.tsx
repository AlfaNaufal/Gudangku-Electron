import NavBar from "./Template/Navbar";
import Footer from "./Template/Footer";
import { inputData, getDatasData } from "./database/model";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const TambahData = () =>{

    const Navigate = useNavigate()
    const [formValue, setFormValue] = useState({
        id_jenis: '',
        id: '',
        nama: '',
        gambar: ''

    })

    const [datasLength, setDatasLength] = useState(0)

    useEffect(() => {
        fetchDatasData()
    }, [])

    const handleSubmittedForm = (e: { preventDefault: () => void }) => {
        e.preventDefault()

        addData()
        Navigate("/alat")
    }

    const addData = async () => {
        try {
            console.log(formValue)
            const payload ={
            id_jenis: formValue.id_jenis,
            id: parseInt(formValue.id),
            nama: formValue.nama,
            gambar: formValue.gambar
            }
            await inputData("datas", payload )
            }catch(error){
                console.error(error)
            }
        }

        const fetchDatasData = async () => {
            try {
                const result = await getDatasData()
                setDatasLength(result?.data.length)
            } catch (error) {
                console.error(error)
            }
        }
    

    return(
    <>
    <NavBar />
    <div className="mx-auto d-flex justify-content-center align-items-center w-100">

        <div className="container mt-3 w-100 ">

            <div className="w-50 mx-auto">
                <h1 className="mb-2">Tambah Data Alat</h1>
            </div>

            <form onSubmit={handleSubmittedForm} className="mx-auto mb-5 w-50">

                <div className="mb-3">
                    <label className="form-label w-100">ID Jenis<input type="text" onChange={(e) => setFormValue({ ...formValue, id_jenis: e.target.value })} value={formValue.id_jenis} placeholder="Masukkan Id Jenis(1=>Proyektor, 2=>Speaker, 3=>Bersih)" className="form-control w-100" /></label>
                </div>
                <div className="mb-3">
                    <label className="form-label w-100">ID Barang<input type="text" onChange={(e) => setFormValue({ ...formValue, id: e.target.value })} value={formValue.id} placeholder={`masukkan ID Barang (ID terakhir ${datasLength} )`} className="form-control w-100" /></label>
                </div>
                <div className="mb-3">
                    <label className="form-label w-100">Nama Barang<input type="text" onChange={(e) => setFormValue({ ...formValue, nama: e.target.value })} value={formValue.nama} placeholder="Masukkan nama barang" className="form-control w-100" /></label>
                </div>
                <div className="mb-3">
                    <label className="form-label w-100">Gambar<input type="text" onChange={(e) => setFormValue({ ...formValue, gambar: e.target.value })} value={formValue.gambar} placeholder="Projector.png/bersih.png/speaker.jpg" className="form-control w-100" /></label>
                </div>
                    <button className="btn btn-primary">Tambah</button>
            </form>

        
        </div>

    </div>
    
    <Footer />
    </>
    )
}

export default TambahData;