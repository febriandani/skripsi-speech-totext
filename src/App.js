// import React, { useState } from 'react';
// import axios from 'axios';

// function SpeechToText() {
//   const [audioFile, setAudioFile] = useState(null);
//   const [transcription, setTranscription] = useState('');

//   const handleFileChange = (event) => {
//     setAudioFile(event.target.files[0]);
//   };

//   axios.defaults.withCredentials = true;
//   axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

//   const handleTranscription = async () => {
//     const formData = new FormData();
//     formData.append('audio', audioFile);
//     const response = await axios.post('https://api.openai.com/v1/speech-to-text', formData, {
//       model: 'whisper-1',
//       headers: {
//         Authorization: 'Bearer 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',
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'POST',
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     setTranscription(response.data.text);
//   };

//   return (
//     <div>
//       <input type="file" accept="audio/*" onChange={handleFileChange} />
//       <button onClick={handleTranscription}>Transcribe Audio</button>
//       <div>{transcription}</div>
//     </div>
//   );
// }

// export default SpeechToText;

import React, { useState } from 'react';
import axios from 'axios';

function SpeechToText() {
  const [audioFile, setAudioFile] = useState(null);
  const [transcription, setTranscription] = useState('');

  const handleFileChange = (event) => {
    setAudioFile(event.target.files[0]);
  };

  axios.defaults.withCredentials = true;
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  const handleTranscription = async () => {
    const formData = new FormData();
    formData.append('audio', audioFile);
    const response = await axios.post('https://api.openai.com/v1/speech-to-text', formData, {
      model: 'whisper-1',
      withCredentials: true,
      headers: {
        Authorization: 'Bearer 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',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Content-Type': 'multipart/form-data',
      },
    });
    setTranscription(response.data.text);
  };

  return (
    <div>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      <button onClick={handleTranscription}>Transcribe Audio</button>
      <div>{transcription}</div>
    </div>
  );
}

export default SpeechToText;
