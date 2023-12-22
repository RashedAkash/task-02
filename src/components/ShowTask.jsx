import React from 'react';
import useData from '../../hooks/useData';
import { FaRegTrashAlt } from "react-icons/fa";
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ShowTask = () => {
  const { todo,refetch } = useData();
  const axiosSecure = useAxiosSecure();
  console.log(todo);
  const handleDelete = (id) => {
    console.log(id);
    axiosSecure.delete(`/todo/${id}`)
      .then(res => {
        console.log(res);
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    if (res.data.deletedCount>0) {
       Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    }
    refetch()
   
  }
});
      })
      .catch(err => {
      console.log(err);
    })
  }
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
                <td onClick={()=>handleDelete(td._id)} className=' text-2xl text-red-600  ' ><FaRegTrashAlt /></td>
        
      </tr>)
      }
      
     
    </tbody>
  </table>
</div>
    </div>
  );
};

export default ShowTask;