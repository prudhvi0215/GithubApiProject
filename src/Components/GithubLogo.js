import "../App.css";

function GithubLogo(props){
    return(
        <div className="githubLogo">
            <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"/>
            <a href={props.githubLink} target="_blank">Github Repo Link</a>
        </div>
    );
}

export default GithubLogo;