import logo from './public/logo.svg'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 grid justify-items-center text-white text-2xl p-24">
      <div className="grid place-content-center text-center">
        <img
          src={logo}
          alt="logo"
          className="w-[100%] animate-bounce mx-auto"
        />
        <div className="space-y-4">
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="text-sky-500 underline hover:text-sky-400"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer">
              Learn React
            </a>
            {' | '}
            <a
              className="text-sky-500 underline hover:text-sky-400"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer">
              Vite Docs
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
