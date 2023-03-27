import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ForgotPasswordAdmin } from './components/admin/forgotpassword';
import { LoginAdmin } from './components/admin/login';
import { RegisterAdmin } from './components/admin/register';
import { Mentordashboard } from './components/dashboard/mentordashboard/mentor-dashboard';
import { Application, Capstone, Classes, Dashboard, InterviewTask, LeaveApplication, MockInterview, Portfolio, Queries, Requirements, Tasks, Webcode } from './components/dashboard/studentdashboard/list-items';
import { Application1, Capstone1, Classes1, Dashboard1, InterviewTask1, LeaveApplication1, MockInterview1, Portfolio1, Queries1, Requirements1, Tasks1, Webcode1 } from './components/dashboard/mentordashboard/list-items';
import { Studentdashboard } from './components/dashboard/studentdashboard/studen-dashboard.js';
import { Home } from './components/home';
import { ForgotPassword } from './components/user/forgot-password';
import { Login } from './components/user/login';
import { Register } from './components/user/register';
import { Cap1, Charts, Profile, Task, Web} from './components/dashboard/studentdashboard/class-content';
import { Profile1, Web1,Task1, Cap, Port } from './components/dashboard/mentordashboard/class-content';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/register-admin' element={<RegisterAdmin/>}/>
      <Route path='/login-admin' element={<LoginAdmin/>}/>
      <Route path='/forgotpassword-admin' element={<ForgotPasswordAdmin/>}/>

      <Route path='/student-dashboard' element={<Studentdashboard/>}/>
      <Route path='/mentordashboard' element={<Mentordashboard/>}/>
      
      <Route path='/studentdashboard/classes' element={<Classes/>}/>
      <Route path='/studentdashboard/tasks/:email' element={<Tasks />}/>
      <Route path='/studentdashboard/queries' element={<Queries/>}/>
      <Route path='/studentdashboard/webcode' element={<Webcode/>}/>
      <Route path='/studentdashboard/capstone' element={<Capstone/>}/>
      <Route path='/studentdashboard/application' element={<Application/>}/>
      <Route path='/studentdashboard/leave-application' element={<LeaveApplication/>}/>
      <Route path='/studentdashboard/interview-tasks' element={<InterviewTask/>}/>
      <Route path='/studentdashboard/portfolio' element={<Portfolio/>}/>
      <Route path='/studentdashboard/mock-interview' element={<MockInterview/>}/>
      <Route path='/studentdashboard/requirements' element={<Requirements/>}/>
      <Route path='/studentdashboard/dashboard/:email' element={<Dashboard/>}/>

      <Route path='/mentordashboard/classes' element={<Classes1/>}/>
      <Route path='/mentordashboard/tasks' element={<Tasks1/>}/>
      <Route path='/mentordashboard/queries' element={<Queries1/>}/>
      <Route path='/mentordashboard/webcode' element={<Webcode1/>}/>
      <Route path='/mentordashboard/capstone' element={<Capstone1/>}/>
      <Route path='/mentordashboard/application' element={<Application1/>}/>
      <Route path='/mentordashboard/leave-application' element={<LeaveApplication1/>}/>
      <Route path='/mentordashboard/interview-tasks' element={<InterviewTask1/>}/>
      <Route path='/mentordashboard/portfolio' element={<Portfolio1/>}/>
      <Route path='/mentordashboard/mock-interview' element={<MockInterview1/>}/>
      <Route path='/mentordashboard/requirements' element={<Requirements1/>}/>
      <Route path='/mentordashboard/dashboard' element={<Dashboard1/>}/>

      <Route path='/studentdashboard/profile' element={<Profile/>}/>
      <Route path='/mentordashboard/profile' element={<Profile1/>}/>
      <Route path='/mentordashboard/task/:email' element={<Task1/>}/>
      <Route path='/mentordashboard/web/:email' element={<Web1/>}/>
      <Route path='/mentordashboard/port/:email' element={<Port/>}/>
      <Route path='/mentordashboard/capstone/:email' element={<Cap/>}/>


      <Route path='/studentdashboard/webcode/:id/:email' element={<Web/>}/>
      <Route path='/studentdashboard/capstone/:id/:email' element={<Cap1/>}/>
      <Route path='/studentdashboard/charts' element={<Charts/>}/>



      </Routes> 
    </div>
  );
}

export default App;
