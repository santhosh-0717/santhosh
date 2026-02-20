import React, { useState } from 'react';
import Modal from './Modal';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certificates = [
        {
            id: 1,
            title: 'Python Essentials 1',
            issuer: 'Cisco',
            date: '6/5/2025',
            recipient: 'Guttula Sairam Santhosh',
            link: 'https://drive.google.com/file/d/14cRcnxyCQ_Lv2kk_lBgosP_R75S3irCv/view?usp=sharing'
        },
        {
            id: 2,
            title: 'Python Bootcamp',
            issuer: 'LetsUpgrade',
            date: '31/5/2025',
            recipient: 'Sai Ram Santhosh Guttula',
            certId: 'LUEPYTMAY1251760',
            link: '#'
        },
        {
            id: 3,
            title: 'Web Development Bootcamp',
            issuer: 'Udemy',
            date: '2025',
            recipient: 'Guttula Sairam Santhosh',
            link: '#'
        }
    ];

    const getEmbedUrl = (url) => {
        if (url.includes('drive.google.com')) {
            return url.replace('/view?usp=sharing', '/preview');
        }
        return url;
    };

    return (
        <div className="section-wrapper-col">
            <h2 style={styles.heading}>My Certificates</h2>
            <div className="cert-grid">
                {certificates.map(cert => (
                    <div key={cert.id} style={styles.card} className="certificate-card">
                        <div style={styles.cardHeader}>
                            <h3 style={styles.issuer}>{cert.issuer}</h3>
                            {cert.certId && <span style={styles.certId}>Certificate ID: {cert.certId}</span>}
                        </div>

                        <div style={styles.cardBody}>
                            <p style={styles.smallText}>This certifies that</p>
                            <h4 style={styles.recipientName}>{cert.recipient}</h4>
                            <p style={styles.smallText}>has successfully completed the course</p>
                            <h5 style={styles.courseTitle}>{cert.title}</h5>
                            <p style={styles.dateText}>Awarded on {cert.date}</p>
                        </div>

                        <div style={styles.cardFooter}>
                            <button
                                onClick={() => setSelectedCert(cert)}
                                className="certificate-btn"
                            >
                                View Certificate
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <Modal isOpen={!!selectedCert} onClose={() => setSelectedCert(null)}>
                {selectedCert && (
                    <div className="cert-preview-wrapper">
                        <div className="cert-preview-header">
                            <h3>Certificate Preview</h3>
                            <a href={selectedCert.link} target="_blank" rel="noopener noreferrer" className="external-link-btn">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                                </svg>
                            </a>
                        </div>
                        <div className="cert-preview-content">
                            <iframe
                                src={getEmbedUrl(selectedCert.link)}
                                title={selectedCert.title}
                                width="100%"
                                height="500px"
                                style={{ border: 'none', borderRadius: '4px' }}
                                allow="autoplay"
                            ></iframe>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

const styles = {
    // Keep remaining static styles
    heading: {
        fontSize: '3rem',
        color: 'var(--text-color)',
        marginBottom: '50px',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    card: {
        background: 'var(--card-bg)',
        borderRadius: '12px',
        padding: '30px',
        border: '1px solid var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '350px',
        position: 'relative',
        boxShadow: '0 4px 20px var(--shadow-color)',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        outline: 'none',
        WebkitTapHighlightColor: 'transparent'
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '20px'
    },
    issuer: {
        color: 'var(--primary-color)',
        fontSize: '1.5rem',
        margin: 0,
        fontWeight: 'bold'
    },
    certId: {
        color: 'var(--text-muted)',
        fontSize: '0.8rem',
        fontFamily: 'monospace'
    },
    cardBody: {
        textAlign: 'center',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '10px'
    },
    smallText: {
        color: 'var(--text-muted)',
        fontSize: '0.9rem',
        margin: 0
    },
    recipientName: {
        color: 'var(--text-color)',
        fontSize: '1.8rem',
        margin: '5px 0',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    courseTitle: {
        color: 'var(--text-color)',
        fontSize: '1.5rem',
        margin: '5px 0',
        fontWeight: '600'
    },
    dateText: {
        color: 'var(--text-disabled)',
        fontSize: '0.9rem',
        marginTop: '15px'
    },
    cardFooter: {
        textAlign: 'center',
        marginTop: '30px'
    }
};

export default Certificates;
