import { useState } from "react";
import axios from "axios";
import"./LeadForm.css";
export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    platform: "Amazon",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    const err = {};

    if (!form.name) err.name = "Name required";
    if (!/^\d{10}$/.test(form.phone)) err.phone = "Phone must be 10 digits";
    if (!/\S+@\S+\.\S+/.test(form.email)) err.email = "Invalid email";

    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();

    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    try {
      await axios.post("https://seller-rocket-1.onrender.com/api/leads", form);
            setSuccess("✅ Lead submitted successfully!");
      setForm({
        name: "",
        phone: "",
        email: "",
        platform: "Amazon",
        message: "",
      });
      setErrors({});
    } catch (error) {
      setSuccess("");
      setErrors({ submit: "Server error" });
    }
  };

  return (
    <section id="contact" className="form-section">
      <h2>Contact Us</h2>

      {success && <p className="success">{success}</p>}

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <select
          value={form.platform}
          onChange={(e) => setForm({ ...form, platform: e.target.value })}
        >
          <option>Amazon</option>
          <option>Flipkart</option>
          <option>Shopify</option>
          <option>WordPress</option>
          <option>Wix</option>

        </select>

        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        {errors.submit && <p className="error">{errors.submit}</p>}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}