import { Form, Button } from 'react-bootstrap';
import {useState} from "react";

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please insert a valid email');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('The email is not formatted correctly');

    } else {
      setError('');
      // Lógica para enviar o formulário
    }
  };

  return (

    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={!!error}
        />
        <Form.Control.Feedback type="invalid">
          {error}
        </Form.Control.Feedback>
      </Form.Group>
      <Button className='btn-form' type="submit">
        Go
      </Button>
    </Form>

  );
}

export default NewsletterForm;
