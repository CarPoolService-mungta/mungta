import {useCallback, useEffect, useState} from 'react';

import {useParams} from 'react-router-dom';

const Question = ()=>{
    const {id: questionId} = useParams();
    console.log("id:", questionId);
    return <>
        {questionId}
    </>
}

export default Question;