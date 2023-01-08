
import './App.css';
import Todoadd from './component/Todoadd';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todolist from './component/Todolist';
import { Route, Routes } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import EditPage from './Pages/EditPage';
import AddNew from './Pages/AddNew';
import Home from './Pages/Home';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
      const data = []; //emty array

      const getdata = async () => {
          await fetch('https://jsonplaceholder.typicode.com/users/')
              .then((response) => response.json()) //fuction to fetch data from this api
              .then((datas) => {
                  datas.map((contact) => {
                      data.push({
                          id: contact.id,
                          name: contact.name,
                          phone: contact.phone,
                          email: contact.email
                      });
                  })//the the data from api is push to data array
              });
          dispatch({ type: 'GET_CONTACT', payload: data });
      };
     getdata();
  }, []);


  return (
   <div className="App">
           
            
            <Routes>
                <Route  path="/" element={<Home />}>

                </Route>

                <Route path='/edit/:id' element={<EditPage/>}></Route>
                <Route path='/add' element={<AddNew/>}></Route>

            </Routes>
        </div>
    );
}

export default App;