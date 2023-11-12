
import './modal.css';
import './fullmodal.css';
import { useState } from 'react';

function FindByID(pics,id)
{
    for(let i=0;i<pics.length;i++)
    {
        if(pics[i].id===id)
        {
            return i;
        }
    }
    return -1;
}
function FullModal(props)
{
    let defaultImg = "./image.svg";

    const picsData = props.pics;
    let selectedid=FindByID(picsData,props.id);
    const [id, setId] = useState(selectedid);
    if(props.id)
    {
        defaultImg=picsData[selectedid].src;
    }
    const [selectedImg, setIMG] = useState(defaultImg);
  
    const prevImg = () => {
      if (id - 1 >= 0) {
        setId(id - 1);
        setIMG(picsData[id - 1].src);
      }
    };
  
    const nextImg = () => {
      if (id + 1 < picsData.length) {
        setId(id + 1);
        setIMG(picsData[id + 1].src);
      }
    };
    
    return (
        <>
        <div className="modal">
          <div className='fullmodalcontainer'>
            <button className='extbtn' onClick={() => props.openmodal(false)}>x</button>
            <br />
            <div style={{ textAlign: 'center' }}>
              <img alt="SelectedPicture" className="fullselectedimg" src={selectedImg} />
              <span className='prev' onClick={prevImg}>❮</span>
              <span className='next' onClick={nextImg}>❯</span>
              <div className='contentarea' placeholder="Resmin açıklaması...">
                {picsData[id].content}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default FullModal;