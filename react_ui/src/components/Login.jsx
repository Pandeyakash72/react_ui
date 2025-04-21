import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Link,
} from '@mui/material';

function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    email: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login
      if (formData.username && formData.password) {
        navigate('/dashboard');
      }
    } else {
      // Handle signup
      if (
        formData.name &&
        formData.email &&
        formData.username &&
        formData.password &&
        formData.confirmPassword
      ) {
        if (formData.password !== formData.confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
        alert('Account created successfully! You can now log in.');
        setIsLogin(true);
      }
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" align="center" gutterBottom>
            {isLogin ? 'Sign In' : 'Sign Up'}
          </Typography>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  margin="normal"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  margin="normal"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </>
            )}
            <TextField
              fullWidth
              label="Username"
              name="username"
              margin="normal"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {!isLogin && (
              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                margin="normal"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            )}
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{ mt: 3 }}
            >
              {isLogin ? 'Sign In' : 'Sign Up'}
            </Button>
          </form>
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Link
              component="button"
              variant="body2"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin
                ? "Don't have an account? Sign Up"
                : 'Already have an account? Sign In'}
            </Link>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login; 