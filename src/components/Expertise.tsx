import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faEthereum, faPython, faResearchgate, faCuttlefish } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Flask",
    "Python",
    "PostgreSQL",
    "SQL",
    "REST APIs",
    "Postman",
];

const labelsSecond = [
    "Python", 
    "NumPy", 
    "Pandas", 
    "Scikit-learn", 
    "TensorFlow", 
    "PyTorch", 
    "Natural Language Processing", 
    "Model Evaluation", 
    "Feature Engineering",
];

const labelsThird = [
    "Prompt Engineering",
    "LangChain",
    "Vector Databases",
    "Hugging Face",
    "OpenAI",
    "Model Fine-Tuning",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

const labelsFourth = [
    "Convolutional Neural Networks", 
    "Transformers", 
    "Deepfake Detection", 
    "Research Methodology", 
    "Model Benchmarking", 
    "Experiment Tracking", 
    "Technical Writing"
];

const labelsFifth = [
    "Python", 
    "Pandas",
    "NumPy", 
    "Matplotlib", 
    "Seaborn", 
    "SQL", 
    "Data Visualization", 
    "Statistical Analysis",
];

const labelsSixth = [
    "C++", 
    "Python", 
    "Data Structures", 
    "Algorithms", 
    "Dynamic Programming", 
    "Graphs", 
    "Greedy Algorithms", 
    "Time Complexity Optimization",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>My Domains</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI/ML</h3>
                    <p>I work at the intersection of data, models, and impact—building machine learning solutions that translate theory into real-world outcomes. My experience spans supervised learning, NLP, and model evaluation, with a strong focus on clean pipelines and measurable performance.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faEthereum} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>I design and implement GenAI-powered applications using modern LLM frameworks, with hands-on experience in retrieval-augmented generation, prompt engineering, and scalable inference workflows. My work focuses on building reliable, production-ready AI systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faResearchgate} size="3x"/>
                    <h3>Research & Applied ML</h3>
                    <p>I have hands-on experience in applied research, including literature reviews, experimentation, and model benchmarking—particularly in areas like deepfake detection and NLP. I enjoy translating research ideas into reproducible and impactful implementations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Science & Analytics</h3>
                    <p>I leverage data-driven approaches to extract insights, build predictive models, and support informed decision-making. My work emphasizes exploratory analysis, feature selection, and statistically sound modeling practices.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFifth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCuttlefish} size="3x"/>
                    <h3>Competitive Programming & DSA</h3>
                    <p>I bring strong algorithmic thinking and problem-solving skills, developed through competitive programming and rigorous DSA practice. This foundation helps me write optimized, efficient, and scalable code across domains.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSixth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;