import { useLocation, useNavigate } from 'react-router-dom';

function BackButton() {
  const location = useLocation();
  const navigate = useNavigate();

  // Only show back button on non-home pages
  if (location.pathname === '/') {
    return null;
  }

  return (
    <button
      onClick={() => navigate('/')}
      className="text-white hover:text-gray-300 transition-colors duration-200 p-2 flex items-center"
      aria-label="Go back to home"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}

export default BackButton;
