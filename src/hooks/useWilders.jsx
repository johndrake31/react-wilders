import {useContext} from 'react';
import WilderContext from '../context/WilderContext';


const useWilders = () => {
    const { wilders, setWilders } = useContext(WilderContext);
    return [wilders, setWilders];
}
 
export default useWilders;
