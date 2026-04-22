import React, { useState, useEffect } from 'react';

const RESUME_URL = '/resume.pdf';
const RESUME_FILENAME = 'Reeti-Singh-Resume.pdf';

const ResumeSection = () => {
    const [isAvailable, setIsAvailable] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Preload check if resume file exists
        const img = new Image();
        img.onload = () => {
            setIsAvailable(true);
            setLoading(false);
        };
        img.onerror = () => {
            setIsAvailable(false);
            setLoading(false);
        };
        img.src = RESUME_URL + '?t=' + Date.now(); // Cache bust
    }, []);

    const handleView = () => {
        if (isAvailable) {
            window.open(RESUME_URL, '_blank');
        }
    };

    const handleDownload = () => {
        if (isAvailable) {
            const link = document.createElement('a');
            link.href = RESUME_URL;
            link.download = RESUME_FILENAME;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    if (loading) {
        return (
            <section id="resume" className="resume-section">
                <div className="container">
                    <h2 className="section-title">Resume</h2>
                    <p className="section-subtitle">My professional experience and achievements</p>
                    <div className="resume-content glass-card">
                        <div className="spinner" />
                        <p className="loading-text">Loading Resume...</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="resume" className="resume-section">
            <div className="container">
                <h2 className="section-title">Resume</h2>
                <p className="section-subtitle">My professional experience and achievements</p>

                <div className="resume-content glass-card">
                    {isAvailable ? (
                        <div className="resume-buttons">
                            <button
                                onClick={handleView}
                                className="btn btn-primary resume-btn"
                            >
                                👁️ View Resume
                            </button>
                            <button
                                onClick={handleDownload}
                                className="btn btn-secondary resume-btn"
                            >
                                ⬇️ Download Resume
                            </button>
                        </div>
                    ) : (
                        <p className="resume-not-available">
                            Resume not available. Please add resume.pdf to /public/ folder.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;

