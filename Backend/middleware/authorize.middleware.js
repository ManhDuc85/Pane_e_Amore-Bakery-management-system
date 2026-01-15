module.exports.authorize = (...roles) => {
  return (req, res, next) => {
    console.log("--- AUTHORIZE DEBUG ---");
    console.log("User object:", req.user);
    console.log("Required Roles:", roles);
    if (req.user && !roles.includes(req.user.role)) {
      return res.status(403).json({ error: "Forbidden: You do not have permission to access this resource." });
    }
    next();
  };
};