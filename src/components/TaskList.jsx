
import "../App.css";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
function TaskList() {
  return (
    <div id="taskList">
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
        <h4>Task List</h4>
        <Box>
          <IconButton aria-label="Edit">
            <EditNoteIcon />
          </IconButton>
          <IconButton aria-label="complete">
            <CheckIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <ClearIcon />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
}

export default TaskList;
