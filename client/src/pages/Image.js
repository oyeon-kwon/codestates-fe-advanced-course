import './image.css';

function Image ({ images }) {
  // TODO: 무한 스크롤 구현
  return (
    <div className='image-container'>
      {
        images.map((image, id) => {
          return (
            <>
              <img src={image.url} key={id} alt='image' />
            </>
          );
        })
      }
    </div>
  );
}

export default Image;
