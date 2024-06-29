import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";
import axios from "axios";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalContacts, setTotalContacts] = useState(0);

  const getContacts = async () => {
    try {
      const res = await axios.get(
        `https://demo-sigma.site/api/contact?page=${
          page + 1
        }&limit=${rowsPerPage}`
      );
      const data = res.data;
      setContacts(data.contacts);
      setTotalContacts(data.totalContacts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getContacts();
  }, [page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact List
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Birth Date</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Content</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact._id}>
                  <TableCell>
                    {contact.image && (
                      <Card>
                        <CardMedia
                          component="img"
                          height="140"
                          image={`https://demo-sigma.site/${contact.image.replace(
                            /\\/g,
                            "/"
                          )}`}
                          alt={contact.firstName}
                        />
                      </Card>
                    )}
                  </TableCell>
                  <TableCell>{contact.firstName}</TableCell>
                  <TableCell>{contact.lastName}</TableCell>
                  <TableCell>{contact.phone}</TableCell>
                  <TableCell>
                    {new Date(contact.birthDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.title}</TableCell>
                  <TableCell>{contact.content}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={totalContacts}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Box>
    </Container>
  );
};

export default ContactList;
