import ImgContainer from "./imagecontainer"
import './images.css';
import Modal from './modal'
import FullModal from './fullmodal'
import Imgadd from './imageadd';
import ProfileModal from "./profilemodal";
import { useState,useContext } from 'react';
import picsCtx from "./picsstore";
function Images(props)
{
    const picsfnc=useContext(picsCtx);
    const [openmodal,setOpenModal]=useState(false);
    const [fullmodal,setFullModal]=useState(false);   
    const [mode,setMode]=useState({title:"Resim Ekle",mode:0});
    const [selectedPicID,setPicID]=useState(0);
    if(props.imgs.length>0)
    {
        return (
            <>            
            <div className="image">
            <Imgadd openmodal={setOpenModal} setmode={setMode}/>
                      {props.imgs.map(
            (image)=>{
                return <ImgContainer openmodal={setOpenModal} openfull={setFullModal} setmode={setMode} setpic={setPicID} key={"images"+image.id} id={image.id} src={image.src} content={image.content}/>
            })}      
            {openmodal&&<Modal openmodal={setOpenModal}  modes={mode} />}
            {fullmodal&&<FullModal openmodal={setFullModal} id={selectedPicID} pics={props.imgs}/>}
            
            </div>
            </>)
            
    }       
}
export default Images;