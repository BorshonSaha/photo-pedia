import './App.css';
import { useEffect, useState } from 'react';
import ImageCard from './Components/ImageCard/ImageCard';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

  const [img, setImg] = useState([]);
  const [name, setName] = useState('animal');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=22006682-3d7743a3a04cdb1673b3c030a&q=${name}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => setImg(data.hits))
    setLoading(false);
  },[name])

  return (
    <div className="container mx-auto">
      <h1 className="App font-bold text-green-500 text-5xl mt-5">Photo-Pedia</h1>
      <SearchBar searchText={(text) => setName(text)}></SearchBar>
      {!loading && img.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>}
      {loading ? <h1 className="text-5xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
        {img.map(image => <ImageCard image={image}></ImageCard>)}
      </div>}
    </div>
  );
}

export default App;
