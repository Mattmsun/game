import useGenre from "./useGenre";

const useSingleGenre = (id?:number)=>{
    const { data: genres } = useGenre();
    return genres.results.find((r) => r.id === id);
}
export default useSingleGenre