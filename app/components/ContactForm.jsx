import React from "react";

const Contact = () => (
  <div className="py-10 bg-gradient-to-r from-yellow-400 to-green-500">
    <div className="container mx-auto text-center text-white">
      <div>
        <h2 className="text-2xl font-bold mb-8">Let's discuss your project</h2>
        <p className="mb-8">
          Let's figure out how to create an effective application, its cost and
          terms of its development.
        </p>
      </div>
      <div>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Phone number"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Business name"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Business mail"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-yellow-500 text-white rounded-lg"
          >
            Discuss the project
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;
