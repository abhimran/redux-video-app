import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice';
import RelatedVideoListItem from './RelatedVideoListItem';

export default function RelatedVideoList({ currentVideoId, tags }) {
  const dispatch = useDispatch();

  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideo
  );

  useEffect(() => {
    dispatch(fetchRelatedVideos({ id: currentVideoId, tags }));
  }, [dispatch, tags, currentVideoId]);

  let content;

  if (isLoading) content = <div className='col-span-12'>Loading..</div>;
  if (!isLoading && isError)
    content = <div className='col-span-12'>{error}</div>;
  if (!isLoading && !isError && relatedVideos?.length === 0)
    content = <div className='col-span-12'>No videos found!</div>;
  if (!isLoading && !isError && relatedVideos?.length > 0) {
    content = relatedVideos.map((video) => (
      <RelatedVideoListItem key={video.id} video={video} />
    ));
  }

  return (
    <div class='col-span-full lg:col-auto max-h-[570px] overflow-y-auto'>
      {content}
    </div>
  );
}
