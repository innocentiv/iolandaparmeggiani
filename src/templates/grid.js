import React from 'react';
import HomeGrid from '../components/HomeGrid'

export default function Tags({ pathContext }) {
  const { posts } = pathContext;
  return (
    <HomeGrid posts={posts} />
  );
}
