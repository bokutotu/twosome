import { login, loginWithProvider, signup } from './actions'

export default function LoginPage() {
  return (
    <div>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>

      <form action={loginWithProvider}>
        <label htmlFor="provider">Provider:</label>
        <select id="provider" name="provider">
          <option value="github">GitHub</option>
          <option value="google">Google</option>
          <option value="twitter">Twitter</option>
        </select>
        <button type="submit">Log in with provider</button>
      </form>
    </div>
  )
}
