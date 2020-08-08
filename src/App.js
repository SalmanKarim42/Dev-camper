import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import { NavBar } from "./components";
import { Register, Home, Login, Bootcamps, Bootcamp, Reviews, AddReview, ManageBootcamp, AddBootcamp, ManageReview, ManageAccount, UpdatePassword, ManageCourses, AddCourse, ResetPassword } from "./pages";
import './App.scss';

export default function App() {
  return (
    <Router>
      <div >
        <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch >
          <Route path="/resetPassword">
            <ResetPassword />
          </Route>
          <Route path="/me/password">
            <UpdatePassword />
          </Route>
          <Route path="/me">
            <ManageAccount />
          </Route>
          <Route path="/review">
            <AddReview />
          </Route>
          <Route path="/myreviews">
            <ManageReview />
          </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <Route path="/addcourse">
            <AddCourse />
          </Route>
          <Route path="/courses">
            <ManageCourses />
          </Route>
          <Route path="/addbootcamp">
            <AddBootcamp />
          </Route>
          <Route path="/bootcamp/:id">
            <ManageBootcamp />
          </Route>
          <Route path="/bootcamps/:id">
            <Bootcamp />
          </Route>
          <Route path="/bootcamps">
            <Bootcamps />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}