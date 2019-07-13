<?php
  $birthdate = (new DateTime("1990-12-5 12:00:00"))->getTimestamp();
  $now = (new DateTime(date('Y-m-d H:i:s')))->getTimestamp();
  $age = $now - $birthdate;
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>cyrill-lehmann.ch</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <meta name="description" content="Cyrill Lehmann, WebDev by chance"/>
  	<meta property="og:title" content="Cyrill Lehmann, WebDev by chance" />
  	<meta property="og:url" content="https://www.cyrill-lehmann.ch" />
  	<meta property="og:type" content=”website” />
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-143821656-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-143821656-1', { 'anonymize_ip': true });
    </script>
  </head>
  <link rel="stylesheet" href="./dist/css/styles.min.css">
  <body>

    <section class="observer">

      <h1 class="observer__title">
        Cyrill Lehmann
        <br>
        <span class="observer__subtitle">webdev by chance</span>
      </h1>

      <span class="observer__bait" id="observerBait"></span>
      <div class="fish__wrapper">
        <div class="fish__donut fish__donut--top"></div>
        <div class="fish">
          <div class="fish__donut"></div>
          <div class="fish__gills_wrapper">
            <div class="fish__gills fish__gills--left">
              <div class="fish__gill"></div>
              <div class="fish__gill"></div>
              <div class="fish__gill"></div>
              <div class="fish__gill"></div>
              <div class="fish__gill"></div>
            </div>
            <div class="fish__gills fish__gills--center">
              <div class="fish__gill"></div>
              <div class="fish__gill"></div>
              <div class="fish__gill"></div>
              <div class="fish__gill"></div>
              <div class="fish__gill"></div>
            </div>
            <div class="fish__gills fish__gills--right">
              <div class="fish__gill"></div>
              <div class="fish__gill"></div>
              <div class="fish__gill"></div>
              <div class="fish__gill"></div>
              <div class="fish__gill"></div>
            </div>
          </div>
          <div class="fish__eyes">
            <div class="observer__lid">
              <div class="observer__sclera observer__sclera--runAnimation">
                <div class="observer__iris">
                  <div class="observer__pupil">
                  </div>
                </div>
              </div>
            </div>
            <div class="observer__lid">
              <div class="observer__sclera observer__sclera--runAnimation">
                <div class="observer__iris">
                  <div class="observer__pupil">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fish__tentacles">
          <div class="fish__tentacle"></div>
          <div class="fish__tentacle"></div>
          <div class="fish__tentacle"></div>
          <div class="fish__tentacle"></div>
          <div class="fish__tentacle"></div>
        </div>
      </div>
    </section>

    <section class="info">
      <ul class="info__journey_list">
        <li class="info__journey_listelement info__journey_listelement--title">name</li>
        <li class="info__journey_listelement">cyrill</li>
        <li class="info__journey_listelement">lehmann</li>
      </ul>
      <ul class="info__journey_list">
        <li class="info__journey_listelement info__journey_listelement--title">homebase</li>
        <li class="info__journey_listelement">chur</li>
        <li class="info__journey_listelement">switzerland</li>
      </ul>
      <ul class="info__journey_list">
        <li class="info__journey_listelement info__journey_listelement--title">age</li>
        <li class="info__journey_listelement"><?= $age ?>s</li>
      </ul>
      <ul class="info__journey_list">
        <li class="info__journey_listelement info__journey_listelement--title">dayjob</li>
        <li class="info__journey_listelement">webdev</li>
        <li class="info__journey_listelement"><a href="https://clus.ch" target="_blank">clus</a></li>
      </ul>
      <ul class="info__journey_list">
        <li class="info__journey_listelement info__journey_listelement--title">interests</li>
        <li class="info__journey_listelement">skis</li>
        <li class="info__journey_listelement">code</li>
        <li class="info__journey_listelement">salad</li>
        <li class="info__journey_listelement">3d</li>
      </ul>
      <ul class="info__journey_list">
        <li class="info__journey_listelement info__journey_listelement--title">experience</li>
        <li class="info__journey_listelement">processwire</li>
        <li class="info__journey_listelement">django</li>
        <li class="info__journey_listelement">wordpress</li>
        <li class="info__journey_listelement">laravel</li>
        <li class="info__journey_listelement">stylus</li>
        <li class="info__journey_listelement">react</li>
        <li class="info__journey_listelement">threejs</li>
      </ul>
      <ul class="info__journey_list">
        <li class="info__journey_listelement info__journey_listelement--title">online</li>
        <li class="info__journey_listelement"><a href="https://github.com/adabs-urdum" target="_blank">github</a></li>
        <li class="info__journey_listelement"><a href="mailto:cyrill@adabs.ch">email</a></li>
        <li class="info__journey_listelement"><a href="https://www.instagram.com/adabs_urdum/" target="_blank">instagram</a></li>
        <li class="info__journey_listelement"><a href="https://www.facebook.com/cyrill.intressierts" target="_blank">facebook</a></li>
        <li class="info__journey_listelement"><a href="https://www.linkedin.com/in/cyrill-lehmann-500a55130/" target="_blank">linkedin</a></li>
        <li class="info__journey_listelement"><a href="https://steamcommunity.com/profiles/76561198149743749/" target="_blank">steam</a></li>
      </ul>
    </section>

    <script src="./dist/js/main.js"></script>
  </body>
</html>
