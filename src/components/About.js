import User from './User'
import UserContext from '../utils/UserContext';


const About = () => {
  return(
    <div className="About-Us">
      <UserContext.Consumer>
        {({loggedInUser}) => <h1>{loggedInUser}</h1> }
      </UserContext.Consumer>
      <h1>About us</h1>
      <h2>Fastest Delivery Ever...</h2>
      <User /> 
    </div>
  );
};


export default About;