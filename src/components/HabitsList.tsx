import { Box, Button, Grid, LinearProgress, Paper, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import useHabitStore, { type Habit } from '../store/store'
import HabitStats from './HabitStats';



const HabitsList = () => {

  const {habits,removeHabit,toggleHabit} = useHabitStore();

  const today = new Date().toISOString().split('T')[0];
  
  const getStreak = (habit:Habit)=>{

    let streak:number = 0;
    const currentDate = new Date();
    while(habit.completedDates.includes(today)){
        const dateString = currentDate.toISOString().split("T")[0]
        if(habit.completedDates.includes(dateString)){
            streak++;
            currentDate.setDate(currentDate.getDate() - 1);
        }
        else{
            break;
        }
    }
    return streak;
    
  }

  const getLongestStreak = ()=>{

    return Math.max(...habits.map(getStreak))
  }
 
  return (
    <>
    <Box sx={{display:'flex',flexDirection:'column',gap:2,mt:4}}>
        {habits.map((habit)=>(
            <Paper key={habit.id} elevation={2} sx={{p:2}}>
               <Grid container alignItems='center'>
                    <Grid size={{xs:12,sm:6}}>
                        <Typography variant='h6'>{habit.name}</Typography>
                        <Typography variant='body2' color='text.secondary'>
                            {habit.frequency}
                        </Typography>
                    </Grid>
                    <Grid size={{xs:12,sm:6}}>
                        <Box sx={{display:'flex',gap:3,justifyContent:'end'}}>
                            <Button 
                             variant='outlined'
                             color={habit.completedDates.includes(today) ? 'success':'primary'}
                             startIcon={<CheckCircleIcon/>} onClick={()=>toggleHabit(habit.id,today)}>
                                {habit.completedDates.includes(today) ? 'Completed' : 'Mark Complete'}
                            </Button>
                            <Button variant='outlined'
                             startIcon={<DeleteIcon/>} 
                             color='error' 
                             onClick={()=>removeHabit(habit.id)}>
                                Remove
                            </Button>
                        </Box>
                    </Grid>
               </Grid> 
               <Box sx={{mt:2}}>
                    <Typography>Current Streak:{getStreak(habit)}</Typography>
                    <LinearProgress variant="determinate" value={(getStreak(habit)/30)*100}/>
               </Box>
            </Paper>
        ))}
    </Box>
    <HabitStats getLongestStreak={getLongestStreak}/>
    </>
  )
}

export default HabitsList