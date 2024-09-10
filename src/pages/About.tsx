
type Props = {}

const About = (props: Props) => {
  return (
    <>
        <div>
            <h1 className="text-6xl mb-4">Github-Finder</h1>
            <p className="mb-4 text-2xl font-light">
                Welcome to Github Finder, a react app that helps you search Github Profiles and access their
                repos. With Github-Finder, you can easily find and connect with other developers, discover
                new projects, and stay up-to-date on the latest trends in the tech scene. 
            </p>
    </div>

    <div className="container mt-4">
        <h4 className="font-bold mb-2">Features:</h4>
        <ul>
            <li>- Search for GitHub profiles by name or username, or email</li>
            <li>- Browse public repositories by language, topic, or popularity</li>
            <li>- View detailed information about profiles and repositories, including contributions, stars, and Gists.</li>
            <li>- Follow profiles and repositories to stay up-to-date on their activity</li>
        </ul>
    </div>
    </>
 

  )
}

export default About