import { PulseLoader } from 'react-spinners';

export const ModalPreloader = () => {
  return <div style={{
    display: 'flex',
    justifyContent: 'center'
  }}><PulseLoader /></div>
};