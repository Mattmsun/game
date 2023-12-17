import axios, { AxiosRequestConfig } from "axios";

const axiosInstance =  axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"bad296982aaa4fb5a1b2df7f4d59ea17"
    }
})

export default class ApiClient<T>{
    constructor(public endPoint: string){
        this.endPoint = endPoint
        
    }

    getAll=()=>{  
        return axiosInstance.get<T>(this.endPoint).then(res=>res.data)
    }
    get=(requestConfig?:AxiosRequestConfig)=>{  
        return axiosInstance.get<T>(this.endPoint,{...requestConfig}).then(res=>res.data)
    }
    post=(data:T)=>{
        return axiosInstance.post<T>(this.endPoint,data).then(res=>res.data)
    }

}