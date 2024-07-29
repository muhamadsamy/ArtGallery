function NotFound() {
  return (
    <div className="text-center py-3 ">
      <img
        src={require("../assets/notFound.png")}
        alt="empty cart "
        className="img-fluid"
      ></img>
      <h2>404 Page Not Found</h2>
    </div>
  );
}

export default NotFound;
