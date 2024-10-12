# Beauty Clinic App

Ten projekt to aplikacja webowa zaprojektowana dla kliniki urodowej, aby zaprezentować jej usługi, ceny oraz dostarczyć informacje kontaktowe dla klientów. Aplikacja została stworzona przy użyciu React.js i jest wdrożona na GitHub Pages. Aplikacja jest w pełni responsywna i zapewnia użytkownikom płynne doświadczenia na różnych urządzeniach.

## FUNKCJE

- **Dynamiczne routowanie:** Aplikacja wykorzystuje React Router do nawigacji pomiędzy różnymi stronami.
- **Integracja modalu:** Klienci mogą łatwo umówić się na wizytę przez wyskakujący modal z danymi kontaktowymi.
- **Responsywny design:** Aplikacja jest w pełni responsywna i zoptymalizowana pod kątem różnych rozmiarów ekranów.
- **Nowoczesny interfejs użytkownika:** Wykorzystanie Material UI (MUI) do eleganckich, profesjonalnych komponentów projektowych.
- **Przycisk przewijania na górę:** Zawiera gładki przycisk przewijania na górę, aby poprawić doświadczenie użytkownika.

## RESPONSYWNY DESIGN

Ta aplikacja została zaprojektowana, aby zapewnić optymalne doświadczenie przeglądania na szerokim zakresie urządzeń. Układ i stylizacja dostosowują się do różnych rozmiarów ekranów za pomocą zapytań CSS media.

### BREAKPOINTS:

- **Mobilny:** Domyślne style stosowane dla małych ekranów (do **375px** szerokości).
- **Tablet:** Dla urządzeń o szerokości ekranu **768px** i wyższej, dodatkowe style są stosowane w celu poprawy doświadczenia użytkownika na średniej wielkości ekranach.
- **Desktop:** Dla ekranów o minimalnej szerokości **1440px**, układ i projekt są dodatkowo dostosowane do dużych wyświetlaczy.

Aplikacja zapewnia płynne i spójne doświadczenie dla użytkowników na urządzeniach mobilnych, tabletach i komputerach stacjonarnych.

## STRONY

Aplikacja zawiera następujące główne strony:

1. **Zabiegi** - `/zabiegi`

   - Ta strona zawiera listę zabiegów i procedur kliniki. Każdy zabieg ma szczegółowy opis dostępny na stronie.

2. **O Nas** - `/o-nas`

   - Ta sekcja przedstawia klinikę, jej misję oraz członków zespołu.

3. **Cennik** - `/cennik`

   - Szczegółowa strona z cenami, która pokazuje koszt różnych zabiegów urodowych.

4. **Pytania i Odpowiedzi** - `/pytania-i-odpowiedzi`

   - Strona z najczęściej zadawanymi pytaniami, aby pomóc klientom w common inquiries about services and procedures.

5. **Kontakt** - `/kontakt`

   - Strona kontaktowa zawiera formularz, numer telefonu, e-mail oraz linki do mediów społecznościowych, aby klienci mogli skontaktować się z kliniką.

6. **Not Found (404)** - `*`
   - Strona 404 jest wyświetlana, jeśli użytkownik przejdzie do nieistniejącej trasy.

## TECHNOLOGIE UŻYTE

- **React.js:** Główna platforma do budowy interfejsu użytkownika.
- **React Router:** Obsługuje dynamiczne routowanie w aplikacji.
- **MUI (Material UI):** Wykorzystane do predefiniowanych komponentów React i ikon, aby zapewnić nowoczesny design.
- **Emotion Styled Components:** Do niestandardowego stylizowania.
- **Swiper.js:** Wykorzystywane do karuzeli lub suwaków w aplikacji.
- **React Icons:** Zapewnia aplikacji różne ikony.
- **Scroll-Lock:** Do zarządzania zachowaniem przewijania w modalach.

## INSTALACJA I KONFIGURACJA

Aby uruchomić projekt lokalnie, wykonaj następujące kroki:

1. **Sklonuj repozytorium:**

   ```bash
   git clone https://github.com/InnaAnatoliivna/beauty-clinic-app.git
   cd beauty-clinic-app
   ```

2. Zainstaluj zależności::

### `npm install`

3. Uruchom aplikację:

### `npm start`

4. Zbuduj aplikację:

### `npm run build`

## Deployment

Aplikacja jest wdrożona na GitHub Pages. Aby wdrożyć jakiekolwiek zmiany:

1. Przed wdrożeniem::

### `npm run predeploy`

2. Wdrożenie:

### `npm run deploy`

###### JAK MOŻESZ ZMIENIĆ INFORMACJE O SWOJEJ KLINICE

    PROSZĘ, KIEDY WPROWADZASZ ZMIANY W PLIKACH DANYCH - ŚCISLE PRZESTRZEGAJ FORMATU PISANIA.

    Sposoby, w jakie możesz znaleźć i zmienić informacje o klinice:

1. Edytuj linki do mediów społecznościowych:

## `src/utils/links.js`

2. Edytuj informacje kontaktowe kliniki (uwaga - musisz dodać osobny numer telefonu w poprawnym formacie do wykonania połączenia (phoneToCall) oraz osobny numer telefonu do wyświetlania estetycznego (phoneToShow)):

## `srs/resources/dataContacts.json`

3. Edytuj godziny pracy kliniki:

## `srs/resources/dataScheduleOfWork.json`

4. Zmień nazwy pozycji w menu / dodaj pozycję do menu:

## `srs/resources/menuList.json`

5.  Edytuj listę usług:

## `src/utils/servicesList.js`

6. Edytuj usługi w ścieżce='zabiegi/:id` element=<ServiceDescription>:

## `src/utils/servicesHelpers.js`

7. Edytuj konkretną usługę:

## `src/resources/dataServices/...` > wybierz plik z odpowiednią usługą

8. Edytuj informacje (nazwa, cena, czas trwania, zniżka) na stronie cenowej:

## `srs/resources/dataServices.json`

9. Edytuj opis kliniki i pracowników (opis kliniki jest podzielony na kilka części (podtytuł, tytuł pomocniczy) w celu poprawy wizualizacji):

## `srs/resources/dataAboutUs.json`

10. Edytuj/dodaj najczęściej zadawane pytania i odpowiedzi dotyczące usług kliniki:

## `srs/resources/QuestionAnswer.json`

11. Dodaj opinie użytkowników:

## `srs/resources/usersFeedback.json`
