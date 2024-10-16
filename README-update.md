Oto jak właścicielka salonu może wprowadzać zmiany na stronie React i publikować je na Netlify, nie korzystając z GitHub:

## Edycja plików:

1. Właścicielka otwiera plik w edytorze tekstu (Notatnik lub inny edytor).
   Wprowadza zmiany w treści, a następnie zapisuje plik.

2. Budowanie projektu:
   Po edytowaniu, musi zbudować projekt, aby przygotować go do wdrożenia.
   Uruchom PowerShell jako administrator:

   ### W menu "Start" znajdź PowerShell, kliknij prawym przyciskiem myszy na Windows PowerShell i wybierz "Uruchom jako administrator".

   ### Sprawdź aktualną politykę wykonywania:

   ### W PowerShell wpisz polecenie: `Get-ExecutionPolicy`

   ### Wpisz następujące polecenie, aby zezwolić na wykonywanie skryptów: `Set-ExecutionPolicy RemoteSigned`

   ### Może pojawić się prośba o potwierdzenie zmiany, naciśnij `Y` (Tak), aby potwierdzić.

   ### Zamknij PowerShell.

3. Wykonaj następujące kroki:

   ### Otwórz Eksplorator Windows: Przejdź do folderu, w którym znajduje się Twój projekt React.

   Otwieranie terminala: - Kliknij prawym przyciskiem myszy w pustym miejscu w folderze projektu. - W menu kontekstowym wybierz opcję "Otwórz terminal" lub "Otwórz w Windows PowerShell" (nazwa może się różnić w zależności od wersji Windows).
   Wprowadzenie komendy: - W otwartym terminalu wpisz polecenie:
   `npm run build`
   To wygeneruje zoptymalizowaną wersję Twojego projektu i stworzy folder build.
   Zakończenie: - Po pomyślnym wykonaniu polecenia zobaczysz komunikat o udanej kompilacji, a teraz możesz przesłać folder build na Netlify.

4. Przesyłanie na Netlify:

   ### Właścicielka przechodzi do panelu zarządzania Netlify.

   - Wybiera swój projekt (jeśli już został stworzony) lub tworzy nowy.
     W ustawieniach projektu Netlify znajduje opcję ręcznego przesyłania plików.
   - Może kliknąć przycisk "Deploy" lub "Upload", a następnie wybrać folder build, który został stworzony w poprzednim kroku.
     Netlify przesyła pliki, a strona zostaje automatycznie zaktualizowana.
   - Sprawdzanie zmian:

   Po przesłaniu plików właścicielka może przejść na stronę, aby sprawdzić, czy wprowadzone zmiany są widoczne.
   W ten sposób, bez korzystania z GitHub, można ręcznie wprowadzać zmiany w treści, ale trzeba przejść przez kilka kroków:

   - edytować pliki,
   - zbudować projekt
   - przesłać nową wersję na Netlify.

   Jest to nieco bardziej skomplikowane niż korzystanie z Git, ale jak najbardziej wykonalne.
