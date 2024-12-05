# Arbetsmetodik och agila projektmetoder -24 - Uppgift 1 - Trello

**Allmänna regler gällande Trello**

•Backlog: samtliga uppgifter i dokumentet ska föras in här. Ett kort per punkt. Färg på kortet inom backlog ska vara **blå**.

•Design: Samtliga kort ska gå igenom det här segmentet. Minst en person behöver kolla över design/research/kommentaren. De ska inte vidare till To-Do förrän ni är överens att inga frågetecken återstår hur uppgiften ska lösas. Färg på kortet kvarstår som **blå** och i det här stadiet ska ägare ha valts innan den kan gå vidare till To-Do.

•To-Do: Här lägger ni uppgifter som är redo att göras. Färg på kortet är **röd**.

•Doing: Kontrollkolla bara så att ägare av kortet finns i det här momentet. Färg kvarstår som **röd**.

•Codereview: När ett kort har kommit så långt att det blivit en pullrequest. Då ska kortet läggas här. Välj en medlem som ska göra en review och skriv pm till den personen så den är upplyst över att koden är redo för review. Färg är fortfarande **röd** på kortet. Efter review är godkänt så gör kortägaren en merge.

•Testing: När en pullreqesthar blivit en merge, så ska samma person som gjort reviewen testa koden så att den fungerar som det ska. Vid eventuella fel, ändra färg till **gul**, hör av dig till kortägaren som i sin tur beroende på dialog lägger tillbaka kort till "doing" om fel är komplext.

•Done: När uppgiften i kortet är avslutat hamnar kortet här och färg på kortet blir **grönt**.


# Assignment-2_Startpage-Escape-Rooms Javascript-kurs

**Mötesanteckningar Grupp 7**

**Hur planerar ni att dela upp arbetet? -** 
Det är svårt att säga exakt vem som kommer att göra vad just nu. Vi går igenom och diskuterar varje delmoment i uppgiften för att se om någon i gruppen är särskilt intresserad av något specifikt. Vi planerar flera gemensamma möten, framför allt efter lektionerna, så att vi då kan komma överens om vem som gör vad och skapa ett tydligare upplägg. Alexander har uttryckt intresse för att arbeta med "filtrera challenges", och Taru för "boka challenge."

Vi har som mål att ha ett möte i slutet på varje vecka där vi går igenom koden "rad för rad" så att alla kan följa med i arbetet och förstå vad som händer i koden.
När ska ni ha gruppmöten? Bestäm alla datum redan nu

Vi ska ha som rutin att träffas minst tre gånger i veckan - på lediga dagar och före/efter lektioner. Vi ska alltid ha en veckas framförhållning när vi planerar möten, dvs nästa veckas möten bokas in på torsdag. 
Mötesschema:

**Måndag 11/11 kl 13.00: -** 
Vi har haft en snabb incheckning, börjat svara på frågorna, och berättat hur vi ligger till i våra separata inlämningar samt kompetensnivån.

**Tisdag 12/11 kl 09.00: -** 
Vi har valt vems kod vi ska gå vidare med och försökt att reda ut GitHub och Collaborators så att alla har tillgång till koden. Vi har stött på några problem och har några frågor som behöver lösas. Vi har även diskuterat möjliga upplägg för att dela upp arbetet (se fråga 1).

Hemläxa: Läs på om GitHub och samarbete i grupp inför nästa lektion.

Kommande möten: Onsdag 13/11 kl 13.00 & Torsdag 14/11 kl 12.00.

**Hur sköter ni kommunikationen mellan möten? -**
All kommunikation sker i Teams eftersom vi håller våra möten där.
Vems befintliga kod ska ni utgå ifrån?
Vi kommer att utgå från Patrik Bustads kod. Eftersom alla i gruppen inte har använt SASS, väljer vi att arbeta med en kod som endast innehåller CSS, så att det blir begripligt för alla. https://github.com/Patseroni/Assignment-2_Startpage-Escape-Rooms.git

**Onsdag 13/11-24 -**
Fortsätter lära oss git och gitkommandon, vi även testat att commita, pusha och merga för att se att det funkar och att vi förstår vad vi gör. Skapat några branches att jobba i just nu. Vi har även kommit överens om att påbörja API-momentet tillsammans, parprogrammering. 

Undersök möjligheten att spela in möten. Skulle vara användbart ifall någon missar ett möte eller vi behöver gå tillbaka till. 

Frågor till Richard (fyll på här under om ni kommer på fler): 
Är vi på rätt väg (git-relaterat)?
Kan vi spela in möten i teams?
Hur ser Richard på vårt arbetssätt? Har han några tips & tricks att skicka med oss

Kommande möten:
14/11-24
Kl 09:00 - 12:00

Alexander har pluggat på om API och visar oss andra vad han har utforskat genom att livesharea sin kod. Tillsammans går vi igenom koden och bygger in den i vårt projekt. Vi har en bra diskussion och ställer frågor och kommer med förbättringsförslag. 

Upplägget vi har kommit fram till är att vi så småningom ska dela upp oss i två grupper för filtrering och booking. Alla ska sedan få ett tillfälle där man ansvarar för att livesharea koden. 

Svar på tidigare frågor efter möte med Richard:

