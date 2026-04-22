import React, { useState, useEffect } from 'react';

const RESUME_URL = '/resume.pdf';
const RESUME_FILENAME = 'Reeti-Singh-Resume.pdf';

const ResumeSection = () => {
    const [isAvailable, setIsAvailable] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const img = new Image();

        img.onload = () => {
            setIsAvailable(true);
            setLoading(false);
        };

        img.onerror = () => {
            setIsAvailable(false);
            setLoading(false);
        };

        img.src = RESUME_URL + '?t=' + Date.now();
    }, []);

    const handleView = () => {
        window.open(RESUME_URL, '_blank');
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = RESUME_URL;
        link.download = RESUME_FILENAME;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
                <p className="section-subtitle">
                    My professional experience and achievements
                </p>

                <div className="resume-content glass-card">

                    {/* PREMIUM BOX 1 */}
                    <div
                        onClick={() =>
                            window.open(
                                'https://drive.google.com/file/d/1BmONLGaOJzorenAnxmDRktpejtlYQKWP/view',
                                '_blank'
                            )
                        }
                        style={{
                            padding: '25px',
                            marginBottom: '15px',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            transition: '0.3s ease',
                            textAlign: 'center',
                            fontWeight: '600'
                        }}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.transform = 'scale(1.03)')
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.transform = 'scale(1)')
                        }
                    >
                        👁️ View Resume
                    </div>

                    {/* PREMIUM BOX 2 */}
                    <div
                        onClick={handleDownload}
                        style={{
                            padding: '25px',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            transition: '0.3s ease',
                            textAlign: 'center',
                            fontWeight: '600'
                        }}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.transform = 'scale(1.03)')
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.transform = 'scale(1)')
                        }
                    >
                        ⬇️ Download Resume
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ResumeSection;