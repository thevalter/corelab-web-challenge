import { QueryProvider } from "./context/QueryContext";
import { Header } from "./components/Header";
import { CreateCard } from "./components/CreateCard";
import { RenderCardNotes } from "./components/RenderCardNotes";
import { GlobalStyle, MainContainer } from "./styles/GlobalStyle";

const App = () => {

  return (
    <>
      <QueryProvider>
        <>
          <GlobalStyle />
          <Header />
          <MainContainer>
            <CreateCard />
            <RenderCardNotes/>
          </MainContainer></>
      </QueryProvider>
    </>
  )
}

export default App
