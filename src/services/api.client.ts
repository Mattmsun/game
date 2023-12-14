import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"bad296982aaa4fb5a1b2df7f4d59ea17"
    }
})