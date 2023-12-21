import { useForm } from "react-hook-form"
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from 'sweetalert2'

const CreateTask = () => {
    const axiosSecure = useAxiosSecure()
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
         const info = {
        title: data.titles,        
        desc: data.desc,
        deadline: data.deadline,
        priority: data.pri,
        
      }
        axiosSecure.post('/todo', info)
         .then(function (response) {
             console.log(response);
             if (response.data.insertedId) {
                 reset()
             Swal.fire({
  title: "Good job!",
  text: "You create the task!",
  icon: "success"
});
             }
            
  })
  .catch(function (error) {
    console.log(error);
  });
        
     }
  return (
    <div>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

    <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Titles</label>
                <input  {...register("titles")} id="titles" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" >Descriptions</label>
                <input  {...register("desc")} id="descriptions" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" >deadlines</label>
                <input  {...register("deadline")} id="deadlines" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" >Priority Confirmation</label>
                <select  {...register("pri")} className="select w-full max-w-xs">
  <option disabled selected>What is the priority?</option>
  <option>Low</option>
  <option>moderate</option>
  <option>high</option>
  
</select>
            </div>
        </div>

        <div className="flex justify-end mt-6">
            <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</section>
    </div>
  );
};

export default CreateTask;