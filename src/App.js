
import './App.css';
import Topbar from './Components/topbar'
import Images from './Components/images';
import React from 'react';
import uuid from 'react-uuid';
import arr from './mock.js'
import picctx from './Components/picsstore.js';
import { useState } from 'react';
function App() {
  var [pics,setPics]=useState(arr);
  const addPic = (text,filesrc) => {
    if (text && filesrc) {
      let id=uuid().replaceAll("-","").slice(7);
      setPics((prevPics) => [...prevPics, { id: id, src: filesrc, content: text}]);
      console.log(pics);
    }
  };
  const delPic = (id) => {
    let index=-1;
    for(let i=0;i<pics.length;i++)
    {
     if(pics[i].id===id)
     {
      index=i;
      break;
     }     
    }
    if(index===-1)return;
    const updatedPictures = [...pics];
    if(index>0)
    updatedPictures.splice(index, 1);
    setPics(updatedPictures);
  };
  const modPic=(id,content,src)=>{
    let index=-1;
    for(let i=0;i<pics.length;i++)
    {
     if(pics[i].id===id)
     {
      index=i;
      break;
     }     
    }
    if(index===-1)return;
    const updatedPictures = [...pics];
    updatedPictures[index].src=src;
    updatedPictures[index].content=content;
    setPics(updatedPictures);
  }
  return (
    <>   
      <picctx.Provider value={{modPic,addPic,delPic,pics}}>
    <Topbar src='out.png' username="Cici Kuş" about="Doğal ortamlarında ağırlıklı olarak tohumla beslenen bu tür, Avustralya'nın kurak .." uploaded={pics.length}/>
     <Images imgs={pics}/>
     </picctx.Provider>
    </>
    
  );
}

export default App;
