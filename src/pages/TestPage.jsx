import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Container, Table, Pagination } from 'react-bootstrap';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const fetchData = async (page) => {
  const response = await axios.get(API_URL, {
    params: {
      _page: page,
      _limit: 10 // Limiting to 10 items per page
    }
  });
  return response.data;
};

const heavyComputation = (data) => {
  // Simulated heavy computation
  const startTime = Date.now();
  // Perform heavy computation here
  const computedDetails = `${data.title.toUpperCase()} - Length: ${data.title.length}`;
  const endTime = Date.now();
  console.log(`Heavy computation took ${endTime - startTime} milliseconds`);
  return computedDetails;
};

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchDataAndSetPosts = async () => {
      const data = await fetchData(currentPage);
      setPosts(data);
    };

    fetchDataAndSetPosts();
  }, [currentPage]);

  useEffect(() => {
    const fetchTotalPages = async () => {
      const response = await axios.get(API_URL);
      const totalPosts = response.headers['x-total-count'];
      const totalPagesCount = Math.ceil(totalPosts / 10); // Assuming 10 items per page
      setTotalPages(totalPagesCount);
    };

    fetchTotalPages();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const memoizedComputation = useMemo(() => heavyComputation, []);

  return (
    <Container className="text-center">
      <h1 className="mt-5 mb-3">Post List</h1>
      <Table bordered striped hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{memoizedComputation(post)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination className="mt-4 justify-content-center">
        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
        {Array.from({ length: totalPages }).map((_, index) => (
          <Pagination.Item
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            active={index + 1 === currentPage}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
      </Pagination>
    </Container>
  );
};

export default PostList;
