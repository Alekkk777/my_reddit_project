import React, { useState, useEffect } from 'react';
import Post from '../pages_components/post'; // Assicurati che il percorso sia corretto
import StComponents from '../standard_components/st_components';
import './home.css'; // Assicurati di avere questo file CSS con gli stili necessari

function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://www.reddit.com/r/popular.json');
                const json = await response.json();
                setPosts(json.data.children.map(child => child.data));
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <StComponents />
            <div className="main-content">
                <h2 className="main-title">Ultimi Post</h2> {/* Titolo aggiunto */}
                <div className="posts-scrollable">
                    {posts.map(post => (
                        <Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            imageUrl={post.thumbnail === 'self' || post.thumbnail === 'default' ? null : post.thumbnail}
                            likes={post.ups} // Reddit usa 'ups' per i like
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
