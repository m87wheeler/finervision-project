import { useState } from "react";
import { CSSVariables } from "./styles/GlobalStyles/CSSVariables";
import { DocumentStyles } from "./styles/GlobalStyles/DocumentStyles";
import { GlobalReset } from "./styles/GlobalStyles/GlobalReset";
import { Provider as UserContextProvider } from "./context/UserDetailsContext/UserFormContext";
import DataPage from "./pages/Data";
import IndexPage from "./pages/Index";
import Header from "./containers/Header/Header";

const App = () => {
  const [page, setPage] = useState("index");

  /** handle page toggle */
  const handlePageToggle = () => {
    setPage((page) => (page === "index" ? "comments" : "index"));
  };

  return (
    <>
      <GlobalReset />
      <CSSVariables />
      <DocumentStyles />
      <Header onClick={handlePageToggle} currentPage={page} />
      {page === "comments" ? (
        <DataPage />
      ) : (
        <UserContextProvider>
          <IndexPage />
        </UserContextProvider>
      )}
    </>
  );
};

export default App;
