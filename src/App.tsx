import { Container,Box, Typography } from "@mui/material";
import AddHabitForm from "./components/AddHabitForm";
import HabitsList from "./components/HabitsList";

const App = () => {

  return (
    <Container>
      <Box>
        <Typography variant="h2" component='h1' gutterBottom align="center">Habit Tracker</Typography>
      </Box>
      <AddHabitForm/>
      <HabitsList/>
    </Container>
  )
}

export default App