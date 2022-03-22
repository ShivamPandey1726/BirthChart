import React, { useEffect, useState } from "react";
import './ZodiacSign.css';
import song from './static/Astrology.mp3';
const ZodiacSign = () =>
{
  var todayDate = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState('');
  const [names, setNames] = useState('');
  const [name, setName] = useState('');
  const [lucky, setLucky] = useState();
  const [colour, setColour] = useState();
  const [element, setElement] = useState();
  const [flower, setFlower] = useState();
  const [birthstone, setBirthStone] = useState();
  const [dates, setDates] = useState('');
  const [textHide, setTextHide] = useState(false);
  const [formHide, setFormHide] = useState(true);
  const [zodiac, setZodiac] = useState();

  const audio = new Audio(song);

  useEffect(()=>
  {
    otherDetails();
  },[zodiac]);

  function change(event)
  {
    setDate(event.target.value);
  }
  console.log(date);
  function nameChange(event)
  {
    setNames(event.target.value);
  }
  function getValue(event)
  {
    event.preventDefault();
    let arr = [];
    let add = 0;
    let j=0;
    let sum=0;
    let i=0;

    if(date != '')
    {
      if(date > todayDate)
      {
        alert("We are not predict the birth chart on future birth date");
      }
      else if(names != '')
      {   
          setName(names);
          setFormHide(false);

          for(let i=0;i<date.length;i++)
          {
            if(date.charAt(i) != "-")
            {
              arr[j] = parseInt(date.charAt(i));
              j++;
            }
          }
          for(i=0;i<arr.length;i++)
          {
            sum=sum+arr[i];
          }
          while(sum != 0)
          {
            i=sum%10;
            add = add + Math.trunc(i);
            sum = sum/10;
            if(sum == 0)
            {
              if(add.toString().length == 2)
              {
                sum = add;
                add = 0;
              }
            }
          }
          setDates(date);
          setLucky(add);
          setTextHide(true);
          zodiacSign();
      }
      else
      {
        alert("Pllease Enter your Name first!");
      }
    }
    else
    {
      alert("Pllease choose your Date of birth first!");
    }
  }
  function zodiacSign()
  {
    let d = new Date(date).getDate();
    let m = new Date(date).getMonth()+1;
    if((m == 3 && d >= 21) || (m == 4 && d <= 19))
    {
      setZodiac("Aries (मेष)");
    }
    else if((m == 4 && d >= 20) || (m == 5 && d <= 20))
    {
      setZodiac("Taurus (वृष)");
    }
    else if((m == 5 && d >= 21) || (m == 6 && d <= 21))
    {
      setZodiac("Gemini (मिथुन)");
    }
    else if((m == 6 && d >= 22) || (m == 7 && d <= 22))
    {
      setZodiac("Cancer (कर्क)");
    }
    else if((m == 7 && d >= 23) || (m == 8 && d <= 22))
    {
      setZodiac("Leo (सिंह)");
    }
    else if((m == 8 && d >= 23) || (m == 9 && d <= 22))
    {
      setZodiac("Virgo (कन्या)");
    }
    else if((m == 9 && d >= 23) || (m == 10 && d <= 22))
    {
      setZodiac("Libra (तुला)");
    }
    else if((m == 10 && d >= 23) || (m == 11 && d <= 21))
    {
      setZodiac("Scorpio (वॄश्चिक)");
    }
    else if((m == 11 && d >= 22) || (m == 12 && d <= 21))
    {
      setZodiac("Sagittarius (धनु)");
    }
    else if((m == 12 && d >= 22) || (m == 1 && d <= 19))
    {
      setZodiac("Capicornus (मकर)");
    }
    else if((m == 1 && d >= 20) || (m == 2 && d <= 18))
    {
      setZodiac("Aquarius (कुम्भ )");
    }
    else if((m == 2 && d >= 19) || (m == 3 && d <= 20))
    {
      setZodiac("Pisces (मीन)"); 
    }
  }
  function otherDetails()
  {
    if(zodiac === "Aries (मेष)") 
    {
      setColour("Red (लाल)");
      setElement("Fire (अग्नि)");
      setBirthStone("Diamond (हीरा रत्न)");
      setFlower("Geranium (क्रेन-बॉल फूल)");
    }
    else if(zodiac == "Taurus (वृष)")
    {
      setColour("Pink (गुलाबी)");
      setElement("Earth (पृथ्वी)");
      setBirthStone("Emerald (पन्ना रत्न)");
      setFlower("Violet (बैंगनी फूल)");
    }
    else if(zodiac == "Gemini (मिथुन)")
    {
      setColour("Yellow (पीला)");
      setElement("Air (वायु)");
      setBirthStone("Tourmaline (मूंगा रत्न)");
      setFlower("Lily of the Valley (घाटी की कुमुदिनी फूल)");
    }
    else if(zodiac == "Cancer (कर्क)")
    {
      setColour("Silver (चांदी)");
      setElement("Water (जल)");
      setBirthStone("Pearl (मोती रत्न)");
      setFlower("Larkspur (नीला फूल)");
    }
    else if(zodiac == "Leo (सिंह)")
    {
      setColour("Gold (सुनहरा)");
      setElement("Fire (अग्नि)");
      setBirthStone("Ruby (माणिक्य रत्न)");
      setFlower("Marigold (गेंदे का फूल)");
    }
    else if(zodiac == "Virgo (कन्या)")
    {
      setColour("Green (हरा)");
      setElement("Earth (पृथ्वी)");
      setBirthStone("Sapphire (नीलम रत्न)");
      setFlower("Pancy (बनफूल)");
    }
    else if(zodiac == "Libra (तुला)")
    {
      setColour("Blue (नीला)");
      setElement("Air (वायु)");
      setBirthStone("Opal (ओपल रत्न)");
      setFlower("Rose (गुलाब का फूल)");
    }
    else if(zodiac == "Scorpio (वॄश्चिक)")
    {
      setColour("Black (काला)");
      setElement("Water (जल)");
      setBirthStone("Topaz (पुखराज रत्न)");
      setFlower("Chrysanthemum (गुलदौदी फूल)");
    }
    else if(zodiac == "Sagittarius (धनु)")
    {
      setColour("Purple (बैंगनी)");
      setElement("Fire (अग्नि)");
      setBirthStone("Turquoise (फ़िरोज़ा रत्न)");
      setFlower("Narcissus (नरगिस फूल)");
    }
    else if(zodiac == "Capicorn (मकर)")
    {
      setColour("Brown (भूरा)");
      setElement("Earth (पृथ्वी)");
      setBirthStone("Garnet (रक्तमणि रत्न)");
      setFlower("Carnation (गुलनार का फूल)");
    }
    else if(zodiac == "Aquarius (कुम्भ )")
    {
      setColour("Blue (नीला)");
      setElement("Air (वायु)");
      setBirthStone("Amethyst (नीलम रत्न)");
      setFlower("Orchid (आर्किड फूल)");
    }
    else if(zodiac == "Pisces (मीन)")
    {
      setColour("Green (हरा)");
      setElement("Water (जल)");
      setBirthStone("Aquamarine (हरितानील रत्न)");
      setFlower("Lily (कुमुदिनी फूल)");
    }
  }

  function regenerate()
  {
    setFormHide(true);
    setTextHide(false);
  }

  function playSound()
  {
    audio.play();
  }

  return(
    <>
      <img src="https://www.vegamoontech.com/wp-content/uploads/2019/08/astro-web-head.gif" alt="this slowpoke moves"/>
      <div className="container" style={{marginLeft: formHide ? "23rem" : "13rem", marginTop: formHide ? "3rem" : "0rem"}} onClick={playSound}>
        <div className="title">
          <h1 style={{display: formHide ? "block" : "none"}}>Welcome To Our Birth Chart Calculator</h1>
          <h2 style={{display: formHide ? "block" : "none"}}>Note: It is based on <span><i>Vedic Astrology</i></span></h2>
        </div>
        <form onSubmit={getValue} style={{display: formHide ? "block" : "none"}}>
            <label>Enter Your Name :</label>
            <input type="text" spellcheck="false" value={names} onChange={nameChange}/>
            <br/>
            <label>Enter Date Of Birth :</label>
            <input type="date" name="dob" value={date} onChange={change}/>
            <br/>
            <input type="submit" value="Generate Chart"/>
        </form>
        <div className="result" style={{display: textHide ? "block" : "none"}}>
          <h2>{name}</h2>
          <h3>Your Date Of Birth is : <span>{dates}</span></h3>
          <h3>Your Lucky Number is : <span>{lucky}</span></h3>
          <h3>Your Zodiac Sign is : <span>{zodiac}</span></h3>
          <h3>Your Zodiac Colour is : <span>{colour}</span></h3>
          <h3>Your Zodiac Element is : <span>{element}</span></h3>
          <h3>Your Zodiac Flower is : <span>{flower}</span></h3>
          <h3>Your Zodiac Birthstone is : <span>{birthstone}</span></h3>
          <button onClick={regenerate}>Regenerate Chart</button>
        </div>
      </div>
    </>
  );
}
export default ZodiacSign;