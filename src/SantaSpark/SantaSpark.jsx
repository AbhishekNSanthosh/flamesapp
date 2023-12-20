import React, { useEffect, useState } from 'react';
import styles from './SantaSpark.module.css'
import bg from '../assets/kids1.png'

const SantaSpark = () => {
    const [yourName, setYourName] = useState('');
    const [partnerName, setPartnerName] = useState('');
    const [result, setResult] = useState('');

    const handleYourNameChange = (e) => setYourName(e.target.value);
    const handlePartnerNameChange = (e) => setPartnerName(e.target.value);

    const calculateResult = () => {
        const yourNameSet = new Set(yourName.toLowerCase());
        const partnerNameSet = new Set(partnerName.toLowerCase());

        const commonLetters = [...yourNameSet].filter((letter) =>
            partnerNameSet.has(letter)
        );

        const totalLetters =
            yourNameSet.size + partnerNameSet.size - commonLetters.length;

        const flames = ['Friendship', 'Love', 'Affection', 'Marriage', 'Enemy', 'Siblings'];

        while (flames.length > 1) {
            const indexToRemove = (totalLetters % flames.length - 1 + flames.length) % flames.length;
            flames.splice(indexToRemove, 1);
        }

        const result = flames[0];

        switch (result) {
            case 'Friendship':
                setResult(`You and ${partnerName} have a great friendship! 🤝`);
                break;
            case 'Love':
                setResult(`Congratulations! You and ${partnerName} are in love! ❤️`);
                break;
            case 'Affection':
                setResult(`There's a special affection between you and ${partnerName}. 💕`);
                break;
            case 'Marriage':
                setResult(`Wow! Looks like you and ${partnerName} are meant for marriage! 💑`);
                break;
            case 'Enemy':
                setResult(`Uh-oh! ${yourName} and ${partnerName} seem to be enemies! 😠`);
                break;
            case 'Siblings':
                setResult(`Surprise! You and ${partnerName} are like siblings! 👫`);
                break;
            default:
                setResult('Something went wrong. Please try again.');
        }
    };


    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.row}>
                    <img src={bg} alt="" className={styles.banner} />
                </div>
                {result && (
                    <div className={styles.resultRow}>
                        <span className={styles.result}>{result}</span>
                    </div>
                )}
                <div className={styles.row}>
                    <input type="text" onChange={handleYourNameChange} placeholder='Your name , eg: Jacs' className={styles.txtBox} />
                    <input type="text" onChange={handlePartnerNameChange} placeholder="Partner's name" className={styles.txtBox} />
                </div>
                <div className={styles.row}>
                    <button onClick={calculateResult} className={styles.submitBtn}>
                        🔥Check🔥
                    </button>
                </div>
                <div className={styles.sentence}>
                    <p className={styles.about}> 90s Flames Calculator: Input names, reveal secrets—Friends or Frenemies? Embrace memories, blame the calculator for fails. 🎉💔</p>
                </div>
                <div className={styles.btmRow}>
                    <span className={styles.abtleft}>
                        Made by pavamDevs🤍
                    </span>
                    <span className={styles.disclaimer}>
                        Disclaimer: Privacy first! We don't collect any data from your input—your secrets are safe with us!
                    </span>
                    <span className={styles.abt}>
                        Made by pavamDevs🤍
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SantaSpark;