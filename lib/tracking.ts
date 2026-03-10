export const handleLinkClick = (url: string, eventName: string) => {
    // Fire event to trackers if they exist on window
    if (typeof window !== 'undefined') {
        // Basic console log for verification
        console.log(`[Tracking] Event: ${eventName} | URL: ${url}`);

        // Example placeholders for tracker initialization checks
        // if (window.gtag) gtag('event', eventName, { event_category: 'outbound_link', event_label: url });
        // if (window.fbq) fbq('trackCustom', eventName, { url });
        // if (window.ym) ym(XXXXXX, 'reachGoal', eventName);
        // if (window.ttq) ttq.track(eventName, { content_id: url });
    }

    // Construct URL with UTM parameters
    try {
        const urlObj = new URL(url);
        if (!urlObj.searchParams.has('utm_source')) {
            urlObj.searchParams.set('utm_source', 'shahzod_hub');
        }
        if (!urlObj.searchParams.has('utm_medium')) {
            urlObj.searchParams.set('utm_medium', 'bio_link');
        }

        // Redirect
        if (typeof window !== 'undefined') {
            window.open(urlObj.toString(), '_blank', 'noopener,noreferrer');
        }
    } catch (e) {
        // Fallback for relative paths or invalid URLs
        if (typeof window !== 'undefined') {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    }
};
