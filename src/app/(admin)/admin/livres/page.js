import ListLivres from '@/components/admin/listLivres';
const getBooks=async()=>{
const response = await fetch(process.env.URL +"/api/livres", { cache: 'no-store' });
console.log(response);
const data = await response.json();
console.log(data);
return data;
}
const LivrePage = async() =>{
const livres=await getBooks()
return (
<div className="container">
<ListLivres livres={livres}/>
</div>)
}
export default LivrePage