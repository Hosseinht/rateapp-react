import Card from "../components/shared/Card";


const About = () => {
    return (
        <Card>
            <div className="about">
                <h1>About this project</h1>
                <p>This is a React app </p>
                <p>Version: 1.0.0</p>
                <p>
                    <a href="/">Back to home</a>
                </p>
            </div>
        </Card>
    );
};

export default About;
