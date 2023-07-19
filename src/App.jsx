import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('./components/Layout'));
import "./App.css";

const Home = lazy(() => import('./routes/Home'));
const WebDesign = lazy(() => import('./routes/WebDesign'));
const SEO = lazy(() => import('./routes/SEO'));
const Services = lazy(() => import('./routes/Services'));
const Frontend = lazy(() => import('./routes/Frontend'));
const PHP = lazy(() => import('./routes/PHP'));
const Node = lazy(() => import('./routes/Node'));
const AboutWho = lazy(() => import('./routes/AboutWho'));
const OurValues = lazy(() => import('./routes/OurValues'));
const WebDev = lazy(() => import('./routes/WebDev'));
const Login = lazy(() => import('./routes/Login'));
const AboutUs = lazy(() => import('./routes/AboutUs'));
const Courses = lazy(() => import('./routes/Courses'));
const ItConsulting = lazy(() => import('./routes/ItConsulting'));
const ItPlacement = lazy(() => import('./routes/ItPlacement'));
const ItTraining = lazy(() => import('./routes/Ittraning'));
const CourseDetails = lazy(() => import('./routes/CourseDetails'));
const Signup = lazy(() => import('./routes/Signup'));
const StudentSignup = lazy(() => import('./routes/StudSignup'));
const TeacherSignup = lazy(() => import('./routes/TeacherSignup'));
const DefaultMobilePage = lazy(() => import('./routes/DefaultMobilePage'));

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the current device is mobile
    const isMobileDevice = /Mobi/.test(navigator.userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  if (isMobile) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path="*" element={<DefaultMobilePage />} />
          </Routes>
        </Router>
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="web-design" element={<WebDesign />} />
            <Route path="web-dev" element={<WebDev />} />
            <Route path="frontend" element={<Frontend />} />
            <Route path="node" element={<Node />} />
            <Route path="seo" element={<SEO />} />
            <Route path="php" element={<PHP />} />
            <Route path="who-we-are" element={<AboutWho />} />
            <Route path="our-values" element={<OurValues />} />
            <Route path="login" element={<Login />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="Courses" element={<Courses />} />
            <Route path="IT-Consulting" element={<ItConsulting />} />
            <Route path="IT-Placement" element={<ItPlacement />} />
            <Route path="IT-training" element={<ItTraining />} />
            <Route path="CourseDetails/:courseId" element={<CourseDetails />} />
            <Route path="signup" element={<Signup />} />
            <Route path="student_signup" element={<StudentSignup />} />
            <Route path="teacher_signup" element={<TeacherSignup />} />
            <Route path="*" element={<p>Design Not found!</p>} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
