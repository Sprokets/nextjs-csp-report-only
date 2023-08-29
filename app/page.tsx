import { headers } from 'next/headers';
import Nav from './nav';

export default function Home() {
  const headersList = headers();
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          CSP Report Only Example
        </h2>
        <p>
          Nonce: <code>{headersList.get('x-nonce') || 'Not found'}</code>
        </p>
      </div>

      <Nav />
    </div>
  );
}
