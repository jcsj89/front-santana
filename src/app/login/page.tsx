import AleatoryImage from "@/components/layout/login/AleatoryImage";

const Login = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-1/2 border">
        <AleatoryImage />
      </div>
      <div className="w-1/2 border">form</div>
    </div>
  );
};

export default Login;
