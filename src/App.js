import './App.css';
import ContactForm from "./ContactForm";

function App() {
  return (
    <div className='App'>
      <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='text-4xl mb-5 w-6/12 text-center'>
          Send Email Test with Tailwind Styling
        </h1>
        <ContactForm />
      </div>
    </div>
  )
}

export default App;
