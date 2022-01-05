import { type } from 'os';
import React, { useEffect, useState } from 'react';
import Tabledata from './components/table';
function App() {
  const [emptyarray, setEmptyarray]=useState<Array<Array<string | number>>>([]);

  let arr:Array<Array<string | number>> = [];
  useEffect(() => {
    fetch(
        "https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/top-rated-indian-movies-01.json")
        .then((res) => res.json())
        .then((json) => {
            for (let i in json) {
                arr.push([
                    json[i].title,
                    json[i].actors,
                    json[i].imdbRating,
                    json[i].year,
                    <img src={json[i].posterurl} height="100" width="150" />
                ]);
            }
            setEmptyarray(arr);

        });
}, []);
 
  return <>
     <Tabledata
     columns={[
      'Title',
      'Actors',
      'Rating',
      'Year',
      'Image'
  ]}
  rows={emptyarray}
     />   
  </>
}

export default App;
