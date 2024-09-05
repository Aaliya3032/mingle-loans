import React from "react";
import { Card, CardContent, Typography, Grid, Table, TableBody, TableCell, TableHead, TableRow, Paper } from "@mui/material";

const LoanReports = () => {
  const applications = [
    { id: 1, date: '2023-09-01', status: 'In Progress' },
    { id: 2, date: '2023-08-30', status: 'Submitted' },
    { id: 3, date: '2023-09-28', status: 'Submitted' },
  ];

  const inProgressCount = applications.filter(app => app.status === 'In Progress').length;
  const submittedCount = applications.filter(app => app.status === 'Submitted').length;

  return (
    <div style={{ padding: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">In Progress Loan Applications</Typography>
              <Typography variant="h4">{inProgressCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Submitted Loan Applications</Typography>
              <Typography variant="h4">{submittedCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper style={{ marginTop: '20px', overflowX: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Application No.</TableCell>
              <TableCell>Application Date</TableCell>
              <TableCell>Application Status</TableCell>
            </TableRow>   
          </TableHead>
          <TableBody>
            {applications.map((app) => (
              <TableRow key={app.id}>
                <TableCell>{app.id}</TableCell>
                <TableCell>{app.date}</TableCell>
                <TableCell>{app.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default LoanReports;
