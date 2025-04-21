import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';

function Dashboard() {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);

  const handleLogout = () => {
    navigate('/login');
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFiles([...files, { url: e.target.result, type: file.type }]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNavClick = (feature) => {
    alert(`${feature} feature clicked! This would open a ${feature.toLowerCase()} page in a real application.`);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit" onClick={() => handleNavClick('Report')}>
            Report
          </Button>
          <Button color="inherit" onClick={() => handleNavClick('Research Paper')}>
            Research Paper
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {/* Three Cards */}
          {[1, 2, 3].map((num) => (
            <Grid item xs={12} md={4} key={num}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Card {num}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description for card {num}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}

          {/* Upload Section */}
          <Grid item xs={12}>
            <Box sx={{ textAlign: 'center', my: 3 }}>
              <input
                accept="image/*,video/*"
                style={{ display: 'none' }}
                id="file-upload"
                type="file"
                onChange={handleFileUpload}
              />
              <label htmlFor="file-upload">
                <Button variant="contained" component="span">
                  Upload File
                </Button>
              </label>
            </Box>
          </Grid>

          {/* Display Uploaded Files */}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {files.map((file, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  {file.type.startsWith('image/') ? (
                    <img
                      src={file.url}
                      alt={`Uploaded ${index}`}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  ) : (
                    <video
                      src={file.url}
                      controls
                      style={{ width: '100%', height: 'auto' }}
                    />
                  )}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Dashboard; 