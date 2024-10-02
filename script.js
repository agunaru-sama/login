<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Interactive Panda Form</title>

    <!-- Google Font -->
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
      rel="stylesheet"
    />

    <!-- Stylesheet -->
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <div class="container">
      <!-- Tambahkan id pada form agar mudah diakses -->
      <form id="login-form">
        <label for="username">Username:</label>
        <input type="text" id="username" placeholder="Username here..." />

        <label for="password">Password:</label>
        <input type="password" id="password" placeholder="Password here..." />

        <button type="submit">Login</button>
      </form>

      <div class="ear-l"></div>
      <div class="ear-r"></div>

      <div class="panda-face">
        <div class="blush-l"></div>
        <div class="blush-r"></div>
        <div class="eye-l">
          <div class="eyeball-l"></div>
        </div>
        <div class="eye-r">
          <div class="eyeball-r"></div>
        </div>
        <div class="nose"></div>
        <div class="mouth"></div>
      </div>

      <div class="hand-l"></div>
      <div class="hand-r"></div>
      <div class="paw-l"></div>
      <div class="paw-r"></div>
    </div>

    <!-- Script -->
    <script src="script.js"></script>
  </body>
</html>