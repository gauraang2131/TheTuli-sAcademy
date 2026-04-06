'use client';

import { GoogleAnalytics } from '@next/third-parties/google';

export default function GA() {
    // Replace with your actual GA4 Measurement ID
    return <GoogleAnalytics gaId="G-XXXXXXXXXX" />;
}
