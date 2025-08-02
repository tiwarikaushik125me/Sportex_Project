import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { registerFormControls } from "@/config";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({ title: data?.payload?.message });
        navigate("/auth/login");
      } else {
        toast({ title: "Registration failed", variant: "destructive" });
      }
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold text-cyan-400">Create your Sportex Account</h1>
        <p className="mt-2 text-sm text-gray-400">
          Already a player? <Link to="/auth/login" className="text-cyan-500 hover:underline">Login</Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText="Sign Up"
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </motion.div>
  );
}

export default AuthRegister;
