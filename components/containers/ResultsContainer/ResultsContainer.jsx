
import React from "react";
import Link from 'next/link'
import Image from "next/image";
import { RESULT_MAP } from "@/components/consts";
import * as styles from "./ResultsContainer.module.css";

const ResultsContainer = ({resultId}) => {
    console.log({resultId})

    const result = RESULT_MAP[resultId];
    debugger;
    return result ? (
    <div>
        <div className={styles.quizContainer}>
            <h1>Quiz Completed!</h1>
            <h3>These are the activities we recommend...</h3>
            <p>
                Based on your results, we recommend you <span className={styles.resultBold}>{result.actionName}</span>. Click for more information or retake the quick to get better results!
            </p>
        </div>
        <div className={styles.resultButton}>
            {result.actions.map((action) => {
                return (<button key={action.name}>
                    <div className={styles.resultButtonContent}>
                        <action.IconComponent className={styles.icon}/>
                        <p>{action.name}</p>
                    </div>
                </button>)
            })}
        </div>
        <div className={styles.navigateButtons}>
            <Link href="/" className={styles.navigateQuiz}>
                <button>Retake Quiz</button>
            </Link>
            <Link href="/" className={styles.navigateHome}>
                <button>Home</button>
            </Link>
        </div>
    </div>
    ) : (
        <div>Please go to home to complete the quiz. <Link href="/">
        <button>Retake Quiz</button>
    </Link>

    </div>
    )
}

export default ResultsContainer;
