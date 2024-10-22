import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
// import LoginPage from './components/Login/Login';
// import SignupPage from './components/Signup/Signup';
import MainPage from './pages/MainPage';
import BootcampPage from './pages/Bootcamps/BootcampPage';
import CoursesPage from './pages/Courses/CoursesPage';
import Footer from './components/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import LoginPage from './pages/LoginPage/LoginPage';
import CoursePage from './pages/Courses/CoursePage';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path="/auth/:type?" element={<LoginPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/bootcamps/:bootcampId" element={<BootcampPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseId" element={<CoursePage />} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}

export default App
