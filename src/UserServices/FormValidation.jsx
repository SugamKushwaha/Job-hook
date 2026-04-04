 const signupValidation = (name, value) => {
  switch (name) {
    case "name":
      if (!value.trim()) return "Name is required";
      return "";

    case "email":
      if (!value.trim()) return "Email is required";
      if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)) {
        return "Email is invalid";
      }
      return "";

    case "password":
      if (!value.trim()) return "Password is required";
      if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/.test(
          value
        )
      ) {
        return "Password must be 6-15 characters with uppercase, lowercase, number and special character";
      }
      return "";
    default:
      return "";
  }
};

 const loginValidation =(name,value)=>{
    switch (name) {
    case "email":
      if (!value.trim()) return "Email is required";
      return "";

    case "password":
      if (!value.trim()) return "Password is required";
    default:
      return "";
    }
}

export {signupValidation,loginValidation};