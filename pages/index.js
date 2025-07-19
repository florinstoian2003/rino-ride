
import Head from 'next/head';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rino Ride</title>
      </Head>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <header className="flex items-center justify-between px-6 py-4 shadow-md">
          <div className="flex items-center gap-2">
            <img src="/logo-page3.svg" alt="Rino Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold">Rino</span>
          </div>
          <nav className="space-x-4">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#download" className="hover:underline">Download</a>
            <a href="#register" className="hover:underline">Register</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </header>

        <section className="text-center px-4 py-20 bg-gradient-to-b from-[#f0f0f0] to-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Ride. Your Rules.</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Rino brings fast, safe, and affordable ride-hailing to your city. Tap, ride, arrive — it's that simple.
          </p>
          <Button className="text-lg px-6 py-3">Get the App</Button>
        </section>

        <section id="features" className="px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Rino?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Fast Pickups</h3>
              <p>Smart matching connects you to the nearest driver in seconds.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
              <p>Get where you need to go without breaking the bank.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Safe Rides</h3>
              <p>Driver background checks, live support, and trip tracking built in.</p>
            </div>
          </div>
        </section>

        <section id="download" className="px-6 py-20 text-center bg-gray-50">
          <h2 className="text-3xl font-bold mb-4">Ready to Ride?</h2>
          <p className="mb-6 text-gray-600">Download Rino and start moving your way.</p>
          <div className="flex justify-center gap-4">
            <Button variant="outline">Download for iOS</Button>
            <Button variant="outline">Download for Android</Button>
          </div>
        </section>

        <section id="register" className="px-6 py-20 text-center bg-white">
          <h2 className="text-3xl font-bold mb-4">Sign Up to Ride with Rino</h2>
          <p className="mb-6 text-gray-600">Be the first to know when Rino launches in your city.</p>
          <form className="max-w-md mx-auto space-y-4" method="POST" action="https://formspree.io/f/moqggljl">
            <div className="text-left">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" type="text" placeholder="Your Name" required />
            </div>
            <div className="text-left">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" type="tel" placeholder="Your Phone Number" required />
            </div>
            <Button type="submit" className="w-full">Register</Button>
          </form>
        </section>

        <footer id="contact" className="px-6 py-8 text-center text-sm text-gray-500 border-t">
          <p>&copy; {new Date().getFullYear()} Rino. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
