import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";
import FeedPage from "./pages/FeedPage";
import { useSelector } from "react-redux";
import MainLayout from "./Layout/";
import OnePost from "./pages/onePost/OnePost";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function Router() {
  const { user } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        {!user && (
          <>
            <Route path="/*" element={<AuthorizationPage />} />
            <Route
              path="/registration"
              element={<AuthorizationPage variant="registration" />}
            />
          </>
        )}

        {user && (
          <>
            <Route path="/*" element={<MainLayout />}>
              <Route index element={<FeedPage />} />
              <Route path="post/:id" element={<OnePost />} />
              <Route path="user/:id" element={<ProfilePage />} />
            </Route>
            {/* <Route index element={<SettingsPage />} /> */}
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
