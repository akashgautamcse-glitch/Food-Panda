const User = (props) => {
  const { name, location, contact } = props;
  return(
    <div className="User-detail">
      <h2>By : {name}</h2>
      <h3>Location : {location}</h3>
      <h3>Contact : {contact}</h3>
    </div>
  );
};

export default User;