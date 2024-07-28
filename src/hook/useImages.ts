import instagramWhiteIcon from "../img/instagramWhite.svg";
import burger from "../img/burgerCard.png";
import salmon from "../img/salmonCard.png";
import pancake from "../img/pancakeCard.png";
import healthy from "../img/healthyCard.png";
import meatBall from "../img/meatBallCard.png";
import chef from "../img/chef.png";
import favoriteOn from "../img/favoriteOn.svg";
import favoriteOff from "../img/favoriteOff.svg";
import timerImage from "../img/timer.svg";
import forkKnife from "../img/forkKnife.svg";
import adsMask from "../img/adsMask.png";
import adsFood from "../img/adsFood.png";
import badge from "../img/badge.svg";
import dishPreview from "../img/dish_preview.png";
import authorImage from "../img/author.webp";
import pergamentImage from "../img/iconTag.png";
import buttonCircle from "../img/button_circle.svg";
import facebook from "../img/facebook.svg";
import logo from "../img/logo.svg";
import twitter from "../img/twitter.svg";
import instagramBlackIcon from "../img/instagramBlack.svg";
import timer from "../img/timer.svg";
import breakfast from "../img/breakfast.png";
import vegan from "../img/vegan.png";
import meat from "../img/meat.png";
import desert from "../img/desert.png";
import lunch from "../img/lunch.png";
import chocolate from "../img/chocolate.png";
import emailBoxLeft from "../img/footer-email-box-left.png"
import emailBoxRight from "../img/footer-email-box-right.png"


function useImages(){
  const images = {
    emailBoxLeft:emailBoxLeft,
    emailBoxRight:emailBoxRight,
    vegan:vegan,
    breakfast:breakfast,
    meat:meat,
    desert:desert,
    lunch:lunch,
    chocolate:chocolate,
    timer:timer,
    facebook:facebook,
    logo:logo,
    twitter:twitter,
    burger:burger,
    salmon:salmon,
    instagramBlackIcon:instagramBlackIcon,
    instagramWhiteIcon:instagramWhiteIcon,
    pancake:pancake,
    healthy:healthy,
    meatBall:meatBall,
    chef:chef,
    favoriteOn:favoriteOn,
    favoriteOff:favoriteOff,
    timerImage:timerImage,
    forkKnife:forkKnife,
    adsMask:adsMask,
    adsFood:adsFood,
    badge:badge,
    dishPreview:dishPreview,
    authorImage:authorImage,
    pergamentImage:pergamentImage,
    buttonCircle:buttonCircle
  }

const getImageURL = (nameImage: keyof typeof images) =>{
return images[nameImage];
}
      
return{getImageURL} 
}
export default useImages