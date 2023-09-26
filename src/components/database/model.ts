import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const getData =async (category:string) => {
    
    try {
        const result = await axios.get(`${BASE_URL}/${category}`)
        return result;
    } catch (error) {
        console.error(error);
    }
}
export const getDataById =async (category:string, id:any) => {
    
    try {
        const result: any = await axios.get(`${BASE_URL}/${category}/${id}`)
        return result
    } catch (error) {
        console.error(error);
    }
}

export const getBorrowData  = async () => {
    
    try {
        const result = await axios.get(`${BASE_URL}/pinjam`)
        return result;
    } catch (error) {
        console.error(error);
    }
}
export const getDatasData  = async () => {
    
    try {
        const result = await axios.get(`${BASE_URL}/datas`)
        return result;
    } catch (error) {
        console.error(error);
    }
}

export const inputData =async (category:string, data:any) => {
    
    try {
        const result = await axios.post(`${BASE_URL}/${category}`, data)
        window.location.reload()
        return result;
    } catch (error) {
        console.error(error);
    }
    
}

export const deleteData =async (category:string, id:string) => {
    
    try {
        const result = await axios.delete(`${BASE_URL}/${category}/${id}`)
        alert(`Hilang!`)
        window.location.reload()
        return result;
    } catch (error) {
        console.error(error);
    }
}

export const editData =async (category:string, id:any, data:any) => {
    
    try {
        const result = await axios.patch(`${BASE_URL}/${category}/${id}`, data)
        alert(`Henshin!!!`)
        
        return result;
    } catch (error) {
        console.error(error);
    }
}