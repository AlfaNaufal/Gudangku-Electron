import NavBar from "./Template/Navbar";
import Footer from "./Template/Footer";
import { editData, getDataById } from "./database/model";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const EditData = () =>{

    const {id} = useParams()
    const [formData, setFormData] = useState({ nama: ''});
    const navigate = useNavigate()

    useEffect(()=>{
        getDataById("datas", id)
        .then((data) =>{
            setFormData({nama: data?.nama})
        })
        .catch((error) =>{
            console.error(error)
        })
    }, [id])
    
    const handleSubmittedForm = (e: { preventDefault: () => void }) => {
        e.preventDefault()



        addData()
        navigate("/alat")
    }
    
    const addData = async () => {
        try {
            console.log(formData)
            await editData("datas", id, {
                nama: formData.nama,
            })
            }catch(error){
                console.error(error)
            }
    }

    return(
    <>
    <NavBar />
    <div className="container mx-auto d-flex justify-content-center align-items-center w-100 ">

        <div className="container mt-3 w-100">

            <div className="w-50 mx-auto">
                <h1 className="mb-2">Edit Data Alat</h1>
            </div>

            <form onSubmit={handleSubmittedForm} className="mx-auto mb-5 w-50">

                <div className="mb-3">
                    <label className="form-label w-100">Nama Barang<input type="text" onChange={(e) => setFormData({ ...formData, nama: e.target.value })} value={formData.nama} placeholder="Masukkan nama peminjam" className="form-control w-100" /></label>
                </div>
                    <button type="submit" className="btn btn-primary">Edit</button>
            </form>

        
        </div>

    </div>
    
    <Footer />
    </>
    )
}

export default EditData;