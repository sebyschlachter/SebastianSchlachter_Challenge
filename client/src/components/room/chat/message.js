const Message = ({ message }) => {
  
  return <p style={{  color: message.split(":")[0] }}>
    {message.split(":")[1]+": "+message.split(":")[2]}</p>;
};

export default Message;
