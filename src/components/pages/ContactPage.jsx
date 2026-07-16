import React, { useState } from "react";
import Win98Dialog from "../Win98Dialog";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMsg, setDialogMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDialogMsg("Your message has been sent successfully!");
      setShowDialog(true);
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div
      className="p-4 flex flex-col h-full overflow-auto font-win98 text-xs"
      style={{
        background: "#C0C0C0",
      }}
    >
      <Win98Dialog
        open={showDialog}
        title="Message"
        message={dialogMsg}
        onClose={() => setShowDialog(false)}
      />

      <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-3">
        <div>
          <label className="text-black text-xs font-bold block mb-0.5">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full bg-white border border-gray-500 border-t-gray-600 border-l-gray-600 px-2 py-1 text-xs text-black rounded-none font-win98"
            required
          />
        </div>
        <div>
          <label className="text-black text-xs font-bold block mb-0.5">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full bg-white border border-gray-500 border-t-gray-600 border-l-gray-600 px-2 py-1 text-xs text-black rounded-none font-win98"
            required
          />
        </div>
        <div className="flex-1">
          <label className="text-black text-xs font-bold block mb-0.5">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message..."
            className="w-full bg-white border border-gray-500 border-t-gray-600 border-l-gray-600 px-2 py-1 text-xs text-black resize-none rounded-none h-full font-win98"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full text-xs font-bold px-3 py-1.5 cursor-pointer font-win98"
          style={{
            background: loading ? "#444" : "#C0C0C0",
            color: loading ? "#CCC" : "#000",
            border: "2px solid #808080",
            borderTop: "2px solid #FFF",
            borderLeft: "2px solid #FFF",
          }}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
