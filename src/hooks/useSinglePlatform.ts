import usePlatform from "./usePlatform";

const useSinglePlatform = (id?:number)=>{
    const { data: platforms } = usePlatform();
    return  platforms.results.find((r) => r.id === id);
}
export default useSinglePlatform