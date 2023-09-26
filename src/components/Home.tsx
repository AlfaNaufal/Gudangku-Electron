import NavBar from "./Template/Navbar";
import Footer from "./Template/Footer";
import { getData } from "./database/model";
import { useEffect, useState } from "react";

const Home = () => {
  
  // let proyektor, speaker, bersih: any = []
  const [proyektors, setProyektors] = useState([])
  const [speakers, setSpeakers] = useState([])
  const [bersihs, setBersihs] = useState([])

  const [datas, setDatas] = useState<any[]>([])
  useEffect(() =>{
    fetchData()
      const proyektor: any = datas.filter((barang: any) => barang.id_jenis === "1" )
      const speaker: any = datas.filter((barang: any) => barang.id_jenis === "2")
      const bersih: any = datas.filter((barang: any) => barang.id_jenis === "3" )
      setProyektors(proyektor)
      setSpeakers(speaker)
      setBersihs(bersih)
  }, [datas])

  const fetchData =async () => {
    try {
        const result = await getData("datas")
        setDatas(result?.data)
    } catch (error) {
        console.error(error);
    }
}



  
  return (
    <div className="w-full bg-secondary text-light">
      
      <NavBar />

      <div className="container">
      <h1 className="">Peminjaman Barang</h1>

        <h3>Proyektor</h3>
        <div className="row">
          {
            proyektors?.map((proyektor: any, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card" style={{ width: '18rem' }}>
                  <img src={`../../${proyektor.gambar}`} className="card-img-top" alt="" />
                  <div className="card-body text-center">
                    <h5 className="card-title">{`${proyektor.nama}`}</h5>
                    <a href={`/pinjam/${proyektor.id}`} className="btn btn-primary">
                      Pinjam
                    </a>
                  </div>
                </div>
              </div>
            ))

          }
        </div>
      </div>

      <div className="container">
        <h3>Speaker</h3>
        <div className="row">
          {
            speakers?.map((suara: any, index) => (
              <div key={index} className="col-md-4 mb-4">
                      <div className="card" style={{ width: '18rem' }}>
                        <img src={`../../${suara.gambar}`} className="card-img-top" alt="" />
                        <div className="card-body text-center">
                          <h5 className="card-title">{`${suara.nama}`}</h5>
                          <a href={`/pinjam/${suara.id}`} className="btn btn-primary">
                            Pinjam
                          </a>
                        </div>
                      </div>
                    </div>
            ))

          }
        </div>
      </div>

      <div className="container">
        <h3>Alat Kebersihan</h3>
        <div className="row">
          {
            bersihs?.map((bersih: any, index) => (
              <div key={index} className="col-md-4 mb-4">
                      <div className="card" style={{ width: '18rem' }}>
                        <img src={`../../${bersih.gambar}`} className="card-img-top" alt="" />
                        <div className="card-body text-center">
                          <h5 className="card-title">{bersih.nama}</h5>
                          <a href={`/pinjam/${bersih.id}`} className="btn btn-primary">
                            Pinjam
                          </a>
                        </div>
                      </div>
                    </div>
            ))

          }
        </div>
      </div>



      <Footer />
    </div>
  
  );
};

export default Home;
