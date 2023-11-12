import { useContext } from 'react';
import './imgcontainer.css';
import picsCtx from './picsstore';
function ImgContainer(props)
{
    const picsfnc=useContext(picsCtx);
    var content=props.content;
    var modify={title:"Güncelle",mode:1,id:props.id,src:props.src,content:content} 
    //mode:0 Ekleme
    //mode:1 Değiştirme 
    var defaulimg={src:props.src,content:props.content};    
    var selectedpicid=props.id;
    const maxchar=100;
    if(content&&content.length>maxchar)
    {
        content=content.slice(0,maxchar)+"...";
    }
    
    return (
    <>
    <div className="imgcon">
    
    <img className="img" id={props.id} src={props.src} onClick={()=>{
        props.setpic(selectedpicid);
        props.openfull(true);
    }}></img>
    <span onClick={()=>picsfnc.delPic(props.id)}>x</span>
    <span onClick={()=>{props.setmode(modify);props.openmodal(true);}}>≡</span>
    <div className="comment"> {content}</div>
    
    </div>
    </>
    );
}
export default ImgContainer;