import "../App.css";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { UpdateTodo, DeleteTodo } from "../redux/todoSlice";
import toast from "react-hot-toast";
import { useState } from "react";

TaskList.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  complete: PropTypes.bool,
};

function TaskList({ id, title, complete }) {
  const { error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState(title);
  const [updatetask, setUpdateTask] = useState(false);

  const edithandler = (e) => {
    e.preventDefault();
    setUpdateTask(true);
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(UpdateTodo(todo));
    if (error) {
      toast.error("error in update");
      setUpdateTask(false);
    }
    toast.success("update success");
    setUpdateTask(false);
  };

  const completeHandler = (e) => {
    e.preventDefault();
    if (complete === false) {
      dispatch(UpdateTodo({ id, title, complete: true }));
      toast.success("Marked as complete");
    } else {
      dispatch(UpdateTodo({ id, title, complete: false }));
      toast.success("Marked as incomplete");
    }

    if (error) {
      toast.error("error while marking");
    }
  };

  const DeleteHandler = (e) => {
    e.preventDefault();
    dispatch(DeleteTodo(id));
    if (error) {
      toast.error("error while Deleting");
    }
    toast.success("Deleted");
  };

  return (
    <div id="taskList">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {!updatetask ? (
          !complete ? (
            <p>{title}</p>
          ) : (
            <p style={{ textDecoration: "line-through" }}>{title}</p>
          )
        ) : (
          <input
            id="editTask"
            autoFocus
            type="text"
            value={todo.title ? todo.title : todo}
            onChange={(e) => setTodo({ id, title: e.target.value })}
          />
        )}
        <Box>
          {!updatetask ? (
            <IconButton aria-label="Edit" onClick={edithandler}>
              <EditNoteIcon />
            </IconButton>
          ) : (
            <IconButton aria-label="Edit" onClick={updateHandler}>
              <UpgradeIcon />
            </IconButton>
          )}
          <IconButton aria-label="complete" onClick={completeHandler}>
            <CheckIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={DeleteHandler}>
            <ClearIcon />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
}

export default TaskList;
