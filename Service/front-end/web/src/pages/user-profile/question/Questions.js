import MainCard from 'components/MainCard';
import DataTable from "../../../components/@extended/DataTable";
import {useCallback, useEffect, useState} from "react";
import {getQuestionsByUserId} from 'api/question'
import {useNavigate} from 'react-router-dom';


const Questions = ()=>{
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async ()=>{
        await searchQuestion()
    },[]);

    const searchQuestion = async ()=>{
        await setIsLoading(true);

        const userId=0;
        const response = await getQuestionsByUserId({userId});

        await setData(!response.message ? response : []);
        await setIsLoading(false);
    }

    const rowClick=useCallback((e,row)=>{
        const questionId = row.id;
        navigate(`/question/${questionId}`);

    },[])

    return (
    <MainCard title="1:1 문의하기">
        <DataTable columns={columns} rows={data} rowsPerPageOptions={[10,20,30]} isLoading={isLoading} rowClick={rowClick}/>
    </MainCard>
    )
}

export default Questions;

const columns = [
    {
        id : 'title',
        label: '제목',
        width: 290,
        align: 'left',
    },
    {
        id : 'createdDate',
        label: '문의 날짜',
        width: 60,
        align: 'left',
    },
    {
        id : 'existResponse',
        label: '답변 상태',
        width: 50,
        align: 'left',
        render: (row)=>{
            return <> {row.existResponse ? '있음' : '대기 중'}
            </>
        }
    },

];