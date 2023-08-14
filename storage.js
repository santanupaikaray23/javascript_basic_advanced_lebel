localStorage
----------------
>Presistance Storage
>It's saved wrt to browser
>we have to remove it manually
> we are using it to store for a longer Time.
>when we will remove the history it will remove.

How to use this?
>localStorage.setItem('tokendata','55776679')

localStorage.setItem('test','3456666')
undefined
localStorage.getItem('test')
'3456666'
localStorage.removeItem('test')
undefined
localStorage.getItem('test')
null
sessionStorage
-----------------
>it is a temp Storage.
> it save with respoct to tab
>it will remove automatically whenever tab will close

cookies
>save wrt to website
>It will expire in Time
document.cookie
'T=TI169185323162300116506553071201693203660008137557554018945940622497; pxcts=e5ae6ec5-3922-11ee-92c0-794771615167; _pxvid=e5ae5f9f-3922-11ee-92c0-97022d5cd3a4; s_cc=true; AMCVS_17EB401053DAF4840A490D4C%40AdobeOrg=1; AMCV_17EB401053DAF4840A490D4C%40AdobeOrg=-227196251%7CMCIDTS%7C19582%7CMCMID%7C75278331185054784924732177329804896226%7CMCAID%7CNONE%7CMCOPTOUT-1691860453s%7CNONE%7CMCAAMLH-1692458053%7C12%7CMCAAMB-1692458053%7Cj8Odv6LonN4r3an7LhD3WZrU1bUpAkFkkiY1ncBR96t2PTI; Network-Type=3g; _gcl_au=1.1.1281574745.1691855572; gpv_pn=Flipkart%3ATravel%3ALandingPage; gpv_pn_t=FLIPKART%3ATravelLandingPage; s_sq=%5B%5BB%5D%5D; _px3=8c90d2572798500c6594a366f142f3bd1b6acd046300cbe468e34ce947eb7c1c:e3aVerr/jHgIRo9NdmwqzTQusCZwoAQcGQm+sFSsE5MZqKlbgoXd1ygNcBer7zPmBPX544G/iZzLNnA+a0HreQ==:1000:+QhA5jwP33HyEHLfL+BmqsMu6ZnMw/KN3V3UdwXSwxGulQ5uTOJb0bWZHsXKRqb/PO+A7jZ/SpJSCdGmM9WVR0MLV0c1yBWOe4y3Gn38Pbl8ME2YWqPuZseeh14EX1KBQKg1zqv4RxDdg5NMExxcSDnvrC0TGiB2yGUSEYKvR6mSUkFdKIJJxZAvjx1b1jRFhxVrbYcFR9ntPEMTgh6r3g=='
document.cookie="myCookies=test; expires=tue, 25 May 2021 01:00:00 UTC"
'myCookies=test; expires=tue, 25 May 2021 01:00:00 UTC'

COMPLETED - 6TH CLASS
