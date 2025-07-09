const BlogDetail = () => {
  return (
    <section className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          🚗 How I Built My Car Rental Platform (MERN Stack)
        </h1>

        <p className="text-gray-600 text-sm text-center">
          By Harish K • July 2025
        </p>

        <img
          src="/cr.png"
          alt="Car Rental Project"
          className="rounded-xl shadow-md mx-auto w-full object-cover"
        />

        <p className="text-gray-700 leading-relaxed">
          My Car Rental Platform is a full-stack application that allows users
          to browse available cars, make bookings, and pay securely. It also
          includes a dashboard for car owners to list and manage cars.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          📦 Technologies Used
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Frontend: React, Tailwind CSS, React Router</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MongoDB (Atlas)</li>
          <li>Authentication: Firebase (Google login)</li>
          <li>Payments: Razorpay Integration</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          🧱 Features
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>User Signup/Login (Google & Email)</li>
          <li>Search cars by city</li>
          <li>Booking form with date range</li>
          <li>Owner dashboard to add/view bookings</li>
          <li>Booking status updates (Pending, Confirmed)</li>
          <li>Payment integration with Razorpay</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          ⚙️ Challenges I Faced
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Handling Google Firebase login token with backend</li>
          <li>Securing protected routes and managing user roles</li>
          <li>Integrating Razorpay payment flow with booking logic</li>
          <li>Responsive UI design using Tailwind</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          ✅ What I Learned
        </h2>
        <p className="text-gray-700">
          This project helped me strengthen my understanding of MERN stack,
          especially in areas like API design, token-based authentication, and
          third-party integrations. I also improved my UI/UX skills and code
          structuring.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="https://carrental-ecommerce.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            🔗 Live Site
          </a>
          <a
            href="https://github.com/Harish-Kuppusamy/carrental-ecommerce"
            target="_blank"
            rel="noreferrer"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-100 transition"
          >
            📁 GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
