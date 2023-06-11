import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import IconButton from '@mui/material/IconButton';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import GalleryImg1 from '../../public/assets/portfolio/showers and offices_divisions/IMG-20190702-WA0026.jpg';
import GalleryImg2 from '../../public/assets/portfolio/showers and offices_divisions/IMG-20200827-WA0015.jpg';
import GalleryImg3 from '../../public/assets/portfolio/showers and offices_divisions/IMG-20190410-WA0007.jpg';
import GalleryImg4 from '../../public/assets/portfolio/offices/IMG_20190619_152148.jpg';
import GalleryImg5 from '../../public/assets/portfolio/mirrors/IMG_20200315_104516.jpg';
import GalleryImg6 from '../../public/assets/portfolio/mirrors/SAVE_20200620_122144.jpg';


export default function CustomImageList() {
  const [open, setOpen] = React.useState(null);
  
  const handleOpen = (imgSrc) => {
    setOpen(imgSrc);
  };
  const handleClose = () => {
    setOpen(null);
  };
  
  return(
    <div className="flex flex-col justify-center items-center sm:items-start sm:mr-[23%] w-screen sm:w-[70%]">
      <div className='grid text-center mt-16 sm:mt-5 place-items-center w-full'>
        <h1 className="text-6xl font-verla">תיק עבודות</h1>
        <h4 className='text-2xl font-verla'>אומנות בזכוכית</h4>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-3 xl:w-full items-center h-auto mt-12 pb-12'>
        <div className='col-span-1 h-auto min-w-96'>
          <img 
          src={`${GalleryImg1}`} 
          alt="מחיצה משרדית" 
          className='w-96 min-w-96 h-96 rounded-xl'
          onClick={() => handleOpen(GalleryImg1)}
          />
        </div>
        <div className='col-span-1 h-auto min-w-96'>
          <img 
          src={`${GalleryImg2}`} 
          alt="מקלחון זכוכית קבועה" 
          className='w-96 min-w-96 h-96 rounded-xl'
          onClick={() => handleOpen(GalleryImg2)}
          />
        </div>
        <div className='col-span-1 h-auto min-w-96'>
          <img 
          src={`${GalleryImg3}`} 
          alt="מקלחון זכוכית" 
          className='w-96 min-w-96 h-96 rounded-xl'
          onClick={() => handleOpen(GalleryImg3)}
          />
        </div>
        <div className='col-span-1 h-auto min-w-96'>
          <img 
          src={`${GalleryImg4}`} 
          alt="מקלחון זכוכית" 
          className='w-96 min-w-96 h-96 rounded-xl'
          onClick={() => handleOpen(GalleryImg4)}
          />
        </div>
        <div className='col-span-1 h-auto min-w-96'>
          <img 
          src={`${GalleryImg5}`} 
          alt="מקלחון זכוכית" 
          className='w-96 min-w-96 h-96 rounded-xl'
          onClick={() => handleOpen(GalleryImg5)}
          />
        </div>
        <div className='col-span-1 h-auto min-w-96 '>
          <img 
          src={`${GalleryImg6}`} 
          alt="מקלחון זכוכית" 
          className='w-96 min-w-96 h-96 rounded-xl'
          onClick={() => handleOpen(GalleryImg6)}
          />
        </div>
        <Modal
        open={open !== null}
        onClose={handleClose}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            position: 'relative', 
            height: '100vh' 
          }}
        >
          <img 
            src={open} 
            alt='Enlarged' 
            style={{ 
              maxHeight: '80vh', 
              maxWidth: '80vw' 
            }} 
          />
          <div 
            style={{ 
              position: 'absolute', 
              top: '10px', 
              right: '10px', 
              cursor: 'pointer',
              fontSize: '2rem',
              color: 'white',
              background: 'rgba(0,0,0,0.5)',
              borderRadius: '50%'
            }}
            onClick={handleClose}
          >
            X
          </div>
        </Box>
      </Modal>

      </div>
    </div>
  );
}


// const itemData = [
//   {
//     img: `${GalleryImg1}`,
//     title: 'מחיצה משרדית',
//     author: '',
//     featured: true,
//   },
//   {
//     img: `${GalleryImg2}`,
//     title: 'מקלחון זכוכית קבועה',
//     author: '',
//   },
//   {
//     img: `${GalleryImg3}`,
//     title: 'מקלחון זכוכית',
//     author: '',
//   },
//   {
//     img: `${GalleryImg4}`,
//     title: 'מחיצת פרטיות משרדית',
//     author: '',
//   },
//   {
//     img: `${GalleryImg5}`,
//     title: 'מראה ווניציאנית',
//     author: '',
//   },
//   {
//     img: `${GalleryImg6}`,
//     title: 'מראה איטלקית',
//     author: '',
//     featured: true,
//   },
//   {
//     img: `${GalleryImg7}`,
//     title: 'מראת חדר שינה מרובעת עם לדים',
//     author: '',
//   },
//   {
//     img: `${GalleryImg8}`,
//     title: 'מדפי זכוכית',
//     author: '',
//   },
//   {
//     img: `${GalleryImg9}`,
//     title: 'מדפי זכוכית',
//     author: '',
//   },
//   {
//     img: `${GalleryImg10}`,
//     title: 'חיפוי זכוכית מעוצב',
//     author: '',
//   },
//   {
//     img: `${GalleryImg11}`,
//     title: 'מחיצת פרטיות מלאה משרדית עם פרזול שחור',
//     author: '',
//   },
//   {
//     img: `${GalleryImg12}`,
//     title: 'מקלחון פרזול שחור',
//     author: '',
//   },
// ];