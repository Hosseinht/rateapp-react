import {Link} from 'react-router-dom'
import Card from "../components/shared/Card";


const About = () => {
    return (
        <Card>
            <div className="about">
                <h1>About this project</h1>
                <p>This is a React app </p>
                <p>Version: 1.0.0</p>
                <p>
                    <Link to="/">Back to home</Link>
                </p>
            </div>
        </Card>
    );
};

export default About;
