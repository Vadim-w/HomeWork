import React, {useState} from 'react';
import {Todolist} from "./Tododlist";

export type AffairsType = {
    id: number
    title: string
    p: boolean
}

export type FilterValuesType = "all" | "active" | "completed";


function Affairs() {
    let [affairs, setAffairs] = useState([
        {id: 1, title: "работа", p: true},
        {id: 2, title: "аниме", p: false},
        {id: 3, title: "игры", p: false},
        {id: 4, title: "реакт", p: true},
        {id: 5, title: "хтмл", p: true}
    ]);

    let  [filter, setFilter] = useState<FilterValuesType>("all")


    function removeTask(taskId: number) {
        let filteredTasks = affairs.filter((t) => t.id !== taskId)
        setAffairs(filteredTasks);
    }

    function changeFilter(newFilterValue: FilterValuesType) {
        setFilter(newFilterValue);
    }

    function changeStatus(id: number, p: boolean) {
      let  task = affairs.find(t => t.id === id);
      if (task) {
          task.p = p;
          setAffairs([...affairs]);
      }

    }


    let tasksForTodoList = affairs;
    if(filter === "active"){
        tasksForTodoList = affairs.filter(t => t.p === false)
    }

    if (filter === "completed") {
        tasksForTodoList = affairs.filter(t => t.p === true)

    }





    return (
        <div>
            <Todolist
                title={"To-do list"}
                tasks={tasksForTodoList}
                removeTasks={removeTask}
                changeFilter={changeFilter}
                changeStatus={changeStatus}
            />
        </div>
    )

}

export default Affairs;