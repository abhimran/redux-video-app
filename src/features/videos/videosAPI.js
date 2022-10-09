import axiosInstance from '../../utils/axios';

export const getVideos = async ({ tags, search, pageCount, author }) => {
  let queryString = '';

  if (tags?.length > 0) {
    queryString += tags.map((tag) => `&tags_like=${tag}`).join('&');
  }

  if (search !== '') {
    queryString += `&_q=${search}`;
  }

  if (author !== '') {
    queryString += `&author_like=${author}`;
  }

  const response = await axiosInstance.get(
    `/videos?_page=${pageCount}&_limit=5${queryString}`
  );
  return response.data;
};
