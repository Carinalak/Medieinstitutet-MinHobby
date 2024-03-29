# Inlämningsuppgift
Denna uppgift handlar om att du skall skapa en sida som handlar om en av dina hobbys. 

Syftet med uppgiften är att ni skall lära er att hantera git och arbeta strukturerat med hjälp av git. 

Inlämningen kommer bestå av ett projekt (förslagsvis med hjälp av parcel eller vite, vilket ni själva väljer) som ni har på github. Ni kommer att behöva använda olika delar av git för att nå de olika betygsnivåerna. 

För betyg G:

Använda grudläggande kommandon i git såsom add, commit och merge. 
Ni behöver ha använt minst två nya branches. 
Ni behöver ha gjort minst en merge till main (som är den branch jag kommer att rätta). 

För betyg VG:

Ni behöver ha gjort minst en cherry-pick som skall framgå av den kommentar som ni har gjort på den commit som cherry-pickas. 

Ni skall ha gjort rebase på er main så att hela er history i main-branchen är helt rak. 

Ni skall ha gjort minst en merge mellan två andra brancher så att det framgår att det har gjorts en merge (via kommentaren).

## För att köra detta projekt:
skriv i Terminalen:

- npm run dev

### Latnund för git kommandon i Terminalen:
- git add .

- git commit -m "Added nav"

- git push
### NY BRANCH:
- git checkout -b min-nya-gren

För att kolla att branchen har skapats kan man skriva:
- git branch

För att pusha den nya branchen till Git Hub skriv:
-git push origin min-nya-gren

För att byta branch:
- git checkout namn-på-gamla-grenen

För att pusha till branchen om inte git ousg fungerar:
- git push --set-upstream origin added-image-and-css-styling

eller:
- git push origin din-gren
### ---------------------------------------------------
- git status --decorate --oneline

- git log --decorate --oneline

Tryck på q om du vill avsluta git status eller log.