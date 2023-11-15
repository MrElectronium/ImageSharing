import './topbar.css'
import ProfileModal from './profilemodal';
import { useState } from 'react';
function Topbar(props)
{
    let about=props.userdata.about;
    const maxchar=100;
    const [profilemodal,setProfileModal]=useState(false);
    if(about.length>maxchar)
    about=about.slice(0,maxchar)+"...";
    
    return (
    <>
    <div className='topbar'>
        <div className='div1'>
            <img alt="profileimg" className='profileimg' src={props.userdata.profileimg} ></img>
            </div>
        <label className='profilename'>{props.userdata.username}</label>
        <q className='description'>{about}</q>
        <div className='uploadedtimes'>            
        <img alt="optionsbtn" className='optionsbtn' src="../options.svg" onClick={()=>setProfileModal(true)}/>            
        <p >Uploaded {props.uploaded} images</p>        
        </div>
        
    </div>
    {profilemodal&&<ProfileModal openmodal={setProfileModal} userdata={props.userdata} setuserdata={props.setuserdata}/>}
    </>
    );
}
export default Topbar;