import { Paper, Typography } from '@mui/material'
import useHabitStore from '../store/store'
import { type FC } from 'react'

interface InputProps{
    getLongestStreak:any
}  

const HabitStats:FC<InputProps> = ({getLongestStreak}) => {

  const {habits} = useHabitStore();

  const getCompletedToday = ()=>{
    
    const today = new Date().toISOString().split('T')[0];

    return habits.filter((habit)=>habit.completedDates.includes(today)).length

  }

  return (

<<<<<<< HEAD
    <Paper sx={{mt:3,p:5}} elevation={3}>
        <Typography variant='h6' sx={{mb:2}}>Habits stats</Typography>
        <Typography variant='body1'>Total Habits : {habits.length}</Typography>
        <Typography variant='body1'>Completed Today :{getCompletedToday()}</Typography>
        <Typography variant='body1'>Longest Streak :{habits.length===0?'0':getLongestStreak()}</Typography>
    </Paper>
  )
=======
    return (

        <Paper sx={{ mt: 3, p: 5 }} elevation={3}>
            <Typography variant='h6' sx={{ mb: 2 }}>Habits stats</Typography>
            <Typography variant='body1'>Total Habits : {habits.length}</Typography>
            <Typography variant='body1'>Completed Today :{getCompletedToday()}</Typography>
            <Typography variant='body1'>Longest Streak :{habits.length===0?'0':getLongestStreak()}</Typography>
        </Paper>
    )
>>>>>>> 019d09de6cdfd9b8fd51a95ced75c27fb6a49ec7
}

export default HabitStats
