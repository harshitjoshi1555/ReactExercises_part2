import React from 'react';
import Tweet from './Tweet';

const App = () => {
  return (
    <div>
      <Tweet
        username="Modi_01"
        name="Narendra Modi"
        date="January 20, 2024"
        message="Recently, I had the opportunity to be among the people of Lakshadweep. I am still in awe of the stunning beauty of its islands and the incredible warmth of its people. I had the opportunity to interact with people in Agatti, Bangaram and Kavaratti."
      />
      <Tweet
        username="Yogi_13"
        name="Yogi Aditya Nath"
        date="January 21, 2024"
        message="माफिया मुख्तार अंसारी के काले-साम्राज्य के अंत का समय आ गया है।अब तक इसकी ₹66 करोड़ की अवैध संपत्ति जब्त हो चुकी है। ₹41 करोड़ की अवैध आय की प्राप्ति का मार्ग बंद किया जा चुका है।
        इसके गिरोह के 97 साथी पुलिस की हिरासत में हैं।
        कार्रवाई आगे भी जारी रहेगी..."
      />
      <Tweet
        username="joshi_1555"
        name="Harshit Joshi"
        date="January 22, 2024"
        message="Enjoying a relaxing weekend. #weekendvibes"
      />
    </div>
  );
};

export default App;
