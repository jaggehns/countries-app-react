import { Route, Routes } from 'react-router-dom';
import { routes } from './allRoutes';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              element={<route.component />}
              path={route.path}
            />
          );
        })}
        {/* <Route
          path='*'
          element={<ErrorComponent errorCode={'404'} description={`This page does not exist!`} />}
        /> */}
      </Routes>
    </>
  );
};

export default AppRoutes;
