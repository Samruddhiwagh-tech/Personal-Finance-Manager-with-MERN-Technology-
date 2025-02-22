import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button, Form, Table } from "react-bootstrap";
import "./App.css";

const App = () => {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({ email: "", phone: "", name: "" });
  const [avatar, setAvatar] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ date: "", title: "", category: "", amount: "" });

  const avatars = ["👦", "👩", "🧑", "👧", "👨", "👵"];

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleExpenseChange = (e) => {
    setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
  };

  const addExpense = () => {
    setExpenses([...expenses, newExpense]);
    setNewExpense({ date: "", title: "", category: "", amount: "" });
  };

  return (
    <Container className="mt-5 text-center app-container">
      {step === 1 && (
        <Card className="p-4 shadow-lg auth-card">
          <h3>Login / Signup</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="email" name="email" placeholder="Email" className="rounded-input" onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" name="phone" placeholder="Phone" className="rounded-input" onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" name="name" placeholder="Name" className="rounded-input" onChange={handleInputChange} />
            </Form.Group>
            <Button className="btn-custom" onClick={() => setStep(2)}>Next</Button>
          </Form>
        </Card>
      )}

      {step === 2 && (
        <Card className="p-4 shadow-lg auth-card">
          <h3>Choose Your Avatar</h3>
          <div className="d-flex justify-content-center flex-wrap">
            {avatars.map((av, index) => (
              <Button key={index} variant="light" className="avatar-btn" onClick={() => { setAvatar(av); setStep(3); }}>
                <span className="avatar-icon">{av}</span>
              </Button>
            ))}
          </div>
        </Card>
      )}

      {step === 3 && (
        <Card className="p-4 shadow-lg expense-card">
          <h3>Expense Manager</h3>
          <p>Welcome, {user.name} {avatar}</p>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((exp, index) => (
                <tr key={index}>
                  <td>{exp.date}</td>
                  <td>{exp.title}</td>
                  <td>{exp.category}</td>
                  <td>${exp.amount}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h5>Add New Expense</h5>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="date" name="date" className="rounded-input" onChange={handleExpenseChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" name="title" placeholder="Title" className="rounded-input" onChange={handleExpenseChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" name="category" placeholder="Category" className="rounded-input" onChange={handleExpenseChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="number" name="amount" placeholder="Amount" className="rounded-input" onChange={handleExpenseChange} />
            </Form.Group>
            <Button className="btn-custom" onClick={addExpense}>Add Record</Button>
          </Form>
        </Card>
      )}
    </Container>
  );
};

export default App;
