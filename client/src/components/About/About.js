import React, {useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Data } from '../../Context/userContext';
import "./About.css"
const About = () => {




  return (
    <div className='aaa'>
      <div>
      <h2>Connect Telegram</h2>

      <h3>Add bot to your group</h3>

      <h4>Manual :</h4>
      <ol>
        <li>Open the telegram app.</li>
        <li>Open the group you want to add the bot to.</li>
        <li>Click on add members in group settings.</li>
        <li>Search <b>@HodlInfoBot</b> and click it.</li>
      </ol>

      <h4>Automatic :</h4>
      <p>
        Go to: <a href="https://t.me/HodlInfoBot?startgroup=true" target="_blank" rel="noopener noreferrer">https://t.me/HodlInfoBot?startgroup=true</a>
      </p>

      <h3>Chat with the bot</h3>

      <h4>Manual :</h4>
      <ol>
        <li>Open the telegram app.</li>
        <li>Click on new message button.</li>
        <li>In the search bar type HodlInfoBot.</li>
        <li>Click on <b>@HodlInfoBot</b>.</li>
      </ol>

      <h4>Automatic :</h4>
      <p>
        Go to: <a href="https://t.me/HodlInfoBot" target="_blank" rel="noopener noreferrer">https://t.me/HodlInfoBot</a>
      </p>
    </div>

    </div>
  );
};

export default About;
