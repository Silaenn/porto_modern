import React, { useState } from "react";
import { Send, Mail } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Message sent! (Demo mode)");
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div
      className="p-4 overflow-auto"
      style={{
        fontFamily: "Tahoma, sans-serif",
        background: "#C0C0C0",
        height: "100%",
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-blue-800" />
        <h2 className="text-black font-bold text-lg">Contact Me</h2>
      </div>

      <div className="flex flex-wrap gap-6">
        <div className="flex-1 min-w-[280px]">
          <p className="text-black text-xs mb-4">
            Have a question or want to work together? Send me a message!
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="text-black text-xs font-bold block mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-white border border-gray-500 border-t-gray-600 border-l-gray-600 px-2 py-1.5 text-xs text-black rounded-none"
                style={{ fontFamily: "Tahoma, sans-serif" }}
              />
            </div>

            <div>
              <label className="text-black text-xs font-bold block mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-white border border-gray-500 border-t-gray-600 border-l-gray-600 px-2 py-1.5 text-xs text-black rounded-none"
                style={{ fontFamily: "Tahoma, sans-serif" }}
              />
            </div>

            <div>
              <label className="text-black text-xs font-bold block mb-1">
                Message
              </label>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message here..."
                className="w-full bg-white border border-gray-500 border-t-gray-600 border-l-gray-600 px-2 py-1.5 text-xs text-black rounded-none resize-none"
                style={{ fontFamily: "Tahoma, sans-serif" }}
              />
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-1.5 text-xs font-bold cursor-pointer"
              style={{
                background: "#C0C0C0",
                border: "2px solid #808080",
                borderTop: "2px solid #FFF",
                borderLeft: "2px solid #FFF",
                fontFamily: "Tahoma, sans-serif",
                color: "#000",
              }}
            >
              <Send className="w-3 h-3" />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="bg-gray-300 border border-gray-400 rounded-sm p-4 w-[220px]">
          <h3 className="text-black font-bold text-sm mb-3 flex items-center gap-2">
            <Mail className="w-4 h-4" /> Contact Info
          </h3>
          <div className="space-y-2 text-xs text-black">
            <div>
              <span className="font-bold">Email:</span>
              <br />
              hello@alexrivera.dev
            </div>
            <div>
              <span className="font-bold">Location:</span>
              <br />
              San Francisco, CA
            </div>
            <div>
              <span className="font-bold">Status:</span>
              <br />
              <span className="text-green-800">Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
