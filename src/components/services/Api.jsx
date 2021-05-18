import axios from 'axios';

const fetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 9 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=20678910-4bf7e071ea6bce7ee5607a0cc&image_type=photo&orientation=horizontal&per_page=${pageSize}`,
    )
    .then(response => response.data.hits);
};

export default { fetchImages };
