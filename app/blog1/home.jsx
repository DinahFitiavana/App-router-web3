import React, { useState, useEffect} from 'react';
import Link, { LinkProps } from 'next/link';
import Header from '../components/Header' ;

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const dummyPosts = [
            { id: 1, title: 'Post1'},
            { id: 2, title: 'Post2'}
        ];
        setPosts(dummyPosts);
    }, []);

    return (
        <div>
            <Header />
            <h1>Home</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/blog2/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
