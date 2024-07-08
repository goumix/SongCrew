/* eslint-disable react/no-unescaped-entities */

const Whitepaper = () => {
  return (
    <div className='w-full flex flex-col items-start gap-8 p-10'>
      <h1><strong>WHITE PAPER</strong></h1>
      <div className='w-full flex flex-col items-start gap-2'>
        <h2><strong>Introduction</strong></h2>
        <p>Songrew est une plateforme web3 qui permet au public de devenir producteurs de ses artistes favoris. Elle permet à n'importe qui d'acheter une part des droits d'auteur avant la création du projet.</p>
        <p>Nous sommes partis du constat qu'il est aujourd'hui de plus en plus difficile de produire une musique qui ne répond pas aux codes commerciaux, surtout quand le budget est faible. Cette situation crée une frustration autant du côté des artistes, qui se sentent moins libres, que du côté des auditeurs, qui ont l'impression d'avoir toujours les mêmes propositions musicales.</p>
        <p>L'autre parti pris de Songcrew est de ne pas proposer une énième plateforme de financement participatif sans contrepartie. C'est pourquoi notre plateforme est une plateforme de production sous forme d'achats de droits d'auteur préalable à la création du projet musical.</p>
        <p>Grâce à ce système, Songcrew se différencie d'autres plateformes concurrentes qui proposent l'achat des droits d'auteur après la sortie du projet, trop souvent tardivement, ce qui fait que l'achat n'est possible qu'une fois la période d’exploitation la plus lucrative passée.</p>
      </div>
      <div className='w-full flex flex-col items-start gap-2'>
        <h2><strong>Guide d'utilisation</strong></h2>
        <p>- POUR LE PUBLIC :</p>
        <p>Vous pouvez vous connecter à Songcrew en connectant votre wallet. Ensuite, vous pouvez explorer le fil d'actualité dans lequel se trouvent tous les projets d'artistes actuellement en période de financement. En cliquant sur l'un d'entre eux, vous arrivez alors sur la page du projet. Ici, vous pouvez retrouver les informations concernant :</p>
        <ul>
          <li>- la présentation du projet musical</li>
          <li>- les engagements de l’artiste</li>
          <li>- le nombre de NFT qu'il met en vente</li>
          <li>- le pourcentage de ses droits d'auteur que chacun de ces NFT représente</li>
          <li>- le prix d'un NFT</li>
        </ul>
        <p>Sur cette page, vous pouvez aussi vous abonner à l'artiste pour être mis au courant de ses actualités et de l'avancée de son projet dans votre onglet "NOTIFICATIONS". En cliquant sur "ACHETER", vous allez devoir signer la transaction dans votre wallet. Et voilà, vous êtes l'heureux propriétaire des droits d'auteur à venir de cet artiste.</p>
        <p>Les droits d'auteur sont reversés tous les 6 mois par la SACEM, donc tous les 6 mois pour les détenteurs de NFT. Si vous sentez que l'attente monte autour de ce projet ou que l'artiste est de plus en plus en vogue, vous pouvez toujours tenter de faire une plus-value immédiate en revendant vos droits sur la "MARKETPLACE". La "MARKETPLACE" est le marché secondaire des droits d'auteur. Les NFT peuvent y être mis en vente ou achetés au bon vouloir des autres producteurs.</p>
        <p>- POUR UN ARTISTE :</p>
        <p>ous êtes un artiste et vous voulez faire financer votre projet par votre public ? Voici comment cela se passe.</p>
        <p>Tout d'abord, vous connectez votre wallet. Ensuite, vous allez devoir créer votre page projet. Cliquez sur "CRÉER MON PROJET". Ensuite, remplissez le formulaire de création de projet qui s'affiche avec les informations sur votre projet. Une fois cette étape complétée, vous allez maintenant choisir quelle part de vos droits d'auteur vous allez mettre en vente. Ensuite, en combien de parts égales vous allez les diviser.</p>
        <p>Maintenant, vous pouvez choisir l'image ou les images qui s'afficheront sur vos NFT. Et voilà, félicitations ! Vous pouvez vous servir des images créées pour faire la promotion de votre projet à venir partout ! Vous verrez dans vos "NOTIFICATIONS" l'avancée de la vente de vos droits d'auteur ainsi que les personnes qui ont commencé à suivre votre projet.</p>
      </div>
      <div className='w-full flex flex-col items-start gap-2'>
        <h2><strong>NFT et droits d'auteur</strong></h2>
        <p>Les NFT mis en vente sur Songcrew sont une numérisation des droits d'auteur d'un artiste. Comment cela fonctionne-t-il ?</p>
        <p>Au moment où un artiste met en vente ses droits d'auteur, il lie une part d'entre eux aux NFT de sa collection. Ce NFT est une représentation numérique des droits d'auteur réels de l'artiste. Les droits d'auteur liés à ce NFT sont directement versés dans le SMART CONTRACT de Songcrew, SMART CONTRACT qui les redistribue aux détenteurs des NFT.</p>
        <p>Quelles garanties ?</p>
        <p>Au moment de la cession de ces droits d'auteur, l'artiste s'engage contractuellement à remplir ses engagements envers Songcrew. Tout manquement à ces objectifs peut entraîner des poursuites judiciaires. Si un artiste ne respecte pas ces engagements, les détenteurs de NFT sont remboursés à la fin des poursuites judiciaires.</p>
      </div>
    </div>
  )
}

export default Whitepaper
