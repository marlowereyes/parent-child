import { ResultsContainer } from "@/components/containers/ResultsContainer";
import { useRouter } from "next/router"
import { useState } from "react"

export default function Results() {
    const {query} = useRouter();
    const resultId = query.resultId;
    debugger;
    return (
        <ResultsContainer resultId={resultId} />
    )
}

