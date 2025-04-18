import { Link } from "react-router";

export default function TestingPage() {
  return (
    <div>
      <Link to="/auth/login" className="text-blue-500 underline">
        Go Back
      </Link>
    </div>
  );
}
