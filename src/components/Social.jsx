import PropTypes from "prop-types";

const Social = ({ url, children }) => {
  return (
    <a
      href={url}
      className="inline-block transition-all transform-gpu scale-[2] hover:scale-[2.5] duration-300 ease-in-out fill-indigo-400 hover:fill-orange-300"
    >
      {children}
    </a>
  );
};

Social.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Social;
