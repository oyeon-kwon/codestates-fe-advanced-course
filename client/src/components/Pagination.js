import './pagination.css';

function Pagination ({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <div className='page-nav'>
        <div className='button' onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </div>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <div
              className={page === i + 1 ? 'button focused' : 'button'}
              key={i + 1}
              onClick={() => {
                  setPage(i + 1)
                  window.scrollTo(0,0)
              }    
            }
            >
              {i + 1}
            </div>
          ))}
        <div className='button' onClick={() => setPage(page + 1)} >
          &gt;
        </div>
      </div>
    </>
  );
}

export default Pagination;
