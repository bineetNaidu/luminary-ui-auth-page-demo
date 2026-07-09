const App = () => {
  return (
    <div>
      <form id="form" className="glass-card">
        <div className="auth_welcome_container">
          <img src="/logo.png" alt="Luminary Logo" />
          <h2>Welcome Back, <span className="auth_sess_name">Thomas</span></h2>
        </div>
        <label htmlFor="email">Your Email</label>
        <input id="email" type="email" placeholder="you@example.com" />
        <label htmlFor="pass">Your Password</label>
        <input id="pass" type="password" placeholder="Password" />
        <button className="vibrant success glow">Login</button>
        <p>Don't have an account?. <a href="#">Register now!</a></p>
      </form>
    </div>
  )
}

export default App;