import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Implement login logic here (e.g., API call, validation)
    console.log('Username:', username);
    console.log('Password:', password);

    // Clear form fields after submission (optional)
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">@</span>
          </div>
          <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        
        <div class="form-group">
          <label for="inputPassword6">Password</label>
          <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <small id="passwordHelpInline" class="text-muted">
            Must be 8-20 characters long.
          </small>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
