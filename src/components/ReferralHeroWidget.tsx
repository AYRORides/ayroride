'use client';

import React, { useEffect, useRef } from 'react';

interface ReferralHeroWidgetProps {
    widgetId: string;
}

const ReferralHeroWidget: React.FC<ReferralHeroWidgetProps> = ({ widgetId }) => {
    const scriptLoadedRef = useRef(false);

    useEffect(() => {
        if (!widgetId || scriptLoadedRef.current) return;

        
        const scriptId = `referralhero-widget-script-${widgetId}`;

        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.src = `https://d7zve4d3u0dfm.cloudfront.net/production/${widgetId}.js`;
            script.async = true;
            script.id = scriptId;
            document.body.appendChild(script);
            scriptLoadedRef.current = true;
        }
    }, [widgetId]);

    return (
        <div
            id={`referralhero-dashboard-${widgetId}`}
            style={{ minHeight: '500px', width: '100%' }}
        />
    );
};

export default ReferralHeroWidget;
