import React, { Component, useState } from 'react';
import api from '../services/api'

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
    state = {
        feed: [],
    };

    async componentDidMount() {
        const response = await api.get('posts');

        this.setState({ feed: response.data });
    }

    handleLike = id => {
        api.post(`/posts/${id}/like`);
    }


    render() {
        return (
            <section id="post-list">
                {this.state.feed.map(post => (
                    <article key={String(post._id)}>
                        <header>
                            <div className="user-info">
                                <span>{post.author}</span>
                                <span className="place">{post.place}</span>
                            </div>

                            <img src={more} alt="Mais" width="20px" />
                        </header>

                        <img src={`http://localhost:3333/files/${post.image}`} />

                        <footer>
                            <div className="actions">
                                <button type="button" onClick={() => this.handleLike(post._id)}>
                                    <img src={like} width="20px" />
                                </button>
                                <img src={comment} width="20px" />
                                <img src={send} width="20px" />
                            </div>

                            <strong>{post.likes} curtidas</strong>

                            <p>
                                {post.description}
                                <span>{post.hasht}</span>
                            </p>
                        </footer>
                    </article>
                ))}
            </section>
        )
    }
}

export default Feed;