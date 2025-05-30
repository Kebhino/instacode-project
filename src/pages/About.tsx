// src/pages/Contact.tsx
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Footer from "@/componentsWeb/FooterComp";
import NavBar from "@/componentsWeb/NavBar";
import MainSection from "@/componentsWeb/MainSection";

const About = () => {
  return (
    <>
      <NavBar />
      <MainSection />

      <Box
        p={8}
        bg={"white"}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bg="whiteAlpha.800"
          backdropFilter="blur(10px)"
          p={8}
          borderRadius="lg"
          maxW="600px"
          textAlign="center"
          boxShadow="lg"
        >
          <Heading size="lg" mb={4} color="blue.500">
            O nas:
          </Heading>
          <VStack gap={4} align="start">
            <Text fontSize="lg" color="gray.700">
              Systemami informatycznymi zajmujemy się od <b>2002 roku</b>, gdy
              internet dopiero na dobre się rozkręcał. Na przestrzeni lat
              tworzyliśmy <b>dedykowane systemy informatyczne</b> dla wielu
              firm, zawsze skupiając się na{" "}
              <b>indywidualnych potrzebach naszych klientów</b>.
            </Text>

            <Text fontSize="lg" color="gray.700">
              Potrafimy zrozumieć, czego klient potrzebuje, i zaproponować
              rozwiązania, z których będzie zadowolony.
            </Text>

            <Text fontSize="lg" color="gray.700">
              Pierwsze nasze systemy automatyzowały usługi dostarczane przez
              providerów internetowych — obsługę domen internetowych, tworzenie
              kont pocztowych, FTP, baz danych, hosting stron. Wszystko to w
              czasach, gdy internet dopiero raczkował.
            </Text>

            <Text fontSize="lg" color="gray.700">
              Dla <b>KGHM CUPRUM</b> przez lata przygotowywaliśmy dedykowane
              rozwiązania, które dbały o <b>efektywną wymianę informacji</b> w
              ramach tej firmy, przy jednoczesnym zapewnieniu odpowiedniej
              poufności.
            </Text>

            <Text fontSize="lg" color="gray.700">
              Zinformatyzowaliśmy firmę <b>ABART</b>, obejmując naszym systemem
              każdy aspekt działalności — od <b>automatycznych wycen</b>, po{" "}
              <b>śledzenie, rozliczanie i raportowanie</b> całego procesu
              instalacji systemów LPG.
            </Text>

            <Text fontSize="lg" color="gray.700">
              Zajmowaliśmy się także{" "}
              <b>systemami kompleksowo zarządzającymi procesami windykacji</b> —
              obsługa call center, wymiana danych osobowych z bankami,
              rozbudowane raportowanie (firmy: iCentrum S.A., APS Poland S.A.).
            </Text>

            <Text fontSize="lg" color="gray.700">
              Mamy także doświadczenie w{" "}
              <b>systemach zarządzania produkcją i montażami</b>. Stworzyliśmy
              kompleksowe rozwiązanie dla firmy <b>InstaGlas</b>, umożliwiające
              precyzyjne śledzenie wszystkich kosztów projektów, w tym kosztów
              pracowniczych, oraz finalne raportowanie rentowności.
            </Text>

            <Text fontSize="lg" color="gray.700">
              Nasz największy sukces to <b>ZnanyLekarz.pl</b>, który został w
              całości zaprojektowany i wykonany przez nas, gdy pojawił się
              pomysł na taki serwis. Nasz projekt i wykonanie okazało się
              wielkim sukcesem — serwis stał się bardzo popularny, a po
              sprzedaży odniósł ogromny <b>międzynarodowy sukces</b>.
            </Text>
          </VStack>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default About;
