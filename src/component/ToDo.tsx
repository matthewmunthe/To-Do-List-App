import React, { useState } from "react";
import Card from "./Card";
import Task from "./Task";

const ToDo = () => {
  let [tasks, setTasks] = useState<Array<Task>>([
    {
      id: 1,
      text: "Mengganyang fufufafa",
    },
    {
      id: 2,
      text: "Menonton tim papan bawah (MU)",
    },
  ]);

  function addTask(newText: string) {
    let id;
    if (tasks.length === 0) {
      id = 1;
    } else {
      id = tasks[tasks.length - 1].id + 1;
    }
    if (newText.length != 0) {
      const newTask = {
        id: id,
        text: newText,
      };
      setTasks([...tasks, newTask]);
      setText("");
      console.log(newTask);
    }
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function onSubmit(event: any) {
    event.preventDefault();
    event.target.reset();
  }

  const [text, setText] = useState("");

  return (
    <>
      <div className="flex-col w-1/2 flex items-center justify-center">
        <h1 className="text-3xl font-bold">To-Do List</h1>

        {tasks.map((task) => (
          <Card task={task} deleteTask={deleteTask} />
        ))}
        <form onSubmit={onSubmit} className="flex flex-col w-full ju">
          <input
            id="formInput"
            className="flex items-center justify-center bg-blue-400 rounded-md p-3 my-3"
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="flex justify-center bg-blue-400"
            onClick={() => addTask(text)}
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default ToDo;
