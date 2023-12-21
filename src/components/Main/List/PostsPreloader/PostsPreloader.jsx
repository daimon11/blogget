import { RingLoader } from 'react-spinners';

export const PostsPreloader = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <RingLoader
      color='red'
      size={300} />
  </div>
)