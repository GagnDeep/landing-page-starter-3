import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-24 bg-background text-center px-4">
        <h1 className="text-6xl font-heading font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-heading text-muted-foreground mb-8">Page Not Found</h2>
        <p className="max-w-md text-muted-foreground mb-8">
          We could not find the page you were looking for. It may have been moved or the url might be incorrect.
        </p>
        <Link href="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
          Return Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
