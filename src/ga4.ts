import ReactGa from "react-ga4";

const initialReactGa = () => {
  ReactGa.initialize("G-V6NMPYEDEN");
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
