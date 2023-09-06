import Shazingle from "../assets/shazingle.png"

export default function Projects(){
    const assignments = [
        {id: 1,
        name:"Shazingle",
        image: {Shazingle}, 
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
            <h1>These are my Projects:</h1>
            { assignments.map( project => 
                <div>
                    <p>This is my project, { project.name }</p>
                    <a href= { project.live }>
                        <img src= {project.image} width="675" height="400"/>
                    </a>
                    <p>Check out the code by pressing this link or click the image to see it deployed! : <a href= {project.github}>Click Here!</a></p>
                
                </div>
                ) }



        </>
    )
}