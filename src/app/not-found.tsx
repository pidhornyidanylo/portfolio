import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='forbidden-container'>
      <h2>Not Found 😒</h2>
      <p>Sorry, the page you are looking for does not exist :(</p>
      <Link href='/'>Wormhole Me Back</Link>
      <span>🕳</span>
    </div>
  );
};

export default NotFound;
