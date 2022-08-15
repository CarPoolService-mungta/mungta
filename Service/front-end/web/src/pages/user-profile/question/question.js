import {Typography} from "@mui/material";
import MainCard from 'components/MainCard';


const question = ()=>{
    const columns = [
        {
            field: 'title',
            headerName: '제목',
            width: 170,
        },
        {
            field: 'createdDate',
            headerName: '문의 날짜',
            width: 80,
        },
        {
            field: 'responseStatus',
            headerName: '답변 상태',
            width: 80
        },

    ];

    const data = [];

    return (
    <MainCard title="1:1 문의하기">
    </MainCard>
    )
}

export default question;