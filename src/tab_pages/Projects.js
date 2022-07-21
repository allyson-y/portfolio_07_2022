import ToDoList from '../pictures/ToDoList.png';
import {useState} from "react";
import './Projects.css';

function Projects() {
    const [showToDoList, setShowToDoList] = useState(false);

    function toggleShowToDoList() {
        setShowToDoList(!showToDoList);
    }
    return <> {!showToDoList ?
        <div>
            Click on the images below to learn about some of my projects!
            <br/>
            <div className={"container"}>
                <img src={ToDoList} alt="ToDoList" height={300} onClick={toggleShowToDoList}/>
                <img src={ToDoList} alt="ToDoList" height={300} onClick={toggleShowToDoList}/>
                <img src={ToDoList} alt="ToDoList" height={300} onClick={toggleShowToDoList}/>
                <img src={ToDoList} alt="ToDoList" height={300} onClick={toggleShowToDoList}/>

            </div>
        </div>
        :
        <div>
            <button onClick={toggleShowToDoList}>Back</button>
            <h1>To Do List Project</h1>
        </div>}
    </>
}

export default Projects;