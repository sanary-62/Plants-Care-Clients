import React, { useEffect, useState } from 'react';
import { useNavigation, Outlet } from 'react-router-dom';
import Spinner from "./Spinner";


const AppWrapper = () => {
  const navigation = useNavigation();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(navigation.state === 'loading');
  }, [navigation.state]);

  return (
    <>
      {isNavigating && <Spinner />}
      <Outlet />
    </>
  );
};

export default AppWrapper;
