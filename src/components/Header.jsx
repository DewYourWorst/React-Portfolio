import {useState} from "react"


export default function(){
    let [isShown, setIsShown] = useState(false)
    let [contactShown, setContactShown] = useState(false)
    let [aboutMeShown, setAboutMeShown] = useState(false)

    let showClick = event => {
        setAboutMeShown(true)
        if(aboutMeShown == true){
            setAboutMeShown(false)
        }
    }

    let handleClick = event => {
        setIsShown(true)
        if(isShown == true){
            setIsShown(false)
        }
    };
    let handle = event => {
        setContactShown(true)
        if(contactShown == true){
            setContactShown(false)
        }
    };

    const assignments = [
        {id: 1,
        name:"Shazingle",
        image: "", 
        github:"https://github.com/toxicmix/group-project", 
        live:"https://toxicmix.github.io/group-project/",
        },

        {id: 2,
        name:"Bookshelf",
        image:"",
        github:"https://github.com/dmtweedy/bookshelf",
        live:" dmtweedy-bookshelf-06533d4bddb5.herokuapp.com/results"
        },

        {id: 3,
        name:"In-Progress",
        image:"",
        github:"https://github.com/DewYourWorst/GroupProject3",
        live:""
        },

    ]

    return(
        <>
            <h1>Nicolas Alonzo</h1>
            <button onClick={showClick}>About me</button>
                {aboutMeShown && (
                    <div>
                        <p>My name is Nicolas Alonzo I am 21 years old and I initally went to school for economics out of highschool but i realized I wanted something challenging. I wanted to try something new and so here I am trying coding. I love to play games like chess and RPG's like Runescape or Pokemon. My favorite instument is the Piano and hope to be able to play it one day. </p>

                        <p>In terms of coding I'm really hoping to improve in just about every way possible. So far i've really enjoyed front-end. Especially react as its a very strong language but also understandable when you put it to use. It's probably my favorite language so far. I am confident in Javascript and im working my way to being comfortable with Node. Outside of this code camp I have practically no coding experience but from what I've learned so far I don't regret my decision to try something new one bit and i'm excited for what the future brings.</p>
                    </div>
                )}
            <button  onClick={handleClick}>Portfolio</button>
                {isShown && (
                <div>
                    <h1>These are my Projects:</h1>
                    { assignments.map( project => 
                        <div>
                            <p>This is my project, { project.name }</p>
                            <a href= { project.live }>
                                <img src= {project.image} width="400" height="400"/>
                            </a>
                            <p>Check out the code by pressing this link or click the image to see it deployed! : <a href= {project.github}>Click Here!</a></p>
                        
                        </div>
                        )}
                </div>
            )}
            <button onClick={handle}>Contact Me</button>
                {contactShown &&(
                    <div>
                        <h1>Contact Me</h1>
                        <input type:text placeholder="Name"></input>
                        <input type:text placeholder="Email"></input>
                        <input type:text placeholder="Message"></input>
                        <button type:submit>Submit</button>
                    </div>)}
            <button className="resume">Resume</button>
        </>
    )
}