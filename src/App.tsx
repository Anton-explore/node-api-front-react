import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/Signup/SignupPage';
import MainPage from './pages/MainPage';
import BootcampPage from './pages/Bootcamps/BootcampPage';
import CoursesPage from './pages/Courses/CoursesPage';
import Footer from './components/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/bootcamps/:id" element={<BootcampPage />} />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}

export default App
