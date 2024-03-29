import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T>{
    count:number;
    next:string | null
    results: T[]
}

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

    getAll=(requestConfig?:AxiosRequestConfig)=>{  
        return axiosInstance.get<FetchResponse<T>>(this.endPoint,requestConfig).then(res=>res.data)
    }
    post=(data:T)=>{
        return axiosInstance.post<T>(this.endPoint,data).then(res=>res.data)
    }

    get=(id:number | string)=>{
       return axiosInstance.get<T>(this.endPoint + "/" +id).then(res=>res.data)
    }

}