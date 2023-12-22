import React from 'react';
import useData from '../../hooks/useData';
import { FaRegTrashAlt } from "react-icons/fa";

const ShowTask = () => {
  const { todo } = useData();
  console.log(todo);
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Desc</th>
        <th>Deadline</th>
        <th>Priority</th>
        <th >Delete</th>
      </tr>
    </thead>
    <tbody>
            {
              todo?.map((td,index)=><tr key={index}>
                <th>{index + 1}</th>
                <td>{td?.title}</td>
                <td>{td?.desc}</td>
                <td>{td?.deadline}</td>
                <td>{td?.priority}</td>
                <td className=' text-2xl text-red-600  ' ><FaRegTrashAlt /></td>
        
      </tr>)
      }
      
     
    </tbody>
  </table>
</div>
    </div>
  );
};

export default ShowTask;