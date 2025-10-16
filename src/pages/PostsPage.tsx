import React from 'react';
import { useLoaderData } from 'react-router-dom';

type Post = { id: number; title: string; body: string };

export function PostsPage() {
    const posts = useLoaderData() as Post[] | null;

    if (!posts || posts.length === 0) {
        return <div>No posts found.</div>;
    }

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(p => (
                    <li key={p.id}>
                        <strong>{p.title}</strong>
                        <p>{p.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
