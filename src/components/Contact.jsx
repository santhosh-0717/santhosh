import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const formData = new FormData(form.current);
        const data = {
            name: formData.get('user_name'),
            email: formData.get('user_email'),
            message: formData.get('message')
        };

        try {
            const response = await fetch('https://formsubmit.co/ajax/gsanthosh037@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('Message Sent! I will get back to you soon.');
                e.target.reset();
                setTimeout(() => setStatus(''), 3000);
            } else {
                setStatus('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('Failed to connect to the server.');
        }
    };

    return (
        <div className="section-wrapper-col">
            <div style={styles.content} className="animate-fade-up delay-1">
                <h2 style={styles.heading}>Get In Touch</h2>
                <p style={styles.description} className="animate-fade-up delay-2">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                    I'll try my best to get back to you! <br />
                    Available for freelance and full-time positions.
                </p>

                <form ref={form} onSubmit={sendEmail} style={styles.form} className="animate-fade-up delay-3">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Name"
                        style={styles.input}
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Email"
                        style={styles.input}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="5"
                        style={styles.textarea}
                        required
                    ></textarea>
                    <button type="submit" style={styles.button}>Send Message</button>
                    {status && <p style={styles.status}>{status}</p>}
                </form>
            </div>
        </div>
    );
};

const styles = {
    // Keep remaining static styles
    content: {
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center'
    },
    heading: {
        fontSize: '3rem',
        color: 'var(--secondary-color)',
        marginBottom: '20px'
    },
    description: {
        color: 'var(--text-secondary)',
        fontSize: '1.1rem',
        marginBottom: '40px',
        lineHeight: '1.6'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    },
    input: {
        padding: '15px',
        borderRadius: '4px',
        border: '1px solid var(--border-color)',
        background: 'var(--input-bg)',
        color: 'var(--text-color)',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.3s'
    },
    textarea: {
        padding: '15px',
        borderRadius: '4px',
        border: '1px solid var(--border-color)',
        background: 'var(--input-bg)',
        color: 'var(--text-color)',
        fontSize: '1rem',
        outline: 'none',
        resize: 'vertical',
        fontFamily: 'inherit'
    },
    button: {
        padding: '15px',
        background: 'transparent',
        border: '2px solid var(--primary-color)',
        color: 'var(--primary-color)',
        fontSize: '1rem',
        cursor: 'pointer',
        marginTop: '10px',
        transition: 'all 0.3s',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    },
    status: {
        marginTop: '15px',
        color: 'var(--primary-color)'
    }
};

export default Contact;
