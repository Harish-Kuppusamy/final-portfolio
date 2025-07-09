const Featured = () => {
    return ( 

<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
      🚗 Featured Project
    </h2>

    {/* Project Card */}
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* Image */}
      <img
        src="/cr.png" 
        alt="Car Rental Platform"
        className="rounded-xl shadow-lg object-cover w-full h-auto hover:scale-[1.02] transition duration-300"
      />

      {/* Description */}
      <div className="space-y-5">
        <h3 className="text-2xl font-bold text-gray-800">
          Car Rental Platform
        </h3>
        <p className="text-gray-600 leading-relaxed">
          A full-stack booking platform with user authentication (Firebase),
          payment integration (Razorpay), owner dashboard, and dynamic car
          listings. Built using React, Node.js, Express, and MongoDB.
        </p>
        <div className="flex gap-4">
          <a
            href="https://carrental-ecommerce.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Live Site
          </a>
          <a
            href="https://github.com/Harish-Kuppusamy/car-rental-app"
            target="_blank"
            rel="noreferrer"
            className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-blue-100 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



     );
}
 
export default Featured;