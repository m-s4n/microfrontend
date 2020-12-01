import {mount} from 'auth/AuthApp';
import React, {useRef, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

const AuthApp = ({onSignIn}) => {
    const ref = useRef(null);
    //Container daki browser history nin bir kopyası.
    const history = useHistory();
    // Kodun birkez çalıştığından emin olmalıyız.
    useEffect(() => {
        const {onParentNavigate} = mount(ref.current, {
            initialPath:  history.location.pathname,
            onNavigate: ({pathname: nextPathname}) => {
                const {pathname} = history.location;
                if(pathname !== nextPathname){
                    // alt app nereye gitmek istiyorsa container haberdar olmalı. ve güncellenmeli
                    history.push(nextPathname);
                }
                
            },
            onSignIn : () => {
                onSignIn();
                console.log('basti');
            }
        });
        history.listen(onParentNavigate)
    },[]);
    return <div ref={ref} />

};

export default AuthApp;

