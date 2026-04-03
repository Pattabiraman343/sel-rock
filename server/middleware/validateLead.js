const validateLead = (req, res, next) => {
  const { phone, email } = req.body;

  const phoneRegex = /^\d{10}$/;
  const emailRegex = /^\S+@\S+\.\S+$/;

  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ error: "Phone must be 10 digits" });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  next();
};

export default validateLead;