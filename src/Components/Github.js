import React from "react"

import EachProfile from "./EachProfile";

import {useState,useEffect} from "react";

function Github()
{
    const [data,setData] = useState([]);

    const getUsers = async ()=>{
        const response = await fetch('https://api.github.com/users');
        const latestData = await response.json();
        setData(latestData);
        console.log(latestData);
    }

    useEffect(()=>{
        getUsers();
    },[])


    return(
        <div className="userData">
            {data.map((user)=>(
                <EachProfile name={user.login} profileUrl={user.avatar_url} githubLink={user.html_url}/>
            ))}
        </div>
    );
}

export default Github;


// class Github extends React.Component
// {
//     constructor()
//     {
//         super()
//         this.state = {
//           userName: '',
//           img: ''
//         }
//     }

//     componentDidMount()
//     {
//          fetch('https://api.github.com/users')
//         .then(response=>response.json())
//         .then(jsn=>{
//           this.setState({
//             userName: jsn[0].login,
//             img: jsn[0].avatar_url
//           })
//         })
//     }

//     render()
//     {
//       return(
//         <div>
//             <h1>{this.state.userName}</h1>
//             <img src={this.state.img}/>
//         </div>
//       )
//     }
// }

// export default Github
