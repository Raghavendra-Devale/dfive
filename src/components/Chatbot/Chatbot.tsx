import { useEffect } from 'react';

function Chatbot() {
    useEffect(() => {
        const existingScript = document.querySelector(
            'script[data-dfive-chatbot]'
        );

        if (existingScript) {
            return;
        }

        // Load polyfills first
        const polyfillsScript = document.createElement('script');
        polyfillsScript.type = 'module';
        polyfillsScript.src = '/chatbot/polyfills.js';
        polyfillsScript.dataset.dfiveChatbot = 'true';
        document.body.appendChild(polyfillsScript);

        const script = document.createElement('script');
        script.type = 'module';
        script.src = '/chatbot/main.js';
        script.dataset.dfiveChatbot = 'true';
        document.body.appendChild(script);

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/chatbot/styles.css';
        link.dataset.dfiveChatbot = 'true';
        document.head.appendChild(link);

        return () => {
            // Keep the script loaded because the Web Component
            // may already be registered globally.
        };
    }, []);

    return (
        <ai-chatbot
            api-url="http://localhost:8000"
            user="hfuser3"
        />
    );
}

export default Chatbot;