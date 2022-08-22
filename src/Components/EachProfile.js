import "../App.css";
import GithubLogo from "./GithubLogo";

function EachProfile(props){
    return(
        <div className="eachUser">
            <h1>{props.name}</h1>
            <img id="profilePic" src={props.profileUrl}/>
            <GithubLogo githubLink={props.githubLink}/>
        </div>
    );
}

export default EachProfile;