import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const action = useNavigationType();

    useEffect(() => {
        if (action !== 'POP') {
            window.scrollTo(0, 0);
        }
    }, [action, pathname]);

    return null;
}
