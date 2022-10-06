import { api } from "./api";

async function GetList(){
        try{
            const response = await api.get('/')
            console.log(response.data)
        }
        catch(error){
            console.error(error)
        }
    }

export default GetList;