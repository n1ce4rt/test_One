import React, {useState} from 'react';
import style from './App.module.css';
import {PhoneModal} from "./components/phone_modal/phone_modal";
import {SuccessfulModal} from "./components/successful_modal/successful_modal";

function App() {

    const [successful, setSuccessful] = useState<boolean>(false)

  return (
    <main className={style.main}>
        {
            !successful?
                <PhoneModal changeModal={setSuccessful}/> :
                <SuccessfulModal change={setSuccessful}/>
        }
    </main>
  );
}

export default App;
