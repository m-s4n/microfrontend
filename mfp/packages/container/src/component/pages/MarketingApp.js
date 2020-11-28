import {mount} from 'marketing/MarketingApp';
import React, {useRef, useEffect} from 'react';

const MarketingApp = () => {
    const ref = useRef(null);
    // Kodun birkez çalıştığından emin olmalıyız.

    useEffect(() => {
        mount(ref.current);
    },[]);
    return <div ref={ref} />

};

export default MarketingApp;

