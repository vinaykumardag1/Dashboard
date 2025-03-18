import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal, Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CreateUser = () => {
  const [open, setOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/get/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleUpdate = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setUserToDelete(id);
    setDeleteOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/delete/users/${userToDelete}`);
      setUsers(users.filter(user => user._id !== userToDelete));
      setDeleteOpen(false);
      setUserToDelete(null);
      toast.warning('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Error deleting user');
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
    setUserToDelete(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/api/update/users/${selectedUser._id}`, selectedUser);
      setUsers(users.map(user => (user._id === selectedUser._id ? response.data : user)));
      handleClose();
      toast.success('User updated successfully');
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Error updating user');
    }
  };

  const handleCreateOpen = () => {
    setCreateOpen(true);
  };

  const handleCreateClose = () => {
    setCreateOpen(false);
  };

  const handleCreateSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      role: event.target.role.value,
      mobile: event.target.mobile.value,
    };
    try {
      const response = await axios.post('http://localhost:8080/api/create/users', newUser);
      setUsers([...users, response.data]);
      handleCreateClose();
      toast.success('User created successfully');
    } catch (error) {
      console.error('Error creating user:', error);
      toast.error('Error creating user');
    }
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <>
      <ToastContainer draggable position="bottom-left" />
      <div className='flex justify-end'>
        <Button variant='contained' color='warning' onClick={handleCreateOpen}>
          Create User
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Mobile Number</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.mobile}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleUpdate(user)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleDelete(user._id)} style={{ marginLeft: '10px' }}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update User
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={selectedUser ? selectedUser.name : ''}
              onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                id="role"
                value={selectedUser ? selectedUser.role : ''}
                label="Role"
                name='role'
                onChange={(e) => setSelectedUser({ ...selectedUser, role: e.target.value })}
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="guest">Guest</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Mobile"
              variant="outlined"
              value={selectedUser ? selectedUser.mobile : ''}
              onChange={(e) => setSelectedUser({ ...selectedUser, mobile: e.target.value })}
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
          <Button variant="contained" color='error' onClick={handleClose} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>

      <Modal
        open={createOpen}
        onClose={handleCreateClose}
        aria-labelledby="create-modal-title"
        aria-describedby="create-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <Typography id="create-modal-title" variant="h6" component="h2">
            Create User
          </Typography>
          <form onSubmit={handleCreateSubmit}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="create-role-label">Role</InputLabel>
              <Select
                labelId="create-role-label"
                id="create-role"
                name="role"
                value={role}
                label="Role"
                onChange={handleRoleChange}
              >
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="User">User</MenuItem>
                <MenuItem value="Guest">Guest</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="mobile"
              label="Mobile"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
          <Button variant="contained" color='error' onClick={handleCreateClose} fullWidth sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>

      <Modal
        open={deleteOpen}
        onClose={handleDeleteClose}
        aria-labelledby="delete-modal-title"
        aria-describedby="delete-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <Typography id="delete-modal-title" variant="h6" component="h2">
            Confirm Delete
          </Typography>
          <Typography id="delete-modal-description" sx={{ m: "20px 0px" }}>
            Are you sure you want to delete this user?
          </Typography>
          <div className="flex justify-between py-1">
            <Button variant="contained" color="secondary" onClick={confirmDelete}>
              Confirm
            </Button>
            <Button variant="contained" color='error' onClick={handleDeleteClose}>
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default CreateUser;

