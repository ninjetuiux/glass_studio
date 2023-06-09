import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
export default function HomeSpinningComp({ text }) {
    const { theme } = useContext(ThemeContext)
    const words = text.split(' ');
    const textPath = words
        .map((word, index) => {
            if (word === 'מושיקו' && word === 'מלכה') {
                return `${word} /`;
            } else {
                return word;
            }
        })
        .join(' ')
        .repeat(4);

    return (
        <div
        className={`font-verla ${theme === 'dark' ? 'text-secondary': ''} hidden md:flex`}
        style={{ position: 'relative', width: '200px', height: '200px' }}>
            <motion.svg
                style={{ position: 'absolute', width: '100%', height: '100%', fontFamily: 'verla'}}
                viewBox="0 0 250 250"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
                <defs>
                    <path
                        id="textPath"
                        d="M 125,125 m -100,0 a 100,100 0 1,0 200,0 a 100,100 0 1,0 -200,0"
                    />
                </defs>
                <text fill={theme === 'light' ? 'black' : 'white'}>
                    <textPath
                        xlinkHref="#textPath"
                        startOffset="50%"
                        textAnchor="middle"
                        style={{ fontSize: '27px', fontFamily: 'verla' }}
                    >
                        {textPath}
                    </textPath>
                </text>
            </motion.svg>
            <div 
                className='font-verla bg-[#181c23] text-secondary rounded-full h-24 w-24 flex items-center justify-center'
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '20px',
                    textAlign: 'center',
                    fontFamily: 'verla',
                }}
            >
                אומנות בזכוכית
            </div>
        </div>
    );
}