Är vi på rätt väg (git-relaterat)? Ja
Kan vi spela in möten i teams? Nej
Hur ser Richard på vårt arbetssätt? Har han några tips & tricks att skicka med oss? Det är ok att börja alla tillsammans men framöver när vi är i mindre grupp även dela upp arbetet i individuella moment. Fick lite tips på hur man kan dela upp arbetet.

Det vi gjort idag:
Hämtat API-datan, la in den i en global array och sedan fört in API datan i domen med hjälp av Javascript.

Nästa träff: Fredag 15/11 kl 08:30 - 13:00 (Målsättning: Klar med första sidan)
- Det som återstår:
Star-rating, Korten (on-site, online), få upp de 3 med högst rating på startsidan.

**Fredag 15/11-24 -**
Kl 08:30 - 13:00

Har gjort färdigt star-rating och korten (on-site, online), commitat, pushat till github och mergat med main. Har även påbörjat arbete med att få upp de 3 challenges med högst rating på startsidan men har inte gjort det momentet klart ännu.

Preliminärt mötesschema nästa vecka: Vi tänkte att vi kanske har möten varje dag initialt. Preliminär gruppmötestid 14.00-16.00.

Nästa gruppmöte på måndag: Flexibel tid då vi inte vet hur lång Richards lektion blir. Mest troligt är lektionen slut vid 12:00 och då kör vi möte 13:00-16:00.

**Tisdag 19/11-24 -**
Kl 08:30 - 15:00

Solved top3challenges and added to frontpage.
Reorganised files and functions and API logic according to SOC.
Created new work branch for booking and filter function.
Started discussion of how to solve the booking logic.

Förslag på gruppindelning:

Filter: Alexander(Logik(filter funktioner)),  Bekhal(GUI för filterfunktionen).

Booking: Just nu (kommer bli mer detaljerat): Johnny(Logik), Patrik(Logik), Taru(GUI för bookingfunktionen),

Individuell uppdelning inom booking ej helt klart ännu. Fortfarande ligger vi i stadiet där vi diskuterar hur uppgiften ska slutföras men kommer därefter dela upp oss i mindre individuella uppgifter.

Nästa mötestid: Inget specifikt stormöte planerat men vi kommer börja jobba imorgon från 08.30. Alexander kommer briefa Bekhal vid passande tillfälle om gruppindelningen av filterfunktionen. Precis som idag så avslutar vi morgondagen med gemensam diskussion och mötesprotokoll.

**Onsdag 20/11-24 -**
KL 08.30-15.00

Continued the work with the booking function and booking logic. Taru has added eventlistener to online and onsite buttons and online buttons which in turn shows modal for booking function. 
The others have continued experimentation to make the booking logic through API work.

Vi fastställer uppdelningen av uppgiften igen så att alla är med på vad vi ska göra de kommande dagarna. Vi kör en upprepning på hur alla bäst jobbar i sina branches och vad/hur vi ska tänka när vi pushar & commitar. Vi kommer överens om en deadline måndag 25/11 för filter-momentet, då ska alla vara klara med sina individuella uppgifter så vi så småningom kan börja reviewa varandras kod och mergea. 

**Fredag 22/11-24 -**
Kl 14.00-15.00

Avstämning: Vi har alla jobbat på egna moment under de senaste dagarna, på måndag-tisdag går vi igenom varandras kod och mergar. Förhoppningen är att vi blir klar med gemensamt projekt version 1.0 på tisdag och kan gå vidare till eventuella förbättringar/förändringar.

**Tisdag 26/11-24 -**
Kl 09.00-16.00

Gått igenom varandras kod från början till slut för att förstå alla bitar. Kom ett förslag om att lägga all API-data i en JS-fil, blev en diskussion om det var fördelaktigt eller inte. 

Vi mergade in Tarus, Patriks, Johnnys och Bekhals branches till booking-branchen. Eventuellt kommer även Alexanders del att mergas ikväll. 

**Onsdag 27/11-24 -**
Kl 13.00-15.30

Förmiddagen bestod av muntligt seminarium för de flesta. En del individuellt arbete med koder på egna branches. 

Under eftermiddagen har vi framförallt mergat och det har gått bra, inga konflikter. Har lagt upp en plan att under morgondagen (torsdag). Individuellt har vi alla uppgifter att utföra under morgondagen för att sedan vara redo med slutgiltig merge som vi mest troligt gör under eftermiddagen efter det att Bekhal och Johnny är klar med sina muntliga seminarier.

Individuellt har vi alla uppgifter att utföra till och under morgondagen för att sedan vara redo med slutgiltig merge.

Todo tomorrow:
Koppla challenge.html till frontpage via on-site och online challenge buttons.
Lägga in mötesprotokoll i readme fil efter vi är klar med final merge.

**Torsdag 28/11-24 -**
Kl 10.00-16.30

På förmiddagen började vi med att fixa till varningstexten vid inputName och inputEmail så att varning ges separat och att de inte dupliceras. Sedan gjorde vi en merge från booking till main, resultatet - inga konflikter och gick bra.

På eftermiddagen: Två av oss har haft muntligt seminarium. Alexander hade finslipat på filter-feature och Patrik gjorde en review på filter-funktionaliteten inför merge. Sedan gjorde vi en merge från filter till main, resultatet - två små konflikter som vi löste lokalt i VS-code varefter vi gjorde en push till origin/filter. Slutligen gjorde vi en merge på github från filter till main, resultatet - inga konflikter och gick bra!
