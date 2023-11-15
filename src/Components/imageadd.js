import './imageadd.css'

function ImgAdd(props)
{
    
    var moddata={title:"Resim Ekle",content:"Resmin Açıklaması...",mode:0} 
    //mode:0 Ekleme
    //mode:1 Değiştirme 
    return(
        <>
        
        <img alt="imageaddbtn" className="imgadd" src="./imageadd.jpg" onClick={()=>
        {
        props.setmode(moddata);    
        props.openmodal(true);
        }}/>
   
        </>
       
    )
}
export default ImgAdd;