import Navigation from "../components/navigation-rev-2/Navigation";

function ErrorPage() {
  return (
    <>
      <Navigation />
      <main>
        <h1 style={{ textAlign: "center" }}>An error occurred!</h1>
        <p style={{ textAlign: "center" }}>Could not find this page!</p>
      </main>
    </>
  );
}

export default ErrorPage;
