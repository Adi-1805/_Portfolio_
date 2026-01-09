import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Adi-1805/SIH-P.S.1760-ML_MODEL" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Adi-1805/SIH-P.S.1760-ML_MODEL"><h2>Yojana Sahayak</h2></a>
                <p>Yojana Sahayak is an AI-powered financial scheme recommender that won Smart India Hackathon (SIH) 2024, outperforming 1000+ teams, our solution enhances financial inclusion by providing personalized recommendations and hierarchical dashboards for officers to manage scheme targets across 1,500+ districts.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Adi-1805/ChatDoc" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Adi-1805/ChatDoc" target="_blank" rel="noreferrer"><h2>ChatDoc</h2></a>
                <p>A production-ready RAG chatbot built with LangGraph, Streamlit, and Pinecone. Upload documents and get intelligent insights through an interactive chat interface. Implementing features like isolated sessions, Docker deployment, logging, error handling, and
                LangSmith tracing for scalable, maintainable performance.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Adi-1805/ShelfWise" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Adi-1805/ShelfWise" target="_blank" rel="noreferrer"><h2>ShelfWise</h2></a>
                <p> Built a Flask-based Finder using Collaborative and Popularity-based filtering on 200+ user ratings, applied cosine similarity to suggest best 5 books tailored to user preferences.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Adi-1805/Audio-Recognition-using-Deep-Learning" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Adi-1805/Audio-Recognition-using-Deep-Learning" target="_blank" rel="noreferrer"><h2>Audio Recognition using Deep Learning</h2></a>
                <p>Achieved 1.000 F1-score in identifying Capuchin bird calls using a CNN trained on 10+ hours of audio, processed raw audio into STFT spectrograms, enabling robust visual input for the Neural Network</p>
            </div>
        </div>
    </div>
    );
}

export default Project;