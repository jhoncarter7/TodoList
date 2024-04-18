import "../App.css";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import PropTypes from 'prop-types';

TaskList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
function TaskList({id, title}) {
  
  console.log("title", title)
  return (
    <div id="taskList">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
       
      >
        <h4>{title}</h4>
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
      ;
    </div>
  );
}

export default TaskList;
