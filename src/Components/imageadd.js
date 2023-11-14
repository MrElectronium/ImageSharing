import picsCtx from "./picsstore"
import './imageadd.css'
import { useContext } from "react";

function ImgAdd(props)
{
    const picsfnc=useContext(picsCtx);
    var moddata={title:"Resim Ekle",content:"Resim açıklaması",mode:0} 
    //mode:0 Ekleme
    //mode:1 Değiştirme 
    return(
        <>
        
        <img className="imgadd" src="./imageadd.jpg" onClick={()=>
        {
        props.setmode(moddata);    
        props.openmodal(true);
        }}/>
   
        </>
       
    )
}
export default ImgAdd;
