import { Box, TextField,FormControl,MenuItem,InputLabel,Select, Button } from "@mui/material";
import { useState } from "react"
import useHabitStore from "../store/store";


const AddHabitForm = () => {

  const [name, setName] = useState('');
  const [frequency, setFrequnecy] = useState<'daily' | 'weekly'>('daily');
  const {addHabit} = useHabitStore();
  
  const handleSubmit = (e:any)=>{
    e.preventDefault();
    if(name.trim()){
      addHabit(name,frequency);
      setName("")
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{
        display:'flex',
        flexDirection:'column',
        gap:4
      }}>
        <TextField label='Habit Name'
          value={name}
          onChange={(e) => setName(e.target.value)} placeholder="Enter your habit"
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel>Frequency</InputLabel>
          <Select
            value={frequency}
            label="frequency"
            onChange={(e)=>setFrequnecy(e.target.value as 'daily'| 'weekly')}
          >
            <MenuItem value='daily'>Daily</MenuItem>
            <MenuItem value='weekly'>Weekly</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" type="submit" color="primary" >Add Habit</Button>
      </Box>
    </form>
  )
}

export default AddHabitForm