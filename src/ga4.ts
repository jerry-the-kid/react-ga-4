import ReactGa from "react-ga4";

const initialReactGa = () => {
  ReactGa.initialize("G-X1Z6D1WWXM");
};

// ReactGa.send({
//   hitType: "pageView",
//   page: window.location.pathname,
// });

const trackTotalUsers = () => {
  ReactGa.event({
    category: "User",
    action: "login",
    label: "Total Users",
  });
};

export { initialReactGa, trackTotalUsers };
