import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="mt-10 self-stretch min-[900px]:mt-0 min-[900px]:basis-[24.75rem]">
      <div className="mx-auto max-w-[24.75rem] bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 p-4">
        <LoginForm />
        <hr className="my-5 border-gray-300" />
        <div>
          <button className="bg-blue-500 text-white w-full leading-[3rem] rounded-md text-xl font-bold">
            Register
          </button>
        </div>
      </div>
      <div className="text-sm text-center">
        <span className="font-bold">Create a Page</span> for a celebrity, brand
        or business.
      </div>
    </div>
  );
}
