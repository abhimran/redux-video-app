import { useDispatch, useSelector } from 'react-redux';
import { pageClicked } from '../../features/paginate/paginateSlice';

const paginateData = [1, 2, 3];

export default function Pagination() {
  const dispatch = useDispatch();

  const { pageCount } = useSelector((state) => state.paginate);

  const handlePageClick = (value) => {
    dispatch(pageClicked(value));
  };

  return (
    <section className='pt-12'>
      <div className='max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end '>
        {paginateData.map((page) => (
          <div
            key={page}
            className={`${
              pageCount === page
                ? 'bg-blue-600 text-white'
                : 'bg-blue-100 text-blue-600'
            }  px-4 py-1 rounded-full cursor-pointer`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </div>
        ))}
      </div>
    </section>
  );
}
