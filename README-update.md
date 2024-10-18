Oto jak właścicielka salonu może wprowadzać zmiany na stronie React i publikować je na Netlify, nie korzystając z GitHub:

## Edycja plików:

1. Właścicielka otwiera plik w edytorze tekstu (Notatnik lub inny edytor).
   Wprowadza zmiany w treści, a następnie zapisuje plik.

2. Budowanie projektu:
   Po edytowaniu, musi zbudować projekt, aby przygotować go do wdrożenia.
   Uruchom PowerShell jako administrator:

   ### W menu "Start" znajdź PowerShell, kliknij prawym przyciskiem myszy na Windows PowerShell i wybierz "Uruchom jako administrator".

   ### Sprawdź aktualną politykę wykonywania:

   ### W PowerShell wpisz polecenie: `Get-ExecutionPolicy` + enter

   ### Wpisz następujące polecenie, aby zezwolić na wykonywanie skryptów: `Set-ExecutionPolicy RemoteSigned`+ enter

   ### Może pojawić się prośba o potwierdzenie zmiany, naciśnij `Y` + enter (Tak), aby potwierdzić.

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

---

Jak wprowadzać zmiany w projekcie React na iOS i publikować je na Netlify:
Edycja plików:

Użyj aplikacji do edycji kodu na swoim urządzeniu iOS, takiej jak Textastic, Koder lub inne.
Otwórz plik projektu, wprowadź zmiany w treści i zapisz plik.
Budowanie projektu:

Aby zbudować projekt na iOS, potrzebujesz zdalnego dostępu do terminala lub narzędzia, które pozwoli Ci zbudować projekt zdalnie, na przykład:
Usługa SSH do zdalnego połączenia z komputerem, na którym jest zainstalowane Node.js.
Możesz użyć aplikacji, takich jak Termius lub Prompt, aby połączyć się z komputerem.
Uruchomienie PowerShell lub terminala na zdalnym komputerze:

Po połączeniu z komputerem uruchom terminal (np. PowerShell na Windows).
Wykonaj następujące kroki, aby upewnić się, że masz odpowiednie uprawnienia:
Sprawdź aktualną politykę wykonywania:
powershell
Копіювати код
Get-ExecutionPolicy
Ustaw politykę wykonywania, jeśli to konieczne:
powershell
Set-ExecutionPolicy RemoteSigned
Potwierdź, jeśli pojawi się prośba.
Zbudowanie projektu:

Przejdź do folderu z projektem:

cd /ścieżka/do/twojego/projektu
Uruchom polecenie budowania:

npm run build
To wygeneruje zoptymalizowaną wersję projektu i utworzy folder build.
Przesyłanie na Netlify:
Przesyłanie na Netlify:

Właścicielka przechodzi do panelu zarządzania Netlify na swoim urządzeniu iOS (może użyć przeglądarki Safari lub innej).
Wybiera swój projekt (jeśli już został stworzony) lub tworzy nowy.
W ustawieniach projektu Netlify znajduje opcję ręcznego przesyłania plików.
Kliknij przycisk "Deploy" lub "Upload", a następnie wybierz folder build, który został stworzony na zdalnym komputerze.
Sprawdzanie zmian:

Po przesłaniu plików właścicielka może przejść na stronę, aby sprawdzić, czy wprowadzone zmiany są widoczne.
Podsumowanie:
W ten sposób, korzystając z zdalnego dostępu do komputera, można wprowadzać zmiany w treści projektu React na iOS. Proces ten wymaga kilku kroków:

Edytowanie plików,
Budowanie projektu zdalnie,
Przesyłanie nowej wersji na Netlify.
Choć jest to nieco bardziej skomplikowane niż korzystanie z Git, jest to w pełni wykonalne.
