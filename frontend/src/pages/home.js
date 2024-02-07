import React, { useState, useEffect } from 'react';
import Post from '../pages_components/post';
import StComponents from '../standard_components/st_components';
import SearchBar from '../standard_components/single_components/searchbar';
import './home.css';

function HomePage() {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            // Modifica qui: usa l'endpoint 'new' per ottenere gli ultimi post
            let url = 'https://www.reddit.com/r/all/new.json';
            if (searchQuery) {
                url = `https://www.reddit.com/search.json?q=${encodeURIComponent(searchQuery)}`;
            }
            const response = await fetch(url);
            const json = await response.json();
            setPosts(json.data.children.map(child => child.data));
        };

        fetchPosts();
    }, [searchQuery]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <StComponents />
            <div className="main-content">
                <h2 className="main-title">Ultimi Post</h2>
                <div className="posts-scrollable">
                    {posts.map(post => (
                        <Post
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

export default HomePage;
