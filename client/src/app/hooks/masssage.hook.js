import {useCallback} from 'react';

export const useMassage = () => {
    return useCallback(() =>{
        if (window.M && text) {
            window.M.toast({html:text})
        }
    }, [])
}