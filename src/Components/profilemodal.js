
import './modal.css';
import { useState ,useRef, useEffect} from 'react';

function ProfileModal(props)
{
    var defaulimg="./image.svg";
    if(props.userdata.profileimg)
    {
    defaulimg=props.userdata.profileimg;
    }
    var [selectedImage, setSelectedImage] = useState(defaulimg);
    const fileInputRef = useRef();
    const textarea=useRef();
    const usernametext=useRef();
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
    const userdataupdate=()=>{
      let userdata={profileimg:selectedImage,username:usernametext.current.value,about:textarea.current.value}
      props.setuserdata(userdata);
    }
    useEffect(()=>{
      textarea.current.value=props.userdata.about;
      usernametext.current.value=props.userdata.username;
    })
   
    return (
    <>
    <div className="modal">    
    <div className='modalcontainer'>
    <button className='extbtn' onClick={()=>props.openmodal(false)}>x</button>
       
       <div style={{textAlign:'center'}}>
        <img alt="SelectedPicture" className="selectedimg" onClick={handleImageSelect}  src={selectedImage} ></img><br/>
        <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleImageUpload}  accept="image/*"></input>
        <label>Profil Adı:</label><br/><input type="text" ref={usernametext} placeholder='Profil Adı:' /><br/>
        <label>Hakkında:</label><br/><textarea className='txtarea' ref={textarea}  placeholder="Profil Açıklaması..." id="content"></textarea>
        <br/><button onClick={()=>{
          userdataupdate();
          props.openmodal(false);} } className='button' >Güncelle</button>
       </div>
        </div>    
    </div>
    </>
    );
}
export default ProfileModal;