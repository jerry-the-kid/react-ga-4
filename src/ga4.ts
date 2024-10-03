import ReactGa from "react-ga4";

const initialReactGa = () => {
  ReactGa.initialize("G-EG5F05NPWZ");
};

// ReactGa.send({
//   hitType: "pageView",
//   page: window.location.pathname,
// });

const trackTotalUsers = () => {
  ReactGa.event({
    category: "User",
    action: "Login",
    label: "Total Users",
  });
};

export { initialReactGa, trackTotalUsers };
