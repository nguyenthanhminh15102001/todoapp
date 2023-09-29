"use client"
import React from "react";
import { Input,Button ,IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Home() {
        const [age, setAge] = React.useState('');

        const handleChange = (event) => {
          setAge(event.target.value);
        };
  return (
    <main className="flex bg-white dark:bg-black min-h-screen flex-col  justify-center items-center p-24">
       <div  className='container flex items-center justify-center  place-content-center '>
            <div className='w-2/3 min-h-min bg-slate-50 text-black rounded-lg '> 
              <div className='Title-box flex items-center justify-center p-10'>
                <h1 className='text-5xl font-bold  text-green-400'>My Todolist</h1>
              </div>
              <div className='content-box my-4 py-4 px-7 '>
                 <div className='input-wrapper flex items-center justify-center h-32 py-5 px-4  shadow bg-white rounded-lg'> 
                    <div className="input-box w-full  flex relative flex items-center justify-center h-12">
                    <Input
                      placeholder="Add Todo"
                      className="pr-20 h-full bg-none outline-none border-none shadow-none  text-xl"
                      containerProps={{
                        className: "min-w-0 h-full bg-none outline-none border-none shadow-none",
                      }}
                    />
                    <Button
                      size="sm"
                      color={"blue-gray"}
                     
                      className="h-full bg-none outline-none border-none shadow-none"
                    >
                      <FontAwesomeIcon icon={faCalendar} className="h-full text-blue-500" />
                    </Button>
                    <Button
                      size="sm"
                      color={"blue-gray"}
                      className="h-full bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded text-lg"
                    >
                      Add
                    </Button>
                    </div>
                  </div>
                  <div class="h-px my-4 bg-gray-200 border-0 "></div>


                 <div className='filter-box  flex items-center justify-end py-5 px-4 pt-0'> 
                 <FormControl sx={{ m: 1, minWidth: 120 }}  size="small">
                    <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                   
                  </FormControl>
                  <FormControl sx={{ m: 1, minWidth: 120 }}  size="small">
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                
                  </FormControl>
                
                 </div>

                 <div className='todo-box'> 
                 
                 </div>
              </div>
             </div>
       </div>
    </main>
  )
}





