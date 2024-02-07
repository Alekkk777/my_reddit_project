import React, { useState, useEffect } from 'react';
import CommunityCard from '../pages_components/CommunityCard'; // Aggiorna il percorso in base alla tua struttura
import StComponents from '../standard_components/st_components'; // Aggiorna il percorso in base alla tua struttura
import './community.css'; // Assicurati di avere questo file CSS

function Community() {
    const [communities, setCommunities] = useState([]);

    useEffect(() => {
        const fetchCommunities = async () => {
            const url = 'https://www.reddit.com/subreddits/popular.json';
            const response = await fetch(url);
            const json = await response.json();
            setCommunities(json.data.children.map((subreddit, index) => ({
                ...subreddit.data,
                display_name: subreddit.data.display_name_prefixed.replace('r/', ''),
                rank: index + 1 // Aggiungi un campo rank che parte da 1
            })).slice(0, 10));
        };

        fetchCommunities();
    }, []);

    return (
        <div>
            <StComponents />
            <div className="main-content">
                <h2 className="main-title">Top 10 Community</h2>
                <div className="communities-container">
                    {communities.map(community => (
                        <CommunityCard
                            key={community.id}
                            rank={community.rank} // Passa il posizionamento come prop
                            name={community.display_name}
                            description={community.public_description}
                            subscribers={community.subscribers}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Community;
