export default function withAuth(Component) {
  return function AuthComponent() {
    const isLoggedIn = localStorage.getItem("auth");

    if (!isLoggedIn) {
      return <h2 style={{ textAlign: "center" }}>Access Denied ❌</h2>;
    }

    return <Component />;
  };
}
