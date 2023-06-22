import { Axios } from "../config";

export const testConnection = async () => {
    try {
        const res = await Axios.get("connection");
        console.log(res);
        return { data: res.data, error: false };
    }   catch (error) {
        return { data: [], error: true };
    }
};


export const postClient = async (data, setMethod) => {
    try {
      const res = await Axios.post('requete', data).then(res=>{
        setMethod(res.data);
        console.log(res.data);
      });
    } catch (err) {
      console.error(err);
    }
  };