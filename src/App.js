import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import BookForm from './components/BookForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/edit/:id" element={<BookForm />} />
        <Route path="/add" element={<BookForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
