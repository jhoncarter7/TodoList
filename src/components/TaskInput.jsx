import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import { AddTodo } from "../redux/todoSlice";
export default function TaskInput() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch()
  
  const matches = useMediaQuery("(min-width:600px)");
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(AddTodo(todo))
    console.log(todo)
    setTodo("");
  };
const randomId = Math.floor(Math.random()*1000)


  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <FormatListBulletedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          List of Todo
        </Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          mt: 1,
          display: "flex",
          gap: matches ? "1rem" : "",
          flexDirection: matches ? "row" : "column",
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="Text"
          label="Type your todo here"
          name="Todo"
          top="2px"
          value={todo ? todo.title : ""}
          onChange={(e) => setTodo({id: randomId, title: e.target.value, complete: false})}
          sx={
            matches
              ? { width: "30vw", backgroundColor: "white" }
              : { width: "60vw", backgroundColor: "white" }
          }
        />
        <Button
          type="submit"
          variant="contained"
          sx={matches ? { mt: 3, mb: 2 } : { mb: 1 }}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
}
