import PropTypes from "prop-types";

export const MyButton: React.FC = ({ children }) => {
  return (
    <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
      {children}
    </button>
  );
};

MyButton.propTypes = {
  children: PropTypes.node,
};

export default MyButton;
