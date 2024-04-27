import PropTypes from "prop-types";
const Message = ({ message, bgColor }) => {
  let styleMessage = {
    backgroundColor: bgColor,
  };
  return (
    <div style={styleMessage}>
      <p>{message}</p>
    </div>
  );
};
Message.propTypes = {
  message: PropTypes.string,
  bgColor: PropTypes.string,
};
export default Message;
