import React, { useState, ChangeEvent } from 'react';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');


  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };


  return (
    <> 
    <div className='py-10 relative px-4 bg-[#4553B1] flex justify-center'>
        <div className="absolute lg:min-w-[40%] md:min-w-[60%] min-w-[90%] shadow-2xl bg-[#ffff]">
          <div className="flex flex-col justify-center w-[100%]">
            <div className="flex w-[100%] bg-[#4553B1] justify-center text-center py-7 px-7">
              <h3 className='text-2xl text-white'>Todo list</h3>
            </div>
            <div className="flex flex-col w-[100%] bg-[#ffff]  py-7 px-7">
              <div className="flex gap-3 flex-col w-[100%]">
                <div className="">
                  <label>Add a new task</label>
                </div>
                <div className="flex flex-row flex-wrap gap-3">
                  <div className="flex-1"> 
                    <Input placeholder='Add new task' onChange={handleInputChange} />
                  </div>
                  <div className="">
                    <Button text='Add todo' onClick={handleAddTodo} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[100%]  py-0 pb-7 px-7">
              <ul className='list-none flex flex-col gap-1'>
                  {tasks.map((task)=>(
                    <>
                    <li className="p-1 flex" key={task}>
                        <span className='flex-1'>{task}</span>
                        <span className=''></span>
                    </li> 
                    <hr/>
                    </>
                  
                  ))}
              </ul>
              
              <div className="">

              </div>
            </div>


          </div> 
        </div>
      </div>
    </>
  )
}

export default App
