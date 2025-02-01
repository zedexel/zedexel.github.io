import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-white mb-6">Send us a Message</h3>
        <form>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm text-gray-300">Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="youremail@example.com"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message here..."
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-500 focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;