const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;
  const userFind = users.find(
    (user) => user.email === email && user.password === password
  );

  return userFind
    ? res.status(200).json({ access: true })
    : res.status(200).json({ access: false });

  //   if (userFind){
  //     return   res.status(200).json({accsess:true})
  //   } else{
  //   return res.status(200).json({accsess:false});
  // }
};

module.exports = {login};
