import React, { useState } from "react";
import { Mail, Send, Paperclip, Bold, Italic, Underline } from "lucide-react";
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
      className="p-0 overflow-hidden flex flex-col"
      style={{
        fontFamily: "Tahoma, sans-serif",
        background: "#C0C0C0",
        height: "100%",
        fontSize: "12px",
      }}
    >
      <Win98Dialog
        open={showDialog}
        title="Message"
        message={dialogMsg}
        onClose={() => setShowDialog(false)}
      />

      <div className="bg-gray-300 border-b border-gray-400 px-2 py-1 flex items-center gap-2 text-xs">
        <Mail className="w-3 h-3 text-blue-800" />
        <span className="text-black font-bold">New Message</span>
        <span className="text-gray-500 ml-auto">Outlook Express</span>
      </div>

      <div className="bg-gray-200 border-b border-gray-400 px-2 py-1 flex items-center gap-1">
        <button
          className="flex items-center gap-1 px-2 py-0.5 text-xs border border-gray-500 border-t-gray-200 border-l-gray-200 bg-gray-300 cursor-pointer"
          onClick={handleSubmit}
          style={{fontFamily: "Tahoma, sans-serif"}}
        >
          <Send className="w-3 h-3" /> Send
        </button>
        <button
          className="flex items-center gap-1 px-2 py-0.5 text-xs border border-gray-500 border-t-gray-200 border-l-gray-200 bg-gray-300 cursor-pointer"
          style={{fontFamily: "Tahoma, sans-serif"}}
        >
          <Paperclip className="w-3 h-3" /> Attach
        </button>
      </div>

      <div className="bg-gray-200 border-b border-gray-400 px-2 py-0.5 flex items-center gap-1">
        <button className="p-0.5 border border-gray-400 bg-gray-300 cursor-pointer hover:bg-gray-400"><Bold className="w-3 h-3" /></button>
        <button className="p-0.5 border border-gray-400 bg-gray-300 cursor-pointer hover:bg-gray-400"><Italic className="w-3 h-3" /></button>
        <button className="p-0.5 border border-gray-400 bg-gray-300 cursor-pointer hover:bg-gray-400"><Underline className="w-3 h-3" /></button>
      </div>

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
        <div className="border-b border-gray-400">
          <div className="flex items-center px-2 py-1 gap-2">
            <label className="text-black text-xs font-bold w-[50px]">To:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="recipient@email.com"
              className="flex-1 bg-white border border-gray-500 border-t-gray-600 border-l-gray-600 px-1.5 py-0.5 text-xs text-black rounded-none"
              style={{fontFamily: "Tahoma, sans-serif"}}
              required
            />
          </div>
          <div className="flex items-center px-2 py-1 gap-2 border-t border-gray-400">
            <label className="text-black text-xs font-bold w-[50px]">Cc:</label>
            <input
              type="text"
              placeholder="(optional)"
              className="flex-1 bg-white border border-gray-500 border-t-gray-600 border-l-gray-600 px-1.5 py-0.5 text-xs text-black rounded-none"
              style={{fontFamily: "Tahoma, sans-serif"}}
            />
          </div>
          <div className="flex items-center px-2 py-1 gap-2 border-t border-gray-400">
            <label className="text-black text-xs font-bold w-[50px]">Subject:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="flex-1 bg-white border border-gray-500 border-t-gray-600 border-l-gray-600 px-1.5 py-0.5 text-xs text-black rounded-none"
              style={{fontFamily: "Tahoma, sans-serif"}}
              required
            />
          </div>
        </div>

        <textarea
          rows={8}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Type your message here..."
          className="flex-1 bg-white border-0 px-2 py-1 text-xs text-black resize-none rounded-none"
          style={{fontFamily: "Tahoma, sans-serif"}}
          required
        />

        <div className="bg-blue-800 text-white text-xs px-2 py-0.5 flex items-center gap-1">
          <span>{loading ? "Sending..." : "Ready"}</span>
          <span className="ml-auto">hello@alexrivera.dev</span>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
