// Popular.js
import React, { useState, useEffect } from 'react';
import PopularPost from '../pages_components/popularPost';
import StComponents from '../standard_components/st_components';
import './popular.css';

function Popular() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const url = 'https://www.reddit.com/r/popular.json';
            const response = await fetch(url);
            const json = await response.json();
            setPosts(json.data.children.map(child => child.data));
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <StComponents />
            <div className="main-content">
                <h2 className="main-title">Post Popolari</h2>
                <div className="posts-scrollable">
                    {posts.map(post => (
                        <PopularPost
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            imageUrl={post.thumbnail === 'self' || post.thumbnail === 'default' ? null : post.thumbnail}
                            likes={post.ups}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Popular;
