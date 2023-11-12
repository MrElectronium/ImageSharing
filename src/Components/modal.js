
import './modal.css';
import { useState ,useRef,useContext, useEffect} from 'react';
import picsCtx from './picsstore';

function Modal(props)
{
    var defaulimg="./image.svg";
    if(props.modes.src)
    {
    defaulimg=props.modes.src;
    }
    var [selectedImage, setSelectedImage] = useState(defaulimg);
    const picsfnc=useContext(picsCtx);
    const fileInputRef = useRef();
    const textarea=useRef();
       // Dosya seçme işlemini başlatan işlev
    const handleImageSelect = () => {
      fileInputRef.current.click();
    };
  
    // Resim seçildiğinde bu işlev çağrılacak
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
  
      if (file) 
      {         
          setSelectedImage(URL.createObjectURL(file));
        };       
    };
    const modifypic=()=>
    {
      if(props.modes.mode===0)
          picsfnc.addPic(textarea.current.value,selectedImage);
          else if(props.modes.mode===1)
          picsfnc.modPic(props.modes.id,textarea.current.value,selectedImage);
          props.openmodal(false);
    }
    useEffect(()=>{
      textarea.current.value=props.modes.content;
    })
   
    return (
    <>
    <div className="modal">    
    <div className='modalcontainer'>
    <button className='extbtn' onClick={()=>props.openmodal(false)}>x</button>
       
       <div style={{textAlign:'center'}}>
        <img alt="SelectedPicture" className="selectedimg" onClick={handleImageSelect}  src={selectedImage} ></img><br/>
        <input type="file" ref={fileInputRef} style={{ display: 'none' }}  onChange={handleImageUpload}  accept="image/*" /><br/>
        <textarea className='txtarea' ref={textarea}  placeholder="Resmin açıklaması..." id="content"></textarea>
        <br/><button onClick={()=>{modifypic()
          }} className='button' >{props.modes.title}</button>
       </div>
        </div>    
    </div>
    </>
    );
}
export default Modal;