import './topbar.css'
function Topbar(props)
{
    let about=props.about;
    const maxchar=100;
    if(about.length>maxchar)
    about=about.slice(0,maxchar)+"...";
    return (
    <>
    <div className='topbar'>
        <div className='div1'>
            <img className='profileimg' src={props.src} ></img>
            </div>
        <label className='profilename'>{props.username}</label>
        <q className='description'>{about}</q>
        <p className='uploadedtimes'>Uploaded {props.uploaded} images</p>
    </div>
    </>
    );
}
export default Topbar;