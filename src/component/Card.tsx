import React from "react";

interface CardProps {
  task: any;
  deleteTask: any;
}

const Card: React.FC<CardProps> = ({ task, deleteTask }) => {
  return (
    <>
      <div
        className="flex justify-center w-full bg-blue-400 rounded-md p-3 m-3 cursor-pointer"
        onClick={() => deleteTask(task.id)}
      >
        <div className="text-xl font-bold overflow-x-auto">{task.text}</div>
      </div>
    </>
  );
};

export default Card;
